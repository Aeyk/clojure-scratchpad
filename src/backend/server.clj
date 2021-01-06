(ns backend.server
  (:require [reitit.ring :as ring]
            [clojure.java.jdbc :as jdbc]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.handler.dump :refer [handle-dump]]
            [ring.adapter.jetty :as jetty]
            [mount.core :as mount]))

(defn no-op-handler [request]
  {:status 200})

(def hello-world
  (fn [req]
    {:body "<img alt=\"\" src=\"logo.svg\"/>Hello World!"
     :status 200}))
(def routes
  [""
   {:middleware [wrap-reload]}
   ["/" {:get hello-world}]
   ["/logo.svg"
    {:get
     (fn [_]
       {:body (slurp "resources/logo.svg")})}]
   #_["/ws" {:get about-page}]])

(def app
  (ring/ring-handler
    (ring/router
     routes)))

(defonce server
  (jetty/run-jetty
   (wrap-reload #'app)
   {:port 4000 :join? false}))

(defn -main []
  (.start server))
