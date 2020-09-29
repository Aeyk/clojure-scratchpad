(ns binary-search)

(def ls (range 10))
;; => (0 1 2 3 4 5 6 7 8 9)
(first ls)

(defn search-for [s xs]
    (loop [c 0
               xs xs]     
          (cond
            (or 
              (= s (first xs))
              (empty? xs))		c  
            (not= s (first xs)) 	(recur
                                          (inc c)
                                          (rest xs))))

  
  )


(defn middle [xs]
  (nth xs 1))

