(ns browsing-history-db.core
  (:refer-clojure :exclude [pprint])
  (:require [clojure.java.jdbc :refer :all])
  (:require [cheshire.core :as json])
  (:gen-class))
;;; https://stackoverflow.com/questions/15715546/clojure-how-to-ignore-exceptions-that-may-be-thrown-from-an-expression

(defmacro swallow-exceptions [& body]
  `(try ~@body (catch Exception e#)))

(defn debug
  [coll]
  (do (map println coll)
      coll))

(def testdata
  { :url "http://example.com",
   :title "SQLite Example",
   :body "Example using SQLite with Clojure"
   })

(def moz-db
  {:classname   "org.sqlite.JDBC"
   :subprotocol "sqlite"
   :subname     "db/firefox-history.db"
   })

(def chrome-db
  {:classname   "org.sqlite.JDBC"
   :subprotocol "sqlite"
   :subname     "db/chrome-history.db"
   })

;; (defn create-db
;;   "create db and table"
;;   []
;;   (try (db-do-commands db
;;          (create-table-ddl :news
;;            [[:timestamp :datetime :default :current_timestamp ]
;;             [:url :text]
;;             [:title :text]
;;             [:body :text]]))
;;        (catch Exception e
;;          (println (.getMessage e)))))


(defn print-result-set
  "prints the result set in tabular form"
  [result-set]
  (doseq [row result-set]
    (println row)))


(defn moz-places-output
  "execute query and return lazy sequence"
  []
  (query moz-db ["select * from moz_places"]))

(def moz-places (moz-places-output))

(defn moz-history-visits-output
  "execute query and return lazy sequence"
  []
  (query moz-db ["select * from moz_historyvisits"]))

(defn chrome-visits-output
  "execute query and return lazy sequence"
  []
  (query chrome-db ["select * from visits"]))

(defn chrome-history-visit-sources
  "execute query and return lazy sequence"
  []
  (query chrome-db ["select * from visit_source"]))

(defn chrome-history-visit-sources []
  (query chrome-db (str "select datetime(last_visit_time/1000000-11644473600, \"unixepoch\") as last_visited, 
  url, 
  title, 
  visit_count 
FROM urls;")))

(def chrome-history (chrome-history-visit-sources))

(def *chrome-history-visit-sources* (chrome-history-visit-sources))
(sort-by :visit-count *chrome-history-visit-sources*)

(def *moz-places* (moz-places-output))
(def *moz-history-visits* (moz-history-visits-output))
;; (defn drop-leading-zero [s]
;;   (if (= \. (.charAt s 0))
;;     (drop 1 s)))


#_(zipmap (map :rev_host) (take 5 *moz-places*))  



;; (map clojure.string/reverse
;;   (map :rev_host (take-last 300 (sort-by  :frecency *moz-places*))))
  
  

(def *moz-freceny-sorted-hosts* (sort-by  :frecency *moz-places*))
(def *moz-vist-count-sorted-hosts* (sort-by  :visit_count *moz-places*))

;; (chrome-history-visit-sources)
;; (take 1 (chrome-visits-output))

(def google-history-memory-db
  (get (json/parse-stream (clojure.java.io/reader "db/google-history.json")) "Browser History"))

(def *google-history-urls*
  (into #{}
    (map
      (fn [x] (get x "url"))
      (get (json/parse-stream (clojure.java.io/reader "db/google-history.json")) "Browser History"))))

(def *first-google-history-url*
  (first (into #{} (map (fn [x] (get x "url")) (take 100000 *google-history-memory-db*)))))

(defn drop-http [url]
  (clojure.string/replace url #"^https?\:\/\/" ""))


(defn url->filesystem-name [url]
  (clojure.string/replace (drop-http url)  #"[/|.]" "_"))


(def url  (first *google-history-urls*))

#_(clojure.java.shell/sh "bash" "-c"
  (str "wget " url "-O" (url->filesystem-name url)
    " >"
     "html2text" "-o" (str url ".txt")))

(defn enclose-single-quote [what]
  (str (char \') what (char \')))

(spit "urls2wget.txt"
  (apply str
    (for [url *google-history-urls*]
      (str  (enclose-single-quote url) " \n" ))))

(spit "html2texts.txt"
  (apply str
    (for [url *google-history-urls*]
      (str "" (enclose-single-quote url) " \n" ))))



  ;;   "/usr/bin/html2text -o "
  ;;   (enclose-single-quote
  ;;     (str (url->filesystem-name url) ".txt")))
  ;; ")\n"))

  
(defn domain-name [url]
  (swallow-exceptions
    (.getHost 
      (.  (java.net.URI/create url) toURL))))


  ;;

(domain-name "https://docs.oracle.com/javase/7/docs/api/java/net/URI.html")
  
  

(def five
  (into {}
    
    *moz-freceny-sorted-hosts*))



(keys (into {}chrome-history))
(def unique-domain-names
  (map (fn [x] [(domain-name
                  (get x :url))
                (get x :visit_count)])
    chrome-history))

chrome-history
(reverse (sort (group-by second unique-domain-names)))
(map)

(spit "resources/chrome.dat"
  (apply str 
    (for [[x y]
          (map (fn [x] (first x))
            (map (fn [x] (second x))
              (reverse (sort (group-by second  unique-domain-names)))))]
      (str x " " y "\n"  ))))

(def popularity-contest
  (read-string (slurp "resources/browsing_history_db/chrome.dat")))

(spit "resources/browsing_history_db/chart-chrome.json"
  (str (json/generate-string
           popularity-contest {:pretty true})))

  (json/generate-string
    {:data 
     {:labels (map first popularity-contest),
      :datasets
      [{}:label "Website"
       :data (map second popularity-contest)
       :backgroundColor ["#ff00ff"]
       :borderWidth 1]}}
    {:pretty true})q

(spit "resources/browsing_history_db/chart-chrome.json"
  (json/generate-string
    {:data 
     {:labels (map first popularity-contest),
      :datasets
      [{:label "Website"
        :data (map second popularity-contest)
        :backgroundColor ["#ff00ff"]
        :borderWidth 1}]}}
    {:pretty true})
    )

  (zipmap
    (flatten 
      (for [x (partition 2 popularity-contest)]
        [(first x)]))
    (flatten 
      (for [x (partition 2 popularity-contest)]
        [(second x)]))
