(ns clojure-scratchpad.keycloak.core
  (:require [hiccup.core :as hiccup]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.params :as params]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [muuntaja.core :as m]
            [reitit.ring.coercion :as coercion]
            [reitit.ring :as ring]
            [mount.core :refer [defstate] :as mount]))

(def http-handler
  (ring/ring-handler
   (ring/router
    [;; routes
     ["/v1/api"
      ["/user"
       {:get {:handler
              (fn [req] {:status 200 :body "OK"})}}]]]
    {:data {:muuntaja m/instance
            :middleware
            [params/wrap-params
             muuntaja/format-middleware
             coercion/coerce-exceptions-middleware
             coercion/coerce-request-middleware
             coercion/coerce-response-middleware]}})
   (ring/create-default-handler)))

(defn -main []
(jetty/run-jetty #'http-handler {:port 8000 :join? false ;; TODO whats :join? do
}))
