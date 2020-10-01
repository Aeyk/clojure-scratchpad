(ns bitfields-test
  (:require [clojure.test :refer [deftest is run-tests]]
            [bitfields :refer [slurp-bytes bmp-parse-file-header]]))

(def bmp  (slurp-bytes "/home/malik/bmp_24.bmp"))
(def bmp-buffer (.array (java.nio.ByteBuffer/allocate (count bmp))))

(deftest bmp-should-read-size-from-test-file-correctly
  (is (=
      (count bmp)
      (:size (bmp-parse-file-header bmp)))))

(run-tests)
