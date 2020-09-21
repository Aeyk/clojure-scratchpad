(ns purely-functional.web-dev.server
  (:require [ring.adapter.jetty :as jetty]))

(defn greet
  [req]
  (cond
    (= "/" (:uri req))
    {:status 200 :body "Hello World!" :headers {}}
    (= "/goodbye" (:uri req))
    {:status 200 :body "Good Bye Cruel World!" :headers {}}
    :else {:status 404 :body "Page Not Found." :headers {}}))


(defn -main [port]
  (jetty/run-jetty
    greet
    {:port (Integer. port)}))

(defn -dev-main [port]
  (jetty/run-jetty
    greet
    {:port (Integer. port)}))

