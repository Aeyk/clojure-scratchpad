(ns clojure-scratchpad.flute
  (:require [hickory.core :as hiccup]))

(def blank-finger-chart
  (hiccup/as-hiccup
   (hiccup/parse (slurp "./resources/flute-chart.svg"))))

(def blank-finger-chart
  [:svg
   [:g
     {:inkscape:label "Layer 1", :inkscape:groupmode "layer", :id "layer1"}
     "\n    "
     [:circle
      {:style
       "fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1",
       :id "B",
       :cx "94.829094",
       :cy "40.962307",
       :r "10.883539"}]
     "\n    "
     [:circle
      {:style
       "fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1",
       :id "A",
       :cx "94.477173",
       :cy "73.504837",
       :r "10.883539"}]
     "\n    "
     [:circle
      {:style
       "fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1",
       :id "G",
       :cx "94.183945",
       :cy "104.83595",
       :r "10.883539"}]
     "\n    "
     [:circle
      {:style
       "fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1",
       :id "F",
       :cx "94.893829",
       :cy "153.36499",
       :r "10.883539"}]
     "\n    "
     [:circle
      {:style
       "fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1",
       :id "E",
       :cx "94.526833",
       :cy "185.84406",
       :r "10.883539"}]
     "\n    "
     [:circle
      {:style
       "fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1",
       :id "D",
       :cx "93.813431",
       :cy "217.48276",
       :r "10.883539"}]
     "\n    "
     [:path
      {:style
       "fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1",
       :d
       "m 95.542419,243.818 23.171811,-0.33015 c 0,0 4.54701,-1.14449 4.71627,-3.18596 0.16927,-2.04146 -1.20552,-9.49617 -3.83401,-10.00361 -2.6285,-0.50744 -4.71483,-2.33976 -10.9604,-1.51438 -6.24557,0.82538 -9.408875,8.33637 -9.408875,8.33637 0,0 -1.190483,1.13592 -1.666567,1.32352 -0.476088,0.1876 -4.660624,0.30379 -5.047949,0.85207 -0.38732,0.54827 -1.988802,0.46778 -1.534693,2.11862 0.454108,1.65083 4.564413,2.40352 4.564413,2.40352 z",
       :id "pinky-a"}]
     "\n    "
     [:path
      {:style
       "fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1",
       :d
       "m 110.69374,266.39496 -0.42821,-15.79194 c 0,0 2.3699,4.08972 0.006,0.005 -2.36391,-4.08435 -4.90212,-2.6099 -4.90212,-2.6099 0,0 -2.88077,0.33572 -3.08063,2.2494 -0.19985,1.91368 0.0309,14.75273 0.0309,14.75273 0,0 0.9252,3.16178 4.26278,3.2155 3.33757,0.0537 4.11125,-1.82116 4.11125,-1.82116 z",
       :id "pinky-c"}]
     "\n    "
     [:path
      {:style
       "fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1",
       :d
       "m 98.323555,265.92 -0.862999,-15.57301 c 0,0 -0.977296,-3.96104 -6.891851,-2.82796 -5.914543,1.13309 -6.210176,4.63709 -6.210176,4.63709 0,0 -2.037458,8.3203 4.96382,11.1794 7.001289,2.8591 9.001206,2.58448 9.001206,2.58448 z",
       :id "pinky-b"}]
     "\n    "
     [:path
      {:style
       "fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1",
       :d
       "m 64.551702,77.996348 c 3.2561,-6.75666 5.91151,-6.18036 8.50423,-6.0941 2.59272,0.0863 4.64517,5.41242 4.64517,5.41242 0,0 1.33907,10.10954 -4.17425,10.21103 0,0 -4.64027,1.00185 -2.97332,20.197512 1.66695,19.19565 -6.00183,-29.726862 -6.00183,-29.726862 z",
       :id "thumb-b"}]
     "\n    "
     [:ellipse
      {:style
       "fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1",
       :id "thumb-a",
       :cx "70.81485",
       :cy "59.120426",
       :rx "8.1963415",
       :ry "8.1971407"}]
     "\n    "
     [:path
      {:style
       "fill:#ffffff;stroke:#000000;stroke-width:3;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke;fill-opacity:1",
       :d "M 73.097548,135.7084 H 117.36266 Z",
       :id "path1602"}]
     "\n    "
     [:path
      {:style
       "fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1",
       :d
       "m 123.71524,266.02274 -0.4282,-15.79194 c 0,0 2.3699,4.08972 0.006,0.005 -2.36392,-4.08435 -4.90213,-2.6099 -4.90213,-2.6099 0,0 -2.88077,0.33572 -3.08063,2.2494 -0.19985,1.91368 0.0309,14.75273 0.0309,14.75273 0,0 0.9252,3.16178 4.26278,3.2155 3.33758,0.0537 4.11126,-1.82116 4.11126,-1.82116 z",
       :id "pinky-d"}]
     "\n    "
     [:path
      {:style
       "fill:#ffffff;stroke:#000000;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;fill-opacity:1",
       :d
       "m 111.37902,114.35801 c -0.0402,-1.42381 -0.12048,-4.27171 1.6146,-5.70586 1.73509,-1.43416 5.28518,-1.45429 7.13774,0.19738 1.85257,1.65167 2.00778,4.97473 1.28267,8.99776 -0.7251,4.02302 -2.33041,8.74587 -8.0406,10.2031 -5.71019,1.45723 -15.5252,-0.35108 -16.187711,-1.75249 -0.662511,-1.40141 7.827411,-2.39575 11.725081,-4.08045 3.89766,-1.68469 3.20308,-4.05996 2.85573,-5.24777 -0.34735,-1.18782 -0.34735,-1.18786 -0.38751,-2.61167 z",
       :id "pinky-r",
       :inkscape:path-effect "#path-effect1662",
       :inkscape:original-d
       "m 111.41918,115.78182 c -0.0801,-2.84763 -0.16038,-5.69553 -0.24097,-8.54369 3.5505,-0.0199 7.10059,-0.04 10.65048,-0.0604 0.15549,3.32346 0.3107,6.64652 0.46566,9.96938 -1.60511,4.72331 -3.21041,9.44616 -4.81601,14.16884 -9.81514,-1.80812 -19.630149,-3.61643 -29.445619,-5.42505 8.490521,-0.99412 16.980439,-1.98846 25.470269,-2.98309 -0.69435,-2.3751 -1.38894,-4.75037 -2.08381,-7.12595 z"}]
     "\n  "]])

blank-finger-chart
