(ns backend.websocket
  (:require 
   [backend.layout :as layout]
   [backend.middleware :as middleware]
   [reitit.ring :as ring]
   [clojure.tools.logging :as log]
   [immutant.web.async :as async]))


(defonce channels (atom #{}))

(defn connect! [channel]
  (log/info "channel open")
  (swap! channels conj channel))

(defn disconnect! [channel {:keys [code reason]}]
  (log/info "close code: " code " reason: " reason)
  (swap! channels #(remove #{channel} %)))

(defn notify-clients! [channel msg]
  (doseq [channel @channels]
    (async/send! channel msg)))

(def websocket-callbacks
  "WebSocket callback functions"
  {:on-open connect!
   :on-close disconnect!
   :on-message notify-clients!})

(defn ws-handler [req]
  (async/as-channel req websocket-callbacks))

(def websocket-routes
  [["/ws" ws-handler]])

(defn home-page [request]
  (layout/render request "home.html"))

(defn home-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/" {:get home-page}]
   ["/ws" {:get ws-handler}]])

