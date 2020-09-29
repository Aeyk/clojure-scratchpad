(* 100.00 3169)

(ns space-age)


(defn on-earth [s]
  (/ s 60 60 24 365))

(defn on-venus [s] s
  (/ (on-earth s) 0.61519726))

(defn on-mercury [s]
  (/ s (on-earth s) 0.2408467))

(defn on-mars [s] s
  (/ (on-earth s) 1.8808158))

(defn on-jupiter [s]
  (/ (on-earth s) 11.862615))


(defn on-saturn [s] s
  (/ (on-earth s) 29.447498))


(defn on-neptune [s] s
  (/ (on-earth s) 164.79132))


(defn on-uranus [s]
  (/ (on-earth s) 84.016846))
