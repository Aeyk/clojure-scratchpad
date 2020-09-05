(ns clojure-scratchpad.ninetynineproblemslogic
  (:require [clojure.core.logic]))




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
