(ns clojure-scratchpad.ninetynineproblemslogic
  (:require [clojure.core.logic :refer :all]
            [instaparse.core :as insta :refer [defparser]]))

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


(defn my-identity [l]
  (run* [y]
    (membero y (list l))))

(my-identity 'l)
;; => ()

(run 10 [q]
  (membero 'tofu q))
;; =>
;; ((tofu . _0)
;;  (_0 tofu . _1)
;;  (_0 _1 tofu . _2)
;;  (_0 _1 _2 tofu . _3)
;;  (_0 _1 _2 _3 tofu . _4)
;;  (_0 _1 _2 _3 _4 tofu . _5)
;;  (_0 _1 _2 _3 _4 _5 tofu . _6)
;;  (_0 _1 _2 _3 _4 _5 _6 tofu . _7)
;;  (_0 _1 _2 _3 _4 _5 _6 _7 tofu . _8)
;;  (_0 _1 _2 _3 _4 _5 _6 _7 _8 tofu . _9))

(defn eq-caro [l x]
  (firsto l x))

(defn pmembero
  [x l]
  (conde
   [(emptyo l) u#]
   [(eq-caro l x) (resto l '())]
   (s# (fresh [d]
         (resto l d)
         (pmembero x d)))))

(run 3 [q]
  (pmembero 'tofu q))
;; => ((tofu) (_0 tofu) (_0 _1 tofu))



(run 10 [q]
  (pmembero 'tofu q))
;; ((tofu)
;;  (_0 tofu)
;;  (_0 _1 tofu)
;;  (_0 _1 _2 tofu)
;;  (_0 _1 _2 _3 tofu)
;;  (_0 _1 _2 _3 _4 tofu)
;;  (_0 _1 _2 _3 _4 _5 tofu)
;;  (_0 _1 _2 _3 _4 _5 _6 tofu)
;;  (_0 _1 _2 _3 _4 _5 _6 _7 tofu)
;;  (_0 _1 _2 _3 _4 _5 _6 _7 _8 tofu))




(defn pmembero [x l]
  (conde
   [(emptyo l) #u]
   (eq-caro l x) (resto l '())
   (eq-caro l x)
   (fresh [a d]
     (resto
      l
      (listo a d)))
   (u#
    (fresh [d]
      (resto l d)
      (pmembero x d)))))

(defn pmembero [x l]
  (conde
   [(emptyo l) u#]
   [(eq-caro l x) (resto l ())] ;; no quote on nil-list NOTE
   [(eq-caro l x)
    (fresh [a d]
      (resto
       l
       (llist a d)))] ;; llist not listo (not sure difference, but llist more common)
   [s# (fresh [d]
         (resto l d)
         (pmembero x d))]))



(defn pmembero [x l]
  (conde
   ;; we can remove first line since it "always fails" (huh?)
   [(eq-caro l x) (resto l ())] 
   [(eq-caro l x)
    (fresh [a d]
      (resto
       l
       (llist a d)))] 
   [s# (fresh [d]
         (resto l d)
         (pmembero x d))]))

(run 10 [q]
  (pmembero 'tofu q))
;; => ((tofu) (tofu _0 . _1) (_0 tofu) (_0 tofu _1 . _2) (_0 _1 tofu) (_0 _1 tofu _2 . _3) (_0 _1 _2 tofu) (_0 _1 _2 tofu _3 . _4) (_0 _1 _2 _3 tofu) (_0 _1 _2 _3 tofu _4 . _5))

(defn pmembero [x l]
  (conde
   [(eq-caro l x) ;; the ordering of thse clauses changes whether x is even or odd positioned
    (fresh [a d]  ;; quite subtle.. see page 43 TRS
      (resto
       l
       (llist a d)))] 
   [(eq-caro l x) (resto l ())] 
   [s# (fresh [d]
         (resto l d)
         (pmembero x d))]))





(def prolog-parser
  (insta/parser "program = clauselist query | query
clauselist = clause | clauselist clause
clause = predicate '.' | predicate ':-' predicatelist '.' nl
predicatelist = predicate | predicatelist , predicate
predicate = atom | atom '(' termlist ')'
termlist = term | termlist ',' term
term = numeral | atom | variable | structure
structure = atom ( termlist )
query = '?-' predicatelist '.'
atom = smallatom | ' string '
smallatom = lowercaseletter | smallatom character
variable = uppercaseletter | variable character
lowercaseletter = #'[a-z]'
uppercaseletter = #'[A-Z]'
numeral = digit | numeral digit
digit = #'[0-9]'
character = lowercaseletter | uppercaseletter | digit
string = character | stringcharacter
stringcharacter = numeral | lowercaseletter | uppercaseletter
nl = '\n'"))

(prolog-parser "likes(fred,beer).likes(fred,cheapcigars).likes(fred,mondaynightfootball).?-consult(basics).")
