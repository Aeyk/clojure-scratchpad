(ns codeforces.watermelon)

(let [x (Integer/parseInt (read-line))]
  (if (and (zero? (mod x 2)) (< 2 x))
    "YES"
    "NO"))
