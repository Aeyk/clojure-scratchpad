(ns paper.fold-tutorial)
;; <2020-09-22 Tue 15:26>
;; https://www.youtube.com/watch?v=rbuxMEtLYQQ

;; sum :: [Int] -> Int
;; sum [] = 0
;; sum (x:xs) = x + (sum xs)

(defn sum* [xs]
  (if (empty? xs)
    0
    (+ (first xs) (sum* (rest xs)))))
(sum* (range 11))
;; => 55

;; all :: [Bool] -> Bool
;; all [] = True
;; all (x:xs) = x && (all xs)

(defn all* [bools]
  (if (empty? bools)
    true
    (and (first bools) (all* (rest  bools)))))
(all* [false false])
;; => false
(all* [])
;; => true

;; length :: [a] -> Int
;; length [] = 0
;; length (_:xs) = 1 + (length xs)

(defn length* [countable]
  (if (empty? countable)
    0
    (inc (length* (rest countable)))))
(length* [])
;; => 0
(length* (range 4))
;; => 4

;; map :: (a -> b) -> [a] -> [b]
;; map f [] = 0
;; map f (_:xs) = (f x) : (map f xs)


(defn map* [f xs]
  (if (empty? xs)
    []
    (conj (map f (rest xs))
      (f (first xs)))))
(map* inc [])
;; => []
(map* inc (range 4))
;; => (1 2 3 4)

;; rec :: [a] -> [b]
;; rec [] = v
;; rec (x:xs) = (f x (rec xs)) ;; i translated this dunno if its true;
;; -- where f is a reducing function
;; -- f :: [a] -> [b] -> c ??
