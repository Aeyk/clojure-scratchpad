(ns clojure-scratchpad.frontend
  (:require
   [reagent.core :as r]
   [reagent.dom :as rd]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   [reitit.coercion.spec :as rss]
   [spec-tools.data-spec :as ds]))

;; (def url "https://lftzhklytmxclipatzas.supabase.co")
;; (def api-key (System/getenv "SUPABASE_API_CLIENT_KEY"))

(defonce todos (r/atom ["Clean house" "Walk dog" "See friend"]))


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
            {:href (rfe/href ::about)}
            "about"]
           [:a.navbar-item
            {:href "https://github.com/aeyk/clojure-scratchpad/"}
            "source"]]]]))))
;; --

(defn home-page []
  [:div 
   [:h1.title "Welcome"]
   [:p.subtitle (str  "Hello ")]])

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

(defn about-page []
  [:div
   #_[:input {:type :text
            :default-value (:name @state)
            :on-change (fn [e] (swap! name :name (.. e -target -value)))}]
   [:h2.title "About frontend"]
   [input-field "name: "]
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

(defonce match (r/atom nil))

(defn current-page []
  [:div
   [navigation]
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
