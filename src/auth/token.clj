(ns auth.token
  (:require
   [ring.adapter.jetty :as jetty]
   [buddy.hashers :as hashers]
   [cheshire.core :as json]
   [buddy.sign.jws :as jws]
   [buddy.auth.backends.session :refer [session-backend]]
   [buddy.auth.backends.token :refer [jws-backend]]
   [buddy.auth.middleware :refer [wrap-authentication]]
   [ring.util.response :refer [response redirect]]
   [ring.middleware.reload :refer [wrap-reload]]
   [buddy.auth :refer [authenticated?]]))
            

  ;; https://adambard.com/blog/clojure-auth-with-buddy/

;; (import 'org.bouncycastle.crypto.digests.SHA3Digest) was erroneous

(defn my-app-handler [req]
  (if (authenticated? req)
    {:status 200 :body "OK."}
    {:status 403 :body "NOT OK."}))

;; (def backend (session-backend))


(def users {"admin" {:hashed-password (hashers/encrypt "adminpass")
                     :roles #{:user :admin}}
            "user"  {:hashed-password (hashers/encrypt "userpass")
                     :roles #{:user}}})

(def secret "mysecret")

(def backend (jws-backend {:secret secret}))

(def app
  (->
    my-app-handler
    wrap-reload 
    (wrap-authentication backend)))

(defn lookup-user [authtoken]
  (if-let [user (get users authtoken)]  ;; Use a database IRL
    (if (hashers/check-password authtoken (get user :hashed-password))
      (dissoc user :hashed-password)))) ;; Strip out user password

(defn do-login [{{authtoken "authtoken"  next "next"} :params :as req}]
  (if-let [user (lookup-user  authtoken)]    
    {:status 200
     :headers {:content-type "application/json"}
     :body (json/encode {:token (jws/sign user secret)})}
    (redirect "/login")))
 

(defn do-logout [{session :session}]
  (-> (redirect "/login")                           ;; Redirect to login
    (assoc :session (dissoc session :identity)))) ;; Remove :identity from


(defn -main [port]
  (jetty/run-jetty
    app
    {:port (Integer. port)}))
