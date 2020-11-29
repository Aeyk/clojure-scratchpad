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
   segment = string | identifier size ? specifierList | number
   specifierList = #'//' specifier specifierTail
   string = #'\"' identifier #'\"'
   identifier = #'[a-zA-Z]*'
   number = #'[0-9]+'
   size = #':' number | #':' identifier
   specifierTail = #'-' specifier
   specifier = 'little' / 'big' / 'signed' / 'unsigned'
    / 'integer' / 'binary' / 'float'
    / unit
   unit = #'unit:' number
   ws = #'[\\s]*'"))

(def transform-options
  {:number read-string})

(defn parse [input]
  (->> (parser input) (insta/transform transform-options)))

(parse "<<1 17 42>>")
