(ns clojure-scratchpad.clojure-workshop)

;; (+ 1 2)
;; => 3

;; (+ 1 2 3)
;; => 6

#_(/ 4 20)
;; => 1/5

;; (println "System.out.println")


;; => 11

;;*1
;; => 11


;; *1 *2 *3 show most recent expression values

;(inc *1)
;; => 12


;; (/ 1 1)
;; Exception: Divide by zero

;;(doc str)
;; C-c C-d C-d

;;(find-doc "str")
;; C-c C-d C-f

;;(apropos "str")
;; C-c C-d C-a


;;(find-doc #"(?i)modulus")
;; C-c C-d C-a (?i)modulus
;; note lack of quotes and hash

;;(apropos "case")




;; *e shows last thrown exception
*e 
 ;; => #error {
 ;; :cause "clojure.core$str cannot be cast to java.lang.String"
 ;; :via
 ;; [{:type java.lang.ClassCastException
 ;;   :message "clojure.core$str cannot be cast to java.lang.String"
 ;;   :at [clojure.core$re_pattern invokeStatic "core.clj" 4845]}]
 ;; :trace
 ;; [[clojure.core$re_pattern invokeStatic "core.clj" 4845]
 ;;  [... big ass stack trace omitted ... ]
 ;;  [clojure.lang.AFn run "AFn.java" 22]
 ;;  [java.lang.Thread run "Thread.java" 748]]}

;; So I can see expr-value in emacs buffer
;; (defn print
;;   "Custom print wrapper.

;;   Keywordify args and return them so I can see printed values in emacs buffer."
;;   [& args]
;;   (do
;;     (apply print-str args)
;;     (apply keywordify args)))

;; (defn println
;;   "Custom print wrapper.

;;   Keywordify args and return them so I can see printed values in emacs buffer."
;;   [& args]
;;   (do
;;     (apply print-str args)
;;     (newline)
;;     (apply keywordify args)))


(println "Well done" "Hello world")
   
(println "I am not afraid of parentheses")

(* (+ 1 2 3) (- 10 3))
;; => 42


;; Exit the repl
;; (System/exit 0)

;; if, when, do, def, let, fn, defn
(if true :true :false)
;; => :true

(if false :true :false)
;; => :false


(do
  (println "Hello world")
  :hello-world)

