(ns trinary)

(defn to-decimal [t]
  (let [tz (clojure.string/join
            (re-seq #"\d" t))]
    (if (= tz t)
      (Integer/parseInt tz 3)
      0)))


