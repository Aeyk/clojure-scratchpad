(ns clojure-scratchpad.frontend
  (:require
   [rum.core :as rum]
   [clojure-scratchpad.frontend.counter :as counter]))

(rum/defc app
  []
  [(counter/sign-up-form)
   (counter/post-comment-form)
   ])

(defn init []
  (rum/mount
   [(app)]
   (js/document.getElementById "app")))
