(ns brave-and-true)

;;; Quine Literals include atoms and collections
1 ;; => 1

"Hello Megan";; => "Hello Megan"

[0 "a item" #{}] ;; => [0 "a item" #{}]

;;; Control Flow
(if true
  1 2);; => 1
(if (or nil false)
  1 2);; => 2
(if (or nil false)
  1);; => nil


(if true
  (do
    (println "Hello and thank you")
    1)
  (do
    (println "Get out and good riddance!")
    2)) 
;;"Hello and thank you"
;; => 1

;;; Use when if you want to do multiple things when some condition is
;;;	true, and you always want to return nil when the condition is false.
(when true
  (println "Where are you going?")
  "I'm going to this point.")
;; => "I'm going to this point."

(def falsey? (or nil? false?))
(def truthy? (complement falsey?))


;;;; Data Structures
;;; Maps

{};; => {}
(hash-map) ;; => {}
(= {} (hash-map));; => true

{:key-one "value one"
 :key-two "value two"}
;; => {:key-one "value one", :key-two "value two"}

(def m
  (hash-map :key-one "value one"
    :key-two "value two"))
;; => #'brave-and-true/m

m
;; => {:key-one "value one", :key-two "value two"}

(get m :key-one)
;; => "value one"

(get m :key-two)
;; => "value two"

(get m :key-four) ;; nil means none, none found in response to get means key don't  exist
;; => nil


(get m :key-four :unknown-key) ;; unless you tell nil what to say when no key is found
;; => :unknown-key


;;; Keywords
:keywords :self :evaluate :to :themselves 
;; => :keywords
;; => :self
;; => :evaluate
;; => :to
;; => :themselves

:keywords :are :functions

(:key-one)
;;; 1. Unhandled java.lang.IllegalArgumentException
;;;   Wrong number of args passed to keyword: :key-one

:keywords :take :one :parameter {\a "hash-map"}
(:key-one {:key-one "keywords are often used as hash-lookup"})
;; => "keywords are often used as hash-lookup"

(:key-two {:key-one "keywords are often used as hash-lookup"}  "like `get`, :keyword-as-fn lets you supply an if-nil value")
;; => "like `get`, :keyword-as-fn lets you supply an if-nil value"
p

;;; Vectors

[] ;; => []
(vector) ;; => []
(= (vector) []);; => true

;; vectors are integer indexed
;; so get accepts on integers, from 0 to (dec length-of-vector) inclusive
(get [0 10 100 1000 10000 10000] 0)
;; => 0
(get [0 10 100 1000 10000 10000] 3)
;; => 1000

;; `conj` is the super smart, super fast data structure away modernized `cons`
;; (conj vector x) adds x to the end, the fasted place to add to a vector
;; remember vectors are sparse and only grow or shrink easily from the ends
;;				(? or one end?).
(conj [0 10 100] 1000)
;; => [0 10 100 1000]



;;; Lists
'(1 2 3 4);; => (1 2 3 4)
(= '(1 2) (list 1 2));; => true

;; Unlike `get` on a vector, nth of a list is O(n) time for n of access.
;; meaning nth must traverse the entire list one at a time until it reaches n
;; 	(likely using first and rest)
;; (for small lists this isn't an issue, for an infinite list you've conjured a
;; 	Spectre of Turing's  Halting / Incompleteness Theorem).
(nth '(0 10 100 1000) 0);; => 0
(nth '(0 10 100 1000) 3);; => 1000

;; conj our super smart data type aware adds to the /begining/ of lists
(conj (list 0 10 100 1000) -10)
;; => (-10 0 10 100 1000)
;; remeber and contrast that with vectors
(conj (vector 0 10 100 1000) -10)
;; => [0 10 100 1000 -10]
;;
;;; Sets
;; Sets are collections of unique values. 
;; Clojure has two kinds of sets: hash-sets and sorted sets. 
;; hash-sets are more common.
(= #{1 2}
  (hash-set 1 1 2 2))
;; => true

(conj #{:a :b} :b)
;; => #{:b :a}

(set [3 4 4 3 4])
;; => #{4 3}
;;You can check for `set` membership using the `contains?` function, by
;;	using `get`, or by using a `keyword` as a function with the `set` as 
;;	its argument.

(contains? #{:a :b :c} :a)
;; => true

(get #{:a :b :c} :a)
;; => :a

(:a #{:a :b :c})
;; => :a
