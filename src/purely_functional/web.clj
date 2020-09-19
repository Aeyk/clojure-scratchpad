(ns purely-functional.web
  (:require [reaver :refer [parse extract-from text attr]])
  (:require [net.cgrand.enlive-html :as html]))


(def guide-urls
  ["../../Downloads/pftv/purelyfunctional.tv_guide.html"
   "../../Downloads/pftv/purelyfunctional.tv_guide2.html"
   "../../Downloads/pftv/purelyfunctional.tv_guide3.html"])

(def guide-search-pages
  (map slurp guide-urls))

;; div.rc:nth-child(2) > div:nth-child(1) > a:nth-child(1) > h3:nth-child(2)

(def extract-url-title-from-cached-google-pages
  (flatten
    (map #(extract-from (parse %)
            "div.rc > div > a:nth-child(1)"
            [:headline :url]
            "a > h3" text
            "a" (attr :href))
      guide-search-pages)))

 extract-url-title-from-cached-google-pages

;; all pages
(spit "urls_purely_functional_guide.txt"
  (apply str 
    (for [kv extract-url-title-from-cached-google-pages
          :let [k (first  kv)
                v (second kv)]]
      (str "wget --mirror --convert-links --adjust-extension --page-requisites --no-parent --continue ")
      (str (second v) "\n"))))
