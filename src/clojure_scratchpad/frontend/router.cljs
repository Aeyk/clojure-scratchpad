(ns clojure-scratchpad.frontend.router
  (:require
   [clojure-scratchpad.frontend.views :as views]
   [reagent.core :as r]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   [reitit.coercion.spec :as rss]
   [spec-tools.data-spec :as ds]))

(defonce match (r/atom nil))

(defn current-page []
  [:div
   #_[views/navigation]
   (if @match
     (let [view (:view (:data @match))]
       [view @match]))])

(def routes
  [["/"
    {:name ::frontpage
     :view views/home-page}]

   ["/about"
    {:name ::about
     :view views/about-page}]

   ["/portfolio"
    {:name ::portfolio
     :view views/portfolio-page}]

   
   ["/item/:id"
    {:name ::item
     :view views/item-page
     :parameters {:path {:id int?}
                  :query {(ds/opt :foo) keyword?}}}]])

;; --
(defn navigation []
  (let [state (r/atom {:navbar-hidden true})]
    (fn []
      (let [is-hidden? (get @state :navbar-hidden)]
        [:nav.navbar {:role "navigation"
                      :aria-label "dropdown navigation"}
         [:div.navbar-start
          [:a.navbar-brand {:href (rfe/href ::frontpage)}
           [:img {:src "logo.svg"}]]]
         [:div.navbar-item.has-dropdown.is-hoverable
          [:a.navbar-link
           {:on-click
            #(swap! state update :navbar-hidden not)}]
          [:div.navbar-dropdown
           (if is-hidden?
             {:class "is-hidden"})
           [:a.navbar-item
            {:href (rfe/href ::frontpage)}
            "home"]
           [:a.navbar-item
            {:href (rfe/href ::about)}
            "blog"]
           [:a.navbar-item
            {:href (rfe/href ::portfolio)}
            "portfolio"]
           [:a.navbar-item
            {:href "https://github.com/aeyk/clojure-scratchpad/"}
            "source"]]]]))))
;; --


(defn init-router []
  (rfe/start!
   (rf/router routes {:data {:coercion rss/coercion}})
   (fn [m] (reset! match m))
   ;; set to false to enable HistoryAPI
   {:use-fragment true}))
