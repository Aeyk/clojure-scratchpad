(ns backend.db
  (:require
   [clojure.java.jdbc :as jdbc]
   [conman.core :as conman]
   [mount.core :refer [defstate] :as mount]
   [backend.config :refer [env]]
   [backend.db.utils :as db-utils]
   [backend.utils :as utils]))

(defstate ^:dynamic *db*
  :start (fn []
           (conman/connect! {:jdbc-url (env :database-url)}))
  :stop (conman/disconnect! *db*))

(conman/bind-connection *db* "sql/user.sql")

;; (defn marshall [{:keys [history] :as user}]
;;   (-> user
;;       (dissoc :history)
;;       (utils/->snake-case-keywords)
;;       (assoc :history history)))

;; (defn unmarshall [{:keys [history] :as user}]
;;   (when (not-empty user)
;;     (-> user
;;         (dissoc :history)
;;         (utils/->kebab-case-keywords)
;;         (assoc :history history))))
;; ;; User ;;

;; (defn get-users [db-spec]
;;   (->> (all-users db-spec)
;;        (map unmarshall)
;;        (map #(dissoc % :password))))

;; (defn get-user-by-id [db-spec params]
;;   (when (uuid? (utils/->uuid-safe (:id params)))
;;     (-> (get-user-by-id db-spec params)
;;         (unmarshall))))

;; (defn get-user-by-email [db-spec params]
;;   (-> (get-user-by-email db-spec params)
;;       (unmarshall)))

;; (defn get-user-by-username [db-spec params]
;;   (-> (get-user-by-username db-spec params)
;;       (unmarshall)))

;; (defn add-user! [db-spec user]
;;   (->> user
;;        (marshall)
;;        (insert-user! db-spec)))

;; (defn update-user-permissions! [db-spec user]
;;   (->> user
;;        (marshall)
;;        (update-user-permissions! db-spec)))

;; (defn update-user-status! [db-spec user]
;;   (->> user
;;        (marshall)
;;        (update-user-status! db-spec)))

;; (defn update-user-history! [db-spec user]
;;   (->> user
;;        (marshall)
;;        (update-user-history! db-spec)))

;; (defn update-user-data! [db-spec user]
;;   (->> user
;;        (marshall)
;;        (update-user-data! db-spec)))

;; (defn reset-user-password! [db-spec user]
;;   (->> user
;;        (marshall)
;;        (update-user-password! db-spec)))
