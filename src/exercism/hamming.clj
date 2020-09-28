(ns hamming)

(defn distance [a b] ; <- arglist goes here
  (if (not=
        (count a)
        (count b))
    nil
    (count
      
      (filter (fn [[a b]]
                (not= a b))
        (partition 2
          (interleave
            a b))))))


