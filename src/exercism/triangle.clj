(ns triangle)

(defn is-valid? [x y z]
  (and (< 0 (+ x y z))
    (or (>= (+ x y) z)
      (>= (+ y z) x))))


(defn equilateral? [x y z]
  )

(defn isosceles? [x y z]
  (and (is-valid? x y z)
    (or (= x y)
      (= y z))))

(defn scalene? [x y z]
  (and (is-valid? x y z)
    (not= x y z)))
