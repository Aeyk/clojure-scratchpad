;; CITE Dan Schiffman Coding Train
;; CITE Exploring Poetry Generation with Python
;; https://nickm.com/classes/sfpc/2017_fall/small_machines.html


;; CITE: http://www2.imm.dtu.dk/pubdb/pubs/6010-full.html
;; 	author       = "F. {\AA}. Nielsen",
;;      title        = "AFINN",
;;      year         = "2011",

;; CITE: https://github.com/Lab43/cmudict-syllables
(ns sentiments
  (:require
   [clojure.data.csv :as csv]
   [clojure.java.io :as io]
   [clojure.string :as str]))

(def afinn-sentiment-data
  (into
    {}
    (csv/read-csv
      (io/reader "resources/AFINN/AFINN-111.txt"))))



;; I used this to easily convert CMUdict to just as syllable count!
;; README says inspired by http://www.onebloke.com/2011/06/counting-syllables-accurately-in-python-on-google-app-engine/
(def syllable-list (drop 1 (csv/read-csv (slurp "resources/syllables.csv"))))


(def fsyllable-list (flatten syllable-list))
(def syllable-map (into {} syllable-map))
(def indexed-syllables (group-by (comp second identity) syllable-map))
(def syllables  (group-by (comp second identity) syllable-map))

(defn sample [coll]
  (take 1 (shuffle coll)))

;; Trying to turn a {String Integer, String Integer, String Integer} into {Integer [String_0 String_1 ... String_n]}
;; So far I got (group-by (comp second identity) kv-map), whilst close, goes
;;; {Integer [[String_0 Integer_1] [String_1 Integer_1] ... [String_n Integer_n]]}


(defn haiku-generator
  "Laziest possible haiku-- a three word 5 - 7 - 5..."
  []
  [(ffirst
     (sample
       (get (group-by (comp second identity) syllable-map)   
         "7")))
   (ffirst
     (sample
       (get (group-by (comp second identity) syllable-map)   
         "5")))

   (ffirst
     (sample
       (get (group-by (comp second identity) syllable-map)   
         "7")))])


;; I stole this from the internet, bnut strtainslated from javsascripty
(defn haiku-generator* []
  (let [one-syllable
        (ffirst (sample (get syllables "1")))
        two-syllable
        (ffirst (sample (get syllables "2")))
        three-syllable
        (ffirst (sample (get syllables "3")))
        four-syllable
        (ffirst (sample (get syllables "4")))
        five-syllabe
        (ffirst (sample (get syllables "5")))]
    (apply str
      (interpose " "
        [three-syllable
         two-syllable
         four-syllable
         one-syllable
         two-syllable
         five-syllabe]))))

(defn haiku-generator** []
  (let [one-syllable
        (ffirst (sample (get sorted-by-syllable-happy-word  "1")))
        two-syllable
        (ffirst (sample (get sorted-by-syllable-happy-word  "2")))
        three-syllable
        (ffirst (sample (get sorted-by-syllable-happy-word "3")))
        four-syllable
        (ffirst (sample (get sorted-by-syllable-happy-word "4")))
        five-syllabe
        (ffirst (sample (get syllables "5")))]
    (apply str
      (interpose " "
        (map str/upper-case
          [three-syllable
           two-syllable
           four-syllable
           one-syllable
           two-syllable
           five-syllabe])))))

(defn haiku-generator*** []
  (let [one-syllable
        (ffirst (sample (get syllables  "1")))
        two-syllable
        (ffirst (sample (get syllables  "2")))
        ttwo-syllable
        (ffirst (sample (get syllables  "2")))
        three-syllable
        (ffirst (sample (get sorted-by-syllable-happy-word "3")))
        four-syllable
        (ffirst (sample (get sorted-by-syllable-happy-word "4")))
        five-syllabe
        (ffirst (sample (get syllables "5")))]
    (apply str
      (interpose " "
        (map str/upper-case
          [three-syllable
           two-syllable
           four-syllable
           one-syllable
           ttwo-syllable
           five-syllabe])))))

(def afinn-sentimqent-map (group-by (comp second identity) afinn-sentiment-data))


(defn count-syllables [word]
  (get syllable-map
    (str/upper-case word)))

(def sorted-by-syllable-happy-word
  (group-by second 
    (filter
      (comp (complement nil?) second) 
      (map (juxt first (comp count-syllables first))
        (get afinn-sentiment-map "4")))))


(haiku-generator***)

;; it doesn't return the haiku until after it says it...
(defn speak-haiku "requires espeak"[]
  (let [haiku (haiku-generator***)]
    (spit "haiku.sh" (str "#!/usr/bin/espeak \"" haiku "\"" ))
    ((fn [] (clojure.java.shell/sh "./haiku.sh")))
    haiku))

(speak-haiku)
