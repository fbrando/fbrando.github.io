var weatherRequest = new XMLHttpRequest();
var apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=84111,us&units=imperial&APPID=4b8a92dd90f5820ac1d1d9e9327f8f8c';
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


////   <picture class="clearfix">
//    <div id="weather-icon"></div>
//<!--                <img id="weather-icon" src="images/sunny-icon_200x200-02.png" alt="sun icon">-->
//</picture>
//<div class="highlow">
//    <h4><span id="weather-condition"></span></h4>
//        <p>Current Temperature: <span id="current"></span></p>
//            <!--                <p>Current Weather: <span id="weather-condition"></span></p>-->
//<p>High: <span id="high"></span>&deg;F</p>
//    <p>Low: <span id="low"></span>&deg;F</p>
//        <p>Wind Speed: <span id="wind-speed"></span>mph</p>
//            <p>Wind Chill: <span id="windchill"></span></p>
