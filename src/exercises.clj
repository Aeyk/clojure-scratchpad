
(require '[clojure.edn :as edn])
(require '[clojure.core.match :refer [match]])
(require '[clojure.math.numeric-tower :as math])

(defn next-row [row]
  (map +
    (conj [0] row)
    (cons row [0])))

(next-row 2)
;; stolen from rosetta code
(fn [n]
  (let [pascal 
        (iterate
          #(concat
             [1] 
             (map + % (rest %))
             [1])
          [1])]
    (last (take n pascal))))


(take 2
  (fn [x]
      (let [pascal 
            (iterate
              #(concat
                 [(first %)]
                 (map +' % (rest %))
                 [(last %)])
              x)]
        pascal))
  [2 3 2])


2 [2 3 2]

(take 10 pascal)


(defn positive-numbers 
  [n]
  (lazy-seq
    (cons n (positive-numbers (inc n)))))

#_(take 3 (my-iterate inc 1))


(defn my-map [f xs]
  (loop [c (count xs)
         xs xs]
    (if (zero? c)
      xs
      (recur (dec c)
        (conj
          (rest xs)
          (f (first xs))
          )))))
 
;; (my-map inc (range 10))

;; (my-map inc [2 3 4 5 6])



(defn count-differnece [s t]
  (count
    (filter (comp not zero?) 
           (map compare s t))))

(count-differnece "GAGCCTACTAACGGGAT" "CATCGTAATGACGGCCT")

(defn phone-number
  [s]
  (apply str 
    (map first
      (re-seq #"([0-9])" s))))


(phone-number "+1 (613)-995-0253")
;; => "16139950253"

(phone-number "613-995-0253")
;; => "6139950253"

(phone-number "1 613 995 0253")
;; => "16139950253"

(phone-number "613.995.0253")
;; => "6139950253"
 

(def old {1 ["A" "E" "I" "O" "U" "L" "N" "R" "S" "T"]
          2 ["D" "G"]
          3 ["B" "C" "M" "P"]
          4 ["F" "H" "V" "W" "Y"]
          5 ["K"]
          8 ["J" "X"]
          10 ["Q" "Z"]})

(defn make-score-index-to-key-pair  [] 
    (map (fn [[k vs]] 
         (for [v vs]
           [v k]))
      old))


(fn symmetric-difference
  [a b]
  (let [longer
        (first
          (sort-by #(count %1) [a b]))
        shorter
        (second
          (sort-by #(count %1) [a b]))
        isection (filter #(contains? shorter %) longer)]
    
    ;; what happens when you sort a collection without an idea of order-ness like a set?
    (clojure.set/difference
      (into a b)
      isection)))



(defn binary-tree?
  [btree]
  (every? true?
      (let [c (for [binary-pair
                    (tree-seq next ()rest btree)]
                (if (seq? binary-pair)
                  (or (= 3 (count binary-pair))
                    (= 0 (count binary-pair)))
                  true))]
        c)))

(defn binary-tree?
  [btree]
  (every? true?
      (let [c (for [binary-pair
                    (tree-seq next rest btree)]
                (or (= 3 (count binary-pair))
                  (= 0 (count binary-pair))))]
        c)))
;; took me almost an hour at the repl :(
;; still doesnt work with the false test case, even though it's good
(binary-tree? [1 [2 [3 [4 false nil] nil] nil] nil])



(for [binary-pair (tree-seq next rest [1 [2 [3 [4 nil nil] nil] nil] nil])]
  (count binary-pair))
(binary-tree? [1 [2 [3 [4 nil nil] nil] nil ] nil])
((comp count second) [1 [2 [3 [4 nil nil nil] nil] nil] nil])
;; => 3

(first [1 [2 [3 [4 nil nil nil] nil] nil] nil])
;; => 1
(second [1 [2 [3 [4 nil nil nil] nil] nil] nil])
;; => [2 [3 [4 nil nil nil] nil] nil]
(last [1 [2 [3 [4 nil nil nil] nil] nil] nil])
;; => nil



(fn gcd [x y]
  (cond
    (> x y)
    (gcd (- x y) y)
    (< x y)
    (gcd x (- y x))
    :else x))

(fn lcm
  ([a b]
   (let [gcd
         (fn gcd [x y]
           (cond
             (> x y)
             (gcd (- x y) y)
             (< x y)
             (gcd x (- y x))
             :else x))]
     (/ 
       (math/abs (* a b))
       (gcd a b))))
  ([a b & cs]
   (reduce lcm (into [a b] cs))))


(reduce lcm [(/ 3 4) (/ 1 6)])
(Math/abs (/ 1 6))

(dedupe [1 1 2 1 1 1 3 3])
(vals (group-by identity [:a :a :b :b :c]))

(defn pack [s]
  (vals (group-by identity s)))

(dedupe [1 1 2 1 1 1 3 3])

(fn my-dedupe [s]
  (apply str (sequence (fn [rf]
     (let [pv (volatile! ::none)]
       (fn
         ([] (rf))
         ([result] (rf result))
         ([result input]
            (let [prior @pv]
              (vreset! pv input)
              (if (= prior input)
                result
                (rf result input))))))) s)))


(fn disjoint-set [s1 s2]
  (every? false?
    (for [i s1]
      (contains? s2 i))))

(defn disjoint-sets [sets]
  (letfn [(disjoint-set [s1 s2]
            (every? false?
              (for [i s1]
                (contains? s2 i))))] 
    (every? true?
      (flatten
        (for [set sets]
          (map #(disjoint-set set %) (disj sets set)))))))

(disjoint-sets #{#{1 2 3}
                 #{4 5 9}
                 #{6 7 8}})
;;; <2020-09-18 Fri 23:48>


(defn my-intersection [s1 s2]
  (into #{}
    (filter (complement nil?)
      (for [i s1]
        (if (contains? s2 i)
          i)))))

(my-intersection #{0 1 2 3} #{2 3 4 5})
;;; <2020-09-18 Fri 23:51>

(fn some-but-not-all
  [& bools]
  (letfn [(s [bools]
            (and (not (every? false? bools))
              (not (every? true? bools))))]
    (apply s (vector bools))))

(some-but-not-all false true)
;;; <2020-09-18 Fri 23:55>


(defn my-map [f xs]
  (for [x xs]
    (f x)))

;;; <2020-09-18 Fri 23:56>
;; Then I notice map and for aren't allowed!!

(defn my-map [f xs]
  (loop [nxs []
         xs xs]
    (if (empty? xs)
      nxs
      (recur (conj nxs
               (f (first xs))) (rest xs)))))

(my-map inc [3 4 5 6 7])

;;; <2020-09-19 Sat 00:00>
;;; and It timed out again?
;;; http://www.4clojure.com/problem/118
;;;; Whats up with that?

(defn my-group-by [f xs]
  (loop [nxs {}
         xs xs]
    (if (empty? xs)
      nxs
      (recur
        (assoc nxs
          (f (first xs))
          (rest xs))
         xs))))

(my-group-by #(> % 5) [1 3 6 8])
;; => {false (3 3 6 8), true (8 8)}

(fn f [op x y]
  (cond
    (op x y) :lt
    (= x y) :eq
    :else :gt))


(f > 0 2)

(fn f [op x y]
  (cond
    (= x y) :eq
    (op x y) :lt
    (op y x) :gt))

(f > 100 20)

(fn f [op x y]
  (cond
    (= x y) :eq
    (op x y) :lt
    (op y x) :gt
    :else :eq))
;;; <2020-09-19 Sat 00:20> struggled for a long time felt like i cheated with that :else

(defn binary-tree?
  [bt]
  (if (seq? bt)
    (recur (rest bt)))
  )
(def bt1 [1 nil [2 [3 nil nil] [4 nil nil]]])
(get bt1 2)
;; <2020-09-19 Sat 00:33> ... yawn I should get to sleep



    

(defn my-compress [lst]
  (loop [lst lst
         newlst []]
    (if (empty? lst)
      newlst
      (let [pk (first lst)
            npk (first newlst)]

        (if-not 
          (and (not (nil? npk))
            (= npk pk))
          (recur
            (rest lst)
            (conj newlst (first lst))))))))

(my-compress "aaaa")


(partition-by identity)

(map first (partition-by identity))
"Leeeeeerrroyyy"
;; <2020-09-21 Mon 11:57>

(fn my-group-by [f xs]
  (loop [xs xs
         nxs {}]
    (if (empty? xs)
      nxs
      (recur (rest xs)
        (assoc nxs (f (first xs))
          (conj
            (get nxs (f (first xs)) [])
            (first xs)))))))

(my-group-by #(> % 5) [1 3 6 8])
;;; <2020-09-21 Mon 12:07> I hate how sometimes I randomly stumble upon the answer. This was what I wanted to do though.



(tree-seq
  map?
  keys
  '{a {p 1, q 2}
    b {m 3, n 4}})


(fn indexing [seq]
  (partition 2
    (interleave seq (range))))

(indexing [:a :b :c])

(defn digitize
  "(digitize 1000)
  ;; => (1 0 0 0)
  (digitize 666)
  ;; => (6 6 6)"
  [n]
  (map edn/read-string
    (re-seq #"\d"
      (.toString n))))


(defn square-of-digits [n]
  (map #(* % %) (digitize n)))

(defn smaller-square-of-digits [n]
 (< n (reduce +
       (square-of-digits n))))

(defn smaller-square-of-digits* [ns]
 (map smaller-square-of-digits ns))

(defn count-smaller-square-of-digits [ns]
  (count (filter true? (smaller-square-of-digits* ns))))

(defn sum-of-square-of-digits [ns]
  (letfn [(seperate-digits [ds]
            (map edn/read-string
              (re-seq #"\d"
                (.toString ds))))
          (square-of-digit [n]
            (map #(* % %) (digitize n)))
          (smaller-square-of-digit [n]
            (< n
              (reduce +
                (square-of-digits n))))]
    (count (filter true? (map smaller-square-of-digit ns)))))



(sum-of-square-of-digits (range 1000))


(map second 
  (filter (comp (complement zero?) first) 
    (vec
      (map vec
        (partition 2
          (interleave (cycle (range 3))
            (range 11)))))))

(fn my-drop-nth [coll n]
  (map second 
    (filter (comp (complement #(= (dec n) %)) first) 
      (vec
        (map vec
          (partition 2
            (interleave (cycle (range n))
              coll)))))))
(my-drop-nth [1 2 3 4 5 6 7 8] 3)
;; <2020-09-23 Wed 10:17>


(fn [f coll]
    (letfn
        [(map* [f xs]
           (reduce
             (fn [res v]
               (conj res (f v)))
             []
             xs))]
      (map* f coll)
      (->> (map* inc (range))
        (drop (dec 1000000))
        (take 2))))
;;; Ive solved this like 3 times... Last unit test always times outs.
;;; <2020-09-23 Wed 10:22>

(defn is-symmetric
  ([bta btb]
   (let [roota (first bta)
         rootb (first btb)]
     (cond (every? true?
             [(nil? roota)
              (nil? rootb)])
           true
           
           (not-every? true?
             [(nil? roota)
              (nil? rootb)])
           false
           
           (= roota rootb)
           (if (is-symmetric
                 (get bta 1)
                 (get btb 2))
             (is-symmetric
               (get bta 2)
               (get btb 1))))
     false)))
;; https://www.ideserve.co.in/learn/check-if-binary-tree-is-symmetric-tree
(= (is-symmetric
     [] [1])
   false)



(fn [t]
  ((fn mir? [l r]
     (if (or (= nil l r)
             (and (= (first l) (first r))
                  (mir? (second l) (last r))
                  (mir? (last l) (second r))))
       true false)) 
   (second t) (last t)))
;;; https://yyhh.org/blog/2011/06/my-solutions-for-problems-no-76-100-on-4clojurecom/
;;; <2020-09-23 Wed 10:43>

((letfn [(suitify [suit]
           (case suit
             \S :spade
             \D :diamond
             \H :heart
             \C :club))
         (rankify [rank]
           (case rank
             \T 8 \J 9 \Q 10
             \K 11 \A 12
             (- (Integer/parseInt (str rank)) 2)))]
   (fn [card]
     (let [suit (first card)
           rank (second card)]
       {:suit (suitify suit)
        :rank (rankify rank)})))
 "DQ")
;;; <2020-09-23 Wed 10:51>


;;; <2020-09-23 Wed 11:35>
;;; https://github.com/yveszoundi/4clojure-answers
(defn binary-tree? [xs]
  (letfn [(valid-node? [col idx]
            (let [elem (nth col idx)]
              (if (nil? elem)
                true
                (and (coll? elem) (binary-tree? elem)))))]
    (if (= 3 (count xs))
      (and
       (not (nil? (nth xs 0))) (valid-node? xs 1) (valid-node? xs 2))
      false)))

(defn infix [x]
  (let [[a op b] x]
    (eval `(~op ~a ~b))))

(infix (take 3 '(38 + 48 - 2 / 2)))
;; => 86

(defn infix
  ([[a b & [c d e & m]]] ;; note this interesting destructuring syntax 
   (let [&& #(and % %2)
         || #(or % %2)
         ops '[- + * / < > && || =]
         rank (zipmap ops (iterate inc 1))
         op? rank]
     (cond
       (vector? a) (recur (list* (infix a) b c d e m))
       (vector? c) (recur (list* a b (infix c) d e m))
       (op? b) (if (and d (< (rank b 0) (rank d 0)))
                 (recur (list a b (infix (list* c d e m))))
                 (recur (list* (list b a c) d e m)))
       :else a)))
  ([x & xs]
   (infix (vector (conj xs x))))
  ) 
;; <2020-09-23 Wed 11:50>
;; https://groups.google.com/g/clojure/c/PsC1cX5_MsA

(eval (list 38 + 48 - 2 / 2))
(infix '(38 + 48 - 2 / 2))
;; => (- (+ 38 48) (/ 2 2))

(quote (list 2 + 5))


((fn sosc [coll]
   (letfn [(digits [ds] (map #(Integer/parseInt %)
                          (clojure.string/split (str ds) #"")))
           (squared-comps [d] (map #(* % %) d))
           (sum [d]
             (reduce + d))
           (digits->number [d]
             (Integer/parseInt
               (clojure.string/join
                 d)))]
     (count
       (filter (fn [[x sos]]
                 (< x sos))
         (for [x coll
               :let [sos (-> (digits x)
                           squared-comps
                           sum)]]
           [x sos])))))
 (range 10))

;; => ((0 0) (1 1) (16 2) (81 3) (37 4) (29 5) (45 6) (97 7) (52 8) (65 9) (1 10) (2 11))
;;; <2020-09-23 Wed 13:52>
;;; took long time lol.
;;; ands its actually wong lol
;;; now I don't know works on my machine but not on 4clojure... Commit!
;;; <2020-09-23 Wed 13:58>

(defn sum-of-square-of-digits [coll]
  )

