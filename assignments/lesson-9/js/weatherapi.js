var weatherRequest = new XMLHttpRequest();
var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=4b8a92dd90f5820ac1d1d9e9327f8f8c';
weatherRequest.open('GET', apiURL, true);
weatherRequest.responseText = 'json';
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);


    var current = weatherData.main['temp'];

    document.getElementById("current-temp").innerHTML = " " + current;
}
