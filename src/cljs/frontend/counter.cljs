(ns frontend.counter
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


;; (rum/defcs app  < rum/reactive
;;   [state _ _]
;;   [:div.app 
;;    {:on-click (fn [_] (swap! count inc))}
;;    (pr-str state)])


(rum/defcs toggle-button < (rum/local 0 ::key)
  [state _]
  (let [local-atom (::key state)
        toggle 
        (fn [x]
          (if (zero? x)
            1
            0))]
    [:div 
     [:button 
      {:on-click  (fn [_]
                    (swap! local-atom toggle))}
      @local-atom]
     [:button 
      {:on-click  (fn [e] (js/console.log e))}
      "BUTTON B"]]))

(rum/defc app
  []
  (toggle-button ""))


;; -------------------------
;; Initialize app
(defn init! []
  (rum/mount (toggle-button) (js/document.getElementById "app")))

