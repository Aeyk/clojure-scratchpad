;; https://hbfs.wordpress.com/2020/05/05/evaluating-polynomials/
(ns clojure-scratchpad.polynomial)

;; 9x^7 + 5x^6 + 7x^5 + 4x^4 + 5x^3 + 3x^2 + 3x + 2


(defmacro binomial [a x n]
  `(* ~a (Math/pow ~x ~n)))




