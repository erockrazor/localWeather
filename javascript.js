//Geo-Location Query
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude + longitude);
    $.getJSON("https://api.darksky.net/forecast/ebcbd99d8eb007ce61196e23b91769a4/" + latitude +","+ longitude, function(response) {
    console.log(response);
    console.log(response.currently.temperature);
    });
  });
}



// Dark-Sky API KEY- ebcbd99d8eb007ce61196e23b91769a4
// console.log(latitude + longitude);
//
// function quoteGeneration() {
//   $.getJSON("https://api.darksky.net/forecast/ebcbd99d8eb007ce61196e23b91769a4/" + latitude + longitude, function(response) {
//     console.log(response);
//
//     $("#quoteReturn").html('"' + a.quote + '"');
//     $("#characterReturn").html('<h3><b>-' + a.character + '</b></h3>');
//   });
// }
