(ns bitsyntax.scratch
  (:require [instaparse.core :as insta :refer [defparser]])
  (:require [clojure.data.int-map :as i])
  (:require [clojure.core.reducers :as reducers])
  (:require [clojure.math.numeric-tower :as math])
  (:require [clojure.java.io :as io])
  (:require [octet.core :as buf])
  (:require [octet.spec :as bspec])
  #_(:require [byte-streams.byte-streams] :refer [convert]) ;; ? why ?
  (:import 
   (java.lang String)
   (java.util BitSet)
   (java.io File DataOutputStream 
     ByteArrayOutputStream FileOutputStream)))

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

;; <2020-10-13 Tue 12:40>
;; [[https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.66.2544&rep=rep1&type=pdf][Applications, Implementation and Performance Evaluation of BitStream Programming in Erlang" by Gustafsson and Sagonas - Sec4. Implementation]]
;;
;; [[https://clojuredocs.org/clojure_core/clojure.core/bit-not][bit-not]] : Bsnot :: Clojure : Erlang ?
;; Bsnot is actually from a different paper, I think, 
;;  still on BitStreams/BitSyntax in Erlang though.
;;

;; <2020-10-13 Tue 13:09> Me remebering Java's rich library ecosystem-- 
;; I'll write a wrapper to [[https://commons.apache.org/proper/commons-compress/jacoco/org.apache.commons.compress.archivers.zip/BitStream.java.html][Apache Commons BitStreams]]. ... 
;; Oh Wait, that's a Stream... In java, streams don't hold a size?
;; They're kind of similar to channels, futures, promises, (lazy) lists, 
;; in that you just ask for next. That means accessing the ends of large 
;; bitstreams will be too slow. BitArray it is.
;;
;;
;;
;; (def base-stream-example1 ;; can I give type hints anywhere for any reason? ;;no
;;   {:header 
;;    {:data  ^:Array [] 
;;     :size  ^:Integer n 
;;     }})

;; base-stream / sub-stream
;; base-stream
(def base-stream-empty-example
  {:header 
   {:data []
    :size 0}})

(def base-stream-cafe-babe-example
  {:header 
   {:data [0xCA 0xFE 0xBA 0xBE]
    :size 4}})

(defn BaseBitStream 
    [{:keys [data size] :as header}]
  (if (or (empty? header)
        (nil? header))
    (java.util.BitSet. 0)
    (let [base-stream
          (java.util.BitSet. size)]
      (BitSet/valueOf 
        (byte-array data)))))


(BaseBitStream {})
(BaseBitStream (get-in base-stream-empty-example [:header]))
(BaseBitStream (get-in base-stream-cafe-babe-example [:header]))
;; => #object[java.util.BitSet 0x75049afd "{1, 3, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31}"]

;; sub-stream
(def sub-stream-example1 
  {:header 
   {:data []
    :size 0
    :offset 0}})

;;; Section 4.1 
;;;  The sub-stream structure contains a header field,
;;;  a size field,an offset field, and a pointer to a BaseStream. 
(defn SubStream 
    [{:keys [data size offset base-stream] :as header}]
  {:header header
   :offset (:size header)
   :data data
   :size size})



(defn put-integer [bitstream offset size]
  (map unsign-byte
    (.toByteArray
      (.get bitstream offset (- size offset)))))

(put-integer (BaseBitStream (get-in base-stream-cafe-babe-example [:header]))
  0 32)

 (defn put-bitstr [bitstream offset size]
  (put-integer bitstream offset size))

;; !! [[https://github.com/cemerick/clojure-type-selection-flowchart][Clojure Type Selection Flowchart]] !!
;; | ? | Extending Java Class      | YES  |
;; |---+---------------------------+-----|
;; | ? | Performance Sensitive     | YES |
;; |---+---------------------------+-----|
;; | ? | Modeling a domain val     | ?   |
;; |   | (does it benfit from      | ?   |
;; |   | added hash-map semantics) | ?   |
;; |---+---------------------------+-----|
;;
;; I am unsure if I am modeling a 
;; domain value, and what that entails.
;;
;; [[https://wiki.c2.com/?TheValueOfDomainModels][Value of Domain Models - C2Wiki]]
;; What a rambling document... Reads like a comment section. 
;; It appears OOP and FP has differing ideas to what "Domain Model" is / looks like, maybe?
;;
;; [[https://medium.com/@naveennegi/thoughts-on-domain-driven-design-in-functional-languages-83c43ec518d][Domain-driven design in FP]]
;; #+begin_quote
;; In [[https://youtu.be/YR5WdGrpoug?t=928][this]] talk, Rich Hickey talks about aggregate... He gives a great guideline 
;; on how we can implement them in Clojure.
;;
;; The idea behind aggregate is to enforce consistency and invariants. 
;;
;; An aggregate is a place where invariants are enforced and act as a consistency boundary. 
;;
;; When one part of the aggregate is updated, other parts might also need to be 
;; updated to ensure consistency.
;; #+end_quote
;;
;;
;; [[https://docs.oracle.com/javase/7/docs/api/java/util/BitSet.html][java.util.BitSet]]


;; unsign those ints https://stackoverflow.com/questions/4266756/can-we-make-unsigned-byte-in-java
(defn unsign-byte [x] (bit-and 0xFF x)) 


;; <2020-10-13 Tue 15:54>
(def word (int-map/merge 
            (apply int-map/int-map (interleave (range 1e3) (range 1e3))) 
             (int-map/int-map (range 1e3))))

(defn range->int-map [r]
  (apply int-map/int-map (interleave (range (count r)) r)))

(range->int-map  (range 4.9e9))

(def byte 
  (range->int-map  (repeat (math/expt 2 8) 0)))

(def cafe-babe 
  (range->int-map (String. (byte-array   [0xCA 0xFE 0xBA 0xBE]))))
(OutputStream.) "cafebabe_test.dat" (vals cafe-babe)

(def base-stream-cafe-babe-example
  {:header 
   {:data [0xCA 0xFE 0xBA 0xBE]
    :size 4}})

(FileOutputStream.
  (File. "cafebabe_test.dat"))

(.write (ByteArrayOutputStream.) (map long [0xCA 0xFE 0xBA 0xBE]) 0 0) 

(with-open [fd (io/output-stream "cafebabe_test.dat")]
  (for [byte ]
    (.write 
      fd )))

(spit "cafebabe_test.dat"
  (into-array Byte/TYPE (map byte)))
;; = [:expr [:openparen "("] [:expr [:openparen "("] [:closeparen ")"]] [:closeparen ")"]

;; <2020-10-13 Tue 18:17>
;; http://funcool.github.io/octet/latest/
(def cafe-babe-spec (bspec/spec buf/short buf/short buf/short buf/short))
(def my-buffer (buf/allocate 8 {:type :direct}))
(buf/write! my-buffer [0xCA 0xFA 0xBA 0xBE] cafe-babe-spec)
(octet.util/hex-dump my-buffer)

(defn base [decimal base]
  (Integer/parseInt  (str (bigint decimal)) base))


(map hex (buf/read my-buffer cafe-babe-spec))

(defn hexi [number]
  (->base number 16))

(defn bini [number]
  (Integer/toBinaryString number))

(defn deci [number]
  (->base number 10))
;;; <2020-10-13 Tue 20:31>

;; <2020-10-16 Fri>
;; a bit is a either 0 or 1
;; a byte is 8 bites, 0-indexed (0-7)
;; its represented as an int-map.
;; it will usually be divisibles or powers of 2 but 
;; doesnt have to be that way.

(defn binary-int-set
  [bitset] 
 {:pre [(every? #(or (= 0 %) (= 1 %)) (vals bitset))]}
  (for [v (vals bitset)]
    v))

(defn bitset [size] ;; {:pre [(zero? (mod size 2))]}
   (apply i/int-map (vec (interleave (range size) (repeat 0)))))

(defn bitarray [bs]
  (vec (vals bs)))

(def my-buffer (buf/allocate 8 {:type :direct}))

(buf/write! my-buffer (bitarray (bitset 8)) )

