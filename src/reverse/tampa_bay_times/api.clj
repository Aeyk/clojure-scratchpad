(ns clojure-scratchpad.reverse.tampa-bay-times.api
  (:require
   [clojure.edn :as edn]
   [cheshire.core :as json]
   [clojure.java.io :as io]
   [org.httpkit.client :as http]
   [datascript.core :as d]
   [clojure.spec.alpha :as s])
  (:import
   java.net.URL
   java.net.URLDecoder
   java.net.URLEncoder))

(def base-url "https://portal.cityspark.com/api/events/getevents2?request=")

(def encoded-string  "%7B%22searchKeywords%22%3Anull%2C%22venueKeywords%22%3Anull%2C%22search%22%3A%22%22%2C%22longitude%22%3A-82.45717760000002%2C%22latitude%22%3A27.95057499999999%2C%22distance%22%3A95%2C%22limit%22%3A25%2C%22categories%22%3A%5B%5D%2C%22skip%22%3A0%2C%22start%22%3A%222020-12-30T00%3A00%3A00.000Z%22%2C%22end%22%3Anull%2C%22sortby%22%3A%22start%22%2C%22sortdir%22%3A%22asc%22%2C%22onlySparked%22%3Afalse%2C%22oneSort%22%3Afalse%2C%22deals%22%3Afalse%2C%22isVirtual%22%3Afalse%2C%22ourTicks%22%3Afalse%2C%22ourTicksName%22%3A%22%22%2C%22hier%22%3A%5B5763%5D%2C%22possible%22%3Afalse%2C%22ppid%22%3A8705%2C%22inTZ%22%3A%22America%2FNew_York%22%2C%22blockedCategories%22%3A%5B%5D%2C%22blockedSourceIds%22%3Anull%2C%22blockedKeywords%22%3A%5B%5D%2C%22hoursOffset%22%3A0%2C%22venue%22%3Anull%2C%22exact%22%3Afalse%2C%22interest%22%3A0%2C%22eventPIds%22%3Anull%2C%22defaultCat%22%3Atrue%2C%22metric%22%3Afalse%2C%22handPicked%22%3Afalse%2C%22bhier%22%3A%5B2%2C5763%5D%2C%22labels%22%3A%5B%5D%2C%22fuzzy%22%3Afalse%2C%22ticketPartner%22%3A%221%22%7D")

(s/def ::address string?)
(s/def ::name string?)
(def phone-number-regex #"^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$")
(s/def ::phone (s/and string? #(re-matches phone-number-regex %)))
(s/def ::email string?)
(s/def ::org string?)
(s/def ::contact-table
  (s/keys :req []
          :opt [::name ::phone ::email ::org]))
(s/def ::venue string?)
(s/def ::free boolean?)
(s/def ::start-date inst?)
(s/def ::end-date inst?)
(s/def ::description string?)
(s/def ::event-url string?)

(s/def ::events
  vector?)

(s/def ::event
  (s/keys :req [::address ::contact-table]
          :opt [
                ::venue ::free ::start-date ::description ::event-url]))

(s/valid?
 ::event
 {::address ""
  ::contact-table {::name "hello"}})

(s/valid?
 ::events
 [::event
  {::address ""
   ::contact-table {::name "hello"}}])
{"events" ::events}

(map #(clojure.set/rename-keys % {"Address" ::address})
      (get  "events"))

(def json-string (URLDecoder/decode encoded-string "UTF-8"))

(map #(get % "start")
     (json/parse-string json-string))


(def all-events
  (slurp 
   (:body
    @(http/get 
      (str base-url
           (URLEncoder/encode
            (json/generate-string
             (json/parse-string json-string))))))))

(defn get-days-from [dates]
  #(.between java.time.temporal.ChronoUnit/DAYS 
             (java.time.Instant/now) %)
  dates)


;; Weird results if I remove StartDate
;; (def all-events
;;   (:body
;;    @(http/get 
;;      (str base-url
;;           (URLEncoder/encode
;;            (json/generate-string
;;             (dissoc (json/parse-string json-string) "start")))))))

(def all-events-structured-data
  (map clojure.walk/keywordize-keys 
       (json/parse-string
        all-events)))

(def future-events-only
  (filter
   #(not (> true (:DateStart %)))
   (get (into {} all-events-structured-data)
        "events")))

(def free-events-only
  (filter
   #(not (= true (:free %)))
   (get (into {} all-events-structured-data)
        "events")))

(filter #(> 0
            (.compareTo
             %
             (java.time.Instant/now))))

(pmap
 (comp #(java.time.Instant/parse
         %)
       :DateStart))

(map :DateStart (get (into {} all-events-structured-data)
                     "events"))


(def conn (d/create-conn {})

(= json-string
   (json/parse-string
    (URLDecoder/decode
     (json/generate-string
      (json/parse-string json-string))
     "UTF-8"
     "UTF-8")))



(defn prepare-object-for-api-call [js-obj]
  (replace {"\\+", "%20"
            "\\%21", "!"
            "\\%27", "'"
            "\\%28", "("
            "\\%29", ")"
            "\\%7E", "~"}
           json-string #_(URLEncoder/encode encoded-string "UTF-8")))

(defn make-api-string [js-obj]
  (str base-url (prepare-object-for-api-call js-obj)))

(def event-list (atom []))

(slurp  (get @(http/get (make-api-string json-string)) :body)
        )
