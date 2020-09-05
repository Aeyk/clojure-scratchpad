(ns minikanren.byrd
  (:refer-clojure :exclude [==])
  (:use [clojure.core.logic]
        [clojure.core.logic.pldb]
        [clojure.tools.macro :as macro]))
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

