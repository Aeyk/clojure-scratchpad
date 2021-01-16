(ns codeforces.autonomous-vehicle
  (:require
   [hiccup.core :as html]
   [clojure.string :as str]))

;; 512 mb
;; JVM how to set memory usage
;; https://stackoverflow.com/questions/1493913/how-to-set-the-maximum-memory-usage-for-jvm
;; java -Xmx512M

;; n t
;; (then for n lines)
;; bxi byi exi eyi
;; (end lines)

;; n (2 <= n <= 500)
;; t (0 <= t <= 10^9)

;; All coordinates (bx0 by0 ex0 ey0) ... (bxN byN exN eyN) are between 0 and 10^7


(def ex-1 "5 33
4 4 16 4
4 9 14 9
6 11 6 3
11 6 17 6
13 12 13 1")

(def ex-2 "5 70
4 4 16 4
4 9 14 9
6 11 6 3
11 6 17 6
13 12 13 1")

(defn parse-first-line [string]
  (let [[n t]
        (map
         #(Integer/parseInt %)
         (str/split
          string  #"\s"))]
    {:n n :t t}))

(spit "lines.svg"
      (html/html
       [:svg
        {:viewBox "-40 -40 80 80" :xmlns "http://www.w3.org/2000/svg"}
        (let [[fline & rlines] (str/split aex-2 #"\n")
              metadata (parse-first-line fline)]
          (for [line
                (vec rlines)
                :let [[x1 y1 x2 y2] (str/split line #"\s")]]
            [:line {:x1 x1 :y1 y1 :x2 x2 :y2 y2
                    :stroke "black"}]))]))

(defn point-intersects-line [[px py] [lx1 ly1 lx2 ly2]]
  (if
      (or
       (and (<= lx1 px lx2)
            (<= ly2 py ly1))
       (and (<= lx2 px lx1)
            (<= ly1 py ly2))
       (and (<= lx2 px lx1)
            (<= ly2 py ly1))
       (and (<= lx1 px lx2)
            (<= ly1 py ly2)))
    [lx1 ly1 lx2 ly2]))


(defn move-point-down-line [[px py] [lx1 ly1 lx2 ly2]]
  (if (not (point-intersects-line [px py] [lx1 ly1 lx2 ly2]))
    nil
    (cond
      (and
       (> py ly2)
       (== px lx1 lx2))
      [px (inc py)]

      (and
       (> py ly1)
       (== px lx1 lx2))
      [px (dec py)]

      (and
       (> px lx2)
       (== py ly1 ly2))
      [(inc px) py]

      (and
       (> px lx1)
       (== py ly1 ly2))
      [(inc px) py])))

(point-intersects-line [6 4] [6 11 6 3])
(move-point-down-line  [6 4] [6 11 6 3])


(let [[fline & rlines] (str/split ex-2 #"\n")
      metadata (parse-first-line fline)
      lines (map #(str/split % #"\s") rlines)]
  metadata
  #_(map #(Integer/parseInt %) (first lines)))


(let [[fline & rlines] (str/split ex-2 #"\n")
      metadata (parse-first-line fline)
      lines (map #(str/split % #"\s") rlines)]
  (move-point-down-line [6 4]
                        (map #(Integer/parseInt %) (first lines)))
  (loop [time (:t metadata)
           pos (take 2 (first lines))
           current-line  (map #(Integer/parseInt %) (first lines))]
    (if (zero? time)
      [pos current-line]
      (let [pos (move-point-down-line pos current-line)]
        (recur (dec time)
               pos (first (rest current-line)))))))

(let [[fline & rlines] (str/split ex-2 #"\n")
      metadata (parse-first-line fline)]

  fline
  #_(for [line
        (vec rlines)
        :let [[x1 y1 x2 y2] (map #(Integer/parseInt %)
                                 (str/split line #"\s"))]]
    [:x1 x1 :y1 y1 :x2 x2 :y2 y2]))

(parse-first-line "1 2")
