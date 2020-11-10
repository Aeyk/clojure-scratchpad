(ns pascals-triangle)

(defn tri [n]
  (/
    (* n (+ n 1))
    2))

;; (def triangle
;;   (map tri (range)))

(def triangle (map tri (iterate inc 1)))

(defn row [n]
  (tri n))
