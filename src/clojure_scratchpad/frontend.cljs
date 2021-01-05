(ns clojure-scratchpad.frontend
  (:require
   [reagent.core :as r]
   [reagent.dom :as rd]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   [reitit.coercion.spec :as rss]
   [clojure-scratchpad.frontend.counter :as counter]))

(defn app
  []
  [:p "HELLO"
   ])

(def routes
  [["/"
    {:name ::frontpage
     :view app}]

   #_["/about"
    {:name :about
     :view button}]

   #_["/item/:id"
    {:name ::item
     :view item-page
     :parameters {:path {:id int?}
                  :query {(rss/opt :foo) keyword?}}}]])

(def router
  (rf/router routes {:data {:coercion rss/coercion}}))

(defonce match (atom nil))

(defn on-navigate-fn
  [m]
  (js/console.log m)
  (reset! match m))

(defn init-router
  []
  (rfe/start!
   router
   on-navigate-fn
   {:use-fragment false}))

(defn init []
  (init-router)
  (rd/render
   (app)
   (js/document.getElementById "app")))
