var serviceRequest = new XMLHttpRequest();
var apiURL = 'js/services.json';
serviceRequest.open('GET', apiURL, true);
serviceRequest.responseText = 'text';
serviceRequest.send();

serviceRequest.onload = function () {
    var serviceData = JSON.parse(serviceRequest.responseText);


    var basicType = serviceData.service[0].type;
    var deluxeType = serviceData.service[1].type;
    var premiumType = serviceData.service[2].type;
    var proType = serviceData.service[3].type;
    var newType = serviceData.service[4].type;

    var basicPrice = serviceData.service[0].price;
    var deluxePrice = serviceData.service[1].price;
    var premiumPrice = serviceData.service[2].price;
    var proPrice = serviceData.service[3].price;
    var newPrice = serviceData.service[4].price;

    var basicDescription = serviceData.service[0].description;
    var deluxeDescription = serviceData.service[1].description;
    var premiumDescription = serviceData.service[2].description;
    var proDescription = serviceData.service[3].description;
    var newDescription = serviceData.service[4].description;


    document.getElementById("basic").innerHTML = basicType;
    document.getElementById("deluxe").innerHTML = deluxeType;
    document.getElementById("premium").innerHTML = premiumType;
    document.getElementById("pro").innerHTML = proType;
    document.getElementById("new").innerHTML = newType;

    document.getElementById("basprice").innerHTML = basicPrice;
    document.getElementById("delprice").innerHTML = deluxePrice;
    document.getElementById("preprice").innerHTML = premiumPrice;
    document.getElementById("proprice").innerHTML = proPrice;
    document.getElementById("newprice").innerHTML = newPrice;

    document.getElementById("basdes").innerHTML = basicDescription;
    document.getElementById("deldes").innerHTML = deluxeDescription;
    document.getElementById("predes").innerHTML = premiumDescription;
    document.getElementById("prodes").innerHTML = proDescription;
    document.getElementById("newdes").innerHTML = newDescription;
}
