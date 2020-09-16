(require '[clojure.core.match :refer [match]])


(defn next-row [row]
  (map +
    (conj [0] row)
    (cons row [0])))

(next-row 2)
;; stolen from rosetta code
(fn [n]
  (let [pascal 
        (iterate
          #(concat
             [1] 
             (map + % (rest %))
             [1])
          [1])]
    (last (take n pascal))))


(take 2
  (fn [x]
      (let [pascal 
            (iterate
              #(concat
                 [(first %)]
                 (map +' % (rest %))
                 [(last %)])
              x)]
        pascal))
  [2 3 2])


2 [2 3 2]

(take 10 pascal)


(defn positive-numbers 
  [n]
  (lazy-seq
    (cons n (positive-numbers (inc n)))))

#_(take 3 (my-iterate inc 1))


