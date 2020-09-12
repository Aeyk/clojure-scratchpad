>(defproject clojure-scratchpad "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :profiles
  {:dev
   {:dependencies [[org.clojure.typed/checker.jvm "1.0.1"]]}}
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/core.match "1.0.0"]
                 [org.clojure/core.logic "1.0.0"]
                 [org.clojure.typed/runtime.jvm "1.0.1"]
                 [org.clojure/algo.monads "0.1.6"]
                 [org.clojure/clojurescript "1.10.773"
                  :scope "provided"]
                 [org.clojure/math.numeric-tower "0.0.4"]
                 [org.clojure/math.combinatorics "0.1.6" ]
                 [org.clojure/tools.macro "0.1.2"]
                 [org.clojure/core.async "1.3.610"]
                 [org.clojure/java.jdbc "0.7.8"]
                 [org.xerial/sqlite-jdbc "3.23.1"]
                 [com.h2database/h2 "1.4.193"]
                 [ring/ring-codec "1.1.2"]
                 [ring-server "0.5.0"]
                 [reagent "0.10.0"]
                 [reagent-utils "0.3.3"]
                 [ring "1.8.1"]
                 [ring/ring-defaults "0.3.2"]
                 [hiccup "1.0.5"]
                 [metosin/reitit-ring "0.5.5"]
                 [metosin/reitit "0.5.5"]
                 [metosin/jsonista "0.2.6"]
                 [aleph "0.4.7-alpha5"]
                 [http-kit "2.4.0"] 

                 [enlive "1.1.6"]
                 [reaver "0.1.3"]
                 [clj-soup/clojure-soup "0.1.3"]
                 [cider/orchard "0.6.0"] ;; enhanced cider options
                 [incanter "1.9.3"] ;; datascience
                 [quil "3.1.0"] ;; processingjs interface
                 [yogthos/config "1.1.7"]
                 [pez/clerk "1.0.0"]
                 [venantius/accountant "0.2.5"
                  :exclusions [org.clojure/tools.reader]]
                 [compojure "1.6.1"]]
   
  :plugins [[lein-ring "0.12.5"]]
  :ring {:handler server/app}
  :repl-options {:init-ns server}



  
  ;;   ;; :ring {:handler hello-web.handler/app
  ;;   ;;        :uberwar-name "hello-web.war"}
  ;;   ;; :ring-handler hello-web.handler/app}
  ;;   ;; :uberjar-name "hello-web.jar"
  ;;   ;; :main hello-web.server



  ;;   :plugins [[lein-ring "0.12.5"]]
  ;;	         [lein-environ "1.1.0"]
  ;;             
  ;;             [nightlight/lein-nightlight "2.4.1"]
  ;;             [org.clojure/core.unify "0.5.7"]
  ;;             [lein-cljsbuild "1.1.7"]
  ;;             [lein-asset-minifier "0.4.6"
  ;;              :exclusions [org.clojure/clojure]]]

  ;;   :min-lein-version "2.5.0"
  ;;   :clean-targets ^{:protect false}
  ;;   [:target-path
  ;;    [:cljsbuild :builds :app :compiler :output-dir]
  ;;    [:cljsbuild :builds :app :compiler :output-to]]

  ;;   :source-paths ["src/clj" "src/cljc" "src/cljs"]
  ;;   :resource-paths ["resources" "target/cljsbuild"]

  ;;   :minify-assets
  ;;   [[:css {:source "resources/public/css/site.css"
  ;;           :target "resources/public/css/site.min.css"}]]

  ;;   :cljsbuild
  ;;   {:builds {:min
  ;;             {:source-paths ["src/cljs" "src/cljc" "env/prod/cljs"]
  ;;              :compiler
  ;;              {:output-to        "target/cljsbuild/public/js/app.js"
  ;;               :output-dir       "target/cljsbuild/public/js"
  ;;               :source-map       "target/cljsbuild/public/js/app.js.map"
  ;;               :optimizations :advanced
  ;;               :infer-externs true
  ;;               :pretty-print  false}}
  ;;             :app
  ;;             {:source-paths ["src/cljs" "src/cljc" "env/dev/cljs"]
  ;;              :figwheel {:on-jsload "hello-web.core/mount-root"}
  ;;              :compiler
  ;;              {:main "hello-web.dev"
  ;;               :asset-path "/js/out"
  ;;               :output-to "target/cljsbuild/public/js/app.js"
  ;;               :output-dir "target/cljsbuild/public/js/out"
  ;;               :source-map true
  ;;               :optimizations :none
  ;;               :pretty-print  true}}}}

  ;;   :figwheel
  ;;   {:http-server-root "public"
  ;;    :server-port 3449
  ;;    :nrepl-port 7002
  ;;    :nrepl-middleware [cider.piggieback/wrap-cljs-repl
  ;;                       cider.nrepl/cider-middleware
  ;;                       refactor-nrepl.middleware/wrap-refactor
  ;;                       ]
  ;;    :css-dirs ["resources/public/css"]}

  ;;   :profiles {:dev {:repl-options {:init-ns clojure-scratchpad.repl}
  ;;                    :dependencies [[javax.servlet/servlet-api "2.5"]
  ;;                                   [ring/ring-mock "0.3.2"]
  ;;                                   [cider/piggieback "0.5.1"]
  ;;                                   [binaryage/devtools "1.0.0"]
  ;;                                   [figwheel-sidecar "0.5.20"]
  ;;                                   [binaryage/devtools "1.0.2"]
  ;;                                   [ring/ring-mock "0.4.0"]
  ;;                                   [ring/ring-devel "1.8.1"]
  ;;                                   [prone "2020-01-17"]
  ;;                                   [figwheel-sidecar "0.5.20"]
  ;;                                   [nrepl "0.8.0"]
  ;;                                   [pjstadig/humane-test-output "0.10.0"]]

  ;;                    :source-paths ["env/dev/clj"]
  ;;                    :plugins [[lein-figwheel "0.5.20"]
  ;;                              [cider/cider-nrepl "0.21.1"]
  ;;                              [org.clojure/tools.namespace "0.3.0-alpha4"
  ;;                               :exclusions [org.clojure/tools.reader]]
  ;;                              [refactor-nrepl "2.4.0"
  ;;                               :exclusions [org.clojure/clojure]]
  ;;                              ]

  ;;                    :injections [(require 'pjstadig.humane-test-output)
  ;;                                 (pjstadig.humane-test-output/activate!)]}

  ;;              :env {:dev true}

  ;;              :uberjar {:hooks [minify-assets.plugin/hooks]
  ;;                         :source-paths ["env/prod/clj"]
  ;;                         :prep-tasks ["compile" ["cljsbuild" "once" "min"]]
  ;;                         :env {:production true}
  ;;                         :aot :all
  ;;                         :omit-source true}})

  ;; ;; (defproject clojure-scratchpad "0.1.0-SNAPSHOT"
  ;; ;;   :description "FIXME: write description"
  ;; ;;   :url "http://example.com/FIXME"
  ;; ;;   :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
  ;; ;;             :url "https://www.eclipse.org/legal/epl-2.0/"}
  ;; ;;   :dependencies [[org.clojure/clojure "1.10.1"]]
  ;; ;;   :repl-options {:init-ns clojure-scratchpad.core})
  )
