(ns strain)

(defn filter* [f xs]
  (reduce
    (fn [res v]
      (if (f v)
        (conj res v) ;; add on v, not f(v)
        res))
    []
    xs))

(defn retain [f coll]
  (filter* #(f %) coll))

(defn discard [f coll]
  (filter* #(not (f %)) coll))
