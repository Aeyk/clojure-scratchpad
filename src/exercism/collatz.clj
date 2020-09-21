;;; Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1.
;;; Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1
;;	eventually.
;;;
;;; Given a number n, return the number of steps required to reach 1.


(defn collatz [n]
  (println n)
  (if (= 1 n)
    n
    (cond
      (even? n) (recur (/ n 2))
      (odd? n) (recur (+ (* n 3) 1)))))

