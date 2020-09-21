
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
