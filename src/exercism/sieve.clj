(ns sieve)

(defn prime? [n]
  (every? #(pos? (rem n %)) (range 2 (Math/sqrt (inc n)))))

(defn naive-primes []
  (drop 2 (filter prime? (range))))

(def primes (naive-primes))

(defn sieve [n]
  (take-while #(>= n %) primes))
 
