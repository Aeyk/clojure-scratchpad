(ns auth.token
  (:require
;; [auth.views.login :as login]
   [auth.views.login :as login]
   [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
   [ring.adapter.jetty :as jetty]
   [buddy.hashers :as hashers]
   [cheshire.core :as json]
   [buddy.sign.jws :as jws]
   [buddy.auth.backends.session :refer [session-backend]]
   [buddy.auth.backends.token :refer [jws-backend]]
   [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
   [buddy.auth.backends.token :refer [token-backend]]
   [ring.middleware.params :refer [wrap-params]]
   [ring.util.response :refer [response redirect]]
   [ring.middleware.reload :refer [wrap-reload]]
   [buddy.auth :refer [authenticated?]]
   [compojure.core :refer [defroutes GET POST]]
   [compojure.route :refer [not-found]]   
   [buddy.core.nonce :as nonce]
   [buddy.core.codecs :as codecs]))

;; https://adambard.com/blog/clojure-auth-with-buddy/

;; (import 'org.bouncycastle.crypto.digests.SHA3Digest) was erroneous
(defn ok [d] {:status 200 :body d})

(defn bad-request [d] {:status 400 :body d})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Token generator helpers
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn random-token
  []
  (let [randomdata (nonce/random-bytes 16)]
    (codecs/bytes->hex randomdata)))

(defn my-app-handler [req]
  (if (authenticated? req)
    {:status 200 :body (str "OK. " (:identity req))}
    {:status 403 :body "NOT OK."}))

(def authdata {:admin "secret"
               :test "secret"})

(def tokens (atom {}))

(defn login
  [request]
  (let [username (get-in request [:body :username])
        password (get-in request [:body :password])
        valid? (some-> authdata
                       (get (keyword username))
                       (= password))]
    (if valid?
      (let [token (random-token)]
        (swap! tokens assoc (keyword token) (keyword username))
        (ok {:token token}))
      (bad-request {:message "wrong auth data"}))))

(defroutes app-routes
  (GET "/" [] my-app-handler)
  (GET "/login" []
    (login/login))  
  (POST "/login" req
    (hiccup.page/html5 (login req))))

;; (GET "/signup" req
;;   (login/signup #_(str (:params req))))
;; (not-found "Page Not Found."))

(defn my-authfn [req token]
  (when-let [user (get @tokens (keyword token))]
    user))

(def auth-backend
  (token-backend {:authfn my-authfn}))

;; (def secret "mysecret")

;;(def backend (jws-backend {:secret secret}))

(def app
  (as-> app-routes $
    #_my-app-handler
    (wrap-params $)
    (wrap-authorization $ auth-backend)
    (wrap-authentication $ auth-backend)
    (wrap-json-response $ {:pretty false})
    (wrap-json-body $ {:keywords? true :bigdecimals? true})))    


(def dev-app
  (as-> app-routes $
    (wrap-reload $)))



;; (hashers/check-password {:password "adminpass"} (last @users))
;; (defn lookup-user [authtoken]
;;   (if-let [user (get @users authtoken)]  ;; Use a database IRL
;;     (if (hashers/check-password authtoken  user)
;;       (dissoc! user authtoken)))) ;; Strip out user password

;; (defn do-login [{{authtoken "authtoken"  next "next"} :params :as req}]
;;   (if-let [user (lookup-user  authtoken)]    
;;     {:status 200
;;      :headers {:content-type "application/json"}
;;      :body (json/encode {:token (jws/sign user secret)})}
;;     (redirect "/login")))
 

;; (defn do-logout [{session :session}]
;;   (-> (redirect "/login")                           ;; Redirect to login
;;     (assoc :session (dissoc session :identity)))) ;; Remove :identity from


;; (defn -main [port]
;;   (jetty/run-jetty
;;     app
;;     {:port (Integer. port)}))


;; (defn -dev-main [port]
;;   (jetty/run-jetty
;;     dev-app
;;     {:port (Integer. port)}))


#_(-dev-main 3000)


(defonce server
  (jetty/run-jetty #'app {:port 3000 :join? false}))
;;;https://stackoverflow.com/questions/2706044/how-do-i-stop-jetty-server-in-clojure

(defonce dev-server
  (jetty/run-jetty #'dev-app {:port 3000 :join? false}))


#_(.start dev-server)
#_(.stop dev-server)
#_(System/exit 0)

