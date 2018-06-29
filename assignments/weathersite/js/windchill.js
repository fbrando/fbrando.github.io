//var h = parseInt(document.getElementById("high").innerHTML);
//var l = parseInt(document.getElementById("low").innerHTML);
//var s = parseInt(document.getElementById("wind-speed").innerHTML);

var h = 92;
var l = 54;
var s = 5;

var t = (h + l) / 2;
var f = (35.74 + (0.6215 * t)) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));

document.getElementById("windchill").innerHTML = Math.round(f,10);

/* where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind speed in miles per hour.*/
