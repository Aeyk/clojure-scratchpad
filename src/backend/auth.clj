(ns backend.auth
  (:require
   [buddy.auth.backends :refer [jws]]
   [buddy.auth.backends.httpbasic :refer [http-basic-backend]]
   [buddy.hashers :as hashers]
   [environ.core :refer [env]]
   [backend.jwt :as jwt]
   [backend.db :as db]
   ))

(defn basic-auth
  [db request {:keys [username password]}]
  (let [user (db/get-user-by-username db username)]
    (if (and user (hashers/check password (:password user)))
      (-> user
          (dissoc :password)
          (assoc :token (jwt/create-token user)))
      false)))

(defn basic-auth-backend
  [db]
  (http-basic-backend {:authfn (partial basic-auth db)}))

(def token-backend
  (jws {:secret (env :auth-key) :options {:alg :hs512}}))
