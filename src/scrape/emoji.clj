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
  (for [emoji emojis]
    [:p (apply str (:content emoji))])))


