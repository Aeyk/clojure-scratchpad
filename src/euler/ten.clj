(ns euler.ten)
;; https://mitpress.mit.edu/sites/default/files/sicp/full-text/sicp/book/node20.html
;; Problem 10
;; ==========
;;    The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
;;    Find the sum of all the primes below two million.



(def two-million (range 2 2000000)) ;; 1 is not prime
(defn square [x]
  (* x x))

(defn find-divisor [n test-divisor]
  (cond (> (square test-divisor) n) n
        (divides? test-divisor n) test-divisor
        :else
        (find-divisor n (+ test-divisor 1))))

(defn divides? [a b]
  (= (rem b a) 0))

(defn smallest-divisor [n]
  (find-divisor n 2))

(defn prime? [n]
  (= n (smallest-divisor n)))


(last two-million)

(reduce +
  (filter prime? (range 2 9)))
;; => 17

(reduce +
  (filter prime? two-million))
;; => 142913828922
;; correct
