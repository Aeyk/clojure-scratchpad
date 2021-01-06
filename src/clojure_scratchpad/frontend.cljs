(ns clojure-scratchpad.frontend
  (:require
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

(defn init []
  (router/init-router)
  (rd/render [router/current-page] (.getElementById js/document "app")))
