(ns clojure-scratchpad.the-joy-of-clojure.nil)

;; `rest` and `seq` are similar but `seq` will only ever return
;;	a sequence, empty or not. `rest` will give you the billion 
;;	dollar mistake: NullPointerException, or really just a `nil` 
;;	in the flesh.

(defn print-seq [s]
  (when (seq s) ;; so-called `nil-pun`
    (prn (first s))
    (recur (rest s))))

(nil? (seq []))
;; => true

(nil? [])
;; => false

(true? (seq []))
;; => false

(false? (seq []))
;; => false


;; Destructuring an Array
(def guys-whole-name ["Guy" "Lewis" "Steele"])

(defn print-name-normal
  [n]
  (let [[f m l] n]
    (str f ", " l " " m)))

(print-name-normal guys-whole-name)
;; => "Guy, Steele Lewis"

;; Destructuring a Range, and the Rest
(let [[a b c & rst] (range 1 11)]
  (str "[ a b c ] are: [ " a b c " ]" (newline)
    "[ rst ] is : [ " rst " ]"))
;; => "[ a b c ] are: [ 123 ]
;;     [ rst ] is : [ (4 5 6 7 8 9 10) ]


;; Destructuring under One Name :as
(let [[a b c & rst :as coll] (range 1 11)]
  (str "[ a b c ] are: [ " a b c " ]" (newline)
    "[ rst ] is : [ " rst " ]" (newline)
    "coll is: [ "coll " ]"))
;; => [ a b c ] are: [ 123 ]
;;    [ rst ] is : [ (4 5 6 7 8 9 10) ]
;;    coll is: [ (1 2 3 4 5 6 7 8 9 10) ]


;; Destucturing a Map
(def guys-name-map
  {:f-name "Guy" :m-name "Lewis" :l-name "Steele"})

(let [{f :f-name
       m :m-name
       l :l-name} guys-name-map]
  (str f ", " l " " m))
;; => "Guy, Steele Lewis"
;; ;; Repeatitve... yeah.

;; Named Function Parameters
;; For a well designed map, you can just use the existing key names!!
;; We can use named keyword map destructuring as named keyword paremeters.

(defn whole-name [& args]
  (let [{:keys [f-name m-name l-name]} args]
    (str l-name ", " f-name " " m-name)))

(whole-name :f-name "Guy" :m-name "Lewis" :l-name "Steele")
;; => "Steele, Guy Lewis"
;; #+begin_quote The Joy Of Clojure 3.3.5
;; Any time you find that you’re calling `nth` on the same collection
;; 	 a few times, or looking up constants in a `map`, or using
;; 	 `first` or `next`, consider using destructuring instead.
;; #+end_quote
;;


;; Associative Destructuring
(range 5)
;; => (0 1 2 3 4)


(for [x (range 2)
      y (range 2)]
  [x y])
;; => ([0 0] [0 1] [1 0] [1 1])


(for [x (range 2)
      y (range 2)]
  (bit-xor x y))
;; => (0 1 1 0)




(for [x (range 2)
      y (range 2)]
  [x y (bit-xor x y)])
;; => ([0 0 0] [0 1 1] [1 0 1] [1 1 0])


(defn xors [max-x max-y]
  (for [x (range max-x)
        y (range max-y)]
    [x y (bit-xor x y)]))


(def frame (java.awt.Frame.))

(for [meth (.getMethods java.awt.Frame)
        :let [name (.getName meth)]
        :when (re-find #"Vis" name)]
  name)
;; Hey, thats a handy thing to know!

(defn search-method-in-class
    [klass meth-name]  
    (for [meth (.getMethods klass)
          :let [name (.getName meth)]
          :when (re-find meth-name name)]
      name))
;; Roll over
(defn xors-byte [max-x max-y]
  (for [x (range max-x)
        y (range max-y)]
    [x y (mod (bit-xor x y) 256)]))

(search-method-in-class java.awt.Frame #"Vis")
;; => ("setVisible" "isVisible")
;; Anyway, back to frame.

;;(.setVisible frame true)
;;(.setSize frame (java.awt.Dimension. 200 200))
;; Kind of pointless on i3 -- tiling window manager.
#_(do (def gfx (.getGraphics frame))
    (.fillRect gfx 100 100 50 75)
    (.setColor gfx (java.awt.Color. 255 128 0))
    (.fillRect gfx 100 100 50 75))

#_(doseq [[x y xor] (xors 255 255)]
  (.setColor gfx (java.awt.Color. xor xor xor))
  (.fillRect gfx x y 1 1))
;; WOW! Instantly drawing algorithms, thats cool.
;; but it doesnt do it large...

#_(doseq [[x y xor] (xors 255 255)]
  (.setColor gfx (java.awt.Color. xor xor xor))
  (.fillRect gfx x y 1 1))

#_(do (.setVisible frame false)
    (.dispose frame))

#_(doseq [[x y xor] (xors-byte 500 500)]
  (.setColor gfx (java.awt.Color. xor xor xor))
  (.fillRect gfx x y 1 1))

