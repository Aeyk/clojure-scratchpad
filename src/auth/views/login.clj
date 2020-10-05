

(ns auth.views.login
  (:require
   [hiccup.core :as hiccup]
   [hiccup.page :as page]
   [hiccup.form :as form]))


(defn login []
  (page/html5 
    [:body
     (form/form-to [:post "/create-account"] 
       (form/submit-button "Create Account"))]))


