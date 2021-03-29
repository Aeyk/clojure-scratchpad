(ns clojure-scratchpad.shiro.db.utils
  (:require
   
   [cheshire.core :as j]
   [clojure.java.jdbc :as jdbc])
  (:import [org.postgresql.util PGobject]))

(comment (<-json (->json {:kissa "koira"})))
(def <-json #(j/decode % true))
(def ->json j/encode)

(defn ->pgobject [m]
  (doto (PGobject.)
    ;; eventually we should properly determine the actual type
    (.setType "jsonb")
    (.setValue (->json m))))

(extend-protocol jdbc/ISQLValue
  clojure.lang.IPersistentMap
  (sql-value [m] (->pgobject m)))

(extend-protocol jdbc/IResultSetReadColumn
  org.postgresql.util.PGobject
  (result-set-read-column [pgobj metadata idx]
    (let [type  (.getType pgobj)
          value (.getValue pgobj)]
      (if (#{"jsonb" "json"} type)
        (<-json value)
        value))))
