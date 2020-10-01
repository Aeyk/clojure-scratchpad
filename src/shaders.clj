(ns shaders)

;;; a direct translation from
;;; https://github.com/sarxos/webcam-capture/blob/master/webcam-capture/src/example/java/WebcamPanelExample.java
(def cam
  (com.github.sarxos.webcam.Webcam/getDefault))

(def cam-panel
  (com.github.sarxos.webcam.WebcamPanel. cam))

(def window
  (javax.swing.JFrame. "Hello Webcam"))

(defn show-window [](.add window cam-panel)
  (.setResizable window true)
  (.setDefaultCloseOperation window
    (javax.swing.JFrame/EXIT_ON_CLOSE))
  (.pack window)
  (.setVisible window true))

(show-window)
