(ns backend.server
  (:require [reitit.ring :as ring]
            [reitit.coercion.spec]
            [org.httpkit.server :as http]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.util.response :refer (response)]
            [backend.middleware :as mw]
            [backend.utils :as utils]
            [backend.db :as db]
            [buddy.auth.backends :as backends]
            [clojure.spec.alpha :as s]
            [reitit.ring.middleware.multipart :as multipart]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [reitit.ring.middleware.parameters :as params]
            [reitit.ring.coercion :as coercion]
            [reitit.ring.middleware.exception :as exception]
            [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
            [taoensso.timbre :refer [info]]))

(defn exception-handler [status type]
  (fn [^Exception e _request]
    (-> {:status status
         :body   {:message (.getMessage e)
                  :type    type}}
        mw/add-cors-headers)))

(def exception-handlers
  {:username-conflict  (exception-handler 409 :username-conflict)
   :email-conflict     (exception-handler 409 :email-conflict)
   :no-permission      (exception-handler 403 :no-permission)
   :user-not-found     (exception-handler 404 :user-not-found)
   :email-not-found    (exception-handler 404 :email-not-found)
   :reminder-not-found (exception-handler 404 :reminder-not-found)})

(def exceptions-mw
  (exception/create-exception-middleware
   (merge
    exception/default-handlers
    exception-handlers
    ;;Prints all stack traces
    {::exception/wrap
     (fn [handler e request]
       (prn (ex-data e))
       (.printStackTrace e)
       (handler e request))}
    )))

(defn authfn [request auth-data]
  (let [{:keys [username password]} auth-data]
    username))

(def backend
  (backends/basic
   {:realm "MyApi"
    :authfn authfn}))

(defn register! [db emailer user]
  ;; (db/add-user! db/*db* user)
  #_(email/send-register-notification! emailer
                                     "me@pinellas.space"
                                     (dissoc user :password))
  {:status "OK"})

(defn- add-user-event!
  ([db user evt-name]
   (add-user-event! db user evt-name {}))
  ([db user evt-name data]
   (let [defaults {:event-date (utils/timestamp) :event evt-name}
         evt      (merge defaults data)
         user     (update-in user [:history :events] conj evt)]
     (db/update-user-history! db user))))

(defn login! [db user]
  (add-user-event! db user "login"))

(def routes
  (let [db db/*db*]
    [""
     ["/actions/login"
      {:post
       {:middleware [(mw/basic-auth db) mw/auth]
        :handler
        (fn [req]
          #_(login! db identity)
          {:status 200 :body (pr-str req)})}}]

     ["/actions/register"
      {:post
       {:middleware [(mw/basic-auth db)
                     mw/cors]
        :parameters {:query {:email string?}}
        :handler
        (fn [req]
          (let [user (-> req
                         :query-params
                         (dissoc :permissions))]
            #_(db/add-user! db user)
            {:status 201
             :body (str  (keys req))}))}}]

     ["/me"
      (fn [req]
        (if (:identity req)
          (response (:identity req))
          (response "Anonymous")))]

     {:data
      {:middleware [params/parameters-middleware
                    muuntaja/format-negotiate-middleware
                    muuntaja/format-response-middleware
                    exceptions-mw
                    muuntaja/format-request-middleware
                    coercion/coerce-response-middleware
                    coercion/coerce-request-middleware
                    multipart/multipart-middleware]}}]))

(def app
  (ring/ring-handler
   (ring/router
    routes)
   (ring/routes
    (ring/create-resource-handler {:path ""})
    (ring/create-default-handler))))


(defn init []
  (defonce server
    (http/run-server
     app
     {:port 3000})))

(defn -main []
  (init))
