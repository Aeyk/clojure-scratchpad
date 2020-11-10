(ns auth.basic
  (:require [ring.util.response :refer (response)]))

(defn handler
  [request]
  (if (:identity request)
    (response (format "Hello %s" (:identity request)))
    (response "Hello Anonymous")))

