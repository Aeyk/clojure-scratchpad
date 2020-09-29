(ns image
  (:require [quil.core :as q :include-macros true]))

(def turtle (atom {:x 10 :y 10}))
(def direction (atom {:x 1 :y 0}))


(defn x+ [] 
  (reset! turtle (assoc @turtle :x (inc (:x @turtle)))))

(defn y+ []
  (reset! turtle (assoc @turtle :y (inc (:y @turtle)))))

(defn x= [x] 
  (reset! turtle (assoc @turtle :x x)))

(defn y= [y]
  (reset! turtle (assoc @turtle :y y)))



(map str (.getMethods java.util.Random))

(.nextBoolean (java.util.Random.))
;; => false
;; => true
;; => false
;; => false
;; => false
;; => true

(defn draw []
  (let [[x y] @direction]
    (reset! turtle (merge-with + @turtle @direction)))
  
  (q/fill 128
    )
  (q/rect
    (q/mouse-x) (q/mouse-y) 15 15))

(q/defsketch my

  :size [500 500]
  ;;:renderer :p3d
  :draw draw)
