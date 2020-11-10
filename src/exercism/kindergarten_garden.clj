(ns kindergarten-garden
  (:require [clojure.string :as str]))

(def kids (map (comp keyword #(str/lower-case %)) 
            ["Alice" "Bob" "Charlie" "David"
             "Eve" "Fred" "Ginny" "Harriet"
             "Ileana" "Joseph" "Kincaid" "Larry"]))

(defn letter->plant [letter]
  (case letter
    \V :violets
    \R :radishs
    \G :grass
    \C :clover))

(defn head-kid [s]
  (map letter->plant 
    (flatten 
      (map #(take 2 %)
        (str/split s #"\n")))))

(defn pop-kid [s]
  (str/join "\n"
    (map 
      #(apply str %) 
      (map #(drop  2 %)
        (str/split s #"\n")))))

(defn calculate-garden [ls]
  (loop [nls []
         ls ls]
    (let [hd (head-kid ls)]
      (if (empty? ls)
        nls
        (recur (conj nls (vector  hd))
          (pop-kid ls))))))


(defn garden 
  ([n]
   (zipmap kids 
     (calculate-garden n)))
  ([n students] 
   (for [student (map (comp keyword #(str/lower-case %))
       students)]
     (get (calculate-garden n)
       students))))



(let [string   "VCRRGVRG\nRVGCCGCV"
      students ["Samantha" "Patricia" "Xander" "Roger"]
      surprise-garden (garden string students)]
  (= [:violets  :clover   :radishes :violets]
    (:patricia surprise-garden))
  (= [:radishes :radishes :grass    :clover]
    (:roger    surprise-garden))
  (= [:radishes :grass    :clover   :violets]
    (:xander   surprise-garden))
  (= [:grass    :violets  :clover]   :grass)
  surprise-garden)







