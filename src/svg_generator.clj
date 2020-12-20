(ns svg-generator
  (:require [clojure.math.numeric-tower :as math]
            [clojure.math.combinatorics :as combo]
            [analemma.svg :as svg]
            [analemma.charts :as charts]
            [hiccup.core :as html]
            [net.cgrand.enlive-html :as selector]
            [clojure.set :as set]
            [clojure.edn :as edn]))

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
(defn draw-circle [x y r]
  [:circle {:cx x :cy y  :r r
            :fill "transparent"}])

(defn polar->cartesian [cx cy r angle-in-degrees]
  (let [angle-in-radians (* angle-in-degrees (/ java.lang.Math/PI 180.0))]
    {:x (* (java.lang.Math/cos angle-in-radians)
           (+ cx r))
     :y (* (java.lang.Math/sin angle-in-radians)
           (+ cy  r))}))

(def satellite-count  3)
(def c 200)

;;; https://stackoverflow.com/questions/28992878/svg-a-circle-of-circles
(defn draw-nth-circle-around-circle-of-r-radius [n r c]
  (let [satellite-count c
        º-of-seperation (/ 360 satellite-count)
        coords (polar->cartesian c c r (* n º-of-seperation))]
    (draw-circle (:x coords) (:y coords) 10)))

(defn draw-n-circles-grouped-around-circle-of-r-radius [n r group-id]
  [(keyword (str "g#" group-id))
   (map draw-nth-circle-around-circle-of-r-radius
        (range 0 n)
        (repeat r)
        (repeat n))])

(defn draw-n-circles-around-circle-of-r-radius [n r]
  (map draw-nth-circle-around-circle-of-r-radius
       (range 0 n)
       (repeat r)
       (repeat n)))

;;; https://stackoverflow.com/questions/14633363/can-i-apply-a-gradient-along-an-svg-path
(spit "hello.svg"
      (html/html
       [:svg#artistry-aint-dead
        {:viewBox "-400 -400 800 800" :xmlns "http://www.w3.org/2000/svg"}
        [:style "g#a > circle { fill: red; }
g#b > circle { fill: blue; }
g#c > circle { fill: green; }
g > line { stroke: url(#gradient);}
"]
        [:linearGradient#gradient {:x1 "0%" :y1 "0%" :x2 "100%" :y2 "100%"}
         [:stop {:offset "0%" :stop-color "#fff"}]
         [:stop {:offset "25%" :stop-color "#32f"}]
         [:stop {:offset "50%" :stop-color "#03d"}]
         [:stop {:offset "100%" :stop-color "#e1e1"}]]
        (draw-n-circles-grouped-around-circle-of-r-radius 3 100 "a")
        (draw-n-circles-grouped-around-circle-of-r-radius 4 100 "b")
        (draw-n-circles-grouped-around-circle-of-r-radius 5 100 "c")]))

(defn line [[[x1 y1]
             [x2 y2]]]
  [:line {#_#_:stroke "black"
          :x1 x1 :y1 y1 :x2 x2 :y2 y2}])

(do (def svg (html/html
              [:svg#artistry-aint-dead
               {:viewBox "-400 -400 800 800" :xmlns "http://www.w3.org/2000/svg"}
               [:style "
g line {stroke: black;}
g#a circle {
stroke: url(#gradientA);
fill: url(#gradientA);}

g#b circle {
stroke: url(#gradientB);
fill: url(#gradientB);}

g#c circle {
stroke: url(#gradientC);
fill: url(#gradientC);}

"]
               [:linearGradient#gradientA {:x1 "0%" :y1 "0%" :x2 "100%" :y2 "100%"}
                [:stop {:offset "0%" :stop-color "#fff"}]
                [:stop {:offset "100%" :stop-color "#e1e"}]]

               [:linearGradient#gradientB {:x1 "0%" :y1 "0%" :x2 "100%" :y2 "100%"}
                [:stop {:offset "0%" :stop-color "#b3f"}]
                [:stop {:offset "100%" :stop-color "#d20"}]]

               [:linearGradient#gradientC {:x1 "0%" :y1 "0%" :x2 "100%" :y2 "100%"}
                [:stop {:offset "0%" :stop-color "#FD3"}]
                [:stop {:offset "100%" :stop-color "#d2D"}]]
               [:g 
                (draw-lines)]
               (draw-n-circles-grouped-around-circle-of-r-radius 2 100 "a")
               (draw-n-circles-grouped-around-circle-of-r-radius 7 100 "b")
               (draw-n-circles-grouped-around-circle-of-r-radius 9 100 "c")]))
    (spit "hello.svg" svg))

(defn draw-lines []
  (map line
       (partition
        2
        (map vals
             (flatten
              (combo/combinations
               (map
                (comp
                 #(update % :y (comp (fn [e] (Math/round e)) edn/read-string))
                 #(update % :x (comp (fn [e] (Math/round e)) edn/read-string))
                 #(dissoc % :r)
                 #(dissoc % :fill)
                 #(set/rename-keys % {:cx :x :cy :y})
                 #_#(assoc % :fill "black"))
                (map :attrs (selector/select (selector/html-snippet svg) [:circle])))
               2))))))



(defn get-coordinates [doc elem]
  (mapcat
   #(vector {:cx (selector/attr-values % :cx)}
            {:cy (selector/attr-values % :cy)})
   (selector/select (selector/html-snippet doc) elem)))

(defn get-circle-coordinates [doc]
  (get-coordinates doc [:circle]))

(defn lines-to-each-circle []
  (map
   line
   (partition
    2
    (partition
     2
     (flatten 
      (filter (complement nil?)
              (map (comp #(Math/round %) first :cx) (get-circle-coordinates svg))))
     #_(filter (complement nil?)
               (map (comp first :cx) (get-circle-coordinates svg)))))))

#_(defn draw-lines []
  (map line
       (combo/permutations 
        (for [[[a _] [_ b]]
              (partition 2 (map (juxt :cx :cy) (get-circle-coordinates svg)))]
          #_(zipmap
             [:x :y])
          (apply vector (reduce merge a b))))))



