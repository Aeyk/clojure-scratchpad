(ns clojure-sratchpad.trs
  (:require [clojure.core.logic]))
(use 'clojure.core.logic)
;;; from [[https://github.com/clojure/core.logic/blob/master/src/test/clojure/clojure/core/logic/tests.clj#L459][clojure.core.logic/tests.clj]] line 459

(defn pairo [p]
  (fresh [a d]
    (== (lcons a d) p)))

(defn twino [p]
  (fresh [x]
    (conso x x p)))

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
#_(do
  #_(run 2 (x)
    (let [x false]
      (== x true)))
  #_(run* (q)
    (fresh (x)
      (== false x)
      (== true q)))
  #_(run 1 (q)
    s#)
  #_(run* (r)
    (fresh (x y z)
      (== (list x y z) r)
      ))
  #_(run* (q)
    (== ))
  #_(run* (q)
    (cond
      false true
      :else false)    )
  #_(run 1 (x)
    (conde
      ((== "olive" x) s#)
      ((== "oil" x) s#)
      (s# u#)))
  #_(run 1 (x)
    (bounded-list  ('a 'b 'c . 'x)))

  (defn teacupo [x]
    (conde
      ((== x "cup") s#)
      ((== x "tea") s#)
      (s# u#)))
#_(run* (q)
  (fresh [x y]
    (conde
      ((teacupo x) (== true y) s#)
      ((== false x)  (== true y))
      (s# u#))
    (== (cons x (cons y '())) q)))
;; => ((false true) ("cup" true) ("tea" true))

#_(run* (r)
  (fresh (x y z)
    (conde
      ((== y x)
       (fresh (x) (== z x)))
      ((fresh (x) (== y x))
       (== z x))
      (s# u#))
    (== (cons y (cons z '())) r)))
;; => ((_0 _1) (_0 _1))

#_(run* (r)
  (fresh (x y z)
    (conde
      ((== y x) (fresh (x) (== z x)))
      ((fresh (x) (== y x)) (== z x))
      (s# u#))
    (== false x)
    (== (cons y (cons z ())) r)))
;; => ((false _0) (_0 false))


#_(run* (q)
  (let [a (== true q)
        b (== false q)]
    b)))
;; => (false)


#_(run* (q)
  (let [a (== true q)
        b (== false q)
        c (conde
            ((== true q) s#)
            (s# (== false q)))]
    b))
;; => (false)
;; The past the examples of form #_(run* (let [a ()...])
;; are all goals, we only ever use b's fresh value...  Huh?


((let [x (fn [a] a)
       y x]
   (x y)) "hello")
;; big identity from inside a let? weird

#_(run* (r)
  (fresh (y x)
    (==
      (llist x y) r)))
;; => ((_0 . _1))

#_(run* (r)
  (fresh (v w)
    (== '(,x ,w)
      r)))
;; => ((x w))
;; '(,x ,w) an emoji and some famous lisp syntax

(def emoji '(,x ,w))

#_(run* [r]
  (fresh [v w]
    (== (let [x v
              y v
              'x 'y])
      r)))


;; I under stand how splicing works for this case. But TRS
;; 	has cases of let that seem to depend on let rules that
;; 	dont exist in clojure? 
#_(run* (r)
  (fresh (y x)
    (== '(,x ,y) r)))

;;
#_(run* (r)
  (fresh (v w)
    (== (let ((x v)
              (y w))
          '(,x ,y))
      r)))
;; Unhandled clojure.lang.Compiler$CompilerExceptio
;;   Call to clojure.core/let did not conform to spec.
;; ...
;;                           :val ((x v) (y w)),
;; Seeing that line makes me think it's the different binding.
;; So I try and modify it.
#_(run* (r)
  (fresh (v w)
    (== (let [x v
              y w]
          '(,x ,y)) ;;; equiv. to cons'ing ALL HAIL CONSO
      r)))
;; => ((x y)) TRS says it should be two fresh variables.
;; ( _0 _1)


(defn caro
  [p a]
  (fresh (d)
    (== (a d) p)))

#_(run* (r)
  (fresh (x y)
    (caro ("grape" "raisin" "pear") x)
    (caro '(,a ,b ,c) y)
    (== (cons x y) r)))
