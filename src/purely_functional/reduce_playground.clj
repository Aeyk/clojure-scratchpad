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


(reduce-kv (fn [m k v]
             (assoc m k v))
  {} (vec "abcdef"))
;; => {0 \a, 1 \b, 2 \c, 3 \d, 4 \e, 5 \f}


;; reductions does a lazy eval of a reduce 1 step at a time
(reductions (fn [[kcount vcount] [k v]]
             [(+ kcount (count k))
              (+ vcount (count v))])
  [0 0]
  {"Malik" "Kennedy" "Coltrane"  "Kennedy" "Gabriel"  "Kennedy" })
;; => ([0 0] [5 7] [13 14] [20 21])

(defn average [xs]
  (/ (reduce + xs)
    (count xs)))

(average (range 11))
;; => 5

(average [1])
;; => 1

(average [1 2 3])
;; => 2


(defn average* [xs]
  (reduce (fn [[numer denom] number]
            [(+ numer number)
             (+ denom 1)])
    [0 0]
    xs))

(average* [])
;; => [0 0]
(average* (range 11))
;; => [55 11]
(average* [2 2 2 2 2 2 2])
;; => [14 7]

(defn combine-averages [[n_1 d_1] [n_2  d_2]]
  [(+ n_1 n_2)
   (+ d_1 d_2)])

(defn average** [xs]
  (reduce
    combine-averages 
    [0 0] (map over-one xs)))

(defn over-one
  [n]
  [n 1])

(reduce combine-averages [0 0]
  (map over-one (range 10)))

(average** (range 10))
;; => [45 10]

;; 7/reduced
;; <2020-09-22 Tue 16:11>
;; seems like a reduce way of breaking out of an iteration?

;; todo shorter than

