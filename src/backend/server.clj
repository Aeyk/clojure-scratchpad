(ns backend.server
  (:require [reitit.ring :as ring]
            [org.httpkit.server :as http]
            [ring.middleware.reload :refer [wrap-reload]]
            [buddy.auth.backends :as backends]
            [buddy.auth.middleware :refer (wrap-authentication)]
            [taoensso.timbre :refer [info]]))

(def routes
  [""
   {:middleware []}
   #_["/" (fn [req] {:status 200
                   :body "Hello"})]])

(def app
  (ring/ring-handler
   (ring/router
    routes)
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
