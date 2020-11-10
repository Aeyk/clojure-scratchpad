(ns all-your-base)

(defn digitize
  "(digitize 1000)
  ;; => (1 0 0 0)
  (digitize 666)
  ;; => (6 6 6)"
  [n]
  (map clojure.edn/read-string
    (re-seq #"\d"
      (.toString n))))

(defn convert [input-base digits output-base]
  (let [in-logs (map #(Math/pow input-base %) (range))
        out-logs (map #(Math/pow output-base %) (range))]       
    (for [digit digits]
      digit)))

(def blogs (map #(Math/pow 2 %) (range)))
(def logs (map #(Math/pow 10 %) (range)))


(interleave logs
  (digitize 42))

(convert 10 (digitize 42) 2)
