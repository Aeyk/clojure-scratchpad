(ns auth.views.login
  (:require
   [hiccup.core :as hiccup]
   [hiccup.page :as page]
   [hiccup.form :as form]))

(defn login []
  (page/html5
    [:body
     (form/form-to [:post "/login"]
       (form/text-field "username")
       (form/password-field "password")
       (form/submit-button "Login"))]))

(defn signup []
  (page/html5 
    [:body
     (form/form-to [:post "/signup"] 
       (form/submit-button "Create Account"))]))




