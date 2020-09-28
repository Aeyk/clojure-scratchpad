(ns robot-name)

(defn robot []
  (let [alphabet (map char (range 65 91))
        r1 (first (shuffle alphabet))
        r2 (first (shuffle alphabet))
        [d1 d2 d3] (shuffle (range 10))]
    (str r1 r2 d1 d2 d3)))
    
              
(defn robot-name [r]
  (robot))


(defn reset-name [robot] ;; <- arglist goes here
  ;; your code goes here
  )
