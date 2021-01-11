(ns clojure-scratchpad.frontend.views
  (:require
   ["react" :as react]
   ["leaflet" :as leaflet]
   ["react-leaflet" :as react-leaflet]
   [reagent.core :as r]
   [reagent.dom :as rd]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   [reitit.coercion.spec :as rss]
   [spec-tools.data-spec :as ds]
   [datascript.core :as d]
   [datascript.transit :as dt]
   [quil.core :as q]
   [quil.middleware :as m]
   [clojure-scratchpad.frontend.dom :as dom]
   [goog.dom :as gdom]))

;; * DataScript Utils
(defn remove-vals [f m]
  (reduce-kv (fn [m k v] (if (f v) m (assoc m k v))) (empty m) m))

(defn find-prev [xs pred]
  (last (take-while #(not (pred %)) xs)))

(defn find-next [xs pred]
  (fnext (drop-while #(not (pred %)) xs)))

(defn drop-tail [xs pred]
  (loop [acc []
         xs  xs]
    (let [x (first xs)]
      (cond
        (nil? x) acc
        (pred x) (conj acc x)
        :else  (recur (conj acc x) (next xs))))))

(defn trim-head [xs n]
  (vec (drop (- (count xs) n) xs)))

(defn index [xs]
  (map vector xs (range)))

(defn e-by-av [db a v]
  (-> (d/datoms db :avet a v) first :e))

(defn date->month [date]
  [(.getFullYear date)
   (inc (.getMonth date))])

(defn format-month [month year]
  (str (get ["January"
             "February"
             "March"
             "April"
             "May"
             "June"
             "July"
             "August"
             "September"
             "October"
             "November"
             "December"] (dec month))
       " " year))

(defn month-start [month year]
  (js/Date. year (dec month) 1))

(defn month-end [month year]
  (let [[month year] (if (< month 12)
                       [(inc month) year]
                       [1 (inc year)])]
    (-> (js/Date. year (dec month) 1)
        .getTime
        dec
        js/Date.
        )))


;; * Quil / Processing
(defn draw [{:keys [keys]}]
  (q/background 255)
  (q/fill 0 255 0)
  (q/text-size 32)
  #_(map #(q/text % 30 30) keys)
  (doseq [key keys]
    (q/text key 30 30))
  
  #_#_(doseq [{[x y] :pos [r g b] :color}  p-circles]
    (q/fill r g b)
    (q/ellipse x y x x))
  (let [{[x y] :pos [r g b] :color} (last circles)]
    (q/fill r g b)
    (q/ellipse x y x x)))

(defn click-handler [{:keys [width height] :as state}]
  #_(update state :p-circles conj
          {:pos   [(q/mouse-x)
                   (q/mouse-y)]
           :color [(mod (+ (q/mouse-x)
                           (q/mouse-x)) 255)
                   (mod (+ (q/mouse-x)
                           (q/mouse-y)) 255)
                   (mod (+ (q/mouse-y)
                           (q/mouse-y)) 255)]}))

(defn update-state [{:keys [width height] :as state}]
  (update state :keys conj "C" "Db" "D" "Eb" "E" "F" "Gb" "G" "Ab" "A" "Bb" "B" )
  #_(update state :circles conj
          {:pos   [(q/mouse-x)
                   (q/mouse-y)]
           :color [250 250 250]}))

(defn init [width height]
  (fn []
    {:width   width
     :height  height
     :keys ["C" "Db" "D" "Eb" "E" "F" "Gb" "G" "Ab" "A" "Bb" "B" ]}))

(defn circle-canvas []
  (r/create-class
   {:component-did-mount
    (fn [component]
      (let [node (rd/dom-node component)
            width  (.-innerWidth js/window)
            height (.-innerHeight js/window)]
        (q/sketch
         :host node
         :draw draw
         :setup (init width height)
         :update update-state
         :size [width height]
         :middleware [m/fun-mode]
         :mouse-clicked click-handler
         )))
    :render
    (fn [] [:div])}))

;; * Fingering Chart
(def blank-finger-chart
  [:svg {:height "750px"
         :fill "white"
         :stroke "black"
         :id "flute"}
   [:g
     {:id "layer1"}
     [:circle
      {:id "B",
       :cx "94.829094",
       :cy "40.962307",
       :r "10.883539"}]
     [:circle
      {:id "A",
       :cx "94.477173",
       :cy "73.504837",
       :r "10.883539"}]
     [:circle
      {:id "G",
       :cx "94.183945",
       :cy "104.83595",
       :r "10.883539"}]
     [:circle
      {:id "F",
       :cx "94.893829",
       :cy "153.36499",
       :r "10.883539"}]
     [:circle
      {:id "E",
       :cx "94.526833",
       :cy "185.84406",
       :r "10.883539"}]
     [:circle
      {:id "D",
       :cx "93.813431",
       :cy "217.48276",
       :r "10.883539"}]
     [:path
      {:d
       "m 95.542419,243.818 23.171811,-0.33015 c 0,0 4.54701,-1.14449 4.71627,-3.18596 0.16927,-2.04146 -1.20552,-9.49617 -3.83401,-10.00361 -2.6285,-0.50744 -4.71483,-2.33976 -10.9604,-1.51438 -6.24557,0.82538 -9.408875,8.33637 -9.408875,8.33637 0,0 -1.190483,1.13592 -1.666567,1.32352 -0.476088,0.1876 -4.660624,0.30379 -5.047949,0.85207 -0.38732,0.54827 -1.988802,0.46778 -1.534693,2.11862 0.454108,1.65083 4.564413,2.40352 4.564413,2.40352 z",
       :id "pinky-a"}]
     [:path
      {:d
       "m 110.69374,266.39496 -0.42821,-15.79194 c 0,0 2.3699,4.08972 0.006,0.005 -2.36391,-4.08435 -4.90212,-2.6099 -4.90212,-2.6099 0,0 -2.88077,0.33572 -3.08063,2.2494 -0.19985,1.91368 0.0309,14.75273 0.0309,14.75273 0,0 0.9252,3.16178 4.26278,3.2155 3.33757,0.0537 4.11125,-1.82116 4.11125,-1.82116 z",
       :id "pinky-c"}]
     [:path
      {:d
       "m 98.323555,265.92 -0.862999,-15.57301 c 0,0 -0.977296,-3.96104 -6.891851,-2.82796 -5.914543,1.13309 -6.210176,4.63709 -6.210176,4.63709 0,0 -2.037458,8.3203 4.96382,11.1794 7.001289,2.8591 9.001206,2.58448 9.001206,2.58448 z",
       :id "pinky-b"}]
     [:path
      {:d
       "m 64.551702,77.996348 c 3.2561,-6.75666 5.91151,-6.18036 8.50423,-6.0941 2.59272,0.0863 4.64517,5.41242 4.64517,5.41242 0,0 1.33907,10.10954 -4.17425,10.21103 0,0 -4.64027,1.00185 -2.97332,20.197512 1.66695,19.19565 -6.00183,-29.726862 -6.00183,-29.726862 z",
       :id "thumb-b"}]
     [:ellipse
      {:id "thumb-a",
       :cx "70.81485",
       :cy "59.120426",
       :rx "8.1963415",
       :ry "8.1971407"}]
     [:path
      {:d "M 73.097548,135.7084 H 117.36266 Z",
       :id "path1602"}]
     [:path
      {:d
       "m 123.71524,266.02274 -0.4282,-15.79194 c 0,0 2.3699,4.08972 0.006,0.005 -2.36392,-4.08435 -4.90213,-2.6099 -4.90213,-2.6099 0,0 -2.88077,0.33572 -3.08063,2.2494 -0.19985,1.91368 0.0309,14.75273 0.0309,14.75273 0,0 0.9252,3.16178 4.26278,3.2155 3.33758,0.0537 4.11126,-1.82116 4.11126,-1.82116 z",
       :id "pinky-d"}]
     [:path
      {
       :d "m 111.37902,114.35801 c -0.0402,-1.42381 -0.12048,-4.27171 1.6146,-5.70586 1.73509,-1.43416 5.28518,-1.45429 7.13774,0.19738 1.85257,1.65167 2.00778,4.97473 1.28267,8.99776 -0.7251,4.02302 -2.33041,8.74587 -8.0406,10.2031 -5.71019,1.45723 -15.5252,-0.35108 -16.187711,-1.75249 -0.662511,-1.40141 7.827411,-2.39575 11.725081,-4.08045 3.89766,-1.68469 3.20308,-4.05996 2.85573,-5.24777 -0.34735,-1.18782 -0.34735,-1.18786 -0.38751,-2.61167 z",
       :id "pinky-r"}]]])

;; * Circle Stuff
(defonce todos-list (r/atom ["Clean house" "Walk dog" "See friend"]))

(defn polar->cartesian [cx cy r angle-in-degrees]
  (let [angle-in-radians (* angle-in-degrees (/ Math/PI 180.0))]
    {:x (* (Math/cos angle-in-radians)
           (+ cx r))
     :y (* (Math/sin angle-in-radians)
           (+ cy  r))}))

(defn draw-circle [x y r & fill]
  [:circle {:cx x :cy y  :r r
            :fill (or fill "white")
            :stroke "black"}])

;;; https://stackoverflow.com/questions/28992878/svg-a-circle-of-circles
(defn draw-nth-circle-around-circle-of-r-radius [n r c]
  (let [satellite-count c
        º-of-seperation (/ 360 satellite-count)
        coords (polar->cartesian c c r (* n º-of-seperation))]
    (draw-circle (:x coords) (:y coords) 10)))
;; * Circle Art
(defn art-one []
  [:svg {:width "100%"
         :height "100%"
         :href "art-one"
         :id "art-one"
         #_#_:style #js {:display "none"}}
   (for [x (range 20)]
     [:g {:key (gensym)}
      (draw-circle (* x x x)
                   (* x x x)
                   (* x x x)
                   "#d1d1d1")
      (draw-circle (* x x x)
                     (* x x)
                     (* x x)
                     "#b1b1b1") 
      (draw-circle (* x x x)
                   (* 2 x)
                   (* 3 x)
                   "#717171")])])
;; * Leaflet Stuff
(defn location-component []
  (let [map
        (react-leaflet/useMapEffects
         {:dragend (fn [e]
                     (js/console.log (e.target.getCenter)
                                     (e.target.getBounds)))})]))

(defn map-container []
  (let [center (atom [27.77 -82.63])
        [lat lng] @center]
    [:div
     [:input.input
      {:type :number
       :default-value lat}]
     [:input.input
      {:type :number
       :default-value lng}]
     [:> react-leaflet/MapContainer
      {:center [lat lng]
       :zoom 13}
      [:> react-leaflet/TileLayer
       {:attribution "&copy <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"
        :url "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}]
      [:> react-leaflet/Marker {:position @center}
       [:> react-leaflet/Popup "Hello world!"]]
      [:location-component]]]))
;; * Navigation Stuff
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
       (rfe/href :router/login)]
      ["flute"
       (rfe/href :router/flute)]
      ["circle"
       (rfe/href :router/circle)]
      ["todos"
       (rfe/href :router/todos)]
      ["tictactoe"
       (rfe/href :router/tictactoe)]]))

;; * Inputs and Forms
(defn input
  [label id type state]
  [:div.field
   [:div.control
    [:label.label label]
    [:input.input
     {:type type
      :id id
      :value @state
      :on-change (fn [e] (reset! state (.. e -target -value)))}]]])

(defn input-field [label]
  (let [state (r/atom "")
        submit-handler
        (fn [e]
          (e.preventDefault)
          (swap! todos-list conj @state)
          (reset! state ""))]
    (fn []
      [:div
       (for [todo @todos-list]
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
;; * Pages
(defn home-page []
  [:div
   [:h1.title "Welcome"]
   [:p.subtitle (str  "Hello " )]])

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
;; * UI Helpers
(defn set-button-to-spinner [el]
  (.add (.-classList (js/document.querySelector el)) "is-loading"))

(defn valid-api-key? [key]
  (not (nil? key)))

(defn login-form
  ([]
   (let [email (r/atom "")
         password (r/atom "")
         submit-handler
         (fn [e]
           (e.preventDefault)
           (set-button-to-spinner "div > form > input.button")
           #_(login-handler email password))]
     [:div
      [:form
       {:on-submit submit-handler}
       [input "email:" "email" :text email]
       [input "password:" "password" :password password]
       [:input.button {:type :submit
                       :on-submit submit-handler}]]])))
;; * Flute and Music Stuff
(defn number->note-name [n]
  (let [n (mod n 12)]
    (case n
      0 :C
      1 :CsDb
      2 :D
      3 :DsEb
      4 :E
      5 :F
      6 :FsGb
      7 :G
      8 :GsAb
      9 :A
      10 :AsBb
      11 :B
      n)))


(def note-fingering
  {:C ["#B" "#pinky-a"]
   :CsDb ["#pinky-a"]
   :D ["#B" "#A" "#G" "#F" "#E" "#D" "#thumb-b"]
   :DsEb ["#B" "#A" "#G" "#F" "#E" "#D" "#thumb-b" "#pinky-a"]
   :E ["#B" "#A" "#G" "#F" "#E" "#thumb-b"  "#pinky-a"]
   :F ["#B" "#A" "#G" "#F" "#thumb-b"  "#pinky-a"]
   :FsGb ["#B" "#A" "#G" "#D" "#thumb-b"  "#pinky-a"]
   :G ["#B" "#A" "#G" "#thumb-b"  "#pinky-a"]
   :GsAb  ["#B" "#A" "#G" "#thumb-b" "#pinky-r"  "#pinky-a"]
   :A ["#B" "#A" "#thumb-b"  "#pinky-a"]
   :AsBb ["#B" "#thumb-a"  "#pinky-a"]
   :B ["#B" "#thumb-b"  "#pinky-a"]})

(defn make-fingering [pressed-buttons]
  (let [svg (js/document.querySelector "#flute")
        unpressed-buttons (.querySelectorAll svg "circle, path, ellipse")
        pressed-buttons (.querySelectorAll svg (clj->js pressed-buttons))]
    (.forEach unpressed-buttons
              #(.setAttribute % "fill" "white"))
    (.forEach pressed-buttons
              #(.setAttribute % "fill" "black"))))

(defonce current-note (r/atom "º"))

(defn chromatic-scale []
  [:div
   (for [note (range 0 12)]
     [:li.button.is-inline
      {:key (number->note-name note)
       :id (number->note-name note)
       :on-click (fn [e]
                   (reset!
                    current-note
                    (number->note-name note))
                   (make-fingering (get note-fingering (number->note-name note))))}
      (str (number->note-name note))])])

(defn flute
  []
  [:div
   [chromatic-scale]
   [:h1.title "Flute Chart"]
   [:h1.subtitle.note-name @current-note]
   blank-finger-chart])

(defn circle []
  (r/with-let [running? (r/atom true)]
    [:div
     [:h3.title "circles"]
     [:div
      [:button.button {:on-click
                       #(set! js/window.location (.toDataURL (js/document.querySelector "canvas#defaultCanvas0") "image/jpeg"))}
       "Save"]
      [:button.button.is-primary
       {:on-click #(swap! running? not)}
       (if @running? "Cancel" "Start")]
      (when @running?
        [circle-canvas])]]))

;; * TicTacToe
(def tictactoe-board (r/atom (vec (range 0 9))))
(def current-player (atom "X"))

;; TODO finish
(defn is-winner? []
  (let [board (partition 3 @tictactoe-board)]
    board))

(defn tictactoe
  []
  [:h1.title "TicTacToe"]
  [:div
   {:style
    {:display "grid"
     :font-size "6em"
     :min-height "17vh"
     :justify-items "center"
     :align-items "center"
     :grid-template-columns "1fr 1fr 1fr"}}
   (for [x @tictactoe-board #_(range 0 9)]
     [:div
      {:key x
       :id  x
       :on-click
       (fn [e]
         (let [id-num (-> e .-target .-id)]
           (swap! tictactoe-board assoc (int id-num) (gensym @current-player))
           (if (js/=== "X"  @current-player)
             (reset! current-player "O")
             (reset! current-player "X"))))
       :style {:width "100%"
                    :justify-self "center"
                    :align-self "center"
                    :padding "5% 12% 5% 12%"
               :border "1px solid black"}}
      (if (int? x)
        "_"
        (subs (str x) 0 1))])])
;; * Todos
(def schema {:todo/tags    {:db/cardinality :db.cardinality/many}
             :todo/project {:db/valueType :db.type/ref}
             :todo/done    {:db/index true}
             :todo/due     {:db/index true}})

(defonce conn (d/create-conn schema))

(def fixtures [
  #_[:db/add 0 :system/group :all]
  {:db/id -1
   :project/name "datascript"}
  {:db/id -2
   :project/name "nyc-webinar"}
  {:db/id -3
   :project/name "shopping"}
  {:todo/text "Displaying list of todos"
   :todo/tags ["listen" "query"]
   :todo/project -2
   :todo/done true
   :todo/due  #inst "2014-12-13"}
  {:todo/text "Persisting to localStorage"
   :todo/tags ["listen" "serialization" "transact"]
   :todo/project -2
   :todo/done true
   :todo/due  #inst "2014-12-13"}
  {:todo/text "Make task completable"
   :todo/tags ["transact" "funs"]
   :todo/project -2
   :todo/done false
   :todo/due  #inst "2014-12-13"}
  {:todo/text "Fix fn calls on emtpy rels"
   :todo/tags ["bug" "funs" "query"]
   :todo/project -1
   :todo/done false
   :todo/due  #inst "2015-01-01"}
  {:todo/text "Add db filtering"
   :todo/project -1
   :todo/done false
   :todo/due  #inst "2015-05-30"}
  {:todo/text "Soap"
   :todo/project -3
   :todo/done false
   :todo/due  #inst "2015-05-01"}
  {:todo/text "Cake"
   :todo/done false
   :todo/project -3}
  {:todo/text "Just a task" :todo/done false}
  {:todo/text "Another incomplete task" :todo/done false}])

(d/transact! conn fixtures)

(defn extract-todo []
  (when-let [text (dom/value (dom/q ".add-text"))]
    {:text    text
     :project (dom/value (dom/q ".add-project"))
     :due     (dom/date-value  (dom/q ".add-due"))
     :tags    (dom/array-value (dom/q ".add-tags"))}))

(defn clean-todo []
  (dom/set-value! (dom/q ".add-text") nil)
  (dom/set-value! (dom/q ".add-project") nil)
  (dom/set-value! (dom/q ".add-due") nil)
  (dom/set-value! (dom/q ".add-tags") nil))
(defn add-todo []
  (when-let [todo (extract-todo)]
    ;; This is slightly complicated logic where we need to identify
    ;; if a project with such name already exist. If yes, we need its
    ;; id to reference from entity, if not, we need to create it first
    ;; and then use its id to reference. We’re doing both in a single
    ;; transaction to avoid inconsistencies
    (let [project    (:project todo)
          project-id (when project (e-by-av @conn :project/name project))
          project-tx (when (and project (nil? project-id))
                       [[:db/add -1 :project/name project]])
          entity (->> {:todo/text (:text todo)
                       :todo/done false
                       :todo/project (when project (or project-id -1)) 
                       :todo/due  (:due todo)
                       :todo/tags (:tags todo)}
                      (remove-vals nil?))]
      (d/transact! conn (concat project-tx [entity])))
    (clean-todo)))

(defn add-view []
  [:form.add-view {:on-submit (fn [_] (add-todo) false)}
   [:input.add-text    {:type "text" :placeholder "New task"}]
   [:input.add-project {:type "text" :placeholder "Project"}]
   [:input.add-tags    {:type "text" :placeholder "Tags"}]
   [:input.add-due     {:type "text" :placeholder "Due date"}]
   [:input.add-submit  {:type "submit" :value "Add task"}]])



(defn todos []
  [:div
   [:h1.title "Todo List"]
   (for [entry (d/q
                '[:find ?text ?project
                  :where
                  [?e :todo/text ?text]
                  [?e :todo/project ?pid]
                  [?pid :project/name ?project]]
                @conn)]
     (do (js/console.log entry)
         [:p (str entry)]))
   (let [todo (r/atom "")
         submit-handler 
         (fn [e]
           (e.preventDefault)
           (js/console.log
            @todo)
           (d/transact! conn [{:db/add -1 :todo/text @todo}])
           (js/console.log @conn)
           (reset! todo ""))]
     [:form
      {:on-submit submit-handler}
      [input "todo-name:" "todo-name" :text todo]
      [:button.button
       "New Task"]])
   (let [group (r/atom "")]
     [:form
      {:on-submit
       (fn [e]
         (e.preventDefault)
         (js/console.log
          @group)
         (d/transact! conn [{:db/add -1 :project/name @group}])
         (reset! group ""))}
      [input "group-name:" "group-name" :text group]
      [:button.button
       "New Group"]])
   ])
