(ns euler.thirty
  (:require [clojure.edn :as edn])
  (:require [clojure.math.numeric-tower :as math]))

;;; Problem 30
;;;    Surprisingly there are only three numbers that can
;;; 	be written as the sum of fourth powers of their digits:
;;;      1634 = 1^4 + 6^4 + 3^4 + 4^4
;;;      8208 = 8^4 + 2^4 + 0^4 + 8^4
;;;      9474 = 9^4 + 4^4 + 7^4 + 4^4
;;;
;;;    As 1 = 1^4 is not a sum it is not included.
;;;
;;;    The sum of these numbers is 1634 + 8208 + 9474 = 19316.
;;;
;;;    Find the sum of all the numbers that can be written
;;; 	as the sum of fifth powers of their digits.

;;;    Answer:


(defn digitize
  "(digitize 1000)
  ;; => (1 0 0 0)
  (digitize 666)
  ;; => (6 6 6)"
  [n]
  (map edn/read-string
    (re-seq #"\d"
      (.toString n))))


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

