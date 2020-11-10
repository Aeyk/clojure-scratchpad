(ns websocket
  (:use  [compojure.core :only (defroutes GET)]
         org.httpkit.server
         ring.util.response
         ring.middleware.cors
         org.httpkit.server
         aleph.http)
  (:require [compojure.route :as route]
            [compojure.handler :as handler]
            [cheshire.core :refer :all]
            [ring.middleware.reload :as reload]))

(def clients (atom {}))

(defn socket [req]
  (with-channel req channel
    (swap! clients assoc channel (str (java.util.UUID/randomUUID)))
    (println channel " connected")
    (on-close channel (fn [status]
                        (swap! clients dissoc channel)
                        (println channel " disconnected. status: " status)))
    (on-receive channel (fn [data]
                          (doseq [[client id] (dissoc @clients channel)]
                            (send! client
                              (generate-string {:id id :data (parse-string data)})))))))

(defroutes routes
  (GET "/socket" [] socket)
  
  (route/resources "/")
  (GET "/" [] (file-response "resources/index.html")))

(def application (-> (handler/site routes)
                     reload/wrap-reload
                     (wrap-cors
                       :access-control-allow-origin #".+")))

(let [port (Integer/parseInt (or (System/getenv "PORT") "8080"))]
  (defn -main [& args]
    (run-server application {:port port :join? false})))
