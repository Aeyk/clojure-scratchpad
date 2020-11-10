(ns clojure-scratchpad.sudoko)

(def b1
  '[3 - - - - 5 - 1 -
    - 7 - - - 6 - 3 -
    1 - - - 9 - - - -
    7 - 8 - - - - 9 -
    9 - - 4 - 8 - - 2
    - 6 - - - - 5 - 1
    - - - - 4 - - - 6
    - 4 - 7 - - - 2 -
    - 2 - 6 - - - - 3])

(defn prep [board]
  (map #(partition 3 %)
    (partition 9 board)))

(prep b1)
;;;(((3 - -) (- - 5) (- 1 -))
;;; ((- 7 -) (- - 6) (- 3 -))
;;; ((1 _ _) (_ 9 _) (_ _ _))
;;; ((7 - 8) (_ _ _) (_ 9 _))
;;; ((9 - -) (4 - 8) (- - 2))
;;; ((- 6 -) (- - -) (5 - 1))
;;; ((- - -) (- 4 -) (- - 6))
;;; ((- 4 -) (7 - -) (- 2 -))
;;; ((- 2 -) (6 - -) (- - 3)))

(defn print-board [board]
  (let [row-sep (apply str (repeat 37 \-))]
    (println row-sep)
    (dotimes [row (count board)]
      (print "| ")
      (doseq [subrow (nth board row)]
        (doseq [cell (butlast subrow)]
          (print (str cell "   ")))
        (print (str (last subrow) " | ")))
      (println)
      (when (zero? (mod (inc row) 3))
        (println row-sep)))))

(-> b1 prep print-board)

(defn rows [board sz]
  (partition sz board))

(defn row-for [board index sz]
  (nth (rows board sz) (/ index 9)))

(defn column-for [board index sz]
  (let [col (mod index sz)]
    (map #(nth % col)
      (rows board sz))))

(column-for b1 2 9)


