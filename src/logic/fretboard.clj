(ns fretboard
  (:refer-clojure :exclude [==])
  (:require [clojure.core.logic :refer :all]
            [clojure.core.logic.fd :as fd]
            [clojure.core.match :refer [match]]
            [hiccup.core :as html]
            [clojure.walk :refer [walk]]))

(run 3 [q]
  (fresh [E A D G b e % _ $]
    (== q [E A D G b e])

    (fd/in E (fd/interval 40 64))
    (fd/in A (fd/interval 45 69))
    (fd/in D (fd/interval 50 70))
    (fd/in G (fd/interval 55 75))
    (fd/in b (fd/interval 59 79))
    (fd/in e (fd/interval 64 88))))

