(ns aoc.one
  (:require [clojure.core.logic :refer :all]
            [clojure.core.logic.fd :as fd]))

(def data (clojure.string/split (slurp "./resources/1.1") #"\n"))

(defn sumo [vars sum]
  (fresh [vhead vtail run-sum]
    (conde
     [(== vars ()) (== sum 0)]
     [(conso vhead vtail vars)
      (fd/+ vhead run-sum sum)
      (sumo vtail run-sum)])))

(run 1 [q]
  (fresh [a b]
    (fd/in a b (fd/interval 0 2020))
    (fd/+ a b 2020)
    (== q [a b])))
;; => ([0 2020])
