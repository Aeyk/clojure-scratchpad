(ns  home.redbox
  (:require
   [clojure.set :as set]
   [hiccup.core :as html]
   [garden.core :as css]
   [clojure.edn :as edn]
   [cheshire.core :as json]
   [net.cgrand.enlive-html :as select]))

(def redbox-releases
  (slurp "https://www.redbox.com/rbweb/api/product/js/__titles7"))

(def redbox-releases (json/parse-string redbox-releases))


