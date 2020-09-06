(ns clojure-scratchpad.monads
  (:require [cats.core :as m]
            [cats.builtin]
            [cats.monad.maybe :as maybe]))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Semigroup
;; A `semigroup` is an algebraic structure with
;;	an `associative` binary operation (mappend).
;; Law of Associativity
;; A (+) B = B (+) A

;; We'll notice associativity,
;; The two sets contain the same numbers (out of order);
(m/mappend #{1 2 3} #{4 5 6})
;; => #{1 4 6 3 2 5}

(m/mappend #{4 5 6} #{1 2 3})
;; => #{1 4 6 3 2 5}

(=
  (m/mappend #{1 2 3} #{4 5 6})
  (m/mappend #{4 5 6} #{1 2 3}))
;; => true


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Monoid
;; A `monoid` is a `Semigroup` with an `identity` function
;;. 	(mempty). For collections, that is analagous to
;;,	the empty collection. Vector: [], List: (), etc.
;;; 	`maybe/just` and `maybe/nothing` together form
;;;; 	  a `monoid` with nothing being the `identity`.
;;;;;;
;;;; 	  Given that the values it contains form a
;;;	`Semigroup`, we can mappend multiple
;;,	`Maybe`, with `Nothing` being the `identity`
;;.	element.

(m/mappend
  (maybe/just [1 2 3])
  (maybe/nothing)
  (maybe/just [4 5 6])
  (maybe/nothing))
;; => #<Just [1 2 3 4 5 6]>

(maybe/just 2)
;; => #<Just 2>

(m/fmap inc (maybe/just 2))
;; => #<Just 3>

(m/fmap inc (maybe/nothing))
;; => #<Nothing>


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Functor
;; What the functor...?
;; The `Functor` represents some sort of
;;	"computational context", and the
;;	abstraction consists of one unique,
;;	higher order function: `fmap`, taking
;; 	function `f` and function-parameters `fv`.
;; 	# => (fmap [f fv])
;; 	Psts... (`Maybe` is a `Functor`)!







