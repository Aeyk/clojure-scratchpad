(ns logic
  (:require
   [clojure.core.logic :refer :all]
   [clojure.core.logic.fd :as fd]
   [clojure.math.numeric-tower :as math]))


;; Prolog has | for head tail seperator matching
;; Clojure has defne I think

;; all factors of 36 below 11
(run* [q r]
  (fd/in q r (fd/interval 0 11))
  (fd/* q r 36)) 
;; => ([4 9] [6 6] [9 4])



;; all factors of 36 below 11
(run* [q r]
  (fresh [a b i j]
    (fd/in a b i j (fd/interval 1 30))
    (fd/* 5 a b)
    (fd/* 3 i j)
    (!= [a b] q)
    (!= [i j] r)))

(run 30 [q]
  (fresh [r t f]
    (fd/in r t f (fd/interval 11))
    (fd/+ r 3 t)
    (fd/+ t 4 f)
    (fd/+ r 7 f)
    (== q [r t f])))


(run 90 [q]
  (fresh [do re mi so fa la ti]
    (== q [do re mi so fa la ti])
    (fd/in do re mi so fa la ti (fd/interval 0 127))
    (fd/+ do 2 re)
    (fd/+ re 2 mi)
    (fd/+ mi 3 so)
    (fd/+ so 2 fa)
    (fd/+ fa 2 la)
    (fd/+ la 3 ti)

    (fd/< do re)
    (fd/< re mi)
    (fd/< mi so)
    (fd/< so fa)
    (fd/< fa la)
    (fd/< la ti)

    (distincto q)
    ))


(def euler-problems (clojure.string/split (slurp "resources/euler_problems.txt")
                                          #"\#\#\#\#"))

 (first euler-problems)
;; => "Problem 1\n=========\n\n\n   If we list all the natural numbers below 10 that are multiples of 3 or 5,\n   we get 3, 5, 6 and 9. The sum of these multiples is 23.\n\n   Find the sum of all the multiples of 3 or 5 below 1000.\n\n   \n   Answer: e1edf9d1967ca96767dcc2b2d6df69f4\n\n"

(run* [q]
  (or*
   [(== 1 q)
    (== 0 q)])) ;; 🅱OOLE IN IT

(run* [q]
  (fresh [a b c]
    (fd/in q a b (fd/interval 1 9))
    (or* [(== b 5)
          (== a 3)])
    (fd/* a b q)))
;; => (5 3 6 9)



(def below-thou
  (into #{}
        (run* [q]
          (fresh [a b c]
            (fd/in q a b (fd/interval 1 999))
            (or* [(== b 5)
                  (== a 3)])
            (fd/* a b q)))))

(reduce + 0
        (for [x (range 1 1000)
              :when (or (zero? (mod x 5))
                        (zero? (mod x 3)))]
          x))


(reduce + 0 below-thou)
