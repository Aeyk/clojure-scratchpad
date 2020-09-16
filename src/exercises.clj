(require '[clojure.core.match :refer [match]])


(defn next-row [row]
  (map +
    (conj [0] row)
    (cons row [0])))

(next-row 2)
;; stolen from rosetta code
(fn [n]
    (let [pascal 
          (iterate #(concat [1] 
                      (map + % (rest %)) 
                      [1]) 
            [1])]
      (last (take n pascal))))
1

(take 10 pascal)
 


;;Given a side-effect free function f and an initial value x write a function which returns an infinite lazy sequence of x, (f x), (f (f x)), (f (f (f x))), etc.

(fn my-iterate
  [f x]
  (lazy-seq
    (cons x (my-iterate f (f x)))))


(defn positive-numbers 
  [n]
  (lazy-seq
    (cons n (positive-numbers (inc n)))))

(take 3 (my-iterate inc 1))