;; Exceptions and Stacktraces are scary ;_;

*e
;; => #error {
;; :cause "Unable to resolve symbol: *eq in this context"
;; :via
;; [{:type clojure.lang.Compiler$CompilerException
;;   :message "Syntax error compiling at (/home/malik/Workspace/clojure-scratchpad/src/clojure_scratchpad/the_joy_of_clojure/nil.clj:1:7647)."
;;   :data #:clojure.error{:phase :compile-syntax-check, :line 1, :column 7647, :source "/home/malik/Workspace/clojure-scratchpad/src/clojure_scratchpad/the_joy_of_clojure/nil.clj"}
;;   :at [clojure.lang.Compiler analyze "Compiler.java" 6808]}
;;  {:type java.lang.RuntimeException
;;   :message "Unable to resolve symbol: *eq in this context"
;;   :at [clojure.lang.Util runtimeException "Util.java" 221]}]
;; :trace
;; [[clojure.lang.Util runtimeException "Util.java" 221]
;;  [clojure.lang.Compiler resolveIn "Compiler.java" 7414]
;;  [clojure.lang.Compiler resolve "Compiler.java" 7358]
;;  [clojure.lang.Compiler analyzeSymbol "Compiler.java" 7319]
;;  [clojure.lang.Compiler analyze "Compiler.java" 6768]
;;  [clojure.lang.Compiler analyze "Compiler.java" 6745]
;;  [clojure.lang.Compiler eval "Compiler.java" 7181]
;;  [clojure.lang.Compiler eval "Compiler.java" 7132]
;;  [clojure.core$eval invokeStatic "core.clj" 3214]
;;  [clojure.core$eval invoke "core.clj" 3210]
;;  [nrepl.middleware.interruptible_eval$evaluate$fn__945$fn__946 invoke "interruptible_eval.clj" 82]
;;  [clojure.lang.AFn applyToHelper "AFn.java" 152]
;;  [clojure.lang.AFn applyTo "AFn.java" 144]
;;  [clojure.core$apply invokeStatic "core.clj" 665]
;;  [clojure.core$with_bindings_STAR_ invokeStatic "core.clj" 1973]
;;  [clojure.core$with_bindings_STAR_ doInvoke "core.clj" 1973]
;;  [clojure.lang.RestFn invoke "RestFn.java" 425]
;;  [nrepl.middleware.interruptible_eval$evaluate$fn__945 invoke "interruptible_eval.clj" 82]
;;  [clojure.main$repl$read_eval_print__9086$fn__9089 invoke "main.clj" 437]
;;  [clojure.main$repl$read_eval_print__9086 invoke "main.clj" 437]
;;  [clojure.main$repl$fn__9095 invoke "main.clj" 458]
;;  [clojure.main$repl invokeStatic "main.clj" 458]
;;  [clojure.main$repl doInvoke "main.clj" 368]
;;  [clojure.lang.RestFn invoke "RestFn.java" 1523]
;;  [nrepl.middleware.interruptible_eval$evaluate invokeStatic "interruptible_eval.clj" 79]
;;  [nrepl.middleware.interruptible_eval$evaluate invoke "interruptible_eval.clj" 56]
;;  [nrepl.middleware.interruptible_eval$interruptible_eval$fn__976$fn__980 invoke "interruptible_eval.clj" 145]
;;  [clojure.lang.AFn run "AFn.java" 22]
;;  [nrepl.middleware.session$session_exec$main_loop__1043$fn__1047 invoke "session.clj" 202]
;;  [nrepl.middleware.session$session_exec$main_loop__1043 invoke "session.clj" 201]
;;  [clojure.lang.AFn run "AFn.java" 22]
;;  [java.lang.Thread run "Thread.java" 748]]}
;;

(defn f-values [f xs ys]
  (for [x (range xs)
        y (range ys)]   
    [x y (rem (f x y) 256)]))

(defn draw-values [f xs ys gfx]
  (doseq [[x y f] (f-values f xs ys)]
    (.setColor gfx (java.awt.Color. f f f))
    (.fillRect gfx x y 1 1)))

(search-method-in-class java.awt.Graphics #"clear")
;; => ("clearRect")


;; Floating point numbers take what you learn in elementary math about
;; associativity and communatitivity and says "no"

(let [a  1.0e50
      b -1.0e50
      c 17.0]
  (str "for a b c as: " a " " b " " c " "
     '(+ (+ a b) c) " is "
    (+ (+ a b) c) " "
    '(+  a
      (+ b c)) " is "
    (+  a
      (+ b c))))
;; for a b c as: 1.0E50 -1.0E50 17.0
;; (+ (+ a b) c) is 17.0
;; (+ a (+ b c)) is 0.0


;; But we can get the expected behavior, as a rational number `rationalize`
;; `rational?`, `ratio?`
(let [a  1.0e50
      b -1.0e50
      c 17.0
      a (rationalize a)
      b (rationalize b)
      c (rationalize c)]
  (str "for a b c as: " a " " b " " c " "
     '(+ (+ a b) c) " is "
    (+ (+ a b) c) " "
    '(+  a
      (+ b c)) " is "
    (+  a
      (+ b c))))
