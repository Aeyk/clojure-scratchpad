(ns backend.db
  (:require
   [clojure.java.jdbc :as jdbc]
   [conman.core :as conman]
   [mount.core :refer [defstate] :as mount]
   [backend.config :refer [env]]
   [backend.db.user :as user]
   [backend.db.utils :as db-utils]
   [backend.utils :as utils]))


;; User ;;


(defn get-users [db-spec]
  (->> (user/all-users db-spec)
       (map user/unmarshall)
       (map #(dissoc % :password))))

(defn get-user-by-id [db-spec params]
  (when (uuid? (utils/->uuid-safe (:id params)))
    (-> (user/get-user-by-id db-spec params)
        (user/unmarshall))))

(defn get-user-by-email [db-spec params]
  (-> (user/get-user-by-email db-spec params)
      (user/unmarshall)))

(defn get-user-by-username [db-spec params]
  (-> (user/get-user-by-username db-spec params)
      (user/unmarshall)))

(defn add-user! [db-spec user]
  (->> user
       (user/marshall)
       (user/insert-user! db-spec)))

(defn update-user-permissions! [db-spec user]
  (->> user
       (user/marshall)
       (user/update-user-permissions! db-spec)))

(defn update-user-status! [db-spec user]
  (->> user
       (user/marshall)
       (user/update-user-status! db-spec)))

(defn update-user-history! [db-spec user]
  (->> user
       (user/marshall)
       (user/update-user-history! db-spec)))

(defn update-user-data! [db-spec user]
  (->> user
       (user/marshall)
       (user/update-user-data! db-spec)))

(defn reset-user-password! [db-spec user]
  (->> user
       (user/marshall)
       (user/update-user-password! db-spec)))
