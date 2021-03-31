
((fn [s]
   {:pre (pos-int? (Integer/parseInt s))}
   (pr-str
    (map #(Integer/parseInt %)
         (str/split s #"")))) "123")



((fn [s]
   {:pre (pos-int? (Integer/parseInt s))}
   (pr-str
    (map #(Integer/parseInt %) s)))
 "123")


(pr-str
 (map int
      (str/split "123" #"")))

