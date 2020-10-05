(ns sum-of-multiples)

(defn sum-of-multiples [xs n]
  (letfn [(multiples [xs]
            (for [x xs]
              (filter #(zero? (mod % x)) (range 1 n))))]
    (reduce +
      (into #{} 
        (flatten (multiples xs))))))

