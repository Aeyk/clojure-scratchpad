(ns clojure-scratchpad.exercism)

(defn to-rna 
  "Given a String containing DNA characters (G C T A),
  convert each individual character to it's RNA counterpart:
  (C G A U), in the same respective order."
  [dna]
  (clojure.string/join
    (clojure.string/split
      (clojure.string/escape dna {\G \C \C \G \T \A \A \U})
      #"")))

(to-rna "GCTA")

;; (x1 * 10 + x2 * 9 + x3 * 8 + x4 * 7 + x5 * 6 + x6 * 5 + x7 * 4 + x8 * 3 + x9 * 2 + x10 * 1) mod 11 == 0
(defn check-isbn
  [isbn]
  (doseq [x (reverse (range 1 11))]
    (for [char(clojure.string/split isbn #"")]
      (* (.parseInt char) x))))


(check-isbn "978-3-16-148410-0")
(check-isbn "3-598-21508-8")

