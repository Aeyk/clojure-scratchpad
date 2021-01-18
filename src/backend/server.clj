(ns backend.server
  (:require [reitit.ring :as ring]
            [org.httpkit.server :as http]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.util.response :refer (response)]
            [backend.middleware :as mw]
            [buddy.auth.backends :as backends]
            [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
            [taoensso.timbre :refer [info]]))

(defn authfn [request auth-data]
  (let [{:keys [username password]} auth-data]
    username))

(def backend
  (backends/basic
   {:realm "MyApi"
    :authfn authfn}))

(def routes
  [""
   ["/me"
    (fn [req]
      (if (:identity req)
        (response (:identity req))
        (response "Anonymous")))]
   #_["/" (fn [req] {:status 200
                     :body "Hello"})]])

(def app
  (ring/ring-handler
   (ring/router routes)
   (ring/routes
    (ring/create-resource-handler {:path ""})
    (ring/create-default-handler))))


(defn init []
  (defonce server
    (http/run-server
     app
     {:port 3000})))

(defn -main []
  (init))
