/** custom **/
var map = "";
var imageArray = new Array("IMG_3451.jpg", "IMG_3476.jpg", "IMG_3478.jpg", "IMG_3484.jpg", "IMG_3504.jpg");

function addCoord(data) {

  var marker = new google.maps.Marker({
      map:map,
      position:new google.maps.LatLng(parseFloat(data.lat),parseFloat(data.lng)),
    });

  google.maps.event.addListener(marker, 'click', function() {
          var infowindow = new google.maps.InfoWindow({});
          infowindow.setContent("<span style='font-weight:bold;'>" + data.name + "</span><br /><span>" + data.description + "</span><br /><img src='" + data.image + "' width='150px' />");
          infowindow.open(map, this);
  }); 

}

function initialize()
{
  var mapProp = {
    center:new google.maps.LatLng(15.45368,76.988754),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.HYBRID
    };
  map=new google.maps.Map(document.getElementById("googleMap")
    ,mapProp);

  var cursor = Coordinates.find();
  cursor.forEach(addCoord);

  //markers
  for(var i=0; i < ngo_data.length; i++) {
    var marker = new google.maps.Marker({
        map:map,
        position:new google.maps.LatLng(parseFloat(ngo_data[i].lat),parseFloat(ngo_data[i].long)),
      });

    marker.i = i;
    google.maps.event.addListener(marker, 'click', function() {
      var infowindow = new google.maps.InfoWindow({});
      infowindow.setContent("<span style='font-weight:bold;'>" + ngo_data[this.i].name + "</span><br /><img width='150px' src='" + imageArray[Math.floor(Math.random()*4)] + "' />");
      infowindow.open(map, this);
    }); 
  }
}

window.onload = function() {
  //google.maps.event.addDomListener(window, 'load', initialize);
  initialize();
}