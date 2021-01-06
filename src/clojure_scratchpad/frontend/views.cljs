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

(defn map-container []
  (let [center (atom [27.77 -82.63])]
    #_(fn [])
    [:div
     [:input.input
      {:type :text
       :default-value @center}]
     [:> react-leaflet/MapContainer
      {:center @center
       :zoom 13
       :scrollWheelZoom false
       :on-change #(js/console.log %)
       :on-click #(js/console.log %)}
      [:> react-leaflet/TileLayer
       {:on-change #(js/console.log %)
        :on-click js/console.log
        :attribution "&copy <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"
        :url "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}]]]))

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

(defn navigation []
  (make-dropdown-navigation
   "mksybr"
   [["home"
     (rfe/href :router/frontpage)]
    ["about"
     (rfe/href :router/about)]
    ["portfolio"
     (rfe/href :router/portfolio)]
    ["login"
     (rfe/href :router/login)]]))

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

(defn home-page []
  [:div
   [:h1.title "Welcome"]
   [:p.subtitle (str  "Hello ")]
   [map-container]])

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
   [:h2.title "About This App"]
   [:p "This is a collection of hacks and demonstrations, learning projects, scratchpads, and experiments of a generative, or exploratory purpose. "]])

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
