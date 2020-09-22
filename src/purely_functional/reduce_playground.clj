(ns purely-functional.reduce-playground)

(defn reduce* [f i coll]
  (if (empty? coll)
    i
    (recur f
      (f i (first coll)) (rest coll))))

(reduce + 0 '(1 2 3))
;; => 6
;; <2020-09-22 Tue 12:40>

(defn reduce* [f i coll]
  (if (empty? coll)
    i
    (let [[fst & rst] coll]
      (recur f (f i fst) rst)))) ;; refactor out first and rest into let binding

(reduce* + 0 (range 11))
;; => 55
;; <2020-09-22 Tue 12:45>

(defn map* [f xs]
  (reduce
    (fn [res v]
      (conj res (f v)))
    []
    xs))

(map* inc (range 10))
;; => [1 2 3 4 5 6 7 8 9 10]
;; <2020-09-22 Tue 12:53>

;; Cool, application of the 'Universality of Fold'
;; Now how do I get parallel reduce ala 'Fold Considered Harmful'?

(defn filter* [f xs]
  (reduce
    (fn [res v]
      (if (f v)
        (conj res v) ;; add on v, not f(v)
        res))
    []
    xs))

(filter* even? (range 10))
;; => (0 2 4 6 8)
;; <2020-09-22 Tue 12:55>
;; Filter impl. as reduce. What madness!


(reduce-kv (fn [[kcount vcount] k v]
             [(+ kcount (count k))
              (+ vcount (count v))])
  [0 0]
  {"Malik" "Kennedy" "Coltrane"  "Kennedy" "Gabriel"  "Kennedy" })

;; <2020-09-22 Tue 13:02>
;; Not sure I understand why It gives me [20 21]

(reduce-kv (fn [m k v] (assoc m k v))
  {} (vec (range 10)))
;; => {0 0, 7 7, 1 1, 4 4, 6 6, 3 3, 2 2, 9 9, 5 5, 8 8}
;; <2020-09-22 Tue 13:03>
;; A hash-map of { n: f(n) | N in (range 10) where f: identity }
(reduce + (range 11))
;; => 55








