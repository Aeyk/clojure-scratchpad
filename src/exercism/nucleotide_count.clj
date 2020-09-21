(defn nucleotide-count
  [nucs]
  (into {}
    (for [grp
          (partition-by identity nucs)]
      [(keyword (str (first grp)))
       (count grp)])))
 
