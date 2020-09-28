(ns phone-number)

(defn number [n]
  (let [n (apply str 
            (re-seq #"\d{0,3}\d{0,3}\d{0,4}" n))]
    (cond (or
            (= 10
              (count n)))
            
          n
          (and (= \1
                   (first n ))
            (= 11 (count n)))
          
          (clojure.string/join (drop 1 n))
          
          (or (= 11 (count n))
            (= 9 (count n)))
          
          "0000000000"
          
          :else n)))


#_(count (number "1-123-245-6565"))
(defn area-code [ns]
  (let [digits (map 
                #(Integer/parseInt %)
                (map (comp str char)
                  (number ns)))]
    (clojure.string/join
      (take 3 digits))))

(defn pretty-print [n] ;; <- arglist goes here
  (let [ac (area-code n)
        n (drop 3 (number n))]
    (apply str "(" ac") "    
        (map clojure.string/join
          [(take 3 n) "-"
           (drop 3 n)])))) 
