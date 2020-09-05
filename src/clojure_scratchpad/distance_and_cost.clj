(ns clojure-scratchpad.distance-and-cost)

(def booking
  { :id 8773
   :customer-name "Alice Smith"
   :catering-notes "Vegetarian on Sundays"
   :flights
   [{:from {:lat 48.9615 :lon 2.4372 :name "Paris Le Bourget Airport"},
     :to {:lat 37.742 :lon -25.6976 :name "Ponta Delgada Airport"}},
    {:from {:lat 37.742 :lon -25.6976 :name "Ponta Delgada Airport"},
     :to {:lat 48.9615 :lon 2.4372 :name "Paris Le Bourget Airport"}}]})


(def mapjet-booking
  {:id 8773
   :customer-name "Alice Smith"
   :catering-notes "Vegetarian on Sundays"
   :flights
   [{:from {:lat 48.9615 :lon 2.4372 :name "Paris Le Bourget Airport"},
     :to {:lat 37.742 :lon -25.6976 :name "Ponta Delgada Airport"}},
    {:from {:lat 37.742 :lon -25.6976 :name "Ponta Delgada Airport"},
     :to {:lat 48.9615 :lon 2.4372 :name "Paris Le Bourget Airport"}}]})

(defn itinerary
  [{{from-lat :lat from-lon :lon} :from
    {to-lat :lat to-lon :lon} :to    
    transport :transport
    vehicle :vehicle}]
  {:distance 0 :cost 0 :duration 0})

;; To compute the distance, we are going to use the "Euclidian distance,"
;; FWIW I do NOT reconginze the formula they have listed.
;; I am familiar with
;; sqrt(x_2 - x_{1})^2 +  sqrt(y_{2} - y_{1})^2


(defn distance
  [{{lat2 :lat lon2 :lon} :from
    {lat1 :lat lon1 :lon} :to}]  
  (* 110.25
    (Math/sqrt
      (*
        (+
           (Math/abs (- lat1 lat2))
           (Math/cos lat1))
        (- lon2 lon1)))))

(defn distance
  [{{lat2 :lat lon2 :lon} :from
    {lat1 :lat lon1 :lon} :to}]  
  (* 110.25
    (Math/sqrt      
      (+
        (Math/pow
          (- lat1 lat2)
          2)
        (Math/pow
          (- lon2 lon1)
          2)))))

(defn my-sqrt
  [& args]
  (apply (comp #(Math/sqrt %) +) args))

(def test-flight
  {:from {:lat 2 :lon 3}
   :to   {:lat 5 :lon 6}})

(let [{{lat2 :lat lon2 :lon} :from} test-flight]
  lat2)

(defn distance
  [flight]
  (let [{{lat2 :lat lon2 :lon} :from
         {lat1 :lat lon1 :lon} :to}
        flight]
    (* 110.25 ;; what is this constant doing in a euclidiean distance fn
      (Math/sqrt
        (*
          (+
            (Math/pow
              (- lat2 lat2)
              2)
            (Math/cos lat1))
          (Math/pow (- lon2 lon1) 2))))))

;; (distance test-flight)

(defn )