;; => for a b c as: 100000000000000000000000000000000000000000000000000 -100000000000000000000000000000000000000000000000000 17
;; (+ (+ a b) c) is 17 ;; associativity preserved
;; (+ a (+ b c)) is 17 ;; associativity preserved


;; I saw the datomic :namespace/keyword syntax and tried to use it before
;;	 but errored out. Not sure why, but I found another reference to it!

;; This one is a `qualified keyword`, it has two colons.
::keyword
;; => :clojure-scratchpad.the-joy-of-clojure.nil/keyword

:keyword
;; => :keyword

;; now I try don't get an error, so I assume it was something else. 
:haunted/name/first
;; => :haunted/name/first
;; `ad-hoc hierarchies`

;; Symbolic Resolution
(identical? :keyword :keyword)
;; => true

(identical? 'word 'word)
;; => false

(= :keyword :keyword)
(= 'word 'word) ;; both true
;; => true


(let [x 'a y x]
  (identical? x y))
;; => true

(let [x 'a y 'a]
  (identical? x y))
;; => false

;; The capability for meta-data makes nominally-same names unique.
;; (aka 'a 'a aren't identical because (meta 'a) doesnt have to be
;; 	shared / identical)
;; Therefore :keywords can not hold meta data. They are nominally global / unique.
;; (The same :named-keyword is identical to itself)

