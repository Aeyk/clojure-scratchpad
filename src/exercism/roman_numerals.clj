(ns roman-numerals)

(def rn {1000 :M 500 :D 100 :C 50 :L 10 :X 5 :V 1 :I})

(defn numerals [i] 
  (apply str (loop [rx []
                  x i]    
             (cond
               (zero? x) rx
               (>= x 1000)
               (recur (conj rx 'M) (- x 1000))
               (>= x 500)
               (recur (conj rx 'D) (- x 500))
               (>= x 100)
               (recur (conj rx 'C) (- x 100))
               (>= x 50)
               (recur (conj rx 'L) (- x 50))
               (>= x 10)
               (recur (conj rx 'X) (- x 10))
               (>= x 5)
               (recur (conj rx 'V) (- x 5))
               :else
               (recur (conj rx 'I) (dec x))))))

(numerals 5)
