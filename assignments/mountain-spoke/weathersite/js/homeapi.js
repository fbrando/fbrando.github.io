var weatherRequest = new XMLHttpRequest();
var apiURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
weatherRequest.open('GET', apiURL, true);
weatherRequest.responseText = 'text';
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);


    var franklinMotto = weatherData.towns[0].motto;
    var greenvilleMotto = weatherData.towns[1].motto;
    var springfieldMotto = weatherData.towns[3].motto;

    var franklinYear = weatherData.towns[0].yearFounded;
    var greenvilleYear = weatherData.towns[1].yearFounded;
    var springfieldYear = weatherData.towns[3].yearFounded;

    var franklinPopulation = weatherData.towns[0].currentPopulation;
    var greenvillePopulation = weatherData.towns[1].currentPopulation;
    var springfieldPopulation = weatherData.towns[3].currentPopulation;

    var franklinRainfall = weatherData.towns[0].averageRainfall;
    var greenvilleRainfall = weatherData.towns[1].averageRainfall;
    var springfieldRainfall = weatherData.towns[3].averageRainfall;


    document.getElementById("franklin-motto").innerHTML = franklinMotto;
    document.getElementById("greenville-motto").innerHTML = greenvilleMotto;
    document.getElementById("springfield-motto").innerHTML = springfieldMotto;

    document.getElementById("franklin-year").innerHTML = franklinYear;
    document.getElementById("greenville-year").innerHTML = greenvilleYear;
    document.getElementById("springfield-year").innerHTML = springfieldYear;

    document.getElementById("franklin-population").innerHTML = franklinPopulation;
    document.getElementById("greenville-population").innerHTML = greenvillePopulation;
    document.getElementById("springfield-population").innerHTML = springfieldPopulation;

    document.getElementById("franklin-rainfall").innerHTML = franklinRainfall;
    document.getElementById("greenville-rainfall").innerHTML = greenvilleRainfall;
    document.getElementById("springfield-rainfall").innerHTML = springfieldRainfall;
}
