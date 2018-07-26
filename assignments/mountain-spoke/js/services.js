var serviceRequest = new XMLHttpRequest();
var apiURL = 'https://fbrando.github.io/assignments/mountain-spoke/js/services.json';
serviceRequest.open('GET', apiURL, true);
serviceRequest.responseText = 'text';
serviceRequest.send();

serviceRequest.onload = function () {
    var serviceData = JSON.parse(serviceRequest.responseText);


    var basicType = serviceData.service[0].price;
    var deluxeType = serviceData.service[1].type;
    var premiumType = serviceData.service[0].type;
    var proType = serviceData.service[3].type;
    var newType = serviceData.service[4].type;


    document.getElementById("basic").innerHTML = "basicType";
    document.getElementById("deluxe").innerHTML = deluxeType;
    document.getElementById("premium").innerHTML = 5;
    document.getElementById("pro").innerHTML = proType;
    document.getElementById("new").innerHTML = newType;
}
