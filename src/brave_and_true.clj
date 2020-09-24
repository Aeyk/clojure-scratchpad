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


