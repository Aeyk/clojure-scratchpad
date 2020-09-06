set terminal pngcairo font "arial,10" size 500,500
set output 'barchart.png'
set boxwidth 0.75
set style fill solid

  plot 'chrome.dat' using 1:2 with boxes

  