(ns quine
  (:require
   [clojure.core.logic :refer :all]
   [clojure.core.logic.fd :as fd]))

(defn noto
  "Relational boolean not."
  [a o]
  (conde
   [(== a true) (== o false)]
   [(== a false) (== o true)]))

(defn ando
  "Relational boolean and."
  [a b o]
  (conde
   [(== a true) (== b true) (== o true)]
   [(== a false) (== b false) (== o false)]
   [(== a true) (== b false) (== o false)]
   [(== a false) (== b true) (== o false)]))

(defn oro
  "Relational boolean or."
  [a b o]
  (conde
   [(== a true) (== true o)]
   [(== b true) (== true o)]
   [(== a false) (== b false) (== false o)]))

(defn xoro
  "Relational boolean xor."
  [a b o]
  (conde
   [(== a true) (== b false) (== o true)]
   [(== a false) (== b true) (== o true)]
   [(== a false) (== b false) (== o false)]))

(defn evalo
  "Basic relational evaluator for boolean expressions."
  [e v]
  (conde
    [(== e false) (== v false)]
    [(== e true) (== v true)]
    [(fresh [a ea]
       (conso `not [a] e)
       (evalo a ea)
       (noto ea v))]
    [(fresh [a ea b eb]
       (conso `and [a b] e)
       (evalo a ea)
       (evalo b eb)
       (ando ea eb v))]
    [(fresh [a ea b eb]
       (conso `or [a b] e)
       (evalo a ea)
       (evalo b eb)
       (oro ea eb v))]
    [(fresh [a ea b eb]
       (conso `xor [a b] e)
       (evalo a ea)
       (evalo b eb)
       (xoro ea eb v))]))

(eval
 (last
  (run (rand-int 500) [q]
    (evalo q false)))) ;; quine generation for boolean returns
