(ns clojure-scratchpad.constraints
  (:require [clojure.core.logic
             :refer [fresh run* run == conde or* lcons]]
            [clojure.core.logic.fd :as fd]
            [clojure.core.logic.pldb]))

(def constraint-solving-prob1
  (logic/run* [q]
    (logic/fresh [x y]
      (fd/in x (fd/interval 0 7))
      (fd/in y (fd/interval 2 11))
      (fd/eq
        (= (+ x y) 10))
      (logic/== q [x y]))))

constraint-solving-prob1
;; => ([0 10] [1 9] [2 8] [3 7] [4 6] [5 5] [6 4] [7 3])


;; In English we might say the constraint as follows:
;;	Let X be between 0, 7
;;	Let Y be between 2, 11
;;	Find solutions for 10 = X + Y



;; Lets go in reverse,
;; From symbols:
;;	Find all integer values of x and y such that:
;;	    x*x - 2*y*y = 1
;;	x and y are constrained as follows::
;;
;;	    0 <= x <= 10000
;;    	    0 <= y <= 10000


(def constraint-solving-prob2
  (logic/run* [q]
    (logic/fresh [x y]
      (fd/in x (fd/interval 0 10000))
      (fd/in y (fd/interval 0 10000))
      (fd/eq
        (= 1
          (-
            (* x x)
            (* 2 y y))))
      (logic/== q [x y]))))

constraint-solving-prob2
;; StackOverFlow
;; 10000 is too big!


(def constraint-solving-prob2-1
  (logic/run* [q]
    (logic/fresh [x y]
      (fd/in x y (fd/interval 0 600))
      (fd/eq
        (= 1
          (-
            (* x x)
            (* 2 y y))))
      (logic/== q [x y]))))

constraint-solving-prob2-1
;; => ([1 0] [3 2] [17 12] [99 70] [577 408])
;;
;;
;;
;;
;;     Assign a digit to each of the following letters that
;;	makes this equation true:
;;
;;     SEND + MORE = MONEY
;;
;;     The letters are constrained as follows:
;;
;;         each letter stands for a digit from 0 to 9
;;         different letters are different digits
;;         a number can’t start with 0 (so S and M can’t be 0)


(def constraint-solving-prob3
  (logic/run* [q]
    (logic/fresh [S E N D R M O N Y]
      (fd/in S     M 	    (fd/interval 1 9))
      (fd/in  E N D O N R Y (fd/interval 0 9))
      (fd/distinct [S E N D M O N Y])
      (fd/eq (= (+ (* 10000 M) (* 1000 O) (* 100 N) (* 10 E) Y)
                   (+ (+ (* 1000 S) (* 100 E) (* 10 N) D)
                      (+ (* 1000 M) (* 100 O) (* 10 R) E))))
      (logic/== q [[S E N D] [M O R E] [M O N E Y]]))))

constraint-solving-prob3
;;([[9 2 3 4] [1 0 9 2] [1 0 3 2 6]]
;; [[9 3 4 2] [1 0 9 3] [1 0 4 3 5]]
;; [[9 2 3 5] [1 0 9 2] [1 0 3 2 7]]
;; [[9 2 3 6] [1 0 9 2] [1 0 3 2 8]]
;; [[9 4 5 2] [1 0 9 4] [1 0 5 4 6]]
;; [[9 3 4 5] [1 0 9 3] [1 0 4 3 8]]
;; [[9 5 6 2] [1 0 9 5] [1 0 6 5 7]]
;; [[9 4 5 3] [1 0 9 4] [1 0 5 4 7]]
;; [[9 6 7 2] [1 0 9 6] [1 0 7 6 8]]
;; [[9 5 6 3] [1 0 9 5] [1 0 6 5 8]]
;; [[9 4 5 8] [1 0 8 4] [1 0 5 4 2]]
;; [[9 7 8 5] [1 0 8 7] [1 0 8 7 2]]
;; [[9 5 6 7] [1 0 8 5] [1 0 6 5 2]]
;; [[9 5 6 8] [1 0 8 5] [1 0 6 5 3]]
;; [[9 7 8 6] [1 0 8 7] [1 0 8 7 3]]
;; [[9 6 7 8] [1 0 8 6] [1 0 7 6 4]])


;; 0 = q^2 + 4q + 4 
;; (def algebra1
;;   (logic/run* [q]
;;     (logic/fresh [x]
;;       (fd/in x (fd/interval -10000 10000))
;;       (fd/eq
;;         (= x q))      
;;       (logic/== q x))))
;; After failing, I realized: Finite Domain means INTEGER!

;; 0 = q^2 + 4q + 4 
(def algebra2
  (logic/run* [q]
    (logic/fresh [x]
      (logic/== x 1)
      (logic/project [x]
        (logic/== q
          (+ (* x x)
            (* 4 x)
            4))))))
algebra2

(defn digit-1 [x]
  (logic/conde
    [(logic/== 0 x)]))

(defn digit-4 [x]
  (logic/conde
    [(logic/== 0 x)]
    [(logic/== 1 x)]
    [(logic/== 2 x)]
    [(logic/== 3 x)]))

(logic/run* [q]
  (logic/fresh [x y]
    (digit-4 x)
    (digit-4 y)
    (logic/== q [x y])))


(run* [q r]
  (fresh [x y]
    (fd/in y x (fd/interval 1 3))
    (== q (lcons x y))))

(run* [a b c d]
  (fd/in a b c d (fd/interval 0 4))
  (fd/< a b)
  (fd/< c d)
  (fd/< d a))







(run* [q]
  (fresh [x y p]
    (fd/in x y (fd/interval 1 38))
    (fd/* x y p)
    (fd/+ p 2 40)
    (== q [x y])))
;; => ([1 38] [2 19] [19 2] [38 1])



;; 5  ways three values combine to be less than 100.
(run 5 [q]
  (fresh [w x y]
    (fd/in w x y (fd/interval 1 100))
    (fd/* w x y)
    (== q [w x y])))
;; => ([1 1 1] [2 1 2] [1 2 2] [1 3 3] [3 1 3])


(run 15 [q]
  (fresh [x y z p0 p1]
    (fd/in x y z (fd/interval 1 1000))
    (fd/* x x p0)
    (== x 3)
    (== y 4)
    (== z 5)
    (== q [x y z])))
;; => ([3 4 5])

(run 15 [q]
  (fresh [A B C]
    (fd/-
      (fd/* C C A)
      (fd/* B B A)
      (fd/* A A (fd/+ B C A)))))
;; => (#object[clojure.core.logic$cgoal$reify__8996 0x424d8ba9 "clojure.core.logic$cgoal$reify__8996@424d8ba9"])

(run 1 [q]
  (fresh [a b c]
    
    ))
(db-rel zebra_owner )
