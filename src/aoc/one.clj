(ns aoc.one
  (:require [clojure.core.logic :refer :all]
            [clojure.core.logic.fd :as fd]
            [clojure.core.logic.protocols :refer [walk]]))

(def data (map read-string
               (clojure.string/split (slurp "./resources/1.1") #"\n")))

(def *db* data)

(apply * (first
          (run 1 [q r s]
            (membero q data)
            (membero r data)
            (fd/in q r (fd/interval 0 2020))
            (fd/+ q r 2020))))
;; => 744475

(defn sumo [vars sum]
  (fresh [vhead vtail run-sum]
    (conde
     [(== vars ()) (== sum 0)]
     [(conso vhead vtail vars)
      (fd/+ vhead run-sum sum)
      (sumo vtail run-sum)])))

(apply
 *
 (first
  (run 1 [q r]
    (membero q data)
    (membero r data)
    (sumo [q r] 2020))))

(run 1 [q r s]
  (sumo [q r s] 2020)
  (membero q data)
  (membero r data)
  (membero s data))
;; => ([265 167 1588])

(apply * [265 167 1588])
;; => 70276940
