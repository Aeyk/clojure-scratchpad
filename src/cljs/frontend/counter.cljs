(ns frontend.counter
  (:require
   ;; [reagent.core :as r]
   ;; [reagent.dom :as d]
   [frontend.dom :as dom]
   [frontend.websocket :as ws]
   [rum.core :as rum]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   [reitit.coercion.spec :as rss]
   [spec-tools.data-spec :as ds])
  (:import cljsjs.react))

(enable-console-print!)

(rum/defcs toggle-button < (rum/local 1 ::key)
  [state row]
  (let [local-atom (::key state)
        toggle 
        (fn [x]
          (if (zero? x)
            1
            0))]
    
    [:input 
     {:name row
      :type "radio"      
      :on-click  (fn [_]
                   (js/console.log local-atom)
                   (swap! local-atom toggle))}
     ]))

(rum/defcs button-row < {}
  []
  (let [x (gensym)]
    [:fieldset
     (for [n (range 12)]
       (toggle-button x))]))

(rum/defcs fretboard < {}
  []
  (for [n (range 6)]          
    [:li [:label n (button-row)]]))

(rum/defcs sign-up-form < {}
  []
  [:div.sign-up-form-wrapper 
   [:form.sign-up-form
    [:h2 "Sign Up"]
    [:label "Username"] [:input {:type :text}]
    [:label "Email"] [:input {:type :text}]
    [:label "Password"] [:input {:type :password}]
    [:label "Confirm Password"] [:input {:type :password}]
    [:button "Sign Up"]]])


(def comments (atom ["I am a comment"]))

(defn add-comment [m]
  (swap! comments conj m))

(rum/defcs comment-list < {} 
  []
  [:div.comment-list-wrapper
   [:ul
    (for [comment @comments]
      [:li (pr-str comment)])]])


(rum/defcs post-comment-form < 
  {:should-update 
   #(not=
      (:rum/args %1)
      (:rum/args %2))}
  []
  [:div.sign-up-form-wrapper  
   [:form.sign-up-form
    [:h2 "Post  Comment"]
    (comment-list comments) 
    [:label "Comment"] [:input {:type :textarea}]
    [:button
     {:on-click 
      (fn [e]
        (.preventDefault e)                  
        (js/console.log           
            (.-value 
              (dom/q 
                "form.sign-up-form>input[type=textarea]"))))}
     "Submit"]]])


(rum/defc app
  []
  [(sign-up-form)
   (post-comment-form)
   ])


;; -------------------------
;; Initialize app
(defn init! []
  (rum/mount (post-comment-form) (js/document.getElementById "app")))

