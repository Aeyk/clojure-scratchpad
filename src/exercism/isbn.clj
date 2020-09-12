(ns exercism.isbn
  (:require [clojure.edn :as edn]
            [clojure.spec.alpha :as spec]
            [clojure.test :refer [deftest is testing]]            
            [clojure.spec.test.alpha :as spec-test]
            [clojure.spec.gen.alpha :as spec-gen]))

(defn seperate-digits
  "(digitize 1000)
  ;; => (1 0 0 0)
  (digitize 666)
  ;; => (6 6 6)"
  [n]
  (remove nil?
    (replace {'X 10 'x 10}
      (mapv edn/read-string
        (re-seq #"\d|x|X?"
          (.toString n))))))

;;To verify an ISBN, calculate 10 times the first digit, plus 9 times the second digit, plus 8 times the third digit and so on until we add 1 time the last digit. If the final number leaves no remainder when divided by 11, the code is a valid ISBN

(defn isbn? [isbn] ;; <- arglist goes here
  (let [weights
        (reverse (range 1 11))
        digits
        (seperate-digits (str isbn))]
    (zero?
      (mod
        (reduce +
          (map (fn [[a b]]
                 (* a b))
            (into (sorted-map)
              (zipmap weights digits))))
        11))))

;; (let [weights
;;       (reverse (range 1 11))
;;       digits
;;       (seperate-digits "019852663")]
;;   (mod (reduce +
;;       (map
;;         (fn [[a b]]
;;           (* a b))
;;         (into (sorted-map) (zipmap weights digits))))
;;     11))
;; ;; => 225

;; (let [weights
;;       (reverse (range 1 11))
;;       digits
;;       (seperate-digits "0198526636")]
;;   (mod (reduce +
;;       (map
;;         (fn [[a b]]
;;           (* a b))
;;         (into (sorted-map) (zipmap weights digits))))
;;     11))
;; ;; => 225
