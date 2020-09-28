(ns phone-number)

(defn number [n]
  (apply str 
    (re-seq #"\d{0,3}\d{0,3}\d{0,4}" n)))


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
