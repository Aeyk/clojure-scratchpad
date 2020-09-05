(ns clojure-scratchpad.ninetynineproblems)

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
  (map first (partition-by identity lst)))
;;;  taken from https://clojuredocs.org/clojure.core/partition-by
;;;  
;;;  Note that previously created 'bins' are not used when same value is seen again
;;;  user=> (partition-by identity "ABBA")
;;;  ((\A) (\B \B) (\A))
;;;  
;;;  That is why you use group-by function if you want all the the same values in the same 'bins' :) 
;;;  Which gives you a hash, but you can extract values from that if you need.
;;;  
;;;  (group-by identity "ABBA")
;;;  => {\A [\A \A], \B [\B \B]}

(compress '(a a a a b c c a a d e e e e))
;; => (a b c a d e)

(defn pack
  "(**) Pack consecutive duplicates of list elements into sublists.
    If a list contains repeated elements they should be placed in separate sublists.

    Example:
    * (pack '(a a a a b c c a a d e e e e))
    ((A A A A) (B) (C C) (A A) (D) (E E E E))"
  [lst]
  (partition-by identity lst))

(pack '(a a a a b c c a a d e e e e))
;; => ((a a a a) (b) (c c) (a a) (d) (e e e e))


(defn encode
  " (*) Run-length encoding of a list.
    Use the result of problem P09 to implement the so-called run-length encoding data compression method. Consecutive duplicates of elements are encoded as lists (N E) where N is the number of duplicates of the element E.

    Example:
    * (encode '(a a a a b c c a a d e e e e))
    ((4 A) (1 B) (2 C) (2 A) (1 D)(4 E))"
  [lst]
  (for [lol (partition-by identity lst)]
    [(count lol) (first lol)]))
(encode '(a a a a b c c a a d e e e e))
;; => ([4 a] [1 b] [2 c] [2 a] [1 d] [4 e])

;;; partition feels like cheating lol

(defn encode-modified
  "(*) Modified run-length encoding.
    Modify the result of problem P10 in such a way that if an element has no duplicates it is simply copied into the result list. Only elements with duplicates are transferred as (N E) lists.

    Example:
    * (encode-modified '(a a a a b c c a a d e e e e))
    ((4 A) B (2 C) (2 A) D (4 E))"
  [lst]
  (for [count-item
        (encode list)]
    (if (= 1 (first count-item))
      (second count-item)
      [(first count-item)
       (second count-item)])))

(encode-modified '[a a a a b c c a a d e e e e])
;; => [[4 a] b [2 c] [2 a] [1 d] [4 e]]


