(ns clojure-scratchpad.frontend
  (:require
   #_["@fingerprintjs/fingerprintjs" :as fingerprint]
   [clojure-scratchpad.frontend.views :as views]
   [clojure-scratchpad.frontend.router :as router]
   ["react-leaflet" :as react-leaflet]
   [reagent.core :as r]
   [reagent.dom :as rd]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   [reitit.coercion.spec :as rss]
   [spec-tools.data-spec :as ds]))

;; (def url "https://lftzhklytmxclipatzas.supabase.co")
;; (def api-key (System/getenv "SUPABASE_API_CLIENT_KEY"))

#_(defn init-fingerprint []
  (.then
   (fingerprint/load)
   (fn
     [d]
     (.then
      (.get d)
      (fn [r]
        (js/console.log r.visitorId))))))

(defn init []
  #_(init-fingerprint)
  (router/init-router)
  (rd/render [router/current-page] (.getElementById js/document "app")))
