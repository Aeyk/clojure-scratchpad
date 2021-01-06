(ns clojure-scratchpad.frontend
  (:require
   [reagent.core :as r]
   [reagent.dom :as rd]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   [reitit.coercion.spec :as rss]
   [spec-tools.data-spec :as ds]))

(def state (r/atom {:name ""}))
(def name-var (r/cursor state [:name]))

;; --
(defn navigation []
  (let [state (r/atom {:navbar-hidden true})]
    (fn []
      (let [is-hidden? (get @state :navbar-hidden)]
        [:nav.navbar {:role "navigation"
                      :aria-label "dropdown navigation"}
         [:div.navbar-item.has-dropdown.is-hoverable
          [:a.navbar-link
           {:on-click #(swap! state update :navbar-hidden not)}
           "A"]
          [:div.navbar-dropdown (if is-hidden?
                                  {:class "is-hidden"})
           [:a.navbar-item "B"]
           [:a.navbar-item "C"]]]]))))
;; --

(defn home-page []
  (let [name name-var]
    [:div 
     [:h2 "Welcome to frontend"]
     [:p (str  "Hello, " name)]]))

(defn about-page []
  [:div
   [:input {:type :text
            :default-value (:name @state)
            :on-change (fn [e] (swap! name :name (.. e -target -value)))}]
   [:h2 "About frontend"]
   [:ul
    [:li [:a {:href "http://google.com"} "external link"]]
    [:li [:a {:href (rfe/href ::foobar)} "Missing route"]]
    [:li [:a {:href (rfe/href ::item)} "Missing route params"]]]
   [:div
    {:content-editable true
     :suppressContentEditableWarning true}
    [:p "Link inside contentEditable element is ignored."]
    [:a {:href (rfe/href ::frontpage)} "Link"]]])

(defn item-page [match]
  (let [{:keys [path query]} (:parameters match)
        {:keys [id]} path]
    [:div
     [:h2 "Selected item " id]
     (if (:foo query)
       [:p "Optional foo query param: " (:foo query)])]))

(defonce match (r/atom nil))

(defn current-page []
  [:div
   [navigation]
   #_[:ul
    [:li [:a {:href (rfe/href ::frontpage)} "Frontpage"]]
    [:li [:a {:href (rfe/href ::about)} "About"]]
    [:li [:a {:href (rfe/href ::item {:id 1})} "Item 1"]]
      [:li [:a {:href (rfe/href ::item {:id 2} {:foo "bar"})} "Item 2"]]]
   
   (if @match
     (let [view (:view (:data @match))]
       [view @match]))])

(def routes
  [["/"
    {:name ::frontpage
     :view home-page}]

   ["/about"
    {:name ::about
     :view about-page}]

   ["/item/:id"
    {:name ::item
     :view item-page
     :parameters {:path {:id int?}
                  :query {(ds/opt :foo) keyword?}}}]])

(defn init []
  (rfe/start!
    (rf/router routes {:data {:coercion rss/coercion}})
    (fn [m] (reset! match m))
    ;; set to false to enable HistoryAPI
    {:use-fragment true})
  (rd/render [current-page] (.getElementById js/document "app")))
