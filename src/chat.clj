(ns chat
  (:require [clojure.java.jdbc :as jdbc]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.reload :refer [wrap-reload]]
            [compojure.core :refer [defroutes GET]]
            [compojure.route :refer [not-found]]
            [ring.handler.dump :refer [handle-dump]])
  (:import [com.impossibl.postgres.jdbc PGDataSource]
           [com.impossibl.postgres.api.jdbc 
            PGNotificationListener]))

;; https://gist.githubusercontent.com/mikeball/ba04dd5479f51c00205f/raw/583f292cc2ba2528ffa0629d92de0fbe597d7cb7/core.clj

#_(def pg-db 
  (doto (PGDataSource.)
    (.setHost     "localhost") 
    (.setPort     5432)
    (.setDatabaseName "realtime-chat")
    (.setUser     "postgres")
    (.setPassword "Px36xnX2JkzjkLRXEQo7ki")))

(def pg-db {:dbtype "pgsql"
            :dbname "realtime-chat"
            :user "postgres"
            :password "Px36xnX2JkzjkLRXEQo7ki"})


#_(map #(ns-unmap 'chat %) (keys (ns-interns 'chat)))

(def listener
  (reify PGNotificationListener
    (^void notification [this ^int processId ^String channelName ^String payload]
     (println payload))))

(def connection
  (doto (jdbc/get-connection pg-db) #_(.getConnection pg-db)
        (.addNotificationListener listener)))

(defn send-message [msg]
  (jdbc/query pg-db ["SELECT pg_notify('messages', ?);" msg]))

(jdbc/prepare-statement 
  (jdbc/get-connection pg-db) 
  "LISTEN messages;")

;; TODO: clojure.async my pg-db stream
;; TODO: clojurescript websockets <-> postgresql LISTEN / NOTIFY;
;; TODO: sente / ? for websockets

