(ns exercism.word-count)

(defn word-count [s]
  (count
    (clojure.string/split s #"\s")))
