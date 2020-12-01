(ns aoc.one
  (:require [clojure.core.logic :refer :all]
            [clojure.core.logic.fd :as fd]
            [clojure.core.logic.protocols :refer [walk]]))

(def data (map read-string
               (clojure.string/split (slurp "./resources/1.1") #"\n")))

(def *db* data)

(defn half-of-singletono [a b]
  (fn [a]
    (let [a (walk a a)
          b (walk a b)]
      (condp = [(not (lvar? a))
                (not (lvar? b))]
        [true true]  (when (= (fd/+ a b 2020))
                       [a b])))))

(run 1 [q]
  (membero 0 q))
;; => ((0 . _0))


(apply * (first
    (run 1 [q r]
      (membero q data)
      (membero r data)
      (fd/in q r (fd/interval 0 2020))
      (fd/+ q r 2020))))
;; => 744475
 
