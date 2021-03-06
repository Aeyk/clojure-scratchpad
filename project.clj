(defproject clojure-scratchpad "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main clojure-scratchpad.keycloak.core/-main
  :dependencies [[org.clojure/clojure "1.10.2"]
                 [org.clojure/data.json "1.0.0"]
                 [org.clojure/core.match "1.0.0"]
                 [org.clojure/core.logic "1.0.0"]

                 ;; [net.mikera/vectorz-clj "0.48.0"]
                 ;; [thheller/shadow-cljs "2.11.7"]
                 ;; [dali "1.0.2"]
                 ;; [analemma "1.1.0"]
                 ;; [org.clojure.typed/runtime.jvm "1.0.1"]
                 ;; [org.clojure/algo.monads "0.1.6"]
                 [org.clojure/math.numeric-tower "0.0.4"]
                 [org.clojure/math.combinatorics "0.1.6"]
                 ;; [org.clojure/tools.macro "0.1.2"]
                 ;; [org.clojure/java.jdbc "0.7.8"]
                 [org.clojure/data.csv "1.0.0"]
                 ;; [org.clojure/data.int-map "1.0.0"]
                 ;; [funcool/octet "1.1.2"]
                 [mount "0.1.16"]
                 ;; [datalevin "0.3.13"]
                 ;; [datascript "1.0.1"]
                 ;; [datascript-transit "0.3.0"]
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
                 ;; [compojure "1.6.1"]
                 [ring/ring-json "0.5.0"]
                 [ring/ring-jetty-adapter "1.8.0"]
                 [ring "1.8.0"]
                 [ring/ring-defaults "0.3.2"]
                 [hiccup "1.0.5"]
                 [garden "1.3.10"]
                 ;; [aleph "0.4.6"]
                 [ring-cors "0.1.0"]
                 [http-kit "2.4.0"]
                 ;; [enlive "1.1.6"]
                 ;; [reaver "0.1.3"]
                 ;; [clj-soup/clojure-soup "0.1.3"]
                 ;; [cider/orchard "0.6.0"] ;; enhanced cider options
                 ;; [incanter "1.9.3"] ;; datascience
                 ;;[quil "3.1.0" :excluisions [bouncycastle/bctsp-jdk14]
                 ;; [bouncycastle/bctsp-jdk14]] ;; processingjs interface
                 ;; [yogthos/config "1.1.7"]
                 ;; [pez/clerk "1.0.0"]
                 [ring-middleware-format "0.7.4"]
                 [ring/ring-core "1.8.2"]
                 [ring/ring-defaults "0.3.2"]
                 [selmer "1.12.31"]
                 ;; [reaver "0.1.3"]
                 ;; [cider/orchard "0.6.0"]
                 [org.clojure/clojurescript "1.10.773"]
                 ;; [org.clojure/core.async "1.3.610"]
                 ;; [instaparse "1.4.10"]
                 [rum "0.12.3"]
                 ;; [music-theory "0.3.1"]
                 ;; [djblue/portal "0.6.4"]
                 ;; [provisdom/spectomic "0.7.11"]
                 [ring/ring-core "1.8.2"]
                 [ring/ring-jetty-adapter "1.8.2"]
                 ;; [macchiato/core "0.2.16"]

                 [com.taoensso/timbre "4.10.0"]
                 [hickory "0.7.1"]
                 [quil "3.1.0"]
                 [keybind "2.2.0"]
                 [org.xerial/sqlite-jdbc "3.23.1"]
                 ;; [etaoin "0.4.0"]

                 [metosin/jsonista "0.2.7"]
                 [metosin/muuntaja "0.6.7"]
                 [metosin/reitit "0.5.9"]
                 ;; [metosin/ring-http-response "0.9.1"]
                 ;; [factual/geo "3.0.0-rc-2"]

                 [toucan "1.15.1"]
                 [conman "0.9.0"]
                 [camel-snake-kebab/camel-snake-kebab "0.4.2"]
                 [org.postgresql/postgresql "42.2.18"]
                 [com.impossibl.pgjdbc-ng/pgjdbc-ng "0.8.6"]


                 ;; [expound "0.8.6"]
                 ;; [cheshire "5.10.0"]
                 ;; [thi.ng/geom "0.0.908"]
                 ;; [clj-commons/clj-yaml "0.7.106"]


                 [buddy/buddy-auth "2.2.0"]
                 [buddy/buddy-core "1.9.0"]
                 [buddy/buddy-hashers "1.7.0"]
                 [environ "1.1.0"]
                 [cprop "0.1.17"]

                 [org.apache.shiro/shiro-all "1.7.1"]
                 [com.anaptecs.jeaf.owalibs/org.apache.commons.logging "4.3.1"]
                 [org.keycloak/keycloak-common "12.0.4"]]

  :plugins [;; [lein-shadow "0.3.1"]
            [lein-ring "0.12.5"]
            ;; [com.jakemccrary/lein-test-refresh "0.24.1"]
            ;; [jonase/eastwood "0.3.5"]
            ]

  :ring {:handler      clojure-scratchpad.keycloak.core/http-handler
         :port         8000
         :auto-reload? true
         :reload-paths ["src"]}

  :shadow-cljs
  {:source-paths ["src"]
   :dev-http {3000 "resources/public/"}
   :builds
   {:frontend
    {:target :browser
     :output-dir "reqsources/public/"
     :compiler-options {:output-feature-set :es5}
     :modules {:main {:init-fn clojure-scratchpad.frontend/init}}}}})
