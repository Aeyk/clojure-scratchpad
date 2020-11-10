(ns real-world.api
  (:require
   [ring.adapter.jetty]))
;; https://github.com/gothinkster/realworld
;; SPEC: https://github.com/gothinkster/realworld/tree/master/api
;; * TODO CORS
;; * TODO Authorization
;; * TODO Authentiation
;; * TODO Users
;; email, token, username, bio, image
;; ** TODO Profile
;;  username, bio, image, following
;; ** TODO Single Article
;;  slug, title, description, body, tagList, createdAt, updatedAt, favorited, favoritesCount
;; * TODO Tags
;; * TODO Comments
;; * TODO Error / Status / Flash Codes
;; 401, 403, 404
;; * TODO Sign Up
;; * TODO Log Out
;; * TODO Routes
;; - Login  	 POST? /api/users/login
;; - Signup	 POST  /api/users
;; - Get Curr User  GET   /api/user
;; - Update User    PUT   /api/user
;; - Get Profile    GET   /api/profiles/:username
;;
(use 'ring.adapter.jetty)


