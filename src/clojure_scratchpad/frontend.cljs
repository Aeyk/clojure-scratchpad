(ns clojure-scratchpad.frontend
  (:require [clojure-scratchpad.frontend.counter]
            ))

(defn init []
  (rum/mount
   [#_(counter/post-comment-form)
    (counter/sign-up-form)]
   (js/document.getElementById "app")))
