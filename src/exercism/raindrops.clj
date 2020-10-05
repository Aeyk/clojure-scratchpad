(ns raindrops)

(defn prime-factors
  "Return a list of factors of N."
  ([n]
    (prime-factors n 2 ()))
  ([n k acc]
    (if (= 1 n)      
      acc
      (if (= 0 (rem n k))        
        (recur (quot n k) k (cons k acc))
        (recur n (inc k) acc)))))




(defn convert [n]
  (let [s (str
          (if (contains? (into #{} (prime-factors n))
                3)
            "Pling")
          (if (contains? (into #{} (prime-factors n))
                5)
            "Plang")
          (if (contains? (into #{} (prime-factors n))
                7)
            "Plong"))]
    (if (empty? s)
      (str n)
       s)))


(convert 34) 
