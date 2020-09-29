(ns scrabble-score)

(def scores
  (reduce merge
    [(apply hash-map (interleave [\A, \E, \I, \O, \U, \L, \N, \R, \S, \T] (repeat 1)))
     (apply hash-map (interleave [\D, \G]              (repeat 2)))
     (apply hash-map (interleave  [\B, \C, \M, \P]     (repeat 3)))
     (apply hash-map (interleave  [\F, \H, \V, \W, \Y] (repeat 4)))
     (apply hash-map (interleave  [\K]                 (repeat 5)))
     (apply hash-map (interleave  [\J, \X]             (repeat 8)))
     (apply hash-map (interleave  [\Q, \Z]             (repeat 10)))]))

(defn score-letter [l]
  (get scores (first (clojure.string/upper-case l))))

(defn score-word [w]
  (reduce + (map score-letter (seq w))))

