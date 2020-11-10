(ns backend.server
  (:require [reitit.ring :as ring]
            [clojure.java.jdbc :as jdbc]
            [ring.adapter.jetty :as jetty]
            [backend.layout :as layout]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.handler.dump :refer [handle-dump]]
            [ring.adapter.jetty :as jetty]
            [mount.core :as mount]))

(defn home-page [{:keys [flash] :as request}]
  (layout/render
   request
   "main.html"))
   
(def routes 
  [""
   {:middleware [;; todo middleware
                 ;; middleware/wrap-csrf
                 ;; middleware/wrap-formats
                 ]}                     
   ["/" {:get home-page}]
   #_["/ws" {:get about-page}]])


(def app
  (ring/ring-handler
    (ring/router
      routes)))

(defonce server (jetty/run-jetty (wrap-reload #'app) {:port 8080 :join? false}))

(defn -main []
  (.start server))

#_(.stop server)
(-main)
