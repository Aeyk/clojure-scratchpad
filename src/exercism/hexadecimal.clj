(ns hexadecimal)

(defn hex-to-int [ff]
  (try 
    (Integer/parseInt ff 16)
    (catch Throwable e
        nil)))

(hex-to-int "carrot")

