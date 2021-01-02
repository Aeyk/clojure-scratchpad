(ns datalog-superheros.core
  (:require [datomic.dev-local :as dl]
            [datomic.client.api :as d]
            [mount.core :as mount]
            [clojure.data.csv :as csv]
            [clojure.edn :as edn]
            [clojure.string :as str])
  (:gen-class))

(def food-inspections-csv-file
  "resources/food_inspections.csv")

(def food-inspection-data
  (csv/read-csv
   (slurp food-inspections-csv-file)))

(defn csv->hash-map [csv]
  (lazy-seq
   (let [keys (vec
               (map
                (comp keyword str/lower-case
                      #(str/replace % #"\s" "-")
                      #(str/replace % #"#" "no"))
                (first food-inspection-data)))]
     (loop [rest-vals (rest food-inspection-data)
            acc []]
       (if (empty? rest-vals)
         acc
         (recur (rest rest-vals)
                (conj acc (apply
                           hash-map (interleave keys (first rest-vals))))))))))

(def food-inspection-data* (csv->hash-map food-inspection-data))

(def schema
  [{:db/ident      :dhs/inspection-id
    :db/cardinality :db.cardinality/one
    :db/valueType :db.type/string
    :db/unique :db.unique/identity }
   {:db/ident      :dhs/dba-name
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident     :dhs/aka-name
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident     :dhs/license-no
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident     :dhs/facility-type
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident     :dhs/risk
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident     :dhs/address
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident     :dhs/city
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident     :dhs/state
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident     :dhs/zip
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident     :dhs/inspection-date
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident     :dhs/inspection-type
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident     :dhs/results
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident     :dhs/violations
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident     :dhs/x-coordinate
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident     :dhs/y-coordinate
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident     :dhs/latitude
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident     :dhs/longitude
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident     :dhs/location
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}])

(defn convert-row [row]
  (let [db-keys
        (map
         (comp keyword str/lower-case
               #(str/replace % #"\s" "-")
               #(str/replace % #"#" "no"))
         (first food-inspection-data))]
    (interleave
     (for [db-key db-keys]
       #_(if (str/includes? db-key "inspection-id")
         (keyword "db" "id"))
       (keyword "dhs" (name db-key)))
     row)))

(def datomic-ready-edn
  (hash-map
   (map
    (comp #(apply hash-map %) vec convert-row)
    (rest food-inspection-data))))

(def inspection-ids (map :dhs/inspection-id datomic-ready-edn))

(mount/defstate *datomic*
  :start
  (fn [conn]
    (def *db-name* "datalog-superheros")
    (def client
      (d/client
       {:server-type :dev-local
        :system "datomic-samples"}))
    (d/delete-database client {:db-name *db-name*})
    (d/create-database client {:db-name *db-name*})
    (def conn (d/connect client {:db-name *db-name*}))
    (def *datomic-db* ^dynamic (d/db conn))
    *datomic-db*)
  :stop
  (fn [conn]
    (.release conn)))

(mount/defstate seed-datomic-database
  :start (fn [conn]
           (d/transact conn {:tx-data schema})
           (d/transact conn datomic-ready-edn))
  :stop (fn [conn]))


(d/q '[:find ?e
       :where
       [?e :dhs/dba-name _]]
     *datomic-db*)

(d/q '[:find ?e ?dba
       :where
       [?e :dhs/inspection-id  _]
       [?e :dhs/dba-name ?dba]]
     *datomic-db*)


(.parse (java.text.SimpleDateFormat. "MM/dd/yyyy")  "07/02/2012")

(sort-by ;; sort by date
 (comp #(.format (java.text.SimpleDateFormat. "MM/dd/yyyy")
                 (.parse (java.text.SimpleDateFormat. "MM/dd/yyyy") %))
       last)
         (d/q '[:find ?dba ?location #_?results ?date
                     :where
                     [?e :dhs/risk "Risk 1 (High)"]
                     [?e :dhs/location ?location]
                     [?e :dhs/inspection-date ?date]
                     [?e :dhs/results "Pass"]
                     [?e :dhs/dba-name ?dba]]
                   *datomic-db*))
