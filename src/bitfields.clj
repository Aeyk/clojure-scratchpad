(ns bitfields
  (:import [io.parsingdata.metal.data ByteStream]))



  #_(:import )

;; http://www.fatvat.co.uk/2009/02/bit-fields-using-clojure.html

(defstruct bit-field :element-width :array-data)

(defn bit-array
  [n]
  (struct bit-field 31 (byte-array (inc (byte (/ n 31))))))

(def onebyte (bit-array 20))

(print onebyte)

(def *parsingdata-api* "")
(clojure.java.javadoc/)

(clojure.java.javadoc/add-remote-javadoc "io.parsingdata.metal")

(clojure.java.javadoc/javadoc io.parsingdata.metal.data.ByteStream)
(defn set-bit!
  [bitfield bit val]
  (let [r (mod bit (bitfield :element-width))
        n (int (/ bit (bitfield :element-width)))
        x (aget (bitfield :array-data) n)]
    (if (not (zero? val))
      (aset (bitfield :array-data) n (bit-or x (bit-shift-left 1 r)))
      (aset (bitfield :array-data) n (bit-xor x (bit-shift-left 1 r))))
    bitfield))

(defn get-bit
  [bitfield bit]
  (let [r (mod bit (bitfield :element-width))
        x (aget (bitfield :array-data) (int (/ bit (bitfield :element-width))))]
    (if (= 0 (bit-and x (bit-shift-left 1 r))) 0 1)))


(get-bit onebyte 0)


;; https://docs.oracle.com/javase/8/docs/api/java/util/BitSet.html
(defstruct bit-field :element-width :bit-data)

(defn bit-set*
  [n]
  (struct bit-field 31 (byte-array (inc (byte (/ n 31))))))


(bit-set 0 0)


(defn bit-set* [bits]
  ())

(keys (ns-publics 'clojure.core))



bb
;; => #object[java.nio.HeapByteBuffer 0x2007291c "java.nio.HeapByteBuffer[pos=0 lim=32 cap=32]"]

(def bmp  (slurp-bytes "/home/malik/bmp_24.bmp"))
(def bmp-buffer (.array (java.nio.ByteBuffer/allocate (count bmp))))
(map
  (comp
    (fn [x] [(char x)
             (int x)
             (format "%08d" (Integer/parseInt (Integer/toBinaryString x)))
             (format "0x%02x" x)])
   (fn [x] (bit-and 0xFF x))) ;; unsign those ints https://stackoverflow.com/questions/4266756/can-we-make-unsigned-byte-in-java
  (for [b (take 5 bmp)]
    b))
;; => ([\B 66 "01000010" "0x42"]
;; [\M 77 "01001101" "0x4d"]
;; [\ö 246 "11110110" "0xf6"]
;; [\Ô 212 "11010100" "0xd4"]
;; [\ 1 "00000001" "0x01"]
;; => (66 77 246 212 1)
;; => ("01000010" "01001101" "11110110" "11010100" "00000001")


;;; https://stackoverflow.com/questions/23018870/how-to-read-a-whole-binary-file-nippy-into-byte-array-in-clojure
(defn slurp-bytes
  "Slurp the bytes from a slurpable thing"
  [x]
  (with-open [out (java.io.ByteArrayOutputStream.)]
    (clojure.java.io/copy (clojure.java.io/input-stream x) out)
    (.toByteArray out)))

(for [b ]
  (print b))
;; => #object["[B" 0x3ac4c022 "[B@3ac4c022"]
bmp-buffer





;;; https://en.wikipedia.org/wiki/BMP_file_format
(def bmp  (slurp-bytes "/home/malik/bmp_24.bmp"))
(def bmp-buffer (.array (java.nio.ByteBuffer/allocate (count bmp))))


(map
  (comp
    (fn [x] [(char x)
             (int x)
             (format "%08d" (Integer/parseInt (Integer/toBinaryString x)))
             (format "0x%02x" x)])
    (fn [x] (bit-and 0xFF x))) ;; unsign those ints https://stackoverflow.com/questions/4266756/can-we-make-unsigned-byte-in-java
  (for [b (take 5 bmp)]
    b))

(defn has-bmp-magic-header? [bytebuffer]
  (let [header (take 10 bytebuffer)
        [b? m? size _ _ offset] header]
    #_[b? m?]
    (and (= (int \B) b?) (= (int \M) m?))
    #_(= bm? "BM")))

(defn unsign [int]
  (bit-and 0xFF int))

(defn prn-as-binary
  [x]
  (format "%08d" (Integer/parseInt (Integer/toBinaryString x))))

(defn bmp-parse-file-header [bmp]
  (let [magic (if (has-bmp-magic-header? bmp) true false)
        size (BigInteger. (apply str (reverse  (map (comp prn-as-binary unsign) (take 4 (drop 2 bmp))))) 2)
        offset (BigInteger. (apply str (reverse  (map (comp prn-as-binary unsign) (take 4 (drop 6 bmp))))) 2)
        rst (drop  (+ offset 10) bmp)]
    {:has_magic_bytes magic
     :size size
     :offset offset
     :blob rst}))

(defn bmp-parse-dib-header [bmp]
  (let [size         (take 4 (drop 14 bmp))
        width        (take 2 (drop 18 bmp))
        height 	     (take 2 (drop 22 bmp))
        colorplanes  (take 2 (drop 26 bmp))
        bpp 	     (take 2 (drop 28 bmp))]
    (interleave
      [:size :width :height :colorplanes :bits-per-pixel]
      (map #(map unsign %)
        
        [size width height colorplanes bpp]))))

  (bmp-parse-dib-header bmp)
;; => {:size (40 0 0 0), :width (-56 0), :height (0 0), :color-planes (-56 0), :bits-per-pixel (-56 0)}



;; => 480216
(count bmp)
;; => 120054
(has-bmp-magic-header? bmp)
(bmp-parse-file-header bmp)
;; => {:has_magic_bytes true, :size 120054}


