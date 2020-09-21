(ns euler.twenty
  (:require [clojure.edn :as edn]))
;; https://clojuredocs.org/clojure.core/re-seq
;; https://clojuredocs.org/clojure.core/bigint
;; https://github.com/clojure/clojure/blob/clojure-1.10.1/src/clj/clojure/core.clj#L3619
;; https://stackoverflow.com/questions/2640169/whats-the-easiest-way-to-parse-numbers-in-clojure
;;;Problem 20
;;;   n! means n × (n − 1) × ... × 3 × 2 × 1

;;;   For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
;;;   and the sum of the digits in the number 10! is
;;;	3 + 6 + 2 + 8 + 8 + 0 + 0 =  27.
;;;
;;;   Find the sum of the digits in the number 100!
;;;   Answer: 443cb001c138b2561a0d90720d6ce111

(reduce +
  (map edn/read-string
    (re-seq #"\d"
      (.toString
        (reduce * (bigint 1)
          (range
            (bigint 1)
            (bigint 100)))))))  ;; factorial of 100
;; => 648
;; correct

#_(reduce +
  (map
    edn/read-string
    (clojure.string/split
      (.toString
        (reduce * 1 (range 1 10))) ;; factorial of 10
      #"")))
  ;; => 27
  


