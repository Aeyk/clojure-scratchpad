(ns clojure-scratchpad.ninetynineproblemslogic
  (:require [clojure.core.logic :refer :all]
            [instaparse.core :as insta :refer [defparser]]
            [clojure.core.logic.pldb :refer :all]))

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





(def whitespace
  (insta/parser
   "whitespace = #'\\s+'"))

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
nl = '\n'" :auto-whitespace whitespace))

(def noop-options
  {:lowercaseletter str
   :uppercaseletter str
   :character str
   :smallatom str
   :atom str
   :predicate (fn [rel _ term-list _] [rel term-list])
   :term str
   :termlist str
   :clause (fn [rel _]
             (let [fact (first (vec (rest rel)))
                   rel (first rel)
                   [ffact sfact] (clojure.string/split fact #",")]
               #_(db rel (quote ffact) (quote sfact))
               [(symbol rel) (symbol ,ffact)
                (symbol sfact)]))
   :clauselist
   (fn
     ([f] f)
     ([f r] [:cl f  r]))
   :predicatelist (fn ([f] f)
                    ([f r] [:pl f r]))
   :query (fn [a pl q] [:query a pl q])})

(defn parse-prolog [input]
  (->>
   (prolog-parser
    input)
   (insta/transform noop-options)))

(parse-prolog "likes(malik,pizza).
likes(fred,cigars).
likes(fred,football).
?-consult(basics).")

(db-rel likes p x)
(db-rel likes p x)


(def prolog-facts (db 
                      [likes 'malik 'pizza]

                      [likes 'fred 'football]
                      [likes 'fred 'cigars]

                      [likes 'sue 'jogging]
                      [likes 'sue 'yogurt]
                      [likes 'sue 'bicycling]
                      [likes 'sue 'amy-goodman]))



(with-db prolog-facts (run* [p f] (likes p f)))


;; <2020-11-29 Sun 14:53> MiniKanren
;; [[https://github.com/webyrd/relational-parsing-with-derivatives/blob/master/clojure-core-logic-version/src/relparsing/regex_derivative.clj][webyrd / relational-parsing-with-derivatives]]

(defn symbolo [x]
  (predc x symbol? (fn [c v r a] `(~'sym ~(walk* r (walk* a x))))))



(run 1 [q]
  (symbolo q))
;; => ((_0 :- (sym _0)))


(run 3 [q]
  (fresh [x y]
    (!= q (llist x y))
    (== y 5)
    (== x 5)))
;; => ((_0 :- (!= (_0 (5 . 5)))))

(run 3 [q]
  (fresh [a b c]
    (== c 'body)
    (conde
     [(== a 'fn)
      (== q (list a c))]
     [(== a 'defn)
      (== b 'name)
      (== q (list a b c))])))
;; => ((fn body) (defn name body))

;; <2020-11-29 Sun 19:19>
;; https://www.youtube.com/watch?v=SykxWpFwMGs

(db-rel warm_blooded x)
(db-rel has_hair x)
(db-rel has_feathers x)
(db-rel produce_milk x)

(def animal-facts
  (db
   [warm_blooded 'penguin]
   [warm_blooded 'human]
   [produce_milk 'human]
   [produce_milk 'penguin]
   [has_hair 'human]
   [has_feathers 'penguin]
   ))

(with-db animal-facts
  (run* [x]
    (warm_blooded x)
    (produce_milk x)
    (has_hair x)))
;; => (penguin human)
;; => (human)


(db-rel parent c p)

(def human-facts
  (db
   [parent 'albert 'bob]
   [parent 'albert 'betsy]
   [parent 'albert 'bill]
   [parent 'alice 'bob]
   [parent 'alice 'betsy]
   [parent 'alice 'bill]
   [parent 'bob 'carl]
   [parent 'bob 'charlie]))


(defn children [of]
  (with-db human-facts
    (run* [x]
      (parent x of))))

(children 'bob)
;; => (albert alice)

(defn parents [of]
  (with-db human-facts
    (run* [x]
      (parent of x))))

(map (juxt identity #(parents %)) (parents 'albert))  ;;#=> [child [any_parents]]
;; => ([bill ()] [betsy ()] [bob (charlie carl)])


;;; https://www.youtube.com/watch?v=1fDG69_ApFc&list=PLHbIZiLIDu-qbXqhvgkIjyIK0SbqYNcU8&index=5
;;; 1-+ code below
;;; 2-+ are equiv to below in prolog
;;; 3-+    person(name) :- true.
;;; 4-+    person(X).
(db-rel person name)
(def prolog-tutorial-db
  (db [person 'tom]))
(with-db prolog-tutorial-db
  (run* [x]
    (person x)))

;; https://youtu.be/lzCIyvFgUVk?t=1089
(defne membero*
  [x l]
  ([_ [x . tail]])
  ([_ [head . tail]]
   (membero* x tail)))

(run 3 [q]
  (membero* 'element q))
;; => ((element . _0) (_0 element . _1) (_0 _1 element . _2))

(defne appendo*
  [x y z]
  ([() _ z])
  ([[a . d] _ [a . r]]
   (appendo* d y r)))

(run* [q]
  (appendo* (range 6) q [0 1 2 3 4 5]))
;; => (_0)
;; 

