(ns binary)

(defn to-decimal [b]
  (let [bz (clojure.string/join
            (re-seq #"\d" b))]
    (if (= bz b)
      (Integer/parseInt bz 2)
      0)))


