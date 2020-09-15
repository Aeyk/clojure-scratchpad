(ns scrapy
  (:require [reaver :refer [parse extract-from text attr]])
  (:require [net.cgrand.enlive-html :as html]))
;; (def html-data
;;   (->
;;     "https://news.ycombinator.com/"
;;     java.net.URL.
;;     html/html-resource))

;; ((comp first html/select) html-data [:html :body])
        
(def hacker-news (slurp "https://news.ycombinator.com/"))

; Extract the headlines and urls from the HTML into a seq of maps.
(def hn
  (extract-from (parse hacker-news) ".itemlist .athing"
    [:headline :url]
    ".title > a" text
    ".title > a" (attr :href)))

(first hn)


(extract-from (parse hacker-news) ".itemlist"
  [:headline :url]
  ".title > a" text
  ".title > a" (attr :href))

