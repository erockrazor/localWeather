$(document).ready(function() {

  //Geo-Location Query

  // Potential "icon" returns - clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $("#geoLocation").html("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      console.log(latitude + longitude);
      $.getJSON("https://crossorigin.me/https://api.darksky.net/forecast/ebcbd99d8eb007ce61196e23b91769a4/" + latitude + "," + longitude, function(response) {
        console.log(response);
        var iconRequest = response.currently.icon;
        var temperatureCurrently = Math.round(response.currently.temperature);
        $("#temperature").html('<h1>' + temperatureCurrently + "° f" + '</h1>');
        $("#summary").html('<h2>' + response.currently.summary + '</h2>');
        // console.log(iconRequest);
        if (iconRequest.includes("partly-cloudy-night")) {
          ($("#icon").html('<img src="images/Cloud-Moon.svg" alt="">'));
        } else if (iconRequest.includes("clear-night")) {
          ($("#icon").html('<img src="images/Moon-Waxing-Gibbous.svg" alt="">'));
        } else if (iconRequest.includes("clear-day")) {
          ($("#icon").html('<img src="images/Sun.svg" alt="">'));
        } else if (iconRequest.includes("rain")) {
          ($("#icon").html('<img src="images/Cloud-Rain.svg" alt="">'));
        } else if (iconRequest.includes("snow" || "sleet")) {
          ($("#icon").html('<img src="images/Cloud-Snow.svg" alt="">'));
        } else if (iconRequest.includes("wind")) {
          ($("#icon").html('<img src="images/Wind.svg" alt="">'));
        } else if (iconRequest.includes("fog")) {
          ($("#icon").html('<img src="images/Cloud-Fog.svg" alt="">'));
        } else if (iconRequest.includes("cloudy")) {
          ($("#icon").html('<img src="images/Cloud.svg" alt="">'));
        }

        $("#celciusButton").click(function() {
          console.log(response.currently.temperature - 32 * 0.5556);
          $("#temperature").html('<h1>' + Math.round((temperatureCurrently - 32) * 0.5556)+ "° c" +'</h1>');
        });

        $("#fahrenheitButton").click(function() {
          $("#temperature").html('<h1>' + Math.round(temperatureCurrently) + "° f" +'</h1>');
        });

      });
    });
  }


});
