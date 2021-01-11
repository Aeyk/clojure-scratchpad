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

   ["/flute"
    {:name :router/flute
     :view views/flute}]

   ["/circle"
    {:name :router/circle
     :view views/circle}]

   ["/map"
    {:name :router/map
     :view views/map-container}]

   ["/todos"
    {:name :router/todos
     :view views/todos}]

   ["/tictactoe"
    {:name :router/tictactoe
     :view views/tictactoe}]

   ["/calculator"
    {:name :router/calculator
     :view views/calculator}]

   ["/item/:id"
    {:name ::item
     :view views/item-page
     :parameters {:path {:id int?}
                  :query {(ds/opt :foo) keyword?}}}]])

(defn current-page []
  [:div
   [views/art-one]
   [views/navigation]
   [:div
    (if @match
      (let [view (:view (:data @match))]
        [view @match]))]])

(defn init-router []
  (rfe/start!
   (rf/router routes {:data {:coercion rss/coercion}})
   (fn [m] (reset! match m))
   ;; set to false to enable HistoryAPI
   {:use-fragment true}))
