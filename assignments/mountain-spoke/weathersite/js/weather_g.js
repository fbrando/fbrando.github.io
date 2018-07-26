var weatherRequest = new XMLHttpRequest();
var apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=66062,us&units=imperial&APPID=4b8a92dd90f5820ac1d1d9e9327f8f8c';
weatherRequest.open('GET', apiURL, true);
weatherRequest.responseText = 'json';
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);


    var current = weatherData.main['temp'];
    var high = weatherData.main['temp_max'];
    var low = weatherData.main['temp_min'];
    var windSpeed = weatherData.wind['speed'];
    var description = weatherData.weather[0]['description'];
    var icon =("<img src='http://openweathermap.org/img/w/" + weatherData.weather[0]['icon'] + ".png'>");

    document.getElementById("current").innerHTML = Math.round(current,10);
    document.getElementById("high").innerHTML = Math.round(high,10);
    document.getElementById("low").innerHTML = Math.round(low,10);
    document.getElementById("wind-speed").innerHTML = Math.round(windSpeed,10);
    document.getElementById("weather-condition").innerHTML = description;
    document.getElementById("weather-icon").innerHTML = icon;
}