(defn keywordify
  "Turns string(s) into keyword(s).

  (keywordify \"Any type of String Keyword(s)\")
  ;; => :any-type-of-string-keywords.

  (keywordify \"Hello world\")
  ;; => :hello-world."
  ([str]
   (keyword
    (clojure.string/lower-case
     (clojure.string/replace
      (clojure.string/replace str " " "-")
      #"\W" "-"))))
  ([s & strs]
   [(keywordify s) (apply keywordify strs)]))

(keywordify "hello")
;; => :hello

(keywordify "hello" "world")
;; => [:hello :world]


(fn [x] (* x x))
;; => #function[user/eval8195/fn--8196]

((fn [x] (* x x)) 2)
;; => 4


(def square
  (fn [x]
    (* x x)))
;; => #'user/square
;; equivalent to
(defn square
   [x]
  (* x x))
;; => #'user/square


(def base-co2 382)
(def base-year 2006)

(defn co2-estimate
  "Given a `year` return a (conservative) estimate of carbon
  dioxide in parts per million in the atmosphere.

  Uses the formula:
  	co2-estimate = 382 + (years-since-2007 * 2)"
  [year] 
  (let [year-diff (- year base-year)]
    (+ (* 2 year-diff) base-co2)))

(co2-estimate 2020)
;; => 410

(co2-estimate 2050)
;; => 470

;; Unlike some languages only two false-y values: false and nil
;; !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
;; !! !! empty things are NOT false-y !! !!
;; !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
(not-any? false? [0 '() "" {} []])
;; => true

;; Returns first non-truthy item (aka first (or nil false))
(and nil 0 '() "" {} true [])

(clojure.string/reverse "olleh")
;; => "hello"

;; Equality comparisons are default
;; use `identical?` for identity comparisions
(= '(1 2 3) [1 2 3])
;; => true

(identical? '(1 2 3) [1 2 3])
;; => false

(identical? '(1 2 3) '(1 2 3))
;; => false

(def a-list '(1 2 3))
(def b-list '(1 2 3))
(= a-list b-list)
;; => true

;; Most literals won't have the same identity in mememory.
;; A named keyword is one of a kind.
(identical? :hello :hello)
;; => true


;; let x = 50;
;; if (x >= 1 && x <= 100 || x % 100 == 0) {
;;   console.log("Valid");
;; } else {
;;   console.log("Invalid");
;; }

(let [x 50]
  (if (or
       (>= 100 x 1)
       (= (mod x 100) 0))
    (println "Valid")
    (println "Invalid")))
;; => :valid

(defn meditate
  "Transform `s` based on the calmness-level."
  [s calmness-level]
  (println "Clojure Meditate v2.0")
  (cond
    (= calmness-level 10) (clojure.string/reverse s)
    (<= calmness-level 5)  (clojure.string/upper-case s)
    (<= 4 calmness-level 9)  (clojure.string/capitalize s)))

(meditate "hello world" 4) 


(defn encode [str]
  "Replace each char of `str` with the ASCII character
   code added to the number of characters in `str`

   (encode \"hello world\")
   ;; => (115 112 119 119 122 43 130 122 125 119 111)"
(let [length (count str)]
  (for [char (.getBytes str)]
    (+ length (int char)))))


(defn decode [arr]
  "Subtract length of `arr` from each item of arr, then 
   convert each integer into a character and join into a string.

   (decode '(115 112 119 119 122 43 130 122 125 119 111)
   ;; => \"hello world\""

  (let [length (count arr)]     
    (clojure.string/join (map (fn [x] (char (- x length))) arr))))

(encode "hello world")
;; => (115 112 119 119 122 43 130 122 125 119 111)

(decode (encode "hello world"))
;; => "hello world"

(Math/pow (int (first (char-array "a"))) 2)
;; => 9409.0

(defn encode-letter
  [x]
  (let [code (Math/pow (int (first (char-array x))) 2)]
    (str (int code))))

(encode-letter "a")

(defn encode
  [s]
  (clojure.string/replace s #"\w" encode-letter))

(encode "Hello world")
;; => "518410201116641166412321 1416112321129961166410000"

(defn encode-letter
  [s x]
  (let [code (Math/pow (+ x (int (first (char-array s)))) 2)]
    (str "#" (int code))))


(defn encode
  [s]
  (let [word-count (count (clojure.string/split s #""))]
    (clojure.string/join
     (clojure.string/replace s #"\w"
      (fn [s] (encode-letter s word-count))))))

(defn decode-letter
  [x y]
  (let [number (Integer/parseInt (subs x 1))
        char (char (- (Math/sqrt number) y))]
    (str char)))

(defn decode
  [s]
  (let [length (count (clojure.string/split s #""))]
        
    (clojure.string/replace s #"\#\d+"
      (fn [s] (decode-letter s length)))))

(defn decode [s]
  (let [number-of-words (count (clojure.string/split s #" "))]
    (clojure.string/replace s #"\#\d+"
      (fn [s] (decode-letter s number-of-words)))))

; (encode "Hello world")
;; => "#6889#12544#14161#14161#14884 #16900#14884#15625#14161#12321"

; (decode *1)

(def gemstone-db {
    :ruby {
      :name "Ruby"
      :stock 120
      :sales [1990 3644 6376 4918 7882 6747 7495 8573 5097 1712]
      :properties {
        :dispersion 0.018
        :hardness 9.0
        :refractive-index [1.77 1.78]
        :color "Red"
      }
    }
   :diamond {
      :name "Diamond"
      :stock 10
      :sales [8295 329 5960 6118 4189 3436 9833 8870 9700 7182 7061 1579]
      :properties {
        :dispersion 0.044
        :hardness 10
        :refractive-index [2.417 2.419]
        :color "Typically yellow, brown or gray to colorless"
      }
    }
    :moissanite {
      :name "Moissanite"
      :stock 45
      :sales [7761 3220]
      :properties {
        :dispersion 0.104
        :hardness 9.5
        :refractive-index [2.65 2.69]
        :color "Colorless, green, yellow"
      }
    }
  }
)

(defn durability [db gem]
  (get-in db [gem :properties :hardness]))


(defn change-color [db gem new-color]
  (assoc-in db [gem :properties :color]  new-color))


(defn sell [db gem clientid]
  (update-in
    (update-in db [gem :sales] conj clientid)
    [gem :stock] dec))

#_(sell gemstone-db :ruby 420)

(def test-db {
  :clients {
    :data [{:id 1 :name "Bob" :age 30} {:id 2 :name "Alice" :age 24}]
    :indexes {:id {1 0, 2 1}}
    },
  :fruits {
    :data [{:name "Lemon" :stock 10} {:name "Coconut" :stock 3}]
    :indexes {:name {"Lemon" 0, "Coconut" 1}}
  },
  :purchases {
    :data [{:id 1 :user-id 1 :item "Coconut"} {:id 1 :user-id 2 :item "Lemon"}]
    :indexes {:id {1 0, 2 1}}
              }})
(def db-schema
  {:table-1
   {:data [] :indexes {}}

   :table-2
   {:data [] :indexes {}}})

(def memory-db (atom {})) 
(defn read-db [] @memory-db)

(defn write-db [new-db]
  (reset! memory-db new-db ))

(defn create-table
  [table-name]
  (let [db (read-db)]
    (write-db
      (assoc db table-name 
        {:data []
         :indexes {}}))))
(read-db
  )
(create-table :hello)
(create-table :clients)
(create-table :fruits)

(defn drop-table
  [table-name]
  (let [db (read-db)]
    (write-db (dissoc db table-name))))


(read-db)
;; => {}
(create-table :hello)
;; => {:hello {:data [], :indexes {}}}
(drop-table :hello)
;; => {}

(defn insert-data [id]
  (let [data-insertion
        (update-in (read-db)
          [id :data]
          (fn [x] [x]))
        index-insertion []]
    data-insertion))


(defn get-index [id-key]
  (let [name id-key
        data :data]
    (let [indexes (get-in (read-db)
                    [id-key :indexes])]
      {(count (get data :record)) name})))

(defn insert-index
  [table]
  (assoc-in (read-db) [table :indexes :name] (get-index table))
)
;; (insert :fruits {:name "Pear" :stock 3} :name)
;; (insert :fruits {:name "Apricot" :stock 30} :name)
;; (insert :fruits {:name "Grapefruit" :stock 6} :name)

(defn insert
  [table record id-key]
  (let [db (read-db)
        new-db (update-in db [table :data] conj record)
        index (- (count (get-in new-db [table :data])) 1)]
    (write-db 
      (update-in new-db [table :indexes id-key] assoc (id-key record)
        index))))

(insert-data :hello)
(insert-index :hello)
(write-db (insert-data :hello))
(read-db)

(defn get-all-columns [table]
  (get-in (read-db) [table :data]))

(defn indexes [table]
  (get-in (read-db) [table :indexes]))

(write-db { :hello { :data [{:name :hello, :stock 62}],
                    :indexes {:name {0 :hello}}}})

(indexes :hello)

(insert-data :hello)
(assoc-in (read-db) [:hello :indexes :name] (insert-index :hello))
 


(defn insert
  [table]
  (reduce merge
    (map :hello [(insert-index table)
                 (insert-data table)])))

;; (write-db)
;; (insert :hello)

(write-db (insert :hello))

(defn
  count-index
  [table-name]
  (get-in  (read-db) [:indexes table-name]))


;; (= [1 2 [3 4 5] [1 2 3 4 5]]
;;   (let [[a b & c :as d] 1 2 [3 4 5]] [a b c d])
;;   )

      
;;     q
;; (write-db (insert :hello (test-insertion-record "hello") :name))
;; -                                       

(def fibo
  (fn fibo-item [n]
    (int
      (*
        (/ 1 (Math/sqrt 5))
        (-
          (Math/pow
            (/ (+ 1 (Math/sqrt 5)) 2) n)
          (Math/pow
            (/ (- 1 (Math/sqrt 5)) 2) n))))))


    
(fn fib [n]
  (take n
    ((fn rfib [a b] 
       (cons a
         (lazy-seq (rfib b (+ a b)))))
     1 1)))


(def booking
  [1425,
   "Bob Smith",
   "Allergic to unsalted peanuts only",
   [[48.9615, 2.4372], [37.742, -25.6976]],
   [[37.742, -25.6976], [48.9615, 2.4372]]])



(defn print-flight
  "Formats and prints flight data/"
  [flight]
  (let [[departure arrival] flight
        [lat-1 lon-1] departure
        [lat-2 lon-2] arrival
        ]
    (println (str "Flying from: Lat " lat-1 " Lon "
               lon-1 "\nFlying to: Lat " lat-2 " Lon " lon-2))))

(let [big-booking
      (conj booking
        [[37.742, -25.6976], [51.1537, 0.1821]]
        [[51.1537, 0.1821], [48.9615, 2.4372]])
       [_ customer-name _ & flights] big-booking]
  (for [flight flights]
    (print-flight flights)))

(print-flight [[48.9615, 2.4372], [37.742 -25.6976]])

(str booking)
;; => "[1425 \"Bob Smith\" \"Allergic to unsalted peanuts only\" [[48.9615 2.4372] [37.742 -25.6976]] [[37.742 -25.6976] [48.9615 2.4372]]]"
(defn print-booking
  ""
  [booking]
  (let [[id name _ & flights] booking]
    (println (str name " booked " (count flights) " flights."))
    (for [flight flights]
      (print-flight flight))))

(print-booking booking)

(def booking
  { :id 8773
   :customer-name "Alice Smith"
   :catering-notes "Vegetarian on Sundays"
   :flights
   [{:from {:lat 48.9615 :lon 2.4372 :name "Paris Le Bourget Airport"},
     :to {:lat 37.742 :lon -25.6976 :name "Ponta Delgada Airport"}},
    {:from {:lat 37.742 :lon -25.6976 :name "Ponta Delgada Airport"},
     :to {:lat 48.9615 :lon 2.4372 :name "Paris Le Bourget Airport"}}]})


(def mapjet-booking
  {:id 8773
   :customer-name "Alice Smith"
   :catering-notes "Vegetarian on Sundays"
   :flights
   [{:from {:lat 48.9615 :lon 2.4372 :name "Paris Le Bourget Airport"},
     :to {:lat 37.742 :lon -25.6976 :name "Ponta Delgada Airport"}},
    {:from {:lat 37.742 :lon -25.6976 :name "Ponta Delgada Airport"},
     :to {:lat 48.9615 :lon 2.4372 :name "Paris Le Bourget Airport"}}]})

(let [{:keys [customer-name flights]} mapjet-booking]
  (println (str customer-name " booked " (count flights) " flights.")))


(defn print-mapjet-flight [flight]
  (let [{:keys [to from]} flight
        {:keys [lat lon]} to
        lat-1 lat lon-1 lon]
    (let [{:keys [lat-2 lon-2]} from
          lat-2 lat lon-2 lon]
      (println (str "Flying from: Lat " lat-1 " Lon " lon-1 " Flying to: Lat " lat-2 " Lon " lon-2)))))

(defn print-mapjet-flight [flight]
  (let [{:keys [customer-name flights]} mapjet-booking] 
    (for [flight flights]
      (let [{:keys [from to]} flight
            {lat1 :lat lon1 :lon} from
            {lat2 :lat lon2 :lon} to]
        (println (str "Flying from: Lat " lat1 " Lon " lon1 " Flying to: Lat " lat2 " Lon " lon2))))))

;; Notice that we cannot use the shorter syntax for extracting coordinates 
;;	 because the names lat and lon would conflict; therefore, we used
;;	 the normal syntax, allowing us to explicitly declare a new binding
;;	 to symbols with different names.As with vectors, we can nest destructuring
;;	 expressions, and even combine the two techniques.



(print-mapjet-flight mapjet-booking)

;; Destructuring Function Parameters

(defn print-flight
  "Formats and prints flight data"
  [{{lat-1 :lat lon-1 :lon} :from
    {lat-2 :lat lon-2 :lon} :to}]
  (println (str "Flying from: Lat " lat-1 " Lon "
lon-1 "\nFlying to: Lat " lat-2 " Lon " lon-2)))

(def weapon-damage {:fists 10 :staff 35 :sword 100 :cast-iron-saucepan 150})

(def weapon-fn-map
  {:fists (fn health [health]
            (if (< health 100)
              (- health 10)
              health))
   :staff (partial + 30)
   :sword (fn [x] (- x 100))
   :cast-iron-saucepan
   #(- % 100 (rand-int 50)) 
   :sweet-potato identity})

;; 2
(defn strike
  ([target weapon]
    (let [points (weapon weapon-damage)]
      (if (= :gnomes (:camp target))
        (update target :health + points)
        (update target :health - points)))))


(def enemy {:name "Zulkaz", :health 250, :armor 0.8, :camp :trolls})
(strike enemy :sword)

(str "Concatenating " "is " "difficult " "to " "spell " "but " "easy " "to " "use!")
;; => "Concatenating is difficult to spell but easy to use!"


(defn welcome
  [player & friends]
  (println
    (str
      "Welcome to the Parenthmazes "
      player "!"))
  (when (seq friends)
    (println
      (str "Sending "
        (count friends)
        " friend request(s) to the following players: "
        (clojure.string/join ", " friends)))))

;;Note: The seq function can be used to get a sequence from a collection. 
;;	In the welcome function, we use the seq function to test whether
;;	a collection contains elements. That's because seq returns nil 
;;	when the collection passed as a parameter is empty.

;;	`(if (seq (coll))` is a commonly used pattern that you should use instead of
;; 	`(if (not (empty? coll)))``.


(defn welcome
  ([player] (print-str (str "Welcome to Parenthmazes (single-player mode), " player "!")))
  ([player & friends]
   (print-str
     (str
       "Welcome to Parenthmazes (multi-player mode), " player "!"))
   (print-str
     (str
       "Sending "
       (count friends)
       " friend request(s) to the following players: "
       (clojure.string/join ", " friends)))))

(welcome "Malik" "n00bhunter" "n-0-0-b-y")
;; => "Sending 2 friend request(s) to the following players: n00bhunter, n-0-0-b-y"


(welcome "Jon")
;; => "Welcome to Parenthmazes (single-player mode), Jon!"

(welcome "Jon" "Arya" "Tyrion" "Petyr")
;; => "Sending 3 friend request(s) to the following players: Arya, Tyrion, Petyr"


(def enemy {:name "Zulkaz", :health 250, :camp :trolls})

(strike enemy :sword)
;; => {:name "Zulkaz", :health 150, :camp :trolls}

(def ally {:name "Carla", :health 80, :camp :gnomes})
(strike ally :staff) ;;; notice ,health,
;; => {:name "Carla", :health 115, :camp :gnomes}

(def enemy {:name "Zulkaz", :health 250, :armor 0.8, :camp :trolls})

(strike enemy :cast-iron-saucepan)
;; => {:name "Zulkaz", :health 100, :camp :trolls}

(strike enemy :cast-iron-saucepan)
;; => {:name "Zulkaz", :health 220.0, :armor 0.8, :camp :trolls}

(defn strike
  ([target weapon]
    (let [points (weapon weapon-damage)]
      (if (= :gnomes (:camp target))
        (update target :health + points)
        (update target :health - points)))))

;;; Special key (in context of associate destructuring) `:or` 
;;; 	permits us to provide a default value for when a key 
;;; 	that we want to extract isn't found (instead of binding
;; 	to nil).

(strike enemy :cast-iron-saucepan)
;; => {:name "Zulkaz", :health 220.0, :armor 0.8, :camp :trolls}


(strike enemy :staff)
;; => {:name "Zulkaz", :health 243.0, :armor 0.8, :camp :trolls}


;; Higher Order Functions
(update {:item "Tomato" :fruit false} :fruit not)
;; => {:item "Tomato", :fruit true}

(apply + [1 2 3 4])
;; => 10

(defn random-fn
  []
  (first (shuffle [+ - * /])))

((random-fn) 4 5 5 5 6)
;; => 3000
;; => 25
;; => 2/375
;; => -17


;; Partial Functions
(def marketing-adder
  (partial + 0.99))

(marketing-adder 10)
;; => 10.99

(marketing-adder 0)
;; => 0.99

(def format-price (partial str "$"))

(format-price "11")
;; => "$11"

(format-price "10" "." "50")
;; => "$10.50"

;; Composing Functions
(def sample
  (comp first shuffle))

(sample (range 10))
;; => 6
;; => 0
;; => 9
;; => 0
;; => 7


((comp inc *) 2 2)
;; => 4

#_((comp * inc) 2 2)
;;=>   Unhandled clojure.lang.ArityException
;;       Wrong number of args (2) passed to: clojure.core/int



(def checkout
  (comp
    (partial str "Only ")
    format-price
    marketing-adder))

(checkout 10)
;; => "Only $10.99"

(checkout  9)
;; => "Only $9.99"

(checkout 10 20)
;; => "Only $30.990000000000002"
;; Oh the joys of floating point rounding errors.
;; https://stackoverflow.com/questions/10751638/clojure-rounding-to-decimal-places
(def checkout
  (comp
    (partial str "Only ")
    format-price
    (partial format "%.2f")
    marketing-adder))

(checkout 10 20)
;; => "Only $30.99"

;; (fn [x] x) vs #(%1)
;; reader-macro function literals ar so ugly... just to save 5 characters
;; what am I reading, clojure.pl?

;; :fists do nothing, unless youre already weakend
((weapon-fn-map :fists) 100)
;; => 100

((weapon-fn-map :fists) 50)
;; => 40

((weapon-fn-map :staff) 150)
;; => 180

((weapon-fn-map :sword) 150)
;; => 50


((weapon-fn-map :cast-iron-saucepan) 150) 
;; => 42
;; => 16
;; => 43
;; rand-int works

;;((weapon-fn-map :sweet-potato) 150) 
;; => 150
y
;; (defn strike
;;   ([target]
;;    (strike target :fists))
;;   ([target weapon]
;;    (let [weapon-fn (weapon-fn-map weapon) ]    
;;       (update target :health weapon-fn))))

  


;; (def enemy {:name "Arnold", :health 250})

;; (strike enemy :sweet-potato)
;; => {:name "Arnold", :health 250}

;; (strike enemy)
;; => {:name "Arnold", :health 250}


;; y(update enemy :health (comp (:sword weapon-fn-map) (:cast-iron-saucepan weapon-fn-map)))
;; => {:name "Arnold", :health 19}


;; (defn might-strike
;;   [target]
;;   (let [weapon-fn (apply comp (vals weapon-fn-map))]
;;     (update target :health weapon-fn)))

;;(might-strike enemy)
;; => {:name "Arnold", :health 44}


;; Multimethods :: `defmethod` & `defmulti`
;; 	`defmethod` creates the different implementations that will be chosen by
;; 	the dispatch function. The dispatch function receives the arguments
;; 	of the function call and returns a dispatch value. This dispatch
;; 	value is used to determine which function, defined with `defmethod`,
;;	to invoke.

;; (defmulti strike (fn [m] (get m :weapon)))
;; (defmulti strike :weapon)

;; (ns-unmap 'clojure-scratchpad.clojure-workshop 'strike)
;; (defmethod strike :sword
;;   [{{:keys [:health]} :target}]
;;   (- health 100))

;; (defmethod strike :cast-iron-saucepan
;;   [{{:keys [:health]} :target}]
;;   (- health 100 (rand-int 50)))

(strike {:weapon :sword :target {:health 200}})
;; => 82

(strike {:weapon :cast-iron-saucepan :target {:health 200}})
;; => 96

(strike {:weapon :spoon :target {:health 200}})
;; No method in multimethod 'strike' for dispatch value: :spoon

(defmethod strike :default [{{:keys [:health]} :target}] health)

(strike {:weapon :spoon :target {:health 200}})
;; => 200


(defmulti strike
  (fn
    [{{:keys [:health]} :target weapon :weapon}]
    (if (< health 50) :finisher weapon)))

(defmethod strike :finisher [_] 0)


(strike {:weapon :cast-iron-saucepan :target {:health 200}})

(strike {:weapon :spoon :target {:health 30}}) 
;; => 0 ;; :finisher works (kill u if hit with anything and health < 50)


;; Multimethods can do a few more things,such as dispatching on multiple values
;; 	(using a vector as the dispatch value) or dispatching on types and hierarchies.


;; https://clojuredocs.org/clojure.core/defmulti#example-542692cdc026201cdc326d5b
;; Implementing factorial using multimethods Note that factorial-like function 
;; is best implemented using `recur` which enables tail-call optimization to avoid 
;; a stack overflow error. This is a only a demonstration of clojure's multimethod

;; identity form returns the same value passed
(defmulti factorial identity)

(defmethod factorial 0 [_]  1)
(defmethod factorial :default [num] 
    (* num (factorial (dec num))))

(factorial 0) ; => 1
(factorial 1) ; => 1
(factorial 3) ; => 6
(factorial 7) ; => 5040
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; So multimethods are like clojures built in pattern matching (for small patterns?)


;; (defmulti g "Better function" {:arglists '([x])} (fn [x] :blah))
;; docstring + arglist + (?...) make (doc ...) work

;;; Moving north or south should change the y coordinate, and moving east
;;	and west should change the x coordinate.


((comp :facing :position) player-one)

(def player-one
  {:name "Malik"
   :health 200
   :position {:x 10 :y 10
              :facing :north}})

;; (ns-unmap 'clojure-scratchpad.clojure-workshop 'move)
(defmulti
  move
  "Takes `player` hash map and changes `:facing` to one of:
  [:north, :south, :east, :west]"
  (comp :facing :position))

(defmethod move :north
  [entity]
  (update-in entity [:position :y] inc))

(move player-two)
;; => {:name "Malik", :health 200, :position {:x 10, :y 11, :facing :north}}


(meta #'println)
;; #=> { :added "1.0",
;;       :ns #namespace[clojure.core],
;;       :name println,
;;       :file "clojure/core.clj",
;;       :static true, :column 1, :line 3733,
;;       :arglists ([& more]),
;;       :doc "Same as print followed by (newline)"}
