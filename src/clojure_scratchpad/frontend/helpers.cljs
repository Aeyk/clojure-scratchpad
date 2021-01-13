(ns clojure-scratchpad.frontend.helpers)

(defn format-price
  [cents]
  (str " €" (/ cents 100)))
