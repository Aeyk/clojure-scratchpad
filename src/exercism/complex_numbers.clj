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

(defn conjugate [[a b]] ;; <- arglist goes here
  ;; your code goes here
  )
;;; The sum/difference of two complex numbers involves adding/subtracting
;;; their real and imaginary parts separately:

;; (a + i * b) + (c + i * d) =
;;; 	(a + c) + (b + d) * i,
;;;	   (a + i * b) - (c + i * d) =
;;; 	(a - c) + (b - d) * i
(defn add [[a b] [c d]]
   [(+
        (+ a c)
        (+ b d))
      (- (* a b)
        (* c d))])



(defn sub [[a b] [c d]] ;; <- arglist goes here
  ;; your code goes here
  )

(defn mul [[a b] [c d]] ;; <- arglist goes here
  ;; your code goes here
)

(defn div [[a b] [c d]] ;; <- arglist goes here
  ;; your code goes here
)
