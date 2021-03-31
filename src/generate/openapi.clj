(ns generate.openapi
  (:require [clj-yaml.core :as yaml]
            [clojure.string :as string]
            [clojure.pprint :as pprint]
            [cheshire.core :as json]))


(def petstore-openapi-specification-yaml
  (slurp "https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml"))

(def petstore-openapi-specification (yaml/parse-string petstore-openapi-specification-yaml))

(def petstore-route-urls (map (comp str symbol) (keys (:paths petstore-openapi-specification))))

(defn slice
  "Extracts a section of a string and returns a new string."
  ([s begin]
   (slice s begin (count s)))
  ([s ^long begin ^long end]
   (when (string? s)
     (let [end   (if (< end 0) (+ (count s) end) end)
           begin (if (< begin 0) (+ (count s) begin) begin)
           end   (if (> end (count s)) (count s) end)]
       (if (> begin end)
         ""
         (let [begin (if (< begin 0) 0 begin)
               end (if (< end 0) 0 end)]
           (.substring ^String s begin end)))))))

(pprint/pprint
 (for [route petstore-route-urls]
   [(unsurround route)
    (filter (complement string/blank?) (string/split route #"/"))]))

(last (string/split (nth petstore-route-urls 3) #"/"))

(def discourse-openapi-json
  (slurp "https://docs.discourse.org/openapi.json"))

(def discourse-openapi (json/parse-string discourse-openapi-json))

(for [[k v] (take 3 (get discourse-openapi "paths"))]
  [(string/split k #"/") v])

["/admin/groups/{id}.json"
 {"delete"
  {"summary" "Delete a group",
   "tags" ["Groups"],
   "parameters"
   [{"name" "id", "in" "path", "required" true, "schema" {"type" "integer"}}],
   "responses"
   {"200"
    {"description" "response",
     "content"
     {"application/json"
      {"schema"
       {"additionalProperties" false,
        "properties" {"success" {"type" "string", "example" "OK"}},
        "required" ["success"]}}}}}}},
 "/users.json"
 {"post"
  {"summary" "Creates a user",
   "tags" ["Users"],
   "parameters"
   [{"name" "Api-Key",
     "in" "header",
     "required" true,
     "schema" {"type" "string"}}
    {"name" "Api-Username",
     "in" "header",
     "required" true,
     "schema" {"type" "string"}}],
   "responses"
   {"200"
    {"description" "user created",
     "content"
     {"application/json"
      {"schema"
       {"type" "object",
        "properties"
        {"success" {"type" "boolean"},
         "active" {"type" "boolean"},
         "message" {"type" "string"},
         "user_id" {"type" "integer"}}}}}}},
   "requestBody"
   {"content"
    {"application/json"
     {"schema"
      {"type" "object",
       "properties"
       {"name" {"type" "string"},
        "email" {"type" "string"},
        "password" {"type" "string"},
        "username" {"type" "string"},
        "active" {"type" "boolean"},
        "approved" {"type" "boolean"},
        "user_fields[1]" {"type" "string"}},
       "required" ["name" "email" "password" "username"]}}}}}}]
