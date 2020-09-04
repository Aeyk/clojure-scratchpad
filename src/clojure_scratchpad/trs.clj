(ns clojure-sratchpad.trs
  (:require [clojure.core.logic]))
(use 'clojure.core.logic)

(defn twino [p]
  (fresh [x]
    (conso x x p)))


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

(run 2 (x)
  (let [x false]
    (== x true)))

(run* (q)
  (fresh (x)
    (== false x)
    (== true q)))

(run 1 (q)
  s#)

(run* (r)
  (fresh (x y z)
    (== (list x y z) r)
    ))

(run* (q)
  (== ))

(run* (q)
  (cond
    false true
    
    :else false)
  )

(run 1 (x)
  (conde
    ((== "olive" x) s#)
    ((== "oil" x) s#)
    (s# u#)))
    
  (run 1 (x)
    (bounded-list  ('a 'b 'c . 'x)))

(defn teacupo [x]
  (conde
    ((== x "cup") s#)
    ((== x "tea") s#)
    (s# u#)))

(run* )



(run* (q)
  (fresh [x y]
    (conde
      ((teacupo x) (== true y) s#)
      ((== false x)  (== true y))
      (s# u#))
    (== (cons x (cons y '())) q)))
;; => ((false true) ("cup" true) ("tea" true))



(run* (r)
  (fresh (x y z)
    (conde
      ((== y x)
       (fresh (x) (== z x)))
      ((fresh (x) (== y x))
       (== z x))
      (s# u#))
    (== (cons y (cons z '())) r)))
;; => ((_0 _1) (_0 _1))

(run* (r)
  (fresh (x y z)
    (conde
      ((== y x) (fresh (x) (== z x)))
      ((fresh (x) (== y x)) (== z x))
      (s# u#))
    (== false x)
    (== (cons y (cons z ())) r)))
;; => ((false _0) (_0 false))


(run* (q)
  (let [a (== true q)
        b (== false q)]
    b))
;; => (false)


(run* (q)
  (let [a (== true q)
        b (== false q)
        c (conde
            ((== true q) s#)
            (s# (== false q)))]
    b))
;; => (false)
;; The past the examples of form (run* (let [a ()...])
;; are all goals, we only ever use b's fresh value...  Huh?


((let [x (fn [a] a)
       y x]
   (x y)) "hello")
;; big identity from inside a let? weird

(run* (r)
  (fresh (y x)
    (==
      (llist x y) r)))
;; => ((_0 . _1))

(run* (r)
  (fresh (v w)
    (== '(,x ,w)
      r)))
;; => ((x w))
;; '(,x ,w) an emoji and some famous lisp syntax

(def emoji '(,x ,w))

(run* [r]
  (fresh [v w]
    (== (let [x v
              y v
              'x 'y])
      r)))


;; I under stand how splicing works for this case. But TRS
;; 	has cases of let that seem to depend on let rules that
;; 	dont exist in clojure? 
(run* (r)
  (fresh (y x)
    (== '(,x ,y) r)))

;;
(run* (r)
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
(run* (r)
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

(run* (r)
  (fresh (x y)
    (caro ("grape" "raisin" "pear") x)
    (caro '(,a ,b ,c) y)
    (== (cons x y) r)))
