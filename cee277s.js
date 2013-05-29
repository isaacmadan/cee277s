if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to cee277s.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  Template.map.render = function() {
    //console.log(Collections.find());
  }

  Template.map.events({
    'click #showControlButton' : function() {
      $("#googleMap").css("left", "200px");
      $("#controls").css("width", "200px");
      $("#controls").css("-webkit-transition", "width 10s ease-in-out");
      $("#pinControls").css("display", "block");
      $("#pinControls").css("-webkit-transition", "display 10s ease-in-out");
    },

    'click #resetCenterButton' : function() {
      map.panTo(new google.maps.LatLng(15.45368,76.988754));
    },

    'click #addPinButton' : function() {
      //var map= google.maps.Map(document.getElementById("googleMap"), null);
      console.log(map);

      var marker = new google.maps.Marker({
        map:map,
        position:new google.maps.LatLng($("#latField").val(), $("#longField").val()),
      });

      var image = $("#imageField").val();
      var imageArray = new Array("IMG_3451.jpg", "IMG_3476.jpg", "IMG_3478.jpg", "IMG_3484.jpg", "IMG_3504.jpg");
      if(image == "") {
        image = imageArray[Math.floor(Math.random()*4)];
      }

      google.maps.event.addListener(marker, 'click', function() {
              var infowindow = new google.maps.InfoWindow({});
              infowindow.setContent("<span style='font-weight:bold;'>" + $("#nameField").val() + "</span><br /><span>" + $("#descriptionField").val() + "</span><br /><img src='" + image + "' width='150px' />");
              infowindow.open(map, this);
      }); 

      Coordinates.insert({lat: $("#latField").val(), lng: $("#longField").val(), name: $("#nameField").val(), description: $("#descriptionField").val(), image: image });

      map.panTo(new google.maps.LatLng($("#latField").val(), $("#longField").val()));
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

//console.log(ngo_data);
Coordinates = new Meteor.Collection("coordinates");
//Coordinates.remove({});
//var res = Meteor.http.get("https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=mralexgray&count=1");
//console.log(res);


