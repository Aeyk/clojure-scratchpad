(ns shaders
  (:require [quil.core :as q :include-macros true]))

;;; a direct translation from
;;; https://github.com/sarxos/webcam-capture/blob/master/webcam-capture/src/example/java/WebcamPanelExample.java
(def cam
  (com.github.sarxos.webcam.Webcam/getDefault))

(defn setup-cam []
  ;; todo make it automatically select highest mode?  
  (.setViewSize cam (.getSize (com.github.sarxos.webcam.WebcamResolution/VGA))))

(setup-cam)

(def cam-panel
  (com.github.sarxos.webcam.WebcamPanel. cam))

(defn setup-panel []
  (.setFPSDisplayed cam-panel true)
  (.setImageSizeDisplayed cam-panel true))
  
(def window
  (javax.swing.JFrame. "Hello Webcam"))

(defn rotate-webcam [cam]
  (rotate (.createGraphics cam) 90))

(rotate-webcam (.getImage cam-panel))
(defn show-window []
  #_(setup-cam)
  #_(setup-panel)  
  
  (.add window cam-panel)
  (.setResizable window true)
  (.setDefaultCloseOperation window
    (javax.swing.JFrame/DISPOSE_ON_CLOSE))
  (.pack window)
  (.setVisible window true))

;;(show-window)

;;; https://github.com/victorz/rotatetest/blob/master/RotateTest.java

(def canvas
  (buffered-image (.getWidth window) (.getHeight window)))


(defn buffered-image
  ([x y] (buffered-image x y
           java.awt.image.BufferedImage/TYPE_INT_RGB))
  ([x y typ]
   (java.awt.image.BufferedImage. x y typ)))

(def gfx (.createGraphics canvas))


;; if w of collatz is odd number of pixels, set rotate origin to
;; middle pixel, else the left of the two middle pixels 
(defn rotate [image angle]
  (letfn [(collatz [w] (if (zero? (mod w 2))
                         (+ (/ w 2) 1)
                         (/ w 2))) ]
    (let [w (collatz (.getWidth image))
          h (collatz (.getHeight image))
          dimg (buffered-image w h)
          g (.createGraphics dimg)]
      (.rotate g (Math/toRadians angle) w h)
      (.drawImage g image nil 0 0)
      dimg)))

;;; https://stackoverflow.com/questions/1626735/how-can-i-display-a-bufferedimage-in-a-jframe


;; (defn setup []
;;   (q/frame-rate 100)
;;   (q/background 255)
;;   (q/load-image ))

;; (defn draw []
  
;;   (q/box 100))

;; (q/defsketch dry-paint
;;    :host "host"
;;   :size [500 500]
;;   :renderer :p3d
;;    :setup setup
;;    :draw draw)
