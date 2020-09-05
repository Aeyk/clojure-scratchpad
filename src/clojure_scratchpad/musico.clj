(ns clojure-scratchpad.musico
  (:refer-clojure :exclude [==])
  (:require [clojure.core.logic :refer :all]
            [clojure.core.logic.fd :as fd]
            [clojure.core.match :refer [match]]))


(defn note-valueo [v]
  (fd/in v (fd/domain 1 2 4 8 16)))

(defne noteo [note]
  ([ [p v] ]
   (pitcho p)
   (note-valueo v)))

(defne noteso [notes]
  ([ [] ])
  ([ [n . ns] ]
   (noteo n)
   (noteso ns)))

(defne notes-total-valueo [notes total]
  ([ [] _ ]
   (fd/== total 0))
  ([ [[p v] . ns] _ ]
   (fresh (s)
     (note-valueo v)
     (fd/+ v s total)
     (notes-total-valueo ns s))))

(defn baro [notes]
  (fresh []
    (noteso notes)
    (notes-total-valueo notes 16)))

(clojure.pprint/pprint
  (run 4 [q]
    (pitcho q)))

(defn ->pitch [p]
  (nth [:c :d :e :f :g :a :b] (- p 1)))

(defn ->note-value [d]
  (/ d 16))

(defn ->note [[p d]]
  [(->pitch p)
   (->note-value d)])

(defn ->bar [bar]
  (map ->note bar))

 (clojure.pprint/pprint
             (->> (generate-score 64)
                  :bars
                  (drop 32)))

(defn generate-score [n]
  (let [bars (run n [q]
               (baro q))]
    {:bars (map ->bar bars)}))




(defn pitcho [p]
  (fd/in p (fd/interval 1 7)))

(defn octaveo [p]
  (fd/in p (fd/interval 0 10)))


;; c d e f g a b c
;; 0 1 2 3 4 5 6 7
;; 1   3   5
;;   2   4   6
;;     3   5  7
;;


;; for P  get +3 OR -3
(defn major-thirdo [p]
  )


(defn my-take
  [n lst]
  (match
      (zero? n) []))

(defn takeo
  [n lst]
  (match/match
    [0 _] []))
