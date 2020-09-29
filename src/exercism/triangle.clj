(ns triangle)

(defn is-valid? [x y z]
  (and (every? #(< 0 %) [x y z])
    (and
      (>= (+ y z) x)
      (>= (+ z x) y)
      (>= (+ x y) z))))

(defn scalene? [x y z]
  (and
    (is-valid? x y z)
    (not= x y)
    (not= y z)
    (not= z x)
    (not= x y z)
    (not= 0 x y z)))


(defn equilateral? [x y z]
  (and
    (not= 0 x y z)
    (= x y z)))

(defn isosceles? [x y z]
  (and
    (not= 0 x y z)
    (is-valid? x y z)
    (or (= x y)
      (= y z)
      (= z x))))
