var weatherRequest = new XMLHttpRequest();
var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4156210&APPID={4b8a92dd90f5820ac1d1d9e9327f8f8c}';
request.open('GET', true);
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
};

document.getElementById("current-temp").innerHTML = weatherData;
