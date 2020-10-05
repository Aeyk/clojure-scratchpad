(ns accumulate)

(defn accumulate [f coll]
  (for [i coll]
    (f i)))

