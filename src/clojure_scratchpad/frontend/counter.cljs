(ns clojure-scratchpad.frontend.counter
  (:require
   ;; [reagent.core :as r]
   ;; [reagent.dom :as d]
   [clojure-scratchpad.frontend.dom :as dom]
   [clojure-scratchpad.frontend.websocket :as ws]
   [rum.core :as rum]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   [reitit.coercion.spec :as rss]
   [spec-tools.data-spec :as ds]))

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
    [:label.label "Username"] [:input.input {:type :text}]
    [:label.label "Email"] [:input.input {:type :text}]
    [:label.label "Password"] [:input.input {:type :password}]
    [:label.label "Confirm Password"] [:input.input {:type :password}]
    [:button.button "Sign Up"]]])


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
    [:label.label "Comment"] [:input.input {:type :textarea}]
    [:button.button.is-primary
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


;; ;; -------------------------
;; ;; Initialize app
;; (defn init []
;;   (rum/mount (post-comment-form) (js/document.getElementById "app")))

