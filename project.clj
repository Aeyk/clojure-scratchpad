(defproject clojure-scratchpad "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main backend.server/-main
  :dependencies [[org.clojure/clojure "1.10.2-alpha2"]
                 [org.clojure/data.json "1.0.0"]
                 [org.clojure/core.match "1.0.0"]
                 [org.clojure/core.logic "1.0.0"]
                 [net.mikera/vectorz-clj "0.48.0"]
                 [thheller/shadow-cljs "2.11.7"]
                 [dali "1.0.2"]
                 [analemma "1.1.0"]
                 ;; [org.clojure.typed/runtime.jvm "1.0.1"]
                 ;; [org.clojure/algo.monads "0.1.6"]
                 [org.clojure/math.numeric-tower "0.0.4"]
                 [org.clojure/math.combinatorics "0.1.6" ]
                 ;; [org.clojure/tools.macro "0.1.2"]
                 [org.clojure/java.jdbc "0.7.8"]
                 [org.clojure/data.csv "1.0.0"]
                 ;; [org.clojure/data.int-map "1.0.0"]
                 [com.impossibl.pgjdbc-ng/pgjdbc-ng "0.8.5"]
                 [funcool/octet "1.1.2"]
                 [mount "0.1.16"]
                 [datalevin "0.3.13"]
                 [datascript "1.0.1"]
                 [datascript-transit "0.3.0"]
                 ;; [byte-streams "0.2.4"]
                 ;; [com.github.sarxos/webcam-capture "0.3.12"]
                 ;; [com.layerware/hugsql "0.5.1"]
                 ;; [org.xerial/sqlite-jdbc "3.23.1"]
                 ;; [com.h2database/h2 "1.4.193"]
                 ;; [gloss "0.2.6"]
                 ;; [seesaw "1.5.0"]
                 ;; [reagent-utils "0.3.3"]
                 [reagent "0.10.0"]
                 [re-frame "1.1.2"]
                 [ring/ring-codec "1.1.2"]
                 ;; [com.cemerick/friend "0.2.3"]
                 [compojure "1.6.1"]
                 [ring/ring-json "0.5.0"]
                 [ring/ring-jetty-adapter "1.8.0"]
                 [ring "1.8.0"]
                 [ring/ring-defaults "0.3.2"]
                 [hiccup "1.0.5"]
                 [garden "1.3.10"]
                 [aleph "0.4.6"]
                 [ring-cors "0.1.0"]                 
                 [http-kit "2.4.0"]
                 [enlive "1.1.6"]
                 ;; [reaver "0.1.3"]
                 ;; [clj-soup/clojure-soup "0.1.3"]
                 ;; [cider/orchard "0.6.0"] ;; enhanced cider options
                 ;; [incanter "1.9.3"] ;; datascience
                 ;;[quil "3.1.0" :excluisions [bouncycastle/bctsp-jdk14]
                 ;; [bouncycastle/bctsp-jdk14]] ;; processingjs interface
                 ;; [yogthos/config "1.1.7"]
                 ;; [pez/clerk "1.0.0"]
                 [ring-middleware-format "0.7.4"]
                 [metosin/reitit-ring "0.5.5"]
                 [metosin/reitit "0.5.5"]
                 ;; [reaver "0.1.3"]
                 ;; [cider/orchard "0.6.0"]
                 [org.clojure/clojurescript "1.10.773"]
                 ;; [org.clojure/core.async "1.3.610"]
                 ;; [instaparse "1.4.10"]
                 [rum "0.12.3"]
                 [music-theory "0.3.1"]
                 [djblue/portal "0.6.4"]
                 [provisdom/spectomic "0.7.11"]
                 [ring/ring-core "1.8.2"]
                 [ring/ring-jetty-adapter "1.8.2"]
                 [macchiato/core "0.2.16"]
                 [com.taoensso/timbre "4.10.0"]
                 [hickory "0.7.1"]
                 [quil "3.1.0"]
                 [org.xerial/sqlite-jdbc "3.23.1"]]
  
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-shadow "0.3.1"]
            [lein-figwheel "0.5.20"]]

  :figwheel {:http-server-root "."
             :nrepl-port 7002
             :nrepl-middleware [cider.piggieback/wrap-cljs-repl]
             :css-dirs ["public/css"]}

  :shadow-cljs
  {:source-paths ["src"]
   :dev-http {3000 ":frontend"}
   :builds
   {:game-client-dev
    {:target :browser
     :output-dir "resources/public/game_js"
     :asset-path "js/"
     :modules {:main {:init-fn game.client/main}}}
     ;;:devtools {:after-load app.main/reload!}}

    :game-client-prod
    {:target :browser
     :output-dir "build/js"
     :asset-path "js"
     :modules {:main {:init-fn game.client.core/main}}}
    
    :frontend
    {:target :browser
     :output-dir "resources/public/"
     #_#_:output-dir "public/"
     :compiler-options {:output-feature-set :es5}
     :modules {:main {:init-fn clojure-scratchpad.frontend/init}}}
    :backend
    {:target :node-script
     :output-dir "target/"
     :output-to "target/main.js"
     :exports {:server backend.server/server}

     :compiler-options {:output-feature-set :es6
                        :optimizations :simple}
     :main backend.server/init}}}
  
  :cljsbuild
  {:builds
   {:app
    {:source-paths ["src/cljs"]
     :compiler
     {:main "frontend"
      :output-to "public/js/app.js"
      :output-dir "public/js/out"
      :asset-path   "js/out"
      :source-map true
      :optimizations :none
      :pretty-print  true}
     :figwheel
     {:on-jsload "clojure-scratchpad.frontend/init"
      :open-urls ["http://localhost:3449/index.html"]}}

    :release
    {:source-paths ["src/cljs"]
     :compiler
     {:output-to "public/js/app.js"
      :output-dir "target/release"
      :optimizations :advanced
      :infer-externs true
      :pretty-print false}}}}

  )
