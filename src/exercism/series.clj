(ns exercism.series)

(defn series [s n]
  (loop [ss []
         s s]
    (if (empty? s)
      (map clojure.string/join
        (filter #(= n (count %)) ss))      
      (recur
        (conj ss (take n s))
        (drop 1 s)))))

(series "1232" 3)



