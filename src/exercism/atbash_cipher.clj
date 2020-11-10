(ns atbash-cipher)

(def cipher-map 
  (apply hash-map
    (interleave
      (seq "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
      (seq "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba"))))




(defn encode [s]  
  (apply str
    (drop-last
      (clojure.string/join
        " "
        (map #(apply str %)
          (split-at 5  
            (apply str
              (replace cipher-map (seq s)))))))))

(encode "gvhg")


