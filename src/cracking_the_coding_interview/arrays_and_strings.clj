(ns cracking-the-coding-interview.arrays-and-strings)

;;;  Implement an algorithm to determine
;;; 	if a string has all unique
;;;	characters.
(let [s "stringaaaa"]
  (into
    (sorted-set)
    (clojure.string/split s
      #"")))
(defn second-<
  [x y]
  (let [c (compare (second x) (second y))]
    (if (not= c 0)
      c
      (compare x y))))


;;;  What if you can not use
;;;	additional data structures?
; I don't know what idomatic clojure without a hashmap would be.
(let [s "string"]  
  (loop [chs (clojure.string/split s #"")
         known #{}]        
    (if (empty? chs)
      known
      (if (contains? known (first chs))
        (recur (rest chs)
          (conj known (first chs)))))))

;; What if you could not use any
;;	preexisting datastructures



;;; Write code to reverse a C-Style String
;;;	(C-String means that “abcd” is
;;;	represented as five characters,
;;;	including the null character


(defn reverse-c-string [cstr]
  (let [cnil
        (take-last 1 cstr)
        cstr (reverse
               (drop-last 1
                 (clojure.string/split
                   cstr
                   #"")))]
    (clojure.string/join 
      (conj (vec cstr) cnil))    
    #_(clojure.string/join 
        cnil)))

(reverse-c-string "Hello World\n\0")


;;;Design  an  algorithm  and  write  code  to  remove  the  duplicate  characters  in  a  string without using any additional buffer  NOTE: One or two additional variables are fineAn extra copy of the array is not
(defn my-dedupe
  [coll]
  (loop [coll  coll
         known []
         pk   (first coll)]
    (if (empty? coll)
      known
      (if (= pk (first coll))
        (recur
          (rest coll)
          known
          pk)
        (recur
          (rest coll)
          (conj known pk)
          (first coll))))))
;; Wow!! I liked this, when I solved it wasn't sure if I solved it.
(my-dedupe (flatten
             (into [] (zipmap (range 10) (range 10)))))
;; => [0 7 1 4 6 3 2 9 5]
(flatten
  (into [] (zipmap (range 10) (range 10))))
;; => (0 0 7 7 1 1 4 4 6 6 3 3 2 2 9 9 5 5 8 8)

;;; TODO: ;Write the test cases for this method


;;; Write a method to decide if two strings are anagrams or not

;;; Count char occurences
;;; Compare

#_(frequencies) "Hello world!"


(defn anagrams?
  [s1 s2]
  (let [s1 (clojure.string/replace s1 #"\s" "")
        s2 (clojure.string/replace s2 #"\s" "")]
    (=
      (frequencies s1)
      (frequencies s2))))

(anagrams?
  "red rum"
  "murder")
;; => true

;;; <2020-09-18 Fri 22:29>
;;; Write a method to replace all spaces in a string with ‘%20’
(defn space-encoding [s]
  (clojure.string/replace s " " "%20"))
(space-encoding "Hello world!")
;; => "Hello%20world!"

;;;; <2020-09-18 Fri 22:30>

;;; Given  an  image  represented  by  an  NxN
;;; 	matrix,  where  each  pixel  in  the  image
;;;	is  4 bytes, write a method to rotate the image
;;;	by 90 degrees  Can you do this in place?

(defn znxm [n m]
  (for [x (repeat n 0)]    
    (repeat m x)))

#_(defn znxm [n m]
  (for [x (range 1 (inc n))]
    (cycle x)
    #_(repeat m x)))

(defn nxm [n m]
  (partition n
    (apply interleave
      (for [x (range n)]
        (repeat m x)))))



(let [nxma (nxm 3 3)]

  (for [x (range (count nxma))]
    (map #(nth (drop 0 nxma) x) nxma))
  )

#_(for [x nxma]
  (map #(nth nxma %) x))

(for [x (count nxm)]
  (map #(nth % x))
  (vec (map vec nxm)))
  
;; => ((0 1 2) (0 1 2) (0 1 2))



(defn coordsnxm [n m]
  (for [x (range n)
        y (range m)]
    [x y]))

(coordsnxm 2 2)
;; => ([0 0] [0 1] [1 0] [1 1])

(map first (nxm 4 3))

(for [row (nxm 4 3)
      :let [nxm (nxm 4 3)]]
  (map #(nth % 0) nxm))


(map #(nth % 0) (nxm 4 3))


(defn rotate-clockwise
  [m]
  (for [row (range (inc (count m)))]
    (map #(nth % row) m)))

;; => (nxm 4 3)
((0 1 2 3)
 (0 1 2 3)
 (0 1 2 3))
;; (rotate-clockwise (nxm 4 3))
((0 0 0)
 (1 1 1)
 (2 2 2)
 (3 3 3))


;;; That was fun... Hard but fun. <2020-09-18 Fri 23:10>

;; Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0

(for [y (nxm 4 4)]
  (for [x y]
    (zero? x))) #=-'v
((true false false false)
 (true false false false)
 (true false false false)
 (true false false false))

;; =>
((0 1 2 3)
 (0 1 2 3)
 (0 1 2 3)
 (0 1 2 3))

(let [s1 "waterbottle"
      s2 "erbottlewat"]
  (.contains
    (str s1 s1) 
    s2))
;;; https://stackoverflow.com/questions/26386766/check-if-string-contains-substring-in-clojure
;;; <2020-09-18 Fri 23:23>

;; file:///home/malik/Downloads/cracking_the_coding_interview.pdf#Solution%20Chapter%20Arrays%20and%20Strings.indd%3AAnchor%2036
;;; 1.  Check if length(s1) == length(s2)
;;; 	If not, return false2  
;;; 	Else, concatenate s1 with itself and see whether s2 is substring of the 
;;;
;;; ex: s1 = apple, s2 = pleap  ==> apple is a substring of pleappleap 
;;; input: s1 = apple, s2 = ppale ==> apple is not a substring of ppaleppale


(defn substring-of? [s1 s2]
  (if (not= (count s2)
        (count s1)
        false)
    (.contains
      (str s1 s1) 
      s2)))

(substring-of? "Apple" "pp")
;; => true
;; <2020-09-18 Fri 23:26>



