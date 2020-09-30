(ns nth-prime)

(defmacro swallow-exceptions [& body]
  `(try ~@body (catch Exception e#)))

(defn prime? [n]
  (every? #(pos? (rem n %)) (range 2 (Math/sqrt (inc n)))))

(defn naive-primes []
  (drop 2 (filter prime? (range))))

(def primes (naive-primes))

(defn nth-prime [n]
  (if (zero? n) (throw (IllegalArgumentException.))
      (nth primes (dec n))))

