(ns clojure-sratchpad.examples.matching
  (:require [clojure.core.logic]
            [clojure.core.match :refer-macros [match]]))

;; Enhanced Example from the docs
(let
    [x 1 y 1 n 5]
  (match/match
    [x   y   n  ]
    [x 1 n] :answer1
    [1 y n] :answer2
    :else :default-answer))


(defun fibo [n]

  (match/match
    [n_1 n_2]
    [0 1] 1
    [1 1] 2
    [1 _] ))
