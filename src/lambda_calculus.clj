(ns lambda-calculus)
;;; matt.might.net/articles/implementing-a-programming-language/

(((λ f . (λ x . (f x)))
  (λ a . a))
 (λ b . b))
;; closure over (fn b . b) ?


;;; Omega (Non-terminating)
((λ f . (f f))
 (λ f . (f f)))


(fn f . (f f)) ;; infinitely recurse on self applied to self

;; i.e
(fn f . (f f))
;; expands to
(fn f . ((fn f . (f f))
	 (fn f . (f f))))
;; expands to
(fn f . ((fn f .
	     ((fn f . ((fn f . (f f))
		       (fn f . (f f))))

	      (fn f . ((fn f . (f f))
		       (fn f . (f f))))))
 	(fn f .
	     ((fn f . ((fn f . (f f))
		       (fn f . (f f))))

	      (fn f . ((fn f . (f f))
		       (fn f . (f f))))))))





(defn evallc [e env]
  (cond (symbol? e)
        (first (rest (get env e)))
        (= (first e) 'λ)
        (conj env e)
        :else
        (applylc
          (evallc (first e) env)
          (evallc (second e) env))))

(defn applylc [f x]
  (evallc
    (rest (rest (first f))))  
  (cons (list (second (first f)) x)
    (rest f)))



(evallc '(λ f (f f)) [])


