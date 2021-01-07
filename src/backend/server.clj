(ns backend.server
  (:require [reitit.ring :as ring]
            [clojure.java.jdbc :as jdbc]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.handler.dump :refer [handle-dump]]
            [ring.adapter.jetty :as jetty]
            [backend.middleware :as middleware]
            [mount.core :as mount]))

(def api-url "https://lftzhklytmxclipatzas.supabase.co")
(def api-key (System/getenv "SUPABASE_API_CLIENT_KEY"))

(defn no-op-handler [request]
  {:status 200})

(def hello-world
  (fn [req]
    {:body "<html><body><img alt=\"\" src=\"logo.svg\"/>Hello World!"
     :status 200}))

(def routes
  [""
   {:middleware [middleware/wrap-formats
                 wrap-reload]}
   #_["/" {:get hello-world}]
   ["/logo.svg"
    {:get
     (fn [_]
       {:body (slurp "resources/logo.svg")})}]])

(def app
  (ring/ring-handler
   (ring/router
    routes)
   (ring/routes
    (ring/create-resource-handler {:path "/"})
    (ring/create-default-handler))))

(defonce server
  (jetty/run-jetty
   (wrap-reload #'app)
   {:port 4000 :join? false}))

(defn -main []
  (.start server))
