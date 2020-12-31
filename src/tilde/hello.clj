(ns tilde.hello
  (:require [reitit.ring :as ring]))

(defn handler [_]
  {:status 200, :body "ok"})

(def root-route
  (ring/router
   ["/ping" {:get handler}]))

(def app (ring/ring-handler root-route))

(app  {:request-method :get, :uri "/ping"})
;; => {:status 200, :body "ok"}

