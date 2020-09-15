(ns clojure-scratchpad.the-joy-of-clojure.vectors)

;; use a vector to reverse


(defn strict-map1 [f coll]
  (loop [coll coll, acc nil]
    (if (empty? coll)
      (reverse acc)
      (recur (next coll)
        (cons (f (first coll)) acc)))))

(defn strict-map2 [f coll]
  (loop [coll coll, acc []]
    (if (empty? coll)
      acc
      (recur (next coll)
        (conj acc (f (first coll)))))))


(strict-map2 - (range 1000))
;;;Subvectors
;;;Although items can’t be removed efficiently from a vector (except the rightmost
;;;item), Clojure provide a fast way to take a slice of an existing vector such as a-to-j
;;;(previously defined as [\A \B \C \D \E \F \G \H \I \J]) based on start and end indices
;;;with the subvec function:

;;; Wonder If its faster to just make three slices and drop the middle as a new vect?


