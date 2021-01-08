(ns backend.server
  (:require [reitit.ring :as ring]
            [macchiato.fs :as fs]
            [macchiato.middleware.resource :refer [wrap-resource]]
            [taoensso.timbre :refer [info]]
            [macchiato.server :as http]))

(def api-url "https://lftzhklytmxclipatzas.supabase.co")
(def api-key (.-SUPABASE_API_CLIENT_KEY (.-env cljs.nodejs/process)))

(def routes
  [""
   {:middleware []}])

(def app
  (ring/ring-handler
   (ring/router
    routes)
   (ring/routes
    (ring/create-default-handler))))


(defn init []
  (defonce server
    (http/start
     {:handler
      (wrap-resource {:status 200} "public")
      :port 4000 :join? false
      :on-success #(info "macchiato-test started on localhost"  ":4000" )})))
