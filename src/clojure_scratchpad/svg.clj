(ns clojure-scratchpad.svg
  (:require [pl.danieljanus.tagsoup :as ts]))


(defmacro embed [svg-file]
  (let [hiccup (ts/parse-string (slurp svg-file))]
    `~hiccup))
