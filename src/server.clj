(ns server
  (:require [reitit.ring :as ring]
            [reitit.coercion.spec]
            [reitit.swagger :as swagger]
            [reitit.swagger-ui :as swagger-ui]
            [reitit.ring.coercion :as coercion]
            [reitit.dev.pretty :as pretty]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [reitit.ring.middleware.exception :as exception]
            [reitit.ring.middleware.multipart :as multipart]
            [reitit.ring.middleware.parameters :as parameters]
            ;; Uncomment to use
            ; [reitit.ring.middleware.dev :as dev]
            ; [reitit.ring.spec :as spec]
            ; [spec-tools.spell :as spell]
            [ring.adapter.jetty :as jetty]
            [muuntaja.core :as m]
            [clojure.java.io :as io]
            [ring.util.response :as response]
            [clojure.data.json :as json]
            [clojure.java.jdbc :as jdbc]))

(defn check-ip [req]
  (:body
   (response/response (:remote-addr req))))

(def lite-db
  {:classname   "org.sqlite.JDBC"
   :subprotocol "sqlite"
   :subname     "db/dev.db"
   })

(defn qstr [& strs]
  (str \" (apply str strs) \"))

(qstr "Hello?")

#_(jdbc/execute! lite-db ["create table pastes(id INTEGER PRIMARY KEY AUTOINCREMENT, content  CLOB)"])
#_(jdbc/query lite-db ["select * from pastes"])
;; => ()
;; https://stackoverflow.com/questions/8892973/how-to-get-last-insert-id-in-sqlite/8893008
#_(let [content "Hello, BITCH!!!!!!
"]
  (jdbc/execute! lite-db
    (apply str ["INSERT INTO pastes(content) VALUES(" (qstr  content ) ");"])))


(def app
  (ring/ring-handler
    (ring/router
      [["/ip"
        {:get 
         {:summary "get back the ip address"
          :responses {200 {:body {:remote-addr string?}}}
          :handler (fn [req]
                     {:status 200
                      :body {:remote-addr (check-ip req)}})}} ]
       ["/text"
        {:get
         {:parameters 
          :responses {200 {:body {:text string?}}}
          :handler
          (fn [_]
            {:status 200
             :body
             {:text  "hello" }})} 
         
         :post
         {:summary
          "upload a text blob"
          :parameters {:body {:text string?}}
          :responses {200 {:body {:text string?
                                  :path string?}}}
          :handler (fn [{{{:keys [path text]} :body} :parameters}]
                     {:status 200
                      :body {:text text
                             :path  (str (rand-int 100))}})}}]
       ["/swagger.json"
        {:get
         {:no-doc false
          :swagger
          {:info {:title "my-api"
                  :description "with reitit-ring"}}
          :handler (swagger/create-swagger-handler)}}]

       ["/files"
        {:swagger {:tags ["files"]}}

        ["/upload"
         {:post
          {:summary "upload a file"
           :parameters {:multipart {:file multipart/temp-file-part}}
           :responses {200 {:body {:name string?, :size int?}}}
           :handler
           (fn [{{{:keys [file]} :multipart} :parameters}]
             {:status 200
              :body {:name (:filename file)
                     :size (:size file)}})}}]

        ["/download"
         {:get
          {:summary "downloads a file"
           :swagger {:produces ["image/png"]}
           :handler
           (fn [_]
             {:status 200
              :headers {"Content-Type" "image/png"}
              :body (-> "reitit.png"
                      (io/resource)
                      (io/input-stream))})}}]]

       ["/math"
        {:swagger {:tags ["math"]}}

        ["/plus"
         {:get {:summary "plus with spec query parameters"
                :parameters {:query {:x int?, :y int?}}
                :responses {200 {:body {:total int?}}}
                :handler (fn [{{{:keys [x y]} :query} :parameters}]
                           {:status 200
                            :body {:total (+ x y)}})}
          :post {:summary "plus with spec body parameters"
                 :parameters {:body {:x int?, :y int?}}
                 :responses {200 {:body {:total int?}}}
                 :handler (fn [{{{:keys [x y]} :body} :parameters}]
                            {:status 200
                             :body {:total (+ x y)}})}}]]]

      { ;;:reitit.middleware/transform dev/print-request-diffs ;; pretty diffs
       ;;:validate spec/validate ;; enable spec validation for route data
       ;;:reitit.spec/wrap spell/closed ;; strict top-level validation
       :exception pretty/exception
       :data {:coercion reitit.coercion.spec/coercion
              :muuntaja m/instance
              :middleware [ ;; swagger feature
                           swagger/swagger-feature
                           ;; query-params & form-params
                           parameters/parameters-middleware
                           ;; content-negotiation
                           muuntaja/format-negotiate-middleware
                           ;; encoding response body
                           muuntaja/format-response-middleware
                           ;; exception handling
                           exception/exception-middleware
                           ;; decoding request body
                           muuntaja/format-request-middleware
                           ;; coercing response bodys
                           coercion/coerce-response-middleware
                           ;; coercing request parameters
                           coercion/coerce-request-middleware
                           ;; multipart
                           multipart/multipart-middleware]}})
    (ring/routes
      (swagger-ui/create-swagger-ui-handler
        {:path "/"
         :config {:validatorUrl nil
                  :operationsSorter "alpha"}})
      (ring/create-default-handler))))

(defn start []
  (jetty/run-jetty #'app {:port 3000, :join? false})
  (println "server running in port 3000"))

(comment
  (start))