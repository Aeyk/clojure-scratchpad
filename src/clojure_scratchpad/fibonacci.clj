(ns clojure-scratchpad.fibonacci
  (:require [clojure.core.match :refer [match]]))

(defn naive-fibonacci
  ""
  [n]
  (case n
    0 0
    1 1
    (+ (naive-fibonacci
         (dec n))
      (naive-fibonacci
        (dec (dec n))))))

;; http://www.idryman.org/blog/2013/06/27/laziness-and-memoization-in-clojure/
(defn memoize
  ""
  [f]
  (let [mem (atom {}) ]
    (fn [& args]
      (if-let [e (find @mem args)]
        (val e)
        (let [ret (apply f args)]
          (swap! mem assoc args ret)
          ret)))))

(defn memoized-naive-fibonacci [n]
  ""
  (let [memoized-fn (memoize naive-fibonacci)]
    (case n
      0 0
      1 1
      (+ (memoized-fn
           (dec n))
        (memoized-fn
          (dec (dec n)))))))

(memoized-naive-fibonacci 30)
;; => 832040

(defn naive-fibonacci
  ""
  [n]
  (case n
    0 0
    1 1
    (+ (naive-fibonacci
         (dec n))
      (naive-fibonacci
        (dec (dec n))))))

;; First try
;; (defn match-fibonacci
;;   [n]
;;   (match [n1 n2]
;;     [_ _] (+ n1 n2)))

;; https://www.tutorialspoint.com/fsharp/fsharp_pattern_matching.htm
;; Pattern matching is fun!
(defn match-fibonacci
  [n]
  (match [n]
    [0] 1
    [1] 1
    [_]
    (+
      (match-fibonacci
        (- n 1))
      (match-fibonacci
        (- n 2)))))


(def memoized-match-fibonacci (memoize match-fibonacci))

(time (match-fibonacci 30))
;; "Elapsed time: 769.295573 msecs"
(time (memoized-match-fibonacci 30))
;; "Elapsed time: 0.039813 msecs"


;; My attempt at hand rolling the `memoized_naive_fibonacci`
;; 	... 	it doesn't work. yet.
(def fibonacci-historic-results
  (atom {1 1,
         2 1}))

(defn memoized-fibonacci [n]
  (let [F_of_n (naive-fibonacci n)]
    (when 
        (nil?
          (get @fibonacci-historic-results n))
        (swap! fibonacci-historic-results
          assoc n F_of_n))
    F_of_n))





  
