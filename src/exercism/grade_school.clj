(ns grade-school)

(def db {})

(defn grade [school grade]
  (vec (get school grade [])))


(defn add [school name grade]
  (assoc school grade (conj (get school grade) name)))


(defn sorted [school] 
  (into {} (sort-by first school))
  )

