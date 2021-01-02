(ns wiktionary-api
  (:require [net.cgrand.enlive-html :as html]
            [cheshire.core :as json]))

(def api-base-url "https://en.wiktionary.org/w/api.php")

(defn form-query-params [{:keys [action titles format prop page]}]
  (str api-base-url "?action=" action "&titles=" titles "&format=" format
       "&prop=" prop "&page=" page))

;; https://en.wiktionary.org/w/api.php?action=query&titles=test&format=json
(json/parse-string
 (slurp
  (form-query-params
   {:action "query"
    :titles "why"
    :format "json"
    :prop "info"})))


(json/parse-string
 (slurp
  (form-query-params
   {:action "parse"
    :page "why"
    :format "json"
    :prop "text"})))

