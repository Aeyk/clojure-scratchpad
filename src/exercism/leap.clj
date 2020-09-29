(ns leap)
;; on every year that is evenly divisible by 4
;;   except every year that is evenly divisible by 100
;;     unless the year is also evenly divisible by 400
 
(defn leap-year? [year]
  (and
    (zero? (mod year 4))
    (or (not (zero? (mod year 100)))
      (zero? (mod year 400)))))

