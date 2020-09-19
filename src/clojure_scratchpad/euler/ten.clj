(ns clojure-scratchpad.euler.ten)

;; Problem 10
;;   The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
;;   Find the sum of all the primes below two million.
;;   Answer: d915b2a9ac8749a6b837404815f1ae25

;; (def certainty 5)

;; (defn prime? [n]
;;       (.isProbablePrime (BigInteger/valueOf n) certainty))

;; (def primes
;;   (take 10000000 
;;     (filter prime? 
;;       (take-nth 2 
;;         (range 1 Integer/MAX_VALUE)))))

;; (def answer (reduce + (take 10000000 primes)))


;;; https://rosettacode.org/wiki/Sieve_of_Eratosthenes#Unbounded_Versions
(defn sieve [n]
  "Returns a BitSet with bits set for each prime up to n"
  (let [bs (new java.util.BitSet n)]
    (.flip bs 2 n)
    (doseq [i (range 4 n 2)] (.clear bs i))
    (doseq [p (range 3 (Math/sqrt n))]
      (if (.get bs p)
        (doseq [q (range (* p p) n (* 2 p))] (.clear bs q))))
    bs))
(def theBitSet (java.util.BitSet. 10000000000))
(take 10000 (take-while #(not (= % -1)) (iterate #(.nextSetBit theBitSet (inc %)) 2)))

(defn primes-to
  "Computes lazy sequence of prime numbers up to a given number using sieve of Eratosthenes"
  [n]
  (let
      [root (-> n Math/sqrt long),
       rootndx (long (/ (- root 3) 2)),
       ndx (long (/ (- n 3) 2)),
       cmpsts (long-array (inc (/ ndx 64))),
       isprm #(zero?
                (bit-and (aget cmpsts (bit-shift-right % 6))
                  (bit-shift-left 1 (bit-and % 63)))),
       cullp
       (fn [i]
         (let [p (long (+ i i 3))]
	   (loop [i (bit-shift-right (- (* p p) 3) 1)]
	     (if (<= i ndx)
	       (do
                 (let [w (bit-shift-right i 6)]
	           (aset
                     cmpsts w
                     (bit-or (aget cmpsts w)
	               (bit-shift-left 1 (bit-and i 63)))))
	           (recur (+ i p))))))),
       cull
       (fn []
         (loop [i 0]
           (if (<= i rootndx)
             (do (if (isprm i)
                   (cullp i))
                 (recur (inc i))))))]
    (letfn [(nxtprm [i]
              (if (<= i ndx)
                (cons (+ i i 3)
                  (lazy-seq
                    (nxtprm
                      (loop [i (inc i)]
                        (if (or (> i ndx) (isprm i)) i
                            (recur (inc i)))))))))]
      (if (< n 2) nil
          (cons 3 (if (< n 3) nil
                      (do (cull)
                          (lazy-seq (nxtprm 0)))))))))

(def primes-less-ten-million (primes-to 100000001))
(reduce +  (set (cons 2 primes-less-ten-million)))
;; => 279209790387276

