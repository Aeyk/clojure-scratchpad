j(ns say
  (:require [clojure.edn :as edn]))



(defn num-digitizer [num]
  (reverse 
    (map reverse 
      (partition-all 3
        (reverse 
          (map edn/read-string
            (re-seq #"\d"
              (.toString num))))))))


(let [nd (num-digitizer 1 #_1234567890)]
  (case (count nd)
    4 (str (first nd) " billion ")
    3 (str (first nd) " million ")
    2 (str (first nd) " thousand ")
    1 (str nd "")))

(defn number [num])
;; (defn number [num]
;;   (let [ns [" billion " " million " " thousand " ""]]
;;     (letfn [(defn num-digitizer [num]
;;               (map edn/read-string
;;                 (re-seq #"\d"
;;                   (.toString num))))
;;             (defn tens [n]
;;               (cond
;;                 (< 19 n 30) "twenty"
;;                 (< 29 n 40) "thirty"
;;                 (< 39 n 50) "fourty"
;;                 (< 49 n 60) "fifty"
;;                 (< 59 n 70) "sixty"
;;                 (< 69 n 80) "seventy"
;;                 (< 79 n 90) "eighty"
;;                 (< 89 n 100) "ninety"))
;;             (defn oneizer [num]
;;               (case  num
;;                 0 "zero"  1 "one"
;;                 2 "two"   3 "three"
;;                 4 "four"  5 "five"
;;                 6 "six"  7  "seven"
;;                 8 "eight" 9 "nine"))

;;             ]
      
      
;;       )))

;; (defn hundrendizer [num]
;;   (let [[x & xs] (num-digitizer num)]
;;     x))





;; (if (not  (zero? (first xs)))
;;   (str (tens num) (oneizer (first xs)))
;;   (str 
;;     (tens num)))

;; (hundrendizer 100)

;; (interleave (num-digitizer 1234567890)
;;   [" billion " " million " " thousand " ""])

;; (let [n-digits (count (num-digitizer num))
;;       logs (map #(Math/pow 10 %)(range)) ]
;;   (cond (< 0 n-digits 99)
;;         ))
;; (map (fn [a & as]
;;                      (if (empty? as)
;;                        (say-<10 a)
;;                        (str (say-<10 a)
;;                          (teenizer (first as)))))
;;                 (map num-digitizer
;;                   (filter (complement #(zero? (mod % 10)))
;;                     (range 100))))
;; (map (comp #(str (say-<10 %))
;;                      last num-digitizer))
;; (defn teenizer [n]
;;   (cond
;;     (< 19 n 20) "twenty"
;;     (< 29 n 40) "thirty"
;;     (< 39 n 50) "fourty"
;;     (< 49 n 60) "fifty"
;;     (< 59 n 70) "sixty"
;;     (< 69 n 80) "seventy"
;;     (< 79 n 90) "eighty"
;;     (< 89 n 100) "ninety"))

;; (defn say-<10 [num]
;;   )
;; (defn
;;   say-<20 [num]
;;   )

;; (map say-<20 (range 11 20))
