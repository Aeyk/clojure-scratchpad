(ns clojure-scratchpad.joy-of-clojure)

(defn initial-board []
  [\r \n \b \q \k \b \n \r
   \p \p \p \p \p \p \p \p
   \- \- \- \- \- \- \- \-
   \- \- \- \- \- \- \- \-
   \- \- \- \- \- \- \- \-
   \- \- \- \- \- \- \- \-
   \p \p \p \p \p \p \p \p
   \r \n \b \k \q \b \n \r])



(def ^:dynamic *file-key* \a)
(def ^:dynamic *rank-key* \0)

(defn- file-component [file]
  (- (int file) (int *file-key*)))

(defn- rank-component [rank]
  (->> (int *rank-key*)
    (- (int rank))
    (- 8)
    (* 8)))

(defn- index [file rank]
  (+ (file-component file)
    (rank-component rank)))

(defn lookup [board pos]
  (let [[file rank] pos]
    (board (index file rank))))

(defn lookup2 [board pos]
  (let [[file rank] pos]
    (board (index file rank))))

(lookup2 (initial-board) "a1")
;; => \r

(letfn [(index [file rank]
          (let [f (- (int file) (int \a))
                r (* 8 (- 8 (- (int rank) (int \0))))
                (+ f r)]))])

(defn lookup3 [board pos]
  (let [[file rank] (map int pos)
        [fc rc]
        (map int [\a \0])
        f (- file fc)
        r (* 8 (- 8 (- rank rc)))
        index (+ f r)]
    (board index)))
            
(lookup2 (initial-board) "a1")
;; => \r