(let [x (with-meta 'a {:b 0})
      y (with-meta 'a {:b 100})]
  [(identical? x y)
   (= x y)
   (meta x)
   (meta y)
   (identical? :x :x)])
;; => [false
;;     true
;;     {:b 0}
;;     {:b 100}
;;     true]


;; Regular Expressions
;; 	Some people, when confronted with a problem, think
;;	“I know, I’ll use regular expressions.”
;;	Now they have two problems.
;;	 	—Jamie Zawinski (jwz)

#"literal regexp"
;; => #"literal regexp"


(class #"lr")
;; => java.util.regex.Pattern




(search-method-in-class java.util.regex.Pattern #"")
;; ("asPredicate"
;;  "splitAsStream"
;;  "toString"
;;  "flags"
;;  "matches"
;;  "split"
;;  "split"
;;  "compile"
;;  "compile"
;;  "matcher"
;;  "quote"
;;  "pattern"
;;  "wait"
;;  "wait"
;;  "wait"
;;  "equals"
;;  "hashCode"
;;  "getClass"
;;  "notify"
;;  "notifyAll")


(java.util.regex.Pattern/compile "\\d")
;; => #"\d"

#"\d"
;; => #"\d"

#"(?i)yo"
;; => #"(?i)yo"
;; Clojure (on the JVM) Regexp Flags
;; (?i) -> case-insensativity
;; (?m) -> multiline ^$ match each line instead of entire str
;; (?d) -> UNIX_LINES \n
;; (?x) -> whitespace and comments are ignored
;; (?s) -> dotall . matches everything even line terminator (what does dot normally match)
;; (?u) -> unicode_case combined with i it uses unicode case insensitivity

(re-seq #"\w+" "hello world this is a list of words in a string")
;; => ("hello" "world" "this" "is" "a" "list" "of" "words" "in" "a" "string")


(re-seq #"\w*(\w)"
  "hello world this is a list of words and the last char of each")
;; => (["hello" "o"] ["world" "d"] ["this" "s"] ["is" "s"] ["a" "a"] ["list" "t"] ["of" "f"] ["words" "s"] ["and" "d"] ["the" "e"] ["last" "t"] ["char" "r"] ["of" "f"] ["each" "h"])


;; DANGER ALERT
;; Avoid `re-matcher`, single-parameter `re-find`, `re-groups` with `re-matcher`.
;; Avoid mutable matchers in general!

;; Mutable Arrays
(def ds (into-array [:will :bill :john]))
(seq ds)
;; => (:will :bill :john)

(aset ds 2 :billy) ;; what i didnt know about mutations
(seq ds)
;; => (:will :bill :billy)

(def ds [:will :bill :john])
(replace {:john :billy} ds)
;; => [:will :bill :billy]
(seq ds) ;; seq unchanged
;; => (:will :bill :john)
;; sequential is simplest collection type, it holds items without reordering them.
(map sequential? [[1 2 3 4] {1 2 3 4} #{1 2 3 4} '(1 2 3 4)])
;; => (true false false true)
;; Notice sets and maps are NOT sequential.

;; If two collections are equal but one is sequential and the othe isnt, theyre disequal
(= [1 2 3] #{1 2 3})
;; => false
;; Contrast with two collections that are sequential
(= [1 2 3] '(1 2 3))
;; => true

(defn neighbors
  ([size yx]
   (neighbors
     [[-1 0] [1 0] [0 -1] [0 1]]
     size yx))
  ([deltas size yx]
   (filter
     (fn [new-yx]
       (every? #(< -1 % size)
         new-yx))
     (map #(vec (map + yx %))
       deltas))))

(def matrix [[1 2 3] [4 5 6] [7 8 9]])

(neighbors 3 [0 0])
;; => ([1 0] [0 1])

(neighbors 3 [1 1])
;; => ([0 1] [2 1] [1 0] [1 2])

(map #(get-in matrix %) (neighbors 3 [0 0]))
;; => (4 2)

;; `conj` vs `cons`
;; `conj` is the "right way"

(defmethod print-method
  clojure.lang.PersistentQueue
  [q w]
  (print-method '<- w)
  (print-method (seq q) w)
  (print-method '- w))

clojure.lang.PersistentQueue/EMPTY
;; => <-nil-

(def schedule
  (conj clojure.lang.PersistentQueue/EMPTY
    (:wake-up :shower :brush-teeth)))

schedule
;; => <-(:brush-teeth)-
;; the book says it should show the whole queue.
;; conj typo

(def schedule
  (conj clojure.lang.PersistentQueue/EMPTY
    :wake-up :shower :brush-teeth))

schedule
;; => <-(:wake-up :shower :brush-teeth)-

(peek schedule)
;; => :wake-up

(pop schedule)
;; => <-(:shower :brush-teeth)-


(some #{:b} [:a 10 :b 1 :c 100])
;; => :b

(some #{:b} [:a 1 :b 1 :c 100])
;; => :b

(contains? [1 2 3 4 5] 4)
;; => true ;; contains? on a vector searches on index
;; 1 2 3 4 5  value
;; 0 1 2 3 4  index



(apply hash-map [:a 1 :b 2 :c 3])
;; => {:c 3, :b 2, :a 1}

(zipmap [:a :b :c] [1 2 3])
;; => {:a 1, :b 2, :c 3}

(sorted-map :c 3, :b 2, :a 1)
;; => {:a 1, :b 2, :c 3}

(sorted-map 1 :int, 1.0 :float)
;; => {1 :float} ;; the implicit type cast 1.0 -> 1


;; Note order
;; `array-map` preserves insertion order
(seq (conj (array-map :a 1 :b 2 :c 3)
       [:z 5]))
;; => ([:a 1] [:b 2] [:c 3] [:z 5])

(seq (conj (hash-map :a 1 :b 2 :c 3)
       [:z 5]))
;; => ([:z 5] [:c 3] [:b 2] [:a 1])

(defn index
  [coll]
  (cond
    (map? coll) (seq coll)
    (set? coll) (map vector coll coll)
    :else (map vector (iterate inc 0) coll)))

(defn pos [e coll]
  (for [[i v] (index coll) :when (= e v)]
    i))

(pos 3 [:a 1 :b 2 :c 3 :d 4])
;; => (5)

(pos 3 {:a 1 :b 2 :c 3 :d 4})
;; => (:c)

(pos 3 {:a 3 :b 3 :c 3 :d 4})
;; => (:a :b :c)

(defn pos [pred coll]
  (for [[i v] (index coll) :when (pred v)]
    i))

(pos odd? (range 10))
;; => (1 3 5 7 9)


(into []
  (zipmap
    (pos odd? (range 10))
    (pos even? (range 10))))
;; => [[1 0] [3 2] [5 4] [7 6] [9 8]]
;; how to rotate every two items 


(def example-tree
  {:val 5 :L nil :R nil})
(defn xconj [t v]
  (cond (nil? t)
        {:val v, :L nil, :R nil}))

(defn xconj [t v]
  (cond (nil? t)
        {:val v, :L nil, :R nil}
        (< v (:val t))
        {:val (:val t),
         :L (xconj (:L t) v)
         :R (:R t)}
        :else ;;(>= v (:val t))
        {:val (:val t),
         :L (:L t)
         :R (xconj (:R t) v)}))

(xconj nil 5)
;; => {:val 5, :L nil, :R nil}

(xconj {:val 5, :L nil, :R nil} 3)
;; => {:val 5, :L {:val 3, :L nil, :R nil}, :R nil}

(xconj {:val 5, :L nil, :R nil} 8)
;; => {:val 5, :L nil, :R {:val 8, :L nil, :R nil}}

(def example-tree2
  (xconj {:val 5, :L nil, :R {:val 8, :L nil, :R nil}} 6))


(defn xseq [t]
  (when t
    (concat
      (xseq (:L t))
      [(:val t)]
      (xseq (:R t)))))

(xseq (xconj (xconj (xconj nil 5) 2) 3))
;; => (2 3 5)


(defn rec-steps [[x & xs]]
  (if x
    [x (rec-steps xs)]
    []))

(rec-steps (range 10))
;; => [0 [1 [2 [3 [4 [5 [6 [7 [8 [9 []]]]]]]]]]]


(defn lazy-steps [[x & xs]]
  (lazy-seq
    (if x
      [x (lazy-steps xs)]
      [])))

;; (peek (lazy-steps (range 10)))

(def very-lazy (->
                 (iterate #(do (str \.) (inc %)) 1)
                 rest rest rest))

(def less-lazy (->
                 (iterate #(do (str \.) (inc %)) 1)
                 next next next))
(str (first very-lazy))
;; => "4"
(str (first less-lazy))
;; => "4"


(class (lazy-steps (range 10)))
;; => clojure.lang.LazySeq

(search-method-in-class clojure.lang.LazySeq #"")
;;;("hasheq"
;;; "withMeta"
;;; "withMeta"
;;; "seq"
;;; "more"
;;; "equiv"
;;; "isRealized"
;;; "add"
;;; "add"
;;; "remove"
;;; "remove"
;;; "get"
;;; "count"
;;; "equals"
;;; "hashCode"
;;; "indexOf"
;;; "clear"
;;; "isEmpty"
;;; "lastIndexOf"
;;; "contains"
;;; "size"
;;; "subList"
;;; "toArray"
;;; "toArray"
;;; "iterator"
;;; "next"
;;; "addAll"
;;; "addAll"
;;; "cons"
;;; "cons"
;;; "first"
;;; "set"
;;; "containsAll"
;;; "removeAll"
;;; "retainAll"
;;; "listIterator"
;;; "listIterator"
;;; "empty"
;;; "meta"
;;; "wait"
;;; "wait"
;;; "wait"
;;; "toString"
;;; "getClass"
;;; "notify"
;;; "notifyAll"
;;; "replaceAll"
;;; "spliterator"
;;; "sort"
;;; "stream"
;;; "removeIf"
;;; "parallelStream"
;;; "forEach")


(defn simple-range
  [i limit]
  (lazy-seq
    (when (< i limit)
      (cons i (simple-range (inc i) limit)))))

(simple-range 0 10)
;; => (0 1 2 3 4 5 6 7 8 9)

(defn triangle [n]
  (/
    (* n (+ n 1))
    2))

(triangle 10)
;; => 55

(map triangle (range 1 11))
;; => (1 3 6 10 15 21 28 36 45 55)


(def triangle-numbers (map triangle (iterate inc 1)))

(nth triangle-numbers 99)
;; => 5050


(reduce + (take 1000 (map / triangle-numbers)))
;; => 2000/1001


(take 2 (drop-while #(< % 10000) triangle-numbers))
;; => (10011 10153)




;; call-by-need semantics
;; aka lazy evaluation


(defn defer-expensive
  [cheap expensive]
  (if-let [good-enough (force cheap)]
    good-enough
    (force expensive)))

(defer-expensive (delay :cheap)
  (delay (do (Thread/sleep 1200) :expensive)))
;; => :cheap (immediate)

(defer-expensive (delay false)
  (delay (do (Thread/sleep 1000) :expensive)))
;; => :expensive (after a second)


(defn inf-triangles
  [n]
  {:head (triangle n)
   :tail (delay (inf-triangles (inc n)))})

(defn head  [l] (:head l))
(defn tail  [l] (force (:tail l)))
(def tri-nums (inf-triangles 1))

(head tri-nums)
;; => 1

(defn taker [n l]
  (loop [t n
         src l
         ret []]
    (if (zero? t)
      ret
      (recur (dec t) (tail src)
        (conj ret (head src))))))

(defn nthr [l n]
  (if (zero? n)
    (head l)
    (recur (tail l) (dec n))))

(taker 10 tri-nums)
;; => [1 3 6 10 15 21 28 36 45 55]

(nthr tri-nums 9)
;; => 55



;; any natural number below n can occur 0 or more times
(defn rand-ints [n]
  (take n (repeatedly #(rand-int n))))

;; every natural number below n occurs once and only once
(defn rand-ints [n]
  (shuffle (range n)))

(rand-ints 10)
;; => [5 4 9 8 7 0 6 1 3 2]


(defn sort-parts
  [work]
  (lazy-seq
    (loop [[part & parts] work]
      (if-let [[pivot & xs] (seq part)]
        (let [smaller? #(< % pivot)]
          (recur
            (list*
              (filter smaller? xs)
              pivot
              (remove smaller? xs)
              parts)))
        (when-let [[x & parts] parts]
          (cons x (sort-parts parts)))))))

(defn qsort [xs]
  (sort-parts (list xs)))


(def fifth (comp first rest rest rest rest rest))
(fifth (range 10))
;; => 5


(defn fnth [n]
  (apply comp
    (cons first
      (take (dec n)
        (repeat rest)))))

(map
  (comp keyword #(clojure.string/lower-case %) name)
  '(A B C))
;; => (:a :b :c)



((partial + 5) 1)
;; => 6

((partial + 5) 100)
;; => 105

((partial + 5) 100 6)
;; => 111


(#(apply + 5 %&)
  1)
;; => 6

(#(apply + 5 %&)
   100)
;; => 105

(#(apply + 5 %&)
  100 6)
;; => 111


(let [truthiness (fn [v] v)]
  [((complement truthiness) false)
   ((complement truthiness) nil)
   ((complement truthiness) true)
   ((complement truthiness) 42)])

(defn join
  {:test
   (fn []
     (assert
       (= (join "," [1 2 3])
         "1,2,3")))}
  [sep s]
  (apply str (interpose sep s)))

;; (use '[clojure.test :as t])
;; (t/run-tests)

(sort > (range 10)) 
;; => (9 8 7 6 5 4 3 2 1 0)

(defn keys-apply
  [f ks m]
  (let [only (select-keys m ks)]
    (zipmap (keys only)
      (map f (vals only)))))

(keys-apply inc [1, 2] {1 1, 2, 2, 3, 3})
;; => {1 2, 2 3}
;;
;; #+begin_quote
;; On his next walk with Qc Na, Anton attempted to 
;; 	impress his master by saying "Master, I have
;; 	 diligently studied the matter, and now 
;; 	understand that objects are truly a poor man’s
;; 	 closures." 
;;
;; Qc Na responded by hitting Anton with his stick, 
;; 	saying "When will you learn? Closures 
;; 	are a poor man’s object." 
;;
;; At that moment, Anton became enlightened. 
;; 	—Anton van Straaten
;;
;; #+end_quote


;; In a sentence, a closure is a function that has
;; 	access to locals from the context where it was
;;	created

(def times-two
  (let [x 2]
    (fn [y] (* y x))))

(times-two 10)
;; => 20


(def add-and-get
  (let [ai (java.util.concurrent.atomic.AtomicInteger.)]
    (fn [y] (.addAndGet ai y))))

(add-and-get 0)
;; => 0

(add-and-get 1)
;; => 1

(add-and-get 10)
;; => 11
;; Mutation in my pure FP lang?
;; 	It's more likely than you think.
;;
;;
;; A point of note about this technique is that when closing 
;; 	over something mutable, you run the risk of making
;; 	 your functions impure and thus more difficult to 
;; 	test and reason about, especially if the mutable 
;; 	local is shared.


(defn times-n [n]
  (let [x n]
    (fn [y] (* y x))))

(defn times-n [n]
  (fn [y] (* y n)))

((times-n 10) 10)

(defn filter-divisible [denom s]
  (filter #(zero? (rem % denom)) s))

(filter-divisible 10 (range 100))
;; => (0 10 20 30 40 50 60 70 80 90)
(filter-divisible 15 (range 100))
;; => (0 15 30 45 60 75 90)
(filter-divisible 30 (range 100))
;; => (0 30 60 90)



(def bearings
  [{:x 0 :y 1}
   {:x 1 :y 0}
   {:x 0 :y -1}
   {:x -1 :y 0}])

(defn forward [x y bearing-num]
  [(+ x (:x (bearings bearing-num)))
   (+ y (:y (bearings bearing-num)))])

(defn bot [x y bearing-num]
  {:coords [x y]
   :bearing ([:north :east :south :west] bearing-num)
   :forward (fn []
              (bot
                (+ x (:x (bearings bearing-num)))
                (+ y (:y (bearings bearing-num)))
                bearing-num))
   :turn-right (fn [] (bot x y (mod (+ 1 bearing-num) 4)))
   :turn-left (fn [] (bot x y (mod (- 1 bearing-num) 4)))})

(:coords
 ((:forward
   ((:forward
     ((:turn-right
       (bot 5 5 0))))))))
;; => [7 5]

(defn mirror-bot [x y bearing-num]
  {:coords [x y]
   :bearing ([:north :east :south :west] bearing-num)
   :forward (fn []
              (bot
                (+ x (:x (bearings bearing-num)))
                (+ y (:y (bearings bearing-num)))
                bearing-num))
   :turn-right (fn [] (mirror-bot
                        x y (mod (- 1 bearing-num) 4)))
   :turn-left (fn [] (mirror-bot
                       x y (mod (+ 1 bearing-num) 4)))})


(:coords
 ((:forward
   ((:forward
     ((:turn-right
       (mirror-bot 5 5 0))))))))
;; => [7 5]


(defn pow [base exp]
  (if (zero? exp)
    1
    (* base (pow base (dec exp)))))

(pow 10 10)
;; => 10000000000

(pow 2 10)
;; => 1024

(pow 2 62)
;; => 4611686018427387904
;; Surprised that its only 62, not 64.
;; 2 bits of metadata?
;; If so, `meta` knows not about it:
(meta (pow 2 62))
;; => nil


(defn pow [base exp]
  (letfn [(kapow [base exp acc]
            (if (zero? exp)
              acc
              (recur base (dec exp)
                (* base acc))))]
    (kapow base exp 1)))


(pow 2 62)
;; => 4611686018427387904

;; 2 Common Techniques for
;;	Converting from Mundane to Tail Recursive Functions
;; -- helper fn
;; -- accumulator: acc


;; (lazy-pow 10 2)

(defn lazy-pow [base exp]
  (if (zero? exp)
    1
    (* base (lazy-pow base (dec exp)))))



(defn gcd [x y]
  (cond
    (> x y)
    (gcd (- x y) y)
    (< x y)
    (gcd x (- y x))
    :else x))



(defn elevator [commands]
  (letfn
      [(ff-open
         [[_ & r]]
         "When the elevator is open on the 1st floor it can
		be either closed or be done."
         #(case _
            :close (ff-closed r)
            :done true
            false))
       (ff-closed [[_ & r]]
         "When the elevator is closed on the 1st floor it 
	  can either open or go up."
         #(case _
            :open (ff-open r)
            :up (sf-closed r)))
       (sf-closed [[_ & r]]
         "When the elevator is closed on the 2nd floor
	  it can either go down or open."
         #(case _
            :down (ff-closed r)
            :open (sf-open r)
            false))
       (sf-open [[_ & r]]
         "When the elevator is open on the 2nd floor 
	  it can either close or be done."
         #(case _
            :close (sf-closed r)
            :done true
            false))]
    (trampoline ff-open commands)))

(elevator [:close :open])
;; => false

(elevator [:close :up :open :close :down :open :done])
;; => true


(elevator
  (conj (take 10 (cycle [:close :open])) :done))
;; => true


(defn factorial-cps
  [n k]
  (letfn [(cont [v] (k (* v n)))]
    (if (zero? n)
      (k 1)
      (recur (dec n) cont))))

(defn factorial [n]
  (factorial-cps n identity))

(factorial 10)
;; => 3628800


(defn make-cps [accept? kend kont]
  (fn [n]
    ((fn [n k]
       (let [cont
             (fn [v]
               (k ((partial kont v) n)))]
         (if (accept? n)
           (k 1)
           (recur (dec n) cont))))
     n kend)))

(def factorial-cps
  (make-cps zero?
   identity
   #(* %1 %2)))

(factorial-cps 10)
;; => 3628800

(def triangle-cps
  (make-cps
    #(== 1 %)
    identity
    #(+ %1 %2)))

(triangle-cps 10)
;; => 55

(triangle-cps 100)
;; => 5050

(def world
  [[1   1   1   1   1]
   [999 999 999 999 1]
   [1   1   1   1   1]
   [1 999 999 999 999]
   [1   1   1   1   1]])

(neighbors 5 [0 0])

(defn estimate-cost [step-cost-est size y x]
  (* step-cost-est
    (- (+ size size)
      y x 2)))

(defn path-cost
  [node-cost cheapest-neighbor]
  (+ node-cost
    (or (:cost cheapest-neighbor) 0)))

(path-cost 900 {:cost 1})
;; => 901


(defn total-cost [newcost step-cost-est size y x]
  (+ newcost
    (estimate-cost step-cost-est size y x)))


(defn min-by [f coll]
  (when (seq coll)
    (reduce (fn [min other]
              (if (> (f min) (f other))
                other
                min))
      coll)))

(min-by :cost [{:cost 100} {:cost 20} {:cost 1000}])
;; => {:cost 20}


(let [[_ yx :as hello] ['a [10 10]]]
  (first hello))

(defn make-2d-vec [n & rst]
  (vec (repeat n ;;; WAS HARD CODED 4 NEEDS 2 BE SIZE!!!
         (vec (repeat n
                nil)))))

(defn astar [start-yx step-est cell-costs]
  (let [size (count cell-costs)]
    (loop [steps 0
           routes (make-2d-vec size nil)
           work-todo (sorted-set [0 start-yx])]
      (if (empty? work-todo)
        [(peek (peek routes)) :steps steps]
        (let [[_ yx :as work-item]
              (first work-todo)
              rest-work-todo (disj work-todo work-item)
              neighbor-yxs (neighbors size yx)
              cheapest-neighbor
              (min-by :cost
                (keep #(get-in routes %)
                  neighbor-yxs))
              newcost
              (path-cost (get-in cell-costs yx)
                cheapest-neighbor)
              oldcost
              (:cost (get-in routes yx))]
          (if (and oldcost (>= newcost oldcost))
            (recur (inc steps) routes rest-work-todo)
            (recur (inc steps)
              (assoc-in routes yx
                {:cost newcost
                 :yxs (conj (:yxs cheapest-neighbor [])
                        yx)})
              (into rest-work-todo
                (map
                  (fn [w]
                    (let [[y x] w]
                      [(total-cost
                         newcost step-est size y x) w]))
                  neighbor-yxs)))))))))

(astar [0 0] 900 world)
;;[{:cost 17,
;;  :yxs
;;  [[0 0]
;;   [0 1]
;;   [0 2]
;;   [0 3]
;;   [0 4]
;;   [1 4]
;;   [2 4]
;;   [2 3]
;;   [2 2]
;;   [2 1]
;;   [2 0]
;;   [3 0]
;;   [4 0]
;;   [4 1]
;;   [4 2]
;;   [4 3]
;;   [4 4]]}
;; :steps
;; 94]





(-> 25
  (Math/sqrt)
  (int)
  (list))
;; (list (int (Math/sqrt 25)))
;; => (5)


(->
  (/ 144 12)
  (/ 1 2 3)
  str
  keyword
  list)
;; (list (keyword (str (/ (/ 144 12) 1 2 3))))
;; => (:2)



;; #=>
;; (list 
;;   clojure-scratchpad.the-joy-of-clojure.nil/y
;;   (quote clojure-scratchpad.the-joy-of-clojure.nil/y)
;;   clojure-scratchpad.the-joy-of-clojure.nil/y
;;   (- x)
;;   -36 )


(defmacro do-until [& clauses]
  (when clauses
    (list 'clojure.core/when (first clauses)
      (if (next clauses)
        (second clauses)
        (throw (IllegalArgumentException.
                 "do-until requires an even number of forms")))
      (cons 'do-until (nnext clauses)))))

(clojure.walk/macroexpand-all
  '(do-until true (prn 1) false (prn 2)))
;; => (if true (do (prn 1) (if false (do (prn 2) nil))))




(+ 1 3)
;; => 4

'(+ 1 3)
;; => (+ 1 3)

'+
;; => +


(defn contextual-eval [ctx expr]
  (eval
    `(let [~@(mapcat (fn [[k v]]
                       [k `'~v])
               ctx)]
       ~expr)))

(contextual-eval '{a 1 b 2} '(+ a b))
;; => 3

(contextual-eval '{b 10
                   a 100
                   c `(fn [x y] (+ x y))}
  '(c a b))

(let [x 9
      y '(- x)]
  (list
       `y 
      ``y
     ``~y
     ``~~y)
  (contextual-eval '{x 36} ``~~y))



'+
;; => +

;; ` syntax-quote wil include the symbol’s full namespace
;; This helps avoid name collisons.
`+
;; => clojure.core/+
;; Syntax quoting lets you unquote as well.

`+
;; => clojure.core/+

;; If syntax quote lets you unquote, whats the difference
;; between syntax-quote unquote symbol and just symbol:
(list `~+ +)
;; => (#function[clojure.core/+] #function[clojure.core/+])

;; Aparently nothing.
(identical? `~+ +)
;; => true


`(+ 1 ~(inc 1))
;; => (clojure.core/+ 1 2)
`( + 1
  ~(inc 1))
;; The unquote gets replaced as a form to be evaluated.
(inc 1)
;; => 2
;; So expanded
(+ 1 2)
;; => 3
`(+ 1 (inc 1))
;; They make analogy to string interpolation,
;;	only its for code forms not string forms
(list '+ 1 (inc 1))
;; => (+ 1 2)

`(+ 1 ~(inc 1))
;; => (clojure.core/+ 1 2)


 `(+ ~(list 1 2 3))
;; => (clojure.core/+ (1 2 3))


;; Unquote Splicing
`(+ ~@(list 1 2 3))
;; => (clojure.core/+ 1 2 3)

;; Macro Hygeine
(gensym)
;; => G__12272

`(hello#)
;; Finally! Is this why The-Reasoned-Schemer names it's
;;	success and failure clauses like s# and u#?


(defmacro my-first-macro []
 (list reverse "Hello World"))

(my-first-macro)
;; (#function[clojure.core/reverse] "Hello World")


(defmacro my-2nd-macro [n]
  `(apply str (reverse ~n)))


(my-2nd-macro "Hello")
;; (apply str (reverse "Hello"))

(defmacro unless [arg & body]
  `(if (not ~arg)
     (do ~@body)))

(unless false (+ 1 2 3 4))
;; (if (not false)
;;	(do (+ 1 2 3 4)))

(def x# (gensym 'x))


(def simple-metric {:meter 1,
                    :km 1000,
                    :cm 1/100,
                    :mm [1/10 :cm]})

(defn convert [context descriptor]
  (reduce
    (fn [result [mag unit]]
      (+ result
        (let [val (get context unit)]
          (if (vector? val)
            (* mag (convert context val))
            (* mag val)))))
    0 (partition 2 descriptor)))

(convert simple-metric [1 :km])

(float
  (convert simple-metric [3 :km 10 :meter 80 :cm 10 :mm]))
;; => 3010.81

(def simple-bits
  {:bit 1,
   :byte 8,
   :nibble [1/2 :byte]})

(convert simple-bits [32 :nibble])


;;; MORE CPS
(defn fact [n]
  (if (zero? n)
    1
    (* n (fact (dec n)))))

(fact 10)
;; => 3628800

(fact 10 (fn [m] (str m)))
;; => "0"


(defn id [x]
  x)

(defn id [x cc]
  (cc x))

(defn fact [n ret]
  (if (zero? n)
    (ret n) ;;  this was the error
    ;; base case for factorial is 1
    (fact (dec n)
      (fn [x]
        (ret (* n x))))))

(defn fact
  [n cc]
  (if (zero? n)
    (cc 1)
    (fact (dec n)
      (fn [t0]
        (cc (* n t0))))))

(fact 10 id)
;; => 3628800
