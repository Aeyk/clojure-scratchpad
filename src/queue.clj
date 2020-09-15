(ns queue)
 (defn queue
      ([] clojure.lang.PersistentQueue/EMPTY)
      ([coll] (reduce conj clojure.lang.PersistentQueue/EMPTY coll)))

    (defmethod print-method clojure.lang.PersistentQueue
      [q ^java.io.Writer w]
      (.write w "#queue ")
      (print-method (sequence q) w))

    (comment
       (let [*data-readers* {'queue #'queue}]
         (read-string (pr-str (queue [1 2 3])))))



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


(into (sorted-map-by count-comparator)
  [3 1 4 2])
