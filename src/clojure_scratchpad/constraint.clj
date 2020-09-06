(ns clojure-scratchpad.constraints
  (:require [clojure.core.logic :as logic]
            [clojure.core.logic.fd :as fd]))

(def constraint-solving-prob1
  (logic/run* [q]
    (logic/fresh [x y]
      (fd/in x (fd/interval 0 7))
      (fd/in y (fd/interval 2 11))
      (fd/eq
        (= (+ x y) 10))
      (logic/== q [x y]))))

constraint-solving-prob1
;; => ([0 10] [1 9] [2 8] [3 7] [4 6] [5 5] [6 4] [7 3])


;; In English we might say the constraint as follows:
;;	Let X be between 0, 7
;;	Let Y be between 2, 11
;;	Find solutions for 10 = X + Y

