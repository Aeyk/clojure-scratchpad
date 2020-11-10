
(ns auth.simple
(:require
  [compojure.core :refer-macros [defroutes GET POST]]
  [cemerick.friend :as friend]
  [cemerick.friend.workflows :as workflows]
  [cemerick.friend.credentials :as creds]
  [cemerick.friend.workflows :refer [make-auth]]
  [ring.middleware.session :refer [wrap-session]]
  [ring.middleware.params :refer [wrap-params]]
  [ring.middleware.keyword-params :refer [wrap-keyword-params]]
  [ring.adapter.jetty :refer [run-jetty]]))

;; https://adambard.com/blog/easy-auth-with-friend/


(defroutes app-routes
  (GET "/" [] "Hello everyone <form action=\"logout\" method=\"post\"><button>Submit</button></form>")
  (GET "/authorized" [] (friend/authorize #{::user} "Hello authorized"))
  (friend/logout (POST "/logout" [] "logging out"))


(defn fun-workflow [req]
  (let [speak (get-in req [:params :speak])]
    (when (= speak "friend")
      (make-auth {:identity "friend" :roles #{::user}}))))


(def app
  (as-> app-routes $
    (friend/authenticate $ {:workflows [fun-workflow]})
    (wrap-keyword-params $)
    (wrap-params $)
    (wrap-session $)))



(defn -main []
  (run-jetty #'app {:port 8080}))
