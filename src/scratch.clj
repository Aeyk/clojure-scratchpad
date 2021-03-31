
;; (def *not-dynamic*)
;; ;; Warning: *not-dynamic* not declared dynamic and thus is not dynamically rebindable, but its name suggests otherwise. Please either indicate ^:dynamic *not-dynamic* or change the name. ($Workspace/scratch.clj:1)
;; ;; => #'user/*not-dynamic*

;; (def ^:dynamic *is-dynamic*)
;; ;; (comment (str "No similar error."))
;; ;; => #'user/*is-dynamic*


;; (set! *not-dynamic* 1)
;; ;; IllegalStateExepction
;; ;;    Can't change/establish root binding of: *not-dynamic* with set


;; (set! *is-dynamic* 2)
;; ;; IllegalStateExepction
;; ;;    Can't change/establish root binding of: *is-dynamic* with set


;; (binding [*is-dynamic* *is-dynamic*]
;;   (set! *is-dynamic* 42))
;; ;; => 42

;; (into (sorted-set) [1 2 3 4 4 5])

;; (defn even?
;;   [x]
;;   {:tag BigInt}
;;   (= 0 (rem x 2)))

;; (even? 10)
;; ;; => true
;; (meta #'even?)
;; ;; => {:arglists ([x]), :line 26, :column 1, :file "/home/malik/Workspace/clojure-scratchpad/src/scratch.clj", :name even?, :ns #namespace[user]}


;; ;; Collection   get    nth   cons  conj  assoc   pop  peek  count
;; ;; List         "1"?   "1"?   1     1      X      1    1     1
;; ;; Vector       "1"    "1"?   n     1     "1"?    1    1     1
;; ;; Set          "1"    X     "1"    "1"    X      X    X     1?
;; ;; Map          "1"    X      1     "1"?  "1"?    X    X     1?
;; ;; String        1     1      n     X      X      X    X     1
;; ;; Java Array    1     1      n     X      X      X    X     1
;; ;; Queue	      				            	
;; ;; Lazy Queue
;; ;; Array Maps (Different from Java Arrays how?)
;; ;;
;; ;;
;; ;; clojure.core/pop
;; ;;   Function: For a list or queue, returns a new list/queue without the
;; ;;   first item, for a vector, returns a new vector without the last
;; ;;   item.
;; ;;
;; ;; clojure.core/peek
;; ;;   Function: For a list or queue, same as first, for a vector, same as,
;; ;;   but much more efficient than, last.
;; ;;
;; ;; Clojure provides some set operations: `union` `difference` `intersection` 
;; ;; 	and pseudo-relational algebra support for 'relations', 
;; ;; 	which are simply `sets` of `maps` - `select` `index` `rename` `join`.
;; ;; ========
;; ;; clojure.set/difference
;; ;;   Function: Return a set that is the first set without elements of the
;; ;;   remaining sets
;; ;;
;; ;; TODO write good doc strings for
;; ;; clojure.set/intersection
;; ;; clojure.set/union
;; ;;
;; ;; clojure.set/select ?= (filter? pred coll)
;; ;;   Function: Returns a set of the elements for which pred is true
;; ;;
;; ;; clojure.set/index (TODO write more examples)
;; ;; https://clojuredocs.org/clojure.set/index
;; ;;   Function: Returns a map of the distinct values of ks in the xrel
;; ;;   mapped to a set of the maps in xrel with the corresponding values of
;; ;;   ks.
;; ;;

;; (ns scratch)

;; (supers (class "Hello "))
;; ;; => #{java.lang.CharSequence java.lang.Object java.lang.Comparable java.io.Serializable}

;; (->> (class {})
;;   supers
;;   (sort-by #(.getName %)))


;; (defn debytize-rgb [byt]
;;   (let [rgb byt
;;         r (bit-and (bit-shift-left 16 rgb) 255)          
;;         g (bit-and (bit-shift-left 8 rgb) 255)          
;;         b (bit-and rgb 255)]
;;     [r g b]))


;; (def img
;;   (javax.imageio.ImageIO/read
;;     (java.io.File. "/home/malik/bmp_24.bmp")))
;; ;; => #'scratch/img

;; (def outimg
;;   (javax.imageio.ImageIO/read
;;     (java.io.File. "/home/malik/bmp_24.bmp")))

;; (defn make-image [mb f]
;;   (let [img
;;         (java.awt.image.BufferedImage.
;;           mb mb
;;           java.awt.image.BufferedImage/TYPE_INT_RGB)]
;;     (doseq [x (range mb)
;;             y (range mb)]
;;       (.setRGB img x y
;;         (.getRGB
;; 	  (#(java.awt.Color. % % %)
;;             (bit-xor x y)))))
;;     img)) ;; return BufferedImage img



;; (def ops
;;   [bit-xor (comp bit-not bit-and) bit-shift-left])


;; (defn sample [arr]
;;   (first (shuffle arr)))

;; (defn make-image [mb]
;;   (Thread/sleep 32)
;;   (let [img
;;         (java.awt.image.BufferedImage. mb mb
;;           java.awt.image.BufferedImage/TYPE_INT_RGB)]
;;     (doseq [x (range mb)
;;             y (range mb)]
;;       (.setRGB img x y
;;         (.getRGB
;; 	  (#(java.awt.Color.
;;               (mod ((sample ops) x %) 256)
;;               (mod ((sample ops) % y) 256)
;;               (mod ((sample ops)
;;                     ((sample ops) 1 x) %) 256))
;;             (mod ((sample ops) x y) 256)))))
;;     img)) ; return BufferedImage img

;; (def display
;;   (proxy [javax.swing.JPanel] []
;;     (paintComponent [g]
;;       (.drawImage g (make-image 512)
;;         0 0 nil))))

;; (def frame (javax.swing.JFrame. "Hello World"))
;; (def imgs (repeatedly (make-image 512)))

;; (doto frame
;;   (.setResizable false)
;;   (.add display)
;;   (.pack)
;;   (.setSize 512 512))

;; (for [img (take 10 imgs)]
;;   (javax.imageio.ImageIO/write img "png"
;;     (java.io.File. "try.png")))



;; (let [w (.getWidth img)
;;       h (.getHeight img)
;;       img (javax.imageio.ImageIO/read
;;             (java.io.File. "/home/malik/bmp_24.bmp"))]
;;   (.delete (java.io.File. "try.png"))
;;   (for [x (range w)
;;         y (range h)
;;         rgb (.getRGB img x y)
;;         r (bit-and (bit-shift-left 16 rgb) 255)          
;;         g (bit-and (bit-shift-left 8 rgb) 255)          

;;         b (bit-and rgb 255)]   
;;     (.setRGB img x y
;;       (.getRGB (java.awt.Color. 127 0 127))))  
;;   (javax.imageio.ImageIO/write img "png"
;;     (java.io.File. "try.png")))



;; ;; https://aphyr.com/posts/352-clojure-from-the-ground-up-polymorphism
;; (defn compare-classes 
;;   [a b]
;;   (clojure.set/intersection (supers a) (supers b)))
                              
