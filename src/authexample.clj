(ns authexample
  (:require [compojure.route :as route]
            [compojure.core :refer :all]
            [compojure.response :refer [render]]

            [clojure.java.io :as io]

            [ring.util.response :refer [response redirect content-type]]
            [ring.middleware.session :refer [wrap-session]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.adapter.jetty :as jetty]
            
            [clojure.java.jdbc :as jdbc]

            [buddy.auth :refer [authenticated? throw-unauthorized]]
            [buddy.auth.backends.session :refer [session-backend]]
            [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]])
  (:gen-class))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Database stuff                                   ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def db
  {:classname   "org.sqlite.JDBC"
   :subprotocol "sqlite"
   :subname     "db/dev.db"})


(defn create-user [req]
   ;; req
  (jdbc/insert! db :users req)) 

(defn get-last-user []
  (jdbc/query db "SELECT * FROM    users WHERE ID = (SELECT MAX(ID) FROM users);"))


(defn get-users []
  (jdbc/query db "SELECT * FROM    users;"))


(defn get-users-password [n]
  (first  (jdbc/query db ["SELECT password FROM    users WHERE 1=1 AND username = ?;" n])))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Controllers                                      ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Home page controller (ring handler)
;; If incoming user is not authenticated it raises a
;; not authenticated exception, else it simply shows a
;; hello world message.

(defn home
  [request]
  (if-not (authenticated? request)
    (throw-unauthorized)
    (let [content (slurp (io/resource "index.html"))]
      (render content request))))

;; Login page controller
;; It returns a login page on get requests.

(defn login
  [request]
  (let [content (slurp (io/resource "login.html"))]
    (render content request)))

;; Logout handler
;; Responsible for clearing the session.

(defn logout
  [request]
  (-> (redirect "/login")
      (assoc :session {})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Authentication                                   ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def authdata
  "Global var that stores valid users with their
   respective passwords."
  {:admin "secret"
   :test "secret"})

;; Authentication Handler
;; Used to respond to POST requests to /login.
;;;;;; (:password (get-users-password "admin"))

(defn login-authenticate
  "Check request username and password against authdata
  username and passwords.

  On successful authentication, set appropriate user
  into the session and redirect to the value of
  (:next (:query-params request)). On failed
  authentication, renders the login page."
  [request]
  (let [username (get-in request [:form-params "username"])
        password (get-in request [:form-params "password"])
        session (:session request)
        found-password (:password (get-users-password password))]
    (if (and found-password (= found-password password))
      (let [next-url (get-in request [:query-params :next] "/")
            updated-session (assoc session :identity (keyword username))]
        (-> (redirect next-url)
            (assoc :session updated-session)))
      (let [content (slurp (io/resource "login.html"))]
        (render content request)))))


;; ;; Authentication Handler
;; ;; Used to respond to POST requests to /login.

;; (defn login-authenticate
;;   "Check request username and password against authdata
;;   username and passwords.

;;   On successful authentication, set appropriate user
;;   into the session and redirect to the value of
;;   (:next (:query-params request)). On failed
;;   authentication, renders the login page."
;;   [request]
;;   (let [username (get-in request [:form-params "username"])
;;         password (get-in request [:form-params "password"])
;;         session (:session request)
;;         found-password (get authdata (keyword username))]
;;     (if (and found-password (= found-password password))
;;       (let [next-url (get-in request [:query-params :next] "/")
;;             updated-session (assoc session :identity (keyword username))]
;;         (-> (redirect next-url)
;;             (assoc :session updated-session)))
;;       (let [content (slurp (io/resource "login.html"))]
;;         (render content request)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Routes and Middlewares                           ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; User defined application routes using compojure
;; routing library.
;;
;; Note: We do not use middleware for authorization,
;; all of the authorization system is decoupled from
;; main routes.

(defroutes app
  (GET "/" [] home)
  (GET "/login" [] login)
  (POST "/login" [] login-authenticate)
  (GET "/logout" [] logout))

;; User defined unauthorized handler
;;
;; This function is responsible for handling
;; unauthorized requests (when unauthorized exception
;; is raised by some handler)

(defn unauthorized-handler
  [request metadata]
  (cond
    ;; If request is authenticated, raise 403 instead
    ;; of 401 (because user is authenticated but permission
    ;; denied is raised).
    (authenticated? request)
    (-> (render (slurp (io/resource "error.html")) request)
        (assoc :status 403))
    ;; In other cases, redirect the user to login page.
    :else
    (let [current-url (:uri request)]
     (redirect (format "/login?next=%s" current-url)))))

;; Create an instance of auth backend.

(def auth-backend
  (session-backend {:unauthorized-handler unauthorized-handler}))

(defn -main
  [& args]
  (as-> app $
    (wrap-authorization $ auth-backend)
    (wrap-authentication $ auth-backend)
    (wrap-params $)
    (wrap-session $)
    (jetty/run-jetty $ {:port 3001})))

#_(-main)

;; (get-users-password "admin")



;; (let [u (get-users)]
;;   (interleave (map :username u)
;;     (map :password u)))


#_(create-user {:username "admin" :password "secret"})




