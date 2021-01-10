(ns clojure-scratchpad.frontend.db
  (:require
   [clojure-scratchpad.frontend.dom :as dom]
   [datascript.core :as d]
   [datascript.transit :as dt]
   [clojure.string :as str] ))

#_(defmacro profile [k & body]
  `(let [k# ~k]
     (.time js/console k#)
     (let [res# (do ~@body)]
       (.timeEnd js/console k#)
       res#)))

(defn profile [s ex]
  (ex))

(enable-console-print!)

(def schema {:todo/tags    {:db/cardinality :db.cardinality/many}
             :todo/project {:db/valueType :db.type/ref}
             :todo/done    {:db/index true}
             :todo/due     {:db/index true}})

(defonce conn (d/create-conn schema))

(declare render persist)

(defn reset-conn! [db]
  (reset! conn db)
  (render db)
  (persist db))

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

(def fixtures [
  [:db/add 0 :system/group :all]
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



;; Entity with id=0 is used for storing auxilary view information
;; like filter value and selected group
(defn set-system-attrs! [& args]
  (d/transact! conn 
               (for [[attr value] (partition 2 args)]
                 (if value
                   [:db/add 0 attr value]
                   [:db.fn/retractAttribute 0 attr]))))

(defn system-attr
  ([db attr]
   (get (d/entity db 0) attr))
  ([db attr & attrs]
   (mapv #(system-attr db %) (concat [attr] attrs))))

;; History

(defonce history (atom []))
(def ^:const history-limit 10)

p
;; * Todos
;; Rules are used to implement OR semantic of a filter
;; ?term must match either :project/name OR :todo/tags
(def filter-rule
 '[[(match ?todo ?term)
    [?todo :todo/project ?p]
    [?p :project/name ?term]]
   [(match ?todo ?term)
    [?todo :todo/tags ?term]]])

;; terms are passed as a collection to query,
;; each term futher interpreted with OR semantic
(defn todos-by-filter [db terms]
  (d/q '[:find [?e ...]
         :in $ % [?term ...]
         :where [?e :todo/text]
         (match ?e ?term)]
       db filter-rule terms))

(defn filter-terms [db]
  (not-empty
    (str/split (system-attr db :system/filter) #"\s+")))

(defn filtered-db [db]
  (if-let [terms   (filter-terms db)]
    (let[whitelist (set (todos-by-filter db terms))
         pred      (fn [db datom]
                     (or (not= "todo" (namespace (:a datom)))
                         (contains? whitelist (:e datom))))]
      (d/filter db pred))
    db))

;; Groups
(defmulti todos-by-group (fn [db group item] group))

;; Datalog has no negative semantic (NOT IN), we emulate it
;; with get-else (get attribute with default value), and then
;; filtering by that attribute, keeping only todos that resulted
;; into default value
(defmethod todos-by-group :inbox [db _ _]
  (d/q '[:find [?todo ...]
         :where [?todo :todo/text]
                [(get-else $ ?todo :todo/project :none) ?project]
                [(get-else $ ?todo :todo/due :none) ?due]
                [(= ?project :none)]
                [(= ?due :none)]]
    db))

(defmethod todos-by-group :completed [db _ _]
  (d/q '[:find [?todo ...]
         :where [?todo :todo/done true]]
    db))

(defmethod todos-by-group :all [db _ _]
  (d/q '[:find  [?todo ...]
         :where [?todo :todo/text]]
    db))

(defmethod todos-by-group :project [db _ pid]
  (d/q '[:find [?todo ...]
         :in   $ ?pid
         :where [?todo :todo/project ?pid]]
       db pid))

;; Since todos do not store month directly, we pass in
;; month boundaries and then filter todos with <= predicate
(defmethod todos-by-group :month [db _ [year month]]
  (d/q '[:find [?todo ...]
         :in   $ ?from ?to
         :where [?todo :todo/due ?due]
         [(<= ?from ?due ?to)]]
       db (month-start month year) (month-end month year)))



;; This transaction function swaps the value of :todo/done attribute.
;; Transaction funs are handy in situations when to decide what to do
;; you need to analyse db first. They deliver atomicity and linearizeability
;; to such calculations
(defn toggle-todo-tx [db eid]
  (let [done? (:todo/done (d/entity db eid))]
    [[:db/add eid :todo/done (not done?)]]))

(defn toggle-todo [eid]
  (d/transact! conn [[:db.fn/call toggle-todo-tx eid]]))

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


;; re-render on every DB change
(d/listen! conn :render
           (fn [tx-report]
             (render (:db-after tx-report))))

;; logging of all transactions (prettified)
(d/listen! conn :log
           (fn [tx-report]
             (let [tx-id  (get-in tx-report [:tempids :db/current-tx])
                   datoms (:tx-data tx-report)
                   datom->str (fn [d] (str (if (:added d) "+" "−")
                                           "[" (:e d) " " (:a d) " " (pr-str (:v d)) "]"))]
               (println
                (str/join "\n" (concat [(str "tx " tx-id ":")] (map datom->str datoms)))))))



;; history

(d/listen! conn :history
  (fn [tx-report]
    (let [{:keys [db-before db-after]} tx-report]
      (when (and db-before db-after)
        (swap! history (fn [h]
          (-> h
            (drop-tail #(identical? % db-before))
            (conj db-after)
            (trim-head history-limit))))))))

;; transit serialization

(defn db->string [db]
  (profile "db serialization"
    (dt/write-transit-str db)))

(defn string->db [s]
  (profile "db deserialization"
    (dt/read-transit-str s)))

;; persisting DB between page reloads
(defn persist [db]
  (js/localStorage.setItem "datascript-todo/DB" (db->string db)))

(d/listen! conn :persistence
  (fn [tx-report] ;; FIXME do not notify with nil as db-report
                  ;; FIXME do not notify if tx-data is empty
    (when-let [db (:db-after tx-report)]
      (js/setTimeout #(persist db) 0))))

;; restoring once persisted DB on page load
(defn seed-db []
  (or
   (when-let [stored (js/localStorage.getItem "datascript-todo/DB")]
     (let [stored-db (string->db stored)]
       (when (= (:schema stored-db) schema) ;; check for code update
         (reset-conn! stored-db)
         (swap! history conj @conn)
         true)))
   (d/transact! conn fixtures)))

#_(js/localStorage.clear)
