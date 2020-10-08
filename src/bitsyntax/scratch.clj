(ns bitsyntax.scratch
  (:require [instaparse.core :as insta :refer [defparser]]))

;; https://github.com/Engelberg/instaparse
;; https://cljdoc.org/d/instaparse/instaparse/1.4.10/doc/abnf-input-format
(insta/set-default-input-format! :abnf)

(def phone-ebnf
  (slurp "https://raw.githubusercontent.com/Engelberg/instaparse/master/test/data/phone_uri.txt"))a
(defparser valid-phone-number
  phone-ebnf)

(defparser valid-7bit-number
  "byte = 7 BIT")

valid-phone-number
(valid-7bit-number "0101010")
(insta/set-default-input-format! :ebnf)

(defparser bitmap-file-header
  "bitmap-file-header = headerfield size reserved offset
   BYTE = %x0-256
   headerfield = 'BM'/'BA'/'CI'/'IC'/'PT'
   size = 4 BYTE
   reserved = 4 BYTE
   offset = 4 BYTE")

(def example_bmp (apply str (map #(char  %)
                              (take 14 (slurp "/home/malik/bmp_24.bmp")))))

(bitmap-file-header example_bmp)

(defparser bit
  "b = 1 BIT")
(bit "0")

(def unambiguous-tokenizer
  (insta/parser
    "sentence = token (<whitespace> token)*
     <token> = keyword | !keyword identifier
     whitespace = #'\\s+'
     identifier = #'[a-zA-Z]+'
     keyword = 'cond' | 'defn'"))

(def digit-parser
  (insta/parser "integer = sign digit*
   sign = ['' / '+' / '-'?]
   digit = ('0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9') ;"))

(def binary-seq
  (insta/parser
    "
<binary-digit> = ('0' | '1')*;
<binary-seq> ::= <binary-digit> | <binary-digit> <binary-seq>"))


(def hex-seq (insta/parser "hex = %x00-ff"  :input-format :abnf) )
(binary-seq "1111111")
(hex-seq "B")

(digit-parser "-91000")
;; => [:integer [:sign "-"] [:digit "9"] [:digit "1"] [:digit "0"] [:digit "0"] [:digit "0"]]

(unambiguous-tokenizer "hello world")


(def left-unfolder
  (insta/parser "reduce = 'a' | reduce 'a' " ))

(def right-unfolder
  (insta/parser "reduce =  'a' reduce  | 'a' " ))

(left-unfolder "aaaa")
;; => [:reduce [:reduce [:reduce [:reduce "a"] "a"] "a"] "a"]

(right-unfolder "aaaa")
;; => [:reduce "a" [:reduce "a" [:reduce "a" [:reduce "a"]]]]


(def well-balanced-bracked
  (insta/parser "expr = openparen  closeparen | openparen expr closeparen
openparen = '('
closeparen = ')'
"))

(well-balanced-bracked "(())")
