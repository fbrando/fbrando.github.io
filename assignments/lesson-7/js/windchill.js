//var h = div.getElementById("high").value;
//var l = parseFloat(document.getElementById("low").value);
//var s = parseFloat(document.getElementById("wind-speed").value);

var t = (78 + 56) / 2;
var s = 10;
var f = (35.74 + (0.6215 * t)) - (35.75 * Math.pow(s, .16)) + (0.4275 * t * Math.pow(s, .16));

document.getElementById("windchill").innerHTML = Math.round(f, 10);

/* where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind speed in miles per hour.*/
