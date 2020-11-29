(ns clojure-scratchpad.ninetynineproblemslogic
  (:require [clojure.core.logic :refer :all]))

;; =============================================================================
;; TRS

(defn twino [p]
  (fresh [x]
    (conso x x p)))

;; from the book version
;; (defn pairp [p]
;;   (fresh [a d]
;;     (conso a d p)))
(defn pairo [p]
  (fresh [a d]
    (== (lcons a d) p)))

(defn listo [l]
  (conde
   [(emptyo l) s#]
   [(pairo l)
    (fresh [d]
      (resto l d)
      (listo d))]))

(defn flatteno [s out]
  (conde
   [(emptyo s) (== '() out)]
   [(pairo s)
    (fresh [a d res-a res-d]
      (conso a d s)
      (flatteno a res-a)
      (flatteno d res-d)
      (appendo res-a res-d out))]
   [(conso s '() out)]))

;;; 99 Prolog Problems
(use 'clojure.core.logic)

(run 2 (q)
  (fresh [a b c d]
    (== d  [a b c q])))

; Find the last element of a list
(defn lasto [last list]
  (matche [list]
    ([[]]          fail)
    ([[last]]      succeed)
    ([[_ . ?rest]] (lasto last ?rest))))


(run* (q)
  )


(run 3 [q r]
  (fresh [a b]
    (== (lasto q a) b)
    (== r b)
    (== q r)))

(run* [q]
  (== q {:a 2 :b 2}))

(run 3 [q]
  (membero q [1 2 3]))

(run 3 [q]
  (membero q [q 2 3]))
;; => (_0 2 3)


;; I've heard of a SET INTERSECTION before. 
(run* [q]
  (membero q [1 2 3])
  (membero q [3 4 5]))

;; pg17 TRS <2020-11-29 Sun> 
(let [x (fn [a] a)
      y 'c]
  (x y))
;; => c

(run* [r]
  (fresh [y x]
    (== '(,x ,y)
        r)))
;; => ((x y))


(run* [r]
  (fresh [v w]
    (== (let [x v
              y w]
          '(,x y)) r)))
;; => ((x y))

(run* [r]
  (firsto ,('a 'c 'o 'r 'n) r))

(run* [q]
  (lasto q '(1 2)))
;; => (2)

(defn nullo
  [x]
  (== '() x))

(run 3 [q r]
  (== r q)
  (nullo q))
;; => ([() ()])

(defn eqo
  [x y]
  (== x y))

(run* [q]
  (eqo 'plum)
  (== s# q))

(run* [q]
  (pairo (lcons q q)))

(run* [q]
  (pairo q))
;; => ((_0 . _1))



(run* [r]
  (pairo (lcons r 'pear)))
;; => (_0)



(defn list-of-lists?
  [lol]
  (cond
    (empty? lol) true 
    (list? (first lol))
    (list-of-lists? (rest lol))
    :else false))

(defn list-of-listso
  [l]
  (conde
   [(emptyo l) s#
    ((fresh [a]
       (firsto l a)
       (listo a))
     (fresh [d]
       (resto l d)
       (list-of-listso d)))]
   (s# u#)))

(run 4 [q]
  (list-of-listso q))
;; => ()
;; EUREKA! conde wants a series of vectors, not a series of cond pairs
;; https://github.com/philoskim/reasoned-schemer-for-clojure/blob/master/src/rs/ch3.clj

(defn list-of-listso [l]
  (conde
   [(emptyo l) s#]
   [(fresh [a]
      (firsto l a)
      (listo a))
    (fresh [b]
      (resto l b)
      (list-of-listso b))]))

(def lolo list-of-listso)

(defn listo [l]
  (conde
   [(emptyo l) s#]
   [(pairo l)
    (fresh [d]
      (resto l d)
      (listo d))]))

(run 8
  [x]
  (listo `(a b ~x d))) 

(run 5 [x]
  (listo (llist 'a 'b 'c x)))
;; => (() (_0) (_0 _1) (_0 _1 _2) (_0 _1 _2 _3))

(run 3 [l]
  (list-of-listso l))
;; => (())


(run* [q]
  (fresh [x y]
    (list-of-listso (list '(a b) (list x 'c) (list 'd y)))
    (== true q)))
;; => (true)



(run 1 [q]
  (fresh [x y]
    (lolo (llist '(a b) x))
    (== true q)))
;; => (true)

(run 1 [x]
  (lolo (llist '(a b) '(c d) x)))
;; => (())

(run 10 [x]
  (lolo (llist '(a b) '(c d) x)))
;; => (() (()) ((_0)) (() ()) ((_0 _1)) (() (_0)) ((_0) ()) (() () ()) ((_0 _1 _2)) (() (_0 _1)))



(defn twinso [s]
  (fresh [x y]
    (conso x y s)
    (conso x '() y)))

(run* [q]
  (twinso '(q q))
  (== q 'tofu))
;; => (tofu)

(defn twinso [s]
  (fresh [x] (== (list x x) s)))

(run* [q]
  (twinso '(q q))
  (== q 'tofu))
;; => (tofu)


(run* [q]
  (twinso '(q q)))
;; => (_0)



(defn  loto [l]
  (conde
   [(emptyo l) s#]
   [(fresh [a]
      (firsto l a)
      (twinso a)
      (fresh [d]
        (resto l d)
        (loto d)))]))

(run 3 [q]
  (loto q))
;; => (() ((_0 _0)) ((_0 _0) (_1 _1)))
x


