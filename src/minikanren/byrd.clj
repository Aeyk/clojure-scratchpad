(ns minikanren.byrd
  (:refer-clojure :exclude [==])
  (:use [clojure.core.logic]
        [clojure.core.logic.pldb]
        [clojure.tools.macro :as macro]))


(defn pairo [p]
  (fresh [a d]
    (== (lcons a d) p)))

(defn twino [p]
  (fresh [x]
    (conso x x p)))

(defn listo [l]
  (conde
    [(emptyo l) s#]
    [(pairo l)
     (fresh [d]
       (resto l d)
       (listo d))]))

(defn flatteno [s out]
  (conde
    [(emptyo s) (== '() out)]
    [(pairo s)
     (fresh [a d res-a res-d]
       (conso a d s)
       (flatteno a res-a)
       (flatteno d res-d)
       (appendo res-a res-d out))]
    [(conso s '() out)]))

(defn anyo [q]
  (conde
    [q s#]
    [(anyo q)]))



(run 1 [q]
  (fresh [x y z]
    (== x z)
    (== 3 y)))


(run 1 [q]
  (fresh [x y z]
    (conde
      [(== (list x y z x) q)]
      [(== (list x y x z) q)])))
;; => ((_0 _1 _2 _0))


(run 5 [q]
  (fresh [x y z]
    (conde
      ((== \a x) (== 1 y) (== \d z))
      ((== 2 y) (== \b x) (== \e z))
      ((== \f z) (== \c x) (== 3 y)))
    (== (list x y z) q)))
;; => ((\a 1 \d) (\b 2 \e) (\c 3 \f))


(run* [q]
  (let [loop ()]
    (conde
      ((== fail q))
      ((== succeed q))
      ((loop)))))

(run 6 [q]
  (conde
    ((anyo (== false q)))
    ((== true q))))


;; (run* [q]
;;   (anyo
;;     (conde
;;       ((== 1 q))
;;       ((== 2 q))
;;       ((== 3 q))
;;       )))


(def alwayso
  (anyo (== false false)))

(run 1
  (x)
  (== true x)
  alwayso
  (== true x))


