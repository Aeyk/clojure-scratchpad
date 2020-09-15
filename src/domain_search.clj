(ns domain-search
  )
(def dict-file "/usr/share/dict/american-english")
(def gtld-list-uri "https://data.iana.org/TLD/tlds-alpha-by-domain.txt")
(def gtld-list
  (map clojure.string/lower-case
    (sort-by count 
      (drop 1 ;; first line is meta-data
        (re-seq #"(?m)^.*$" (slurp gtld-list-uri))))))

(take-while 
  gtld-list) ;; all two letter gtld or shorter


(spit "to_grep.txt"
  (apply str
    (for [gtld
          (take-while #(< (count %) 5) gtld-list)
          ]

      (str "grep -i \""gtld"$\" " dict-file "\n")))) 

;; now how to make grep command:
;; grep "gtld$" /usr/share/dict/american-english
;; DONE

;; now how to run it parallel
;; cat ./to_grep.txt | xargs -P8 -l | bash  > domains.txt
;; DONE


(def domains
  (into (sorted-set) 
    (map clojure.string/lower-case
      (drop-while #(< (count %) 4) ;; 2 chars b4 dot 2 after (best case)
        (sort-by count
          (re-seq #"(?m)^.*$" (slurp "domains.txt")))))))
(count domains)
;; => 52664

(defn count-comparator [a b]
  (let [c (compare a b)] ;; this is kind of about how java Comparators work.
    ;; See https://clojuredocs.org/clojure.core/sorted-set-by
    ;; #+begin_quote
    ;; When the two objects are equal in the parts we care about, 
    ;; 	use the tie-breaker `compare` on the whole values to
    ;; 	give them a consistent order that is only equal if 
    ;; 	the entire values are equal.
    ;; #+end_quote
    (if (not= c 0)
      c 
      (compare (count a) (count b)))))

(def domains
  #_(apply
    sorted-set)
  (into (sorted-set-by count-comparator) 
    (map clojure.string/lower-case
      (drop-while #(< (count %) 4) ;; 2 chars b4 dot 2 after (best case)
        (sort-by count
          (re-seq #"(?m)^.*$" (slurp "domains.txt")))))))
(count domains)


(defn last-two-as-str
  [s]
  (apply str (take-last 2 s)))

(last-two-as-str "lead")


;; now lets group by gtld again
(re-seq #"(?m)(\w{2})(ad)" (first domains))
(for [domain
      (take 100 domains)
      #_(gtld gtld-list)]
  )
(def grouped-by-tld-maybe
  (group-by last-two-as-str  domains))


(keys grouped-by-tld-maybe)
(dissoc grouped-by-tld-maybe "lk")





;; How to search availability, does namecheap have an easy to use api?
