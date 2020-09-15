(ns euler.anagram
  (:require
   [clojure.string :as string]
   [clojure.math.combinatorics :as combo]))

(defn count-comparator [a b]
  (let [c (compare a b)] ;; this is kind of about how java Comparators work.
    ;; See https://clojuredocs.org/clojure.core/sorted-set-by
    ;; #+begin_quote
    ;; When the two objects are equal in the parts we care about, 
    ;; 	use the tie-breaker `compare` on the whole values to
    ;; 	give them a consistent order that is only equal if 
    ;; 	the entire values are equal.
    ;; #+end_quote
    (if (not= c 0)
      c 
      (compare (count a) (count b)))))

(def dict
  (into (sorted-set-by count-comparator)
    (string/split 
      (string/join (slurp "/usr/share/dict/american-english"))
      #"\n")))

(defn unicase-contains?
  [coll k]
  (contains? coll (clojure.string/lower-case k)))

(defn word? [wordp]
  (unicase-contains? dict wordp))

(def four-letter-words
  (take 1
    (drop 3
      (sort-by first 
        (into []
          (group-by count dict))))))
(filter #(unicase-contains?))    

(word? "hellO")
