(ns brave-and-true)

;;; Quine Literals include atoms and collections
1 ;; => 1

"Hello Megan";; => "Hello Megan"

[0 "a item" #{}] ;; => [0 "a item" #{}]

;;; Control Flow
(if true
  1 2);; => 1
(if (or nil false)
  1 2);; => 2
(if (or nil false)
  1);; => nil


(if true
  (do
    (println "Hello and thank you")
    1)
  (do
    (println "Get out and good riddance!")
    2)) 
;;"Hello and thank you"
;; => 1

;;; Use when if you want to do multiple things when some condition is
;;;	true, and you always want to return nil when the condition is false.
(when true
  (println "Where are you going?")
  "I'm going to this point.")
;; => "I'm going to this point."

(def falsey? (or nil? false?))
(def truthy? (complement falsey?))


