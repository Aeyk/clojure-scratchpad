(ns backend.server
  (:require [reitit.ring :as ring]
            [clojure.java.jdbc :as jdbc]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.handler.dump :refer [handle-dump]]
            [ring.adapter.jetty :as jetty]
            [mount.core :as mount]))

(def routes
  [""
   {:middleware [;; todo middleware
                 ;; middleware/wrap-csrf
                 ;; middleware/wrap-formats
                 ]}                     
   ["/" {:get (constantly "Hello world!")}]
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
