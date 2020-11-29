(ns bitsyntax.core
  (:require
   [instaparse.core :as insta :refer [defparser]]
   [clojure.math.numeric-tower :as math]
   [clojure.java.io :as io])
  (:import
   (java.lang String)
   (java.util BitSet)
   (java.io File DataOutputStream
            ByteArrayOutputStream FileOutputStream)))

(def parser
  (insta/parser
   "bitSyntax = #'<<' [segment | ws]* #'>>'
   segment = string | identifier | specifier | number | unit
   specifier = number
   string = #'\"' identifier #'\"'
   identifier = #'[a-zA-Z]*'
   number = #'[0-9]+'
   unit =  number | number ':' specifier
   ws = #'[\\s,]*'"))

(def transform-options
  {:bitSyntax
   (fn [& sOrWs]
     (vec
      (drop-last 1 (drop 1 sOrWs))))
   :ws (fn [_])  
   :number (fn [n] (read-string n))
   :unit (fn [number & size]
           [number size])
   :identifier symbol})

(defn parse [input]
  (->> (parser input) (insta/transform transform-options)
       (filter
        (complement nil?))))

(parse "<<1 17 42>>")
;; => [:bitSyntax "<<" [:segment 1] [:ws " "] [:segment 17] [:ws " "] [:segment 42] ">>"]
(parse "<<\"abc\">>")
;; => [:bitSyntax "<<" [:segment [:string "\"" [:identifier "abc"] "\""]] ">>"]
(parse "<<1 7 43:16>>")
(parse "<<2,1,0>>")

(parse "<<A>>")

