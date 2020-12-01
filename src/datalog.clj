(ns datalog
  (:require [datalevin.core :as dl]
            [datascript.core :as db]
            [clojure.core.logic :refer :all]
            [clojure.core.logic.fd :as fd]))

(db/create-conn {})
;; => #atom[#datascript/DB {:schema {}, :datoms []} 0x562a2fdd]


(def db
  (db/db
   (db/create-conn
    {:user/posts
     {:db/cardinality :db.cardinality/many
      :db/valueType :db.type/ref}
     :users/user
     {:db/valueType :db.type/ref}})))

(db/entity db 1)
