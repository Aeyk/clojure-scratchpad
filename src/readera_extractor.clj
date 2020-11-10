(ns readera-extractor
  (:require [clojure.data.json :as json]))

(def readera-json-data (json/read-str (slurp "/home/malik/Downloads/library.json")))

(map #(get % (get readera-json-data "docs") "bookmarks") readera-json-data)

