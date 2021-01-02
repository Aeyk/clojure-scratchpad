
(ns clojure-scratchpad.scratch-html
  (:require [clojure.string :as str]))

(spit "image_table.html"
 (str/join
  (for [i (range 0 247)
        :let [i (apply str (drop 2 (format "%05d" i)))]]
    (str "<img alt=\"\" src=\"" i ".gif\"/>\n"))))
