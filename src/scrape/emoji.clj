(ns  scrape.emoji
  (:require
   [clojure.set :as set]
   [hiccup.core :as html]
   [garden.core :as css]
   [clojure.edn :as edn]
   [cheshire.core :as json]
   [net.cgrand.enlive-html :as select]))

(def emojis
  (select/select
   (select/html-resource
    (java.net.URL. "https://unicode.org/emoji/charts/full-emoji-list.html"))
   [:td.chars]))

(defn nth-emoji [n]
  (vec (flatten (nth (map :content emojis) n))))

(spit
 "emojis.html"

 (html/html
  [:html 
   [:div
    {:style
     (css/style
      {:display "grid"
       :justify-items "center"
       :align-items "center"
       :font-size "3em"
       :grid-template-columns "repeat(5, 1fr)"})}
    (for [emoji emojis]
      [:div (apply str (:content emoji))])]]))


