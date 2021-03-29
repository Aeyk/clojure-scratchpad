(ns clojure-scratchpad.shiro.db
  (:require
   [next.jdbc :as jdbc]
   [mount.core :refer [defstate] :as mount]
   [clojure-scratchpad.shiro.db.utils :as db-utils]))

(mount/defstate ^:dynamic *db*
  :start (fn []
           (def connection-options {:dbtype "postgresql"
                                    :datasource-classname org.postgresql.ds.PGSimpleDataSource
                                    :jdbcUrl "jdbc:postgresql://localhost:5432/scratch?user=postgres&password=t5csvbVsTNFGUCLtXvUy3q"})
           (def database-connection (jdbc/get-datasource connection-options))
           {:datasource database-connection}))

(defn execute! [sql]
  (jdbc/execute! database-connection sql))


(execute! [(slurp "resources/create_shiro_tables.sql")])

(defn create-user! [{:keys [username email password salt]}]
  (execute! ["INSERT INTO auth_users(username, email, password, salt) VALUES (?, ?, ?, ?)" username email password salt]))

(defn delete-user! [username]
  (execute! ["DELETE FROM auth_users WHERE username = ? " username]))

(delete-user! "mksybr")

;; (create-user! {:username "mksybr" :email "mksybr@gmail.com" :password "Hellow" :salt "NO"})
  
