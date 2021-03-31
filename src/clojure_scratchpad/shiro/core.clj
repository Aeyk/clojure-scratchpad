(ns clojure-scratchpad.shiro.core
  (:require [hiccup.core :as hiccup]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.params :as params]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [muuntaja.core :as m]
            [reitit.ring.coercion :as coercion]
            [reitit.ring :as ring]
            [mount.core :refer [defstate] :as mount]
            [clojure-scratchpad.shiro.db :as db])
  (:import (org.apache.shiro.authc UsernamePasswordToken)
           (org.apache.shiro SecurityUtils)
           (org.apache.shiro.config IniSecurityManagerFactory)))           

(SecurityUtils/setSecurityManager
 (.getInstance (IniSecurityManagerFactory. "classpath:shiro.ini")))


(try (.login (SecurityUtils/getSubject)
             (UsernamePasswordToken. "admin" "secret"))
     (catch Exception e
       (.getCause e)))

(def http-handler
  (ring/ring-handler
   (ring/router
    [;; routes
     ["/v1/api"
      ["/user"
       ["/login"
        {:post (fn [request]
                {:status 200
                 :body
                 (let [username (get (:params request) "username")
                       password (get (:params request) "password")
                       current-user (SecurityUtils/getSubject)
                       token (UsernamePasswordToken. username
                                                     password)]                                      (try (.login current-user token)
                          (catch Exception e
                            (str (.printStackTrace e)))))})}]
       ["/register"
        {:post (fn [{{:strs [email username password]} :params :as req}]
                 {:status 200
                  :body
                  (db/create-user! {:email email
                                    :username username
                                    :password password
                                    :salt ""
                                    :permissions "user"
                                    :status "active"})
                  #_(let [current-user (SecurityUtils/getSubject)
                          token (UsernamePasswordToken. username password)]
                      (try (.login current-user token)
                           (catch Exception e
                             (str "Invalid username or password"))))})}]
       ["/hello"
        {:get
         (fn [{{:strs [name]} :query-params :as req}]
           {:status 200
            :body
            (let [current-user (SecurityUtils/getSubject)]
            (str "Hello, "
                 (if (nil? current-user) "stranger" current-user)))})}]]]]
    {:data {:muuntaja m/instance
            :middleware
            [params/wrap-params
             muuntaja/format-middleware
             coercion/coerce-exceptions-middleware
             coercion/coerce-request-middleware
             coercion/coerce-response-middleware]}})
   (ring/create-default-handler)))nse-middleware]}})
   (ring/create-default-handler)))

(jetty/run-jetty #'http-handler {:port 8000 :join? false ;; TODO whats :join? do
})


