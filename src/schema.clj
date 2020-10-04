(ns schema
  (:require [clojure.data.json :as json]))

(def schema-list-uri "https://www.schema.org/version/latest/schemaorg-current-http.jsonld")
(def schema-list-json-string (slurp schema-list-uri))
(def schema-list (json/read-str schema-list-json-string))
(def schema-context-urls
  (map second (into [] (get-in    schema-list  ["@context"]))))
;; => ("http://www.w3.org/1999/02/22-rdf-syntax-ns#" "http://www.w3.org/2000/01/rdf-schema#" "http://www.w3.org/2001/XMLSchema#")

(def schema-context-data (map slurp schema-context-urls))


(take 1 (shuffle (get-in schema-list ["@graph"])))

