(ns exercism.scratch
  (:require [clojure.math.numeric-tower :as math]))

(defn digitize
  "(digitize 1000)
  ;; => (1 0 0 0)
  (digitize 666)
  ;; => (6 6 6)"
  [n]
  (map clojure.edn/read-string
    (re-seq #"\d"
      (.toString n))))
;; Armstrong Number

(digitize 9)
(let [n      153
      digits (digitize n)
      dcount (count digits)
      drange (take dcount (repeat dcount))
      #_(map inc (range dcount))
      zm    (zipmap digits drange)
      arm-? (reduce + (map (fn [[a b]] (math/expt a b)) zm))
      ]
  
  (= n arm-?))

(defn armstrong-number?[n]
  (let [digits (digitize n)
        dcount (count digits)
        drange (take dcount (repeat dcount))
        #_(map inc (range dcount))
        zm    (zipmap digits drange)
        arm-? (reduce + (map (fn [[a b]] (math/expt a b)) zm))]        
    (= n arm-?)))





(math/expt 5 3)
(defn armstrong?
  [n]
  ())
