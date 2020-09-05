(ns clojure-scratchpad.compare-and-set)
;; <2020-09-03 Thu>
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;      https://clojuredocs.org/clojure.core/compare-and-set!                 ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def a (atom 0))
@a  ;; => 0
;; Aha- like a JNE instruction
(compare-and-set! a 10 20)
;; => false

@a ;; => 0

(compare-and-set! a 0 (inc @a))
;; => true (true once, if you run again @a won't be 0, and compare-and-set! wont be true)
@a
;; => 1
()

;; Someone on the clojuredocs.org page left a comment demonstrating how
;; 	(some of) javas autoboxing, clojures interning cause weird comparisons
;; 	for the compare part of compare-and-set!
;;
;; #+BEGIN_QUOTE https://clojuredocs.org/clojure.core/compare-and-set!
;; You don't have to worry about this with `swap!` because the "old" value it
;; 	compares against for the compare-and-set operation is always from the
;;	atom itself, so identity comparison works as long as no one else put a
;;	different object in the atom in the meantime. However, it is easy to
;; 	imagine a pathological case with a highly-contented atom where everyone
;;	keeps putting the same "equal" value into it over and over, and yet
;;	swappers have to retry over and over.
;;#+END_QUOTE

(def a (atom 0))
;;=> #'user/a
(compare-and-set! a 0 100)
;;=> true
(compare-and-set! a 100 200)
;;=> true
;; Fails?! (on Oracle JVM 8 with default settings)
(compare-and-set! a 200 300)
;;=> false
@a
;;=> 200 ; WAT?
