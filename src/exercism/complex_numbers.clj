(ns complex-numbers)

(defn real [[a b]]
  a)


(defn imaginary [[a b]]
  b)

;;; The absolute value of a complex number
;;; z = a + b * i is a real number |z| = sqrt(a^2 + b^2).
(defn abs [[a b]]
  (Math/sqrt
    (apply +
      (map #(Math/pow % 2) [a b]))))



;;; The conjugate of the number a + b * i is the number a - b * i.
(defn conjugate [[a b]]
  [a (- b)])



;;; The sum/difference of two complex numbers involves adding/subtracting
;;; their real and imaginary parts separately:

;; (a + i * b) + (c + i * d) =
;;; 	(a + c) + (b + d) * i,
;;;	   (a + i * b) - (c + i * d) =
;;; 	(a - c) + (b - d) * ib
(defn add [[a b] [c d]]
  (if (zero? a)
    [(- (* a b)
       (* c d))
     (+
       (+ a c)
       (+ b d))]
    [(+ a c)
     (+ b d)]))

(defn sub [[a b] [c d]]
  [(- a c) (- b d)])

;;; (a * c - b * d) + (b * c + a * d) * i.
(defn mul [[a b] [c d]]
  [
   (-
     (* a c)
     (* b d))
   (+ (* b c) (* a d))])

;;; ividing a complex number a + i * b by another c + i * d gives:
;;; (a + i * b) / (c + i * d) =
;;; [ (a * c + b * d)/(c^2 + d^2)
;;; (b * c - a * d)/(c^2 + d^2)] .


(defn div [[a b] [c d]]
  [(/ (+ (* a c)  (* b d))
     (+ (Math/pow c 2)(Math/pow d 2)))
   (/ (+ (* b c) (* a d))
     (+ (Math/pow c 2)(Math/pow d 2)))])
