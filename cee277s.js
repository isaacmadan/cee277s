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

  Template.map.events({
    'click #showControlButton' : function() {
      $("#googleMap").css("left", "200px");
      $("#controls").css("width", "200px");
      $("#pinControls").css("display", "block");
    },

    'click #addPinButton' : function() {
      //var map= google.maps.Map(document.getElementById("googleMap"), null);
      console.log(map);

      for(var i=0; i < ngo_data.length; i++) {
        var marker = new google.maps.Marker({
          map:map,
          position:new google.maps.LatLng($("#latField").val(), $("#longField").val()),
        });
      }

    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
