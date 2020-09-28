(ns nucleotide-count)
 
;;; https://exercism.io/tracks/clojure/exercises/nucleotide-count/solutions/bc1e2294f9a84d50ad7a3fa73f542648

(defn nucleotide-counts [s]
  (merge {\A 0, \C 0, \G 0, \T 0} (frequencies s)))

(defn count-of-nucleotide-in-strand 
  [n strand]
  {:pre [(#{\G \C \T \A} n)]}
  ((nucleotide-counts strand) n))
