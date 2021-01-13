(ns clojure-scratchpad.frontend.core
  (:require [reagent.core :as r]
            [clojure-scratchpad.frontend.components.header :refer [header]]
            [clojure-scratchpad.frontend.components.gigs :refer [gigs]]
            [clojure-scratchpad.frontend.components.orders :refer [orders]]
            [clojure-scratchpad.frontend.components.footer :refer [footer]]
            [clojure-scratchpad.frontend.api :as api]))

(defn app
  []
  [:div.container
   [header]
   [gigs]
   [orders]
   [footer]])

(defn ^:export main
  []
  (api/fetch-gigs)
  (r/render
    [app]
    (.getElementById js/document "app")))
