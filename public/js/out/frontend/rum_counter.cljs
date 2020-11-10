(ns frontend.rum-counter
  (:require
   ;; [reagent.core :as r]
   ;; [reagent.dom :as d]
   [rum.core :as rum]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   [reitit.coercion.spec :as rss]
   [spec-tools.data-spec :as ds])
  (:import cljsjs.react))

(enable-console-print!)

(rum/defcs app < (rum/local 0 ::clicks)
  [state test]
  (let [count (::clicks state)]    
    [:div.app 
     {:on-click (fn [_] (swap! count inc))}
     (pr-str  @count)]))

;; -------------------------
;; Initialize app
(defn init! []
  (rum/mount (app) (js/document.getElementById "app")))

