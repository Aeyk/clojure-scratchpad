(ns mp3scrape
  (:require [net.cgrand.enlive-html :as html]))

(comment 
  (def page (html/html-resource "resources/paredit.html"))

  (def paredit-commands
    (map html/text (html/select page [html/root :tt])))

  (def paredit-default-keybindings
    (map html/text (html/select page [:tr (html/attr-contains "center")])))
  
  (defn kbd-enclose [s]
    (str "(kbd \"" s "\")"))

  (comment (zipmap paredit-commands paredit-default-keybindings)))


(def url "https://www.linguasorb.com/spanish/pronunciation-audio/")
(def base-url "https://www.linguasorb.com")
(def page (slurp url))

(spit "resources/spanish.html" page)

(def page (html/html-resource "spanish.html"))

(def mp3-files
  (mapcat #(html/attr-values % :data-file)
    (html/select page [:i])))

(def command-list 
  (map #(str "wget \"" base-url % "\"\n")
    mp3-files))

(spit "to_wget.sh" (apply str command-list))


