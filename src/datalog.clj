(ns datalog
  (:require
   [datascript.core :as db]))


(def db
  (db/db
   (db/create-conn
    {:user/posts
     {:db/cardinality :db.cardinality/many
      :db/valueType :db.type/ref}
     :users/user
     {:db/valueType :db.type/ref}})))

(db/entity db 1)

;; 
(def schema-txn
  [{:db/doc "Task unique ID"
    :db/ident :task/id
    :db/valueType :db.type/uuid
    :db/unique :db.unique/identity
    :db/cardinality :db.cardinality/one}
   {:db/doc "Task name"
    :db/ident :task/name
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/doc "Task description"
    :db/ident :task/description
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/doc "Task state - not done/done"
    :db/ident :task/state
    :db/valueType :db.type/boolean
    :db/cardinality :db.cardinality/one}
   {:db/doc "Task last modified"
    :db/ident :task/modified
    :db/valueType :db.type/instant
    :db/cardinality :db.cardinality/one}
   {:db/doc "Task created"
    :db/ident :task/created
    :db/valueType :db.type/instant
    :db/cardinality :db.cardinality/one}])

(def db
  (db/transact
   (db/create-conn {}) 
   schema-txn))
