(ns purely-functional.colletions)


;; TIL
;; assoc is multi-vardic in form of:
;; (assoc coll [x & zs :as xs])
(assoc {:a 1 :b 2 :c 3 :d 4} :x 1 :y 2 :z 3)
;; => {:a 1, :b 2, :c 3, :d 4, :x 1, :y 2, :z 3}
;;
;;

;; clojure.core/conj
;;  [coll x]
;;  [coll x & xs]
;; Added in 1.0
;;   conj[oin]. Returns a new collection with the xs
;;     'added'. (conj nil item) returns (item).  The 'addition' may
;;     happen at different 'places' depending on the concrete type.
;;
;; clojure.core/update
;;  [m k f]
;;  [m k f x]
;;  [m k f x y]
;;  [m k f x y z]
;;  [m k f x y z & more]
;; Added in 1.7
;;   'Updates' a value in an associative structure, where k is a
;;   key and f is a function that will take the old value
;;   and any supplied args and return the new value, and returns a new
;;   structure.  If the key does not exist, nil is passed as the old value.
;; 
;; clojure.core/into
;;  []
;;  [to]
;;  [to from]
;;  [to xform from]
;; Added in 1.0
;;   Returns a new coll consisting of to-coll with all of the items of
;;   from-coll conjoined. A transducer may be supplied.
;;
;; clojure.core/assoc
;;  [map key val]
;;  [map key val & kvs]
;; Added in 1.0
;;   assoc[iate]. When applied to a map, returns a new map of the
;;     same (hashed/sorted) type, that contains the mapping of key(s) to
;;     val(s). When applied to a vector, returns a new vector that
;;     contains val at index. Note - index must be <= (count vector).



(def numbers (range 10))

(reduce
  (fn [i n]
    (update i
      (if (even? n) :even :odd)
      (fnil conj []) n))
  {} numbers)
;; => {:even [0 2 4 6 8], :odd [1 3 5 7 9]}

;; got to remeber that update ... fnil pattern bretty cool

;; dispatch table (why?)

;;from
(defn prepare [i]
  (case i
    :a :do-a
    :b :do-b
    :c :do-c))

;;to 
(def prep-routines [i]
  {:a :do-a
   :b :do-b
   :c :do-c})

(defn prepare [i]
  (let [f (get prep-routines i)]
    (f)))


(def ops
  {:post :create
   :get :read
   :put :update
   :delete :delete})

(defn crud->rest [crud]
  (get ops crud :get))

(crud->rest :posts)


(#{nil} nil)
;; => nil
(contains? #{nil} nil)
;; => true

;; I'm not sure I like set-with-nil
(import 'clojure.lang.PersistentQueue)
(supers (class #{}))
(conj! (transient #{}) 1)
;; => #object[clojure.lang.PersistentHashSet$TransientHashSet 0x20477113 "clojure.lang.PersistentHashSet$TransientHashSet@20477113"]
