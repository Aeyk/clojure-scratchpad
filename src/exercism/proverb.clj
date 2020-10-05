(ns proverb)

(defn recite-pair [a b]
  (str "For want of a "a " the " b " was lost." "\n"))

(defn recite-end  
  [a]
  (if (or (empty? a) (nil? a))
    ""
    (str "And all for the want of a " a ".")))


(defn recite [xs]
  (let [fx (first xs)]                    
      (loop [xs xs acc ""]        
        (if (>= 1 (count xs))
          (str acc (recite-end fx))          
          (recur
            (rest xs)
            (str acc (recite-pair (first xs) (second xs))))))))


(recite '())

