(ns clojure-scratchpad.ninetynineproblems
  (:require [clojure.core.logic]))

;;;;; 99 Lisp Problems
(defn my-last [args]
  (if (= 1 (count args))
    (first args)
    (my-last (rest args))))
(my-last '(a b c d))
;; => d


(defn my-but-last
  ""
  [args]
  (if (= 2 (count args))
    args
    (my-but-last (rest args))))

(my-but-last '(a b c d))
;; => (c d)


(defn my-elem-at
  ""
  [m k]
  (if (= k (count m))
    (first m)
    (my-elem-at (rest m)
      k)))
(my-elem-at '[a b c d e] 3)


(defn my-count
  [m]
  (loop [n 0
         m m]
    (if (and
          (not (empty? m)) ;; this aint scheme, empty list is ==NOT== nil
          (seq? m))
      (recur (inc n) (rest m))
      n)))
(my-count '(a b c))
;; n 0
;; m '(a b c)
;; true

;; n 1
;; m '(b c)
;; true

;; n 2
;; m '(c)
;; true

;; n 3
;; m '()
;; true <-- error !!! dont forget `()` is NOT `nil?` it's `empty?`


(defn my-reverse
  [lst]
  (loop [lst lst
         newlst '()]
    (if (empty? lst)
      newlst
      (recur (rest lst) (cons (first lst) newlst)))))
(my-reverse '(1 2 3 4))
;; => (4 3 2 1)

(defn drop-both-sides
  [n lst]
  (drop n (drop-last n lst)))

(drop-both-sides 1 '(1 2 3 2 1))

;; * TODO P06 PALINDOME
(defn my-palindrome
  [lst]
  (loop [lst 	 lst]
    (if (empty? lst)
      true
      (if (=
            (first lst)
            (last lst))
        (recur (drop-both-sides 1 lst))
        false))))


;; (=
;;   (last '(a b b a))
;;   (first '(a b b a)))
;; (def a-list '(a b c d))
;; (drop-both-sides 1 a-list)
;; ;; a b b a
;; ;; not empty?
(my-palindrome '(1 2 3 2 1))

(defn atom?
  [a]
  (complement seq?) a)


(defn my-flatten
  [lst]
  (loop [lst 	lst
         newlst '()]
    (if (empty? lst)
      newlst
      (if (seq? (first lst))
        (recur (first lst)
          (cons (first lst) newlst))
        (recur (rest lst)
          (into (first lst) newlst))))))

(defn my-flatten2
  "Transform a list, possibly holding lists as elements into a `flat' list by replacing each list with its elements (recursively)."
  [lst])
(defn my-flatten2
  "Transform a list, possibly holding lists as elements into a `flat' list by replacing each list with its elements (recursively).
"
  [lst]
  
  )

;; https://rosettacode.org/wiki/Flatten_a_list#Clojure
(defn my-flatten [x]
  (filter (complement sequential?)
          (rest (tree-seq sequential? seq x))))


(defn compress
  "Eliminate consecutive duplicates of list elements.
    If a list contains repeated elements they should be replaced with a single copy of the element. The order of the elements should not be changed.

    Example:
    * (compress '(a a a a b c c a a d e e e e))
    (A B C A D E)"
  [lst]
  (for [[a b & rst] lst]
    (if (= a b) a
        [a b])))




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


