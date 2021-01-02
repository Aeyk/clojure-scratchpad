(ns ether
  (:require [clojure.data.json :as json]
            [org.httpkit.client :as http]))

(def kraken-api-url-base "https://api.kraken.com")

(def kraken-api-key "oUkthhChmS5d3gS+gB7gqdHOtPJILFVEk91W2gg4jZD1z+wHmCHTAiLkvfUx66p5qU2HosbpADPxEsksBvql7Q==")

(def options {:timeout 200
              :user-agent "Must-Supply"
              :headers {"API-Key" kraken-api-key
                        "API-Sign" (sign-kraken-message )}})

(json/read-json
 (slurp (str api-base-url  "&module=stats&action=ethdailyprice&startdate=2007-01-01&enddate=2020-12-19")))


