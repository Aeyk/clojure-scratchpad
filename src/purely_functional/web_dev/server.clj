(ns purely-functional.web-dev.server
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.reload :refer [wrap-reload]]
            [compojure.core :refer [defroutes GET]]
            [compojure.route :refer [not-found]]))

(defn greet
  [req]
  {:status 200 :body "Hello World!" :headers {}})

(defn goodbye
  [req]
  {:status 200 :body "Good Bye Cruel World!" :headers {}})

(defn request-handler [req]
  {:status 200 :body (str req) :headers {}})

(defroutes app
  (GET "/" [] greet)
  (GET "/goodbye" [] goodbye)
  (GET "/request" [] request-handler)
  (not-found "Page Not Found."))

(defn -main [port]
  (jetty/run-jetty
    app
    {:port (Integer. port)}))

(defn -dev-main [port]
  (jetty/run-jetty
    (wrap-reload #'app)
    {:port (Integer. port)}))

