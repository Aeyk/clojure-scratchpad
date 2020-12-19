(ns svg-generator
  (:require [clojure.math.numeric-tower :as math]
            [analemma.svg :as svg]
            [analemma.charts :as charts]
            [hiccup.core :as html]))

(spit
 "test-1.svg"
 #_(emit-svg))
(let [x (range -1 1 0.005)
      y1 (map #(math/expt 1000 %) x)
      y2 (map #(math/expt 10 %) x)
      y3 (map #(math/expt 10 %) x)]
  (-> (charts/xy-plot
       :minx -1
       :xmax 1
       :ymin 1
       :maxy 1)
      (map #(charts/add-points
             (vector x %) :transpose-data?? true)
           [y1 y2 y3])
      #_(charts/add-points [x y1] :transpose-data?? true)
      #_(charts/add-points [x y2] :transpose-data?? true
                           :color (svg/rgb 255 0 0))))


(spit "hello.svg"
      (html/html
       [:svg#artistry-aint-dead
        {:viewBox "-400 -500 800 800" :xmlns "http://www.w3.org/2000/svg"}
        (map draw-circle-nth-around-circle (range 0 (inc satellite-count) 1))
        #_[:circle {:cx 50 :cy 50 :r 30
                  :stroke "white"
                    :fill "transparent"}]]))

(defn polar->cartesian [cx cy r angle-in-degrees]
  (let [angle-in-radians (* angle-in-degrees (/ java.lang.Math/PI 180.0))]
    {:x (* (java.lang.Math/cos angle-in-radians)
           (+ cx r))
     :y (* (java.lang.Math/sin angle-in-radians)
           (+ cy r))}))

(def satellite-count 100)
(def c 100)

(defn draw-circle [x r y]
  [:circle {:cx x :cy y  :r r
            :stroke "white"
            :fill "transparent"}])
;;; https://stackoverflow.com/questions/28992878/svg-a-circle-of-circles
(defn draw-circle-nth-around-circle [n]
  (let [º-of-seperation (/ 360 satellite-count)
        coords (polar->cartesian c c 100 (* º-of-seperation n))]
    (draw-circle (:x coords) (:y coords) 3)))

;; for(var n=0; n<number_of_satellite_circles; n++){
;;      var degrees_of_separation = 360/number_of_satellite_circles
;;      var angle_as_degrees = degrees_of_separation * n
;;      var coordinates = polarToCartesian(cx, cy, radius_of_satellites_from_center, angle_as_degrees)
;;      document.getElementById('my_svg').appendChild( drawCircle(coordinates.x,coordinates.y,radius_of_small_circles) )

