(ns binary-search-tree)

(defn singleton [v] {:value v
                     :left nil
                     :right nil})

(defn value [e] (get e :value))
(defn right [t] (get t :right))
(defn left [t] (get t :left))

(defn insert [e tree]
  (cond
    (empty? tree)
    (singleton e)
    (< (value tree) e)
    (insert e tree)
    (merge tree {:left (singleton e)})
    (and
      (> e (value tree))
      (nil? (left tree)))
    (merge tree {:right (singleton e)})
    :else nil))


(defn from-list [lst] lst)
(defn to-list [tree] (tree-seq (not seq?) :value tree))

(insert 6 (insert 2  (insert 4 [])))

(singleton 4)
;; => {:value 4, :left nil, :right nil}


