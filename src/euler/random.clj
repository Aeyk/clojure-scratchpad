(ns euler.random
  (:require [clojure.edn :as edn])
  (:require [clojure.math.numeric-tower :as math]))

(loop [n 8208]
  (let [digits (digitize n)]
    (= n
      (reduce +
        (for [digit digits]
          (math/expt digit 4))))))


(defn write-n-columns
  [file n]
  (spit file
    (clojure.string/replace
      (clojure.string/replace
        (apply str
          (for [x (range (bigint n))]
            [x (f x)]))
        "[" "")
      "]" "\n")))


(defn f
  [n]
  (/
    (*
      (math/expt (bigint n) (bigint 2))
      (math/expt (+ (bigint n) (bigint 1)) (bigint 2))
      (* (bigint 2) (+ (math/expt (bigint n) (bigint 2)) (bigint 2))
        (dec (bigint n))))  
    (bigint 12)))

(range 100)
;; => 900
(apply + (range 100))
;; => 4950
(defn digitize
  "(digitize 1000)
  ;; => (1 0 0 0)
  (digitize 666)
  ;; => (6 6 6)"
  [n]
  (map edn/read-string
    (re-seq #"\d"
      (.toString n))))
