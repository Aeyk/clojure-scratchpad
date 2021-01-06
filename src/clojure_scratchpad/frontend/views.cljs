(ns clojure-scratchpad.frontend.views
  (:require
   ["react-leaflet" :as react-leaflet]
   [reagent.core :as r]
   [reagent.dom :as rd]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   [reitit.coercion.spec :as rss]
   [spec-tools.data-spec :as ds]))

(defonce todos (r/atom ["Clean house" "Walk dog" "See friend"]))
(def MapContainer (r/adapt-react-class react-leaflet/MapContainer))
(def TileLayer (r/adapt-react-class react-leaflet/TileLayer))

(defn navigation []
  (js/console.log )
  (make-dropdown-navigation
   "mksybr"
   [["about"
     (rfe/href :router/about)]
    ["portfolio"
     (rfe/href :router/portfolio)]
    ["login"
     (rfe/href :router/login)]])
  #_(let [state (r/atom {:navbar-hidden true})]
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

(defn make-dropdown-navigation [label dropdowns]
  (let [state (r/atom {:navbar-hidden true})]
    (fn []
      (let [is-hidden? (get @state :navbar-hidden)]
        [:nav.navbar {:role "navigation"
                      :aria-label "dropdown navigation"}
         [:div.navbar-item.has-dropdown.is-hoverable
          [:a.navbar-link
           {:on-click #(swap! state update :navbar-hidden not)}
           label]
          [:div.navbar-dropdown (if is-hidden?
                                  {:class "is-hidden"})
           (for [[label href] dropdowns]
             [:a.navbar-item {:href href
                              :key (gensym label)}
              label])
           #_#_[:a.navbar-item "B"]
           [:a.navbar-item "C"]]]]))))

(defn input
  [label id type]
  (let [state (atom "")]
    [:div.field
     [:div.control
      [:label.label label]
      [:input.input
       {:type type
        :id id
        :value @state
        :on-change (fn [e] (reset! state (.. e -target -value)))}]]]))


(defn test-component
  []
  (let [submit-handler #(.preventDefault %)]
    [:form
     {:on-submit submit-handler}
     [input"name:" "username" :text]
     [input "password:" "password" :password]
     [:input.button {:type :submit
                     :on-submit submit-handler}]]))

(defn home-page []
  [:div
   
   [:h1.title "Welcome"]
   [:p.subtitle (str  "Hello ")]
   [test-component]
   #_[MapContainer
      {:center [27.77 -82.63] :zoom 13
       :scrollWheelZoom false
       :onClick (fn [e] (js/console.log e))}
      [TileLayer
       {:attribution "&copy <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"
        :url "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}]]])

(defn input-field [label]
  (let [state (r/atom "")
        submit-handler
        (fn [e]
          (e.preventDefault)
          (swap! todos conj @state)
          (reset! state ""))]
    (fn []
      [:div
       (for [todo @todos]
         (let [sym (gensym todo)]
           [:div.card {:key sym
                       :id sym}
            [:div.card-content
             todo
             [:span.delete
              {:on-click
               (fn [e]
                 #_(js/console.log) 
                 (.toggle
                  (.-classList
                   (js/document.getElementById sym))
                  "is-complete"))}]]]))
       [:form.field.control
        {:on-submit
         submit-handler}
        [:label.label label]
        [:input.input
         {:value @state
          :type :text
          :on-change
          (fn [e]
            (reset! state (.. e -target -value)))}]
        [:button.button.is-primary.submit
         {:on-click
          submit-handler}]]])))

(defn portfolio-page []
  [:div
   [:div.card.is-half
    [:div.card-content
     [:p.subtitle "Twains uWu 🤪🤪"]
     [:div.media-content
      [:div.media-left
       [:figure.image.is-48x48
        [:img
         {:src
          "https://mksybr.com/portfolio/twains-demo.2.png"}]]]]]]])

(defn about-page []
  [:div
   #_[:input {:type :text
            :default-value (:name @state)
            :on-change (fn [e] (swap! name :name (.. e -target -value)))}]
   [:h2.title "About frontend"]
   #_[input-field "name: "]
   #_[:ul
    [:li [:a {:href "http://google.com"} "external link"]]
    [:li [:a {:href (rfe/href ::foobar)} "Missing route"]]
    [:li [:a {:href (rfe/href ::item)} "Missing route params"]]]
   #_[:div
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

(defn login-form
  []
  (let [submit-handler #(.preventDefault %)]
    [:div
    
     [:form
      {:on-submit submit-handler}
      [input "name:" "username" :text]
      [input "password:" "password" :password]
      [:input.button {:type :submit
                      :on-submit submit-handler}]]]))


(defn current-page []
  [:div
   [navigation]
   (if @router/match
     (let [view (:view (:data @router/match))]
       [view @router/match]))])
