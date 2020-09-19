(ns ip
  (:use ring.adapter.jetty)
  (:use ring.middleware.params)
  (:use [ring.util.response :as response])
  (:require [reitit.ring :as ring])
  (:require [clojure.data.json :as json]))

(defn check-ip [req]
  (:body
   (response/response (:remote-addr req))))

(defn json-transform-handler [req]
  {:status 200
   :headers {"Content-Type" "text/json"}
   :body
   (json/write-str
     {:keys (keys (:params req))
      :query (vals (:params req))
      :addr       
      (check-ip req) })})


;; #_(def main-handler
;;   (wrap-params handler))
;; (defn main-handler [_]
;;   {:status 200, :body "ok"})

(def router
  (ring/router
    ["/ping" {:get handler}]))
