(ns timing-data-structures)

(defn time-conj [ds] ;; empty
  (time
    (str ds
      (last (loop [xs (range 1000000)
                   coll ds]    
              (if (empty? xs)
                coll
                (recur
                  (rest xs)
                  (conj coll
                    (first xs)))))))))

(time-conj #{})


