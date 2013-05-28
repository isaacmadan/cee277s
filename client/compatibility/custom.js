/** custom **/
var map = "";

function addCoord(data) {

  var marker = new google.maps.Marker({
      map:map,
      position:new google.maps.LatLng(parseFloat(data.lat),parseFloat(data.lng)),
    });

  google.maps.event.addListener(marker, 'click', function() {
          var infowindow = new google.maps.InfoWindow({});
          infowindow.setContent("<span style='color:blue;'>" + data.name + "</span><br /><span>" + data.description + "</span>");
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
                infowindow.setContent("<span style='color:blue;'>" + ngo_data[this.i].name + "</span><br /><img width='50px' src='assets/img/image1.jpg' />");
                infowindow.open(map, this);
        }); 
  }
}

window.onload = function() {
  //google.maps.event.addDomListener(window, 'load', initialize);
  initialize();
}