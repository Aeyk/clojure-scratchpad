(ns grains
  (:require [clojure.math.numeric-tower :as math]))

(defn square [s]  
  (let  [logs (map #(math/expt 2 %) (range))]
    (nth logs (dec s))))

(defn total [] ;; <- arglist goes here
  ;; your code goes here
  )
