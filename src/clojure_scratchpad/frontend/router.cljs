(ns clojure-scratchpad.frontend.router
  (:require
   [clojure-scratchpad.frontend.views :as views]
   [reagent.core :as r]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   [reitit.coercion.spec :as rss]
   [spec-tools.data-spec :as ds]))

(defonce match (r/atom nil))

(def routes
  [["/"
    {:name :router/frontpage
     :view views/home-page}]

   ["/about"
    {:name :router/about
     :view views/about-page}]

   ["/portfolio"
    {:name :router/portfolio
     :view views/portfolio-page}]

   ["/login"
    {:name :router/login
     :view views/login-form}]

   ["/item/:id"
    {:name ::item
     :view views/item-page
     :parameters {:path {:id int?}
                  :query {(ds/opt :foo) keyword?}}}]])

(defn current-page []
  [:div
   [views/art-one]
   [views/navigation]
   (if @match
     (let [view (:view (:data @match))]
       [view @match]))])

(defn init-router []
  (rfe/start!
   (rf/router routes {:data {:coercion rss/coercion}})
   (fn [m] (reset! match m))
   ;; set to false to enable HistoryAPI
   {:use-fragment true}))
