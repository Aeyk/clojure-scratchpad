(ns series)

(defn slices [s n]
  (loop [ss []
         s s]
    (if (zero? n)
      '("")
      (if (empty? s)
            (map clojure.string/join
              (filter #(= n (count %)) ss))      
            (recur
              (conj ss (take n s))
              (drop 1 s))))))



