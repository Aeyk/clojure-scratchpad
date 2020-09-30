(ns prime-factors)

;; (defn prime? [x]

;;   (cond
;;     (= x 0) [0]
;;     (= x 1) [1]
;;     (= x 2) []
;;     (= x 3) []
;;     :else
;;     (loop [known []
;;            to-checks (conj (range 3 (inc (int (Math/sqrt x))) 2) 2)] ;; 2 + odds 
;;       (if (empty? to-checks)
;;         known
;;         (if (zero? (mod x (first to-checks)))
;;           (recur
;;             (conj known (first to-checks))
;;             (rest to-checks))
;;           (recur
;;             known
;;             (rest to-checks)))))))

      
 
;; (filter  (comp false? #(nth % 2))
;;   (map 
;;     (fn [x y] [y x (zero? (mod y x))])
;;     (cycle sqrt-nums) nums))




;;  (for [xr sqrt-nums]
;;      (fn [n]
;;        (zero? (mod n xr)))) 

;; (filter
;;   (comp
;;     (comp complement
;;     (fn [n]
;;       (zero? (mod n 3))))
;;     (comp complement
;;       (fn [n]
;;         (zero? (mod n 3)))))

;;     nums)
;; (take 5 infi-sqrt-nums)
;; (defn divisible-by-sqrt-nums []
;;   (for [x sqrt-nums]
;;     (filter #(zero? (mod x %)) nums)))



;; (defn sieve [upto]
;;   (filter prime?
;;     (range upto)))

(def nums (range 2 30))
(def sqrt-nums (range 2 (Math/sqrt (last nums))))

(defn prime? [n]
  (every? #(pos? (rem n %)) (range 2 (Math/sqrt (inc n)))))

(defn naive-primes []
  (drop 2 (filter prime? (range))))

(def primes (naive-primes))

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

What is the largest prime factor of the number 600851475143
(prime-factors 600851475143)
;; => [2 3 5 7 11 13 17 19 23 29 31]

(defn of [s]
  (prime-factors s))

  
   The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

   Find the sum of all the primes below two million.

   
   Answer: d915b2a9ac8749a6b837404815f1ae25



(reduce + (take-while #(< % 2000000) primes))
