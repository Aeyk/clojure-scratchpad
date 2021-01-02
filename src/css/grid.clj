(ns css.grid
  (:require
   [garden.core :as css]
   [hiccup.core :as html]))


(for [x (range 100)]
  (css/css [(str ".grid-experiment-" x)
            {:background-color "black"}]))
