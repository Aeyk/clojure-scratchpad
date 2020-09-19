(ns clojure-scratchpad.promises-futures
  (:require [clojure.core.async :as async]))

;; `@var` is just reader syntax for `(deref a)`
(def a (promise))
@a ;; blocking point (what ever thread tries to deref before
	;; delivery will block until deliver)
(deliver a 42)
@a ;; delivers now (any blocked thread resumes here)
;; Promise is thread safe and you cannot modify it later.
;;	Trying to deliver another value to answer is ignored.
(deliver a 1e10) ;; => nil
@a ;; => 42 (still)

;; Futures behave pretty much the same way (as
;;	promises) /.../ trying to dereference
;;	future before it is resolved blocks.


(let [sum (future (apply + (range 1e7)))]
  (println "Started Sigma of 1 -> 1e7")
  (time (println "Done: " @sum)))

;; Neither `future` nor `promise` in Clojure supports listening
;; 	for completion/failure asynchronously. 
;; C-c C-d C-j java.util.concurrent.Future
