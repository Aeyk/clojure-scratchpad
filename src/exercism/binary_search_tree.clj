(ns binary-search-tree)

(defn singleton [v] {:value v
                     :left nil
                     :right nil})

(defn value [e] (get e :value))
(defn right [t] (get t :right))
(defn left [t] (get t :left))

(defn insert [tree e]
  (if (empty? tree)
    (singleton e)))

(defn from-list [lst] lst)
(defn to-list [tree] tree)

(singleton 4)
;; => {:value 4, :left nil, :right nil}

(insert [] 4)
