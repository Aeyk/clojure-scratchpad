(ns backend.db.user
  (:require
   [mount.core :refer [defstate] :as mount]
   [conman.core :as conman]
   [backend.config :refer [env]]
   [backend.db.utils :as utils]))

(defn marshall [{:keys [history] :as user}]
  (-> user
      (dissoc :history)
      (utils/->snake-case-keywords)
      (assoc :history history)))

(defn unmarshall [{:keys [history] :as user}]
  (when (not-empty user)
    (-> user
        (dissoc :history)
        (utils/->kebab-case-keywords)
        (assoc :history history))))

(defstate ^:dynamic *db*
  :start (conman/connect! {:jdbc-url (env :database-url)})
  :stop (conman/disconnect! *db*))

(conman/bind-connection *db* "sql/user.sql")

#_(hugsql/def-db-fns "sql/user.sql")
