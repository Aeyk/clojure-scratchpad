(ns clojure-scratchpad.matrix)

(use 'clojure.core.matrix)
(use 'clojure.core.matrix.operators)           ;; overrides *, + etc. for matrices


(defn matrix-mult [row column]
  (apply +
   (map
    *
    row column)))


(mult (range 0 10) (range 0 10))


(apply + (* (matrix [1 2 3 3]) (matrix [2 3 4 100])))
