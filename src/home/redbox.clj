(ns  home.redbox
  (:require
   [clojure.set :as set]
   [hiccup.core :as html]
   [garden.core :as css]
   [clojure.edn :as edn]
   [cheshire.core :as json]
   [net.cgrand.enlive-html :as select]))

(def redbox-releases
  (json/parse-string
   (slurp "https://www.redbox.com/rbweb/api/product/js/__titles7")
   true))

(def redbox-releases-names (into #{} (map :name redbox-releases)))

(defn library-url [q page]
  (str
   "https://pplc.ent.sirsi.net/client/en_US/clearwater/search/results?qf=FORMAT%09Format%09VIDEODISC%09Video+disc+%7C%7C+BLURAY%09Blu-ray&qf=LIBRARY%09Library%091%3ACMA%09Clearwater+-+Main+Library+%7C%7C+1%3ACNG%09Clearwater+-+North+Greenwood+Library&qu="
   q
   "&ic=true&isd=true&te=" (if (not (zero? page)) "&rw=" (* 12 page))))

(defn library-feed [q page]
  (str
   "https://pplc.ent.sirsi.net/client/rss/hitlist/clearwater/?qf=FORMAT%09Format%09VIDEODISC%09Video+disc+%7C%7C+BLURAY%09Blu-ray&qf=LIBRARY%09Library%091%3ACMA%09Clearwater+-+Main+Library+%7C%7C+1%3ACNG%09Clearwater+-+North+Greenwood+Library&qu="
   q
   "&ic=true&isd=true&dt=list" (if (not (zero? page)) "&rw=" (* 12 page))))

(defn url-encode
  [string]
  (apply str 
       (let [string 
             (java.net.URLEncoder/encode string "UTF-8")]
         (replace {"&amp;" "&"} string))))

(select/select
 (select/html-resource
  (java.net.URL.
   (library-url (url-encode "Ghostbusters (2016)"))))
 [:img.results_img])


(select/select
 (select/xml-resource
  (java.net.URL.
   (library-url (url-encode "Ghostbusters (2016)"))))
 [:content])

(defn image-urls [q]
  (mapcat
   #(select/attr-values % :src)
   (select/select
    (select/html-resource (java.net.URL.
                           (library-url (url-encode q) 0)))
    [:img])))

(def library-images-of-redbox-releases
  (mapcat (comp str image-urls) (into #{} (map :name redbox-releases))))

(defn isbn-image-lookup
  [isbn]
  (str "https://secure.syndetics.com/index.aspx?type=xw12&client=pinellas&upc=&oclc=&isbn=" (url-encode isbn) "/MC.GIF"))

(select/select
 (select/html-resource
  (java.net.URL.
   (library-url (url-encode "Ghostbusters (2016)") 0)))
 [:img])


(select/select
 (select/html-resource
  (java.net.URL.
   (library-url (url-encode (first redbox-releases-names))
                0))) 
 [:img])

(spit
 "redbox.0.html"
 (html/html
  (for [name (map url-encode (take 10 redbox-releases-names))
        :let [page (select/html-resource
                    (java.net.URL.
                     (library-url name 0)))]]
    [:div
     [:p name]
     (for [img-href (mapcat
                     #(select/attr-values % :src)
                     (select/select
                      page
                      [:img]))]
       [:img
        {:src img-href}])
     [:img
      {:src
       (str (isbn-image-lookup name))}]])))
