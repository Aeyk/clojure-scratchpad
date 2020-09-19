(ns clojure-scratchpad.euler.one)
;; ;If we list all the natural numbers below 10 that are
;;	multiples of 3 or 5, we get 3, 5, 6 and 9. The
;;	sum of these multiples is 23.

;; Find the sum of all the multiples of 3 or 5 below 1000.
(defn multiple-of?
  [x n]
  (= 0 (mod x n)))

(reduce + 0
  (filter
    (fn [x]
      (or (multiple-of? x 3)
        (multiple-of? x 5)))
    (range 1000)))
;; => 233168

