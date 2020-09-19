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
