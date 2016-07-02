var locationApp = angular.module('locationApp', []);

locationApp.controller("locationCtrl", function($scope, $http) {
  $scope.markers = [];
  $scope.cities = {};
  $scope.countries = [];

  $http.get("./data/location.json").success(function(data) {
    $scope.beaches = data;
    $scope.beaches.forEach(function(v) {
      if (!$scope.cities[v.country]) {
        $scope.cities[v.country] = [v.city];
        $scope.countries.push(v.country);
      } else {
        $scope.cities[v.country].push(v.city);
      }
    });
    $scope.initialize();
  });

// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
var mapOptions = {
  zoom: 10,
  center: new google.maps.LatLng(0, 0),
  styles: [{
      "featureType": "landscape",
      "stylers": [{
        "hue": "#FFBB00"
      }, {
        "saturation": 43.400000000000006
      }, {
        "lightness": 37.599999999999994
      }, {
        "gamma": 1
      }]
    }, {
      "featureType": "road.highway",
      "stylers": [{
        "hue": "#FFC200"
      }, {
        "saturation": -61.8
      }, {
        "lightness": 45.599999999999994
      }, {
        "gamma": 1
      }]
    }, {
      "featureType": "road.arterial",
      "stylers": [{
        "hue": "#FF0300"
      }, {
        "saturation": -100
      }, {
        "lightness": 51.19999999999999
      }, {
        "gamma": 1
      }]
    }, {
      "featureType": "road.local",
      "stylers": [{
        "hue": "#FF0300"
      }, {
        "saturation": -100
      }, {
        "lightness": 52
      }, {
        "gamma": 1
      }]
    }, {
      "featureType": "water",
      "stylers": [{
        "hue": "#0078FF"
      }, {
        "saturation": -13.200000000000003
      }, {
        "lightness": 2.4000000000000057
      }, {
        "gamma": 1
      }]
    }, {
      "featureType": "poi",
      "stylers": [{
        "hue": "#00FF6A"
      }, {
        "saturation": -1.0989010989011234
      }, {
        "lightness": 11.200000000000017
      }, {
        "gamma": 1
      }]
    }]
  };

  $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

  $scope.initialize = function() {
    var newMarker;

    for (var i = 0; i < $scope.beaches.length; i++) {
      newMarker = new google.maps.Marker({
        position: new google.maps.LatLng($scope.beaches[i].lat, $scope.beaches[i].lng),
        map: $scope.map,
        title: $scope.beaches[i].address + ' ' + $scope.beaches[i].city + ', ' + $scope.beaches[i].postalCode + '\nLatitude : ' + $scope.beaches[i].lat + ', Longitude : ' + $scope.beaches[i].lng,
      });

      newMarker.category = $scope.beaches[i].country;
      newMarker.subCategory = $scope.beaches[i].city;
      newMarker.setVisible(false);

      $scope.markers.push(newMarker);
    }
  };

  $scope.moveMarker = function(map, marker) {
    var lat = marker.getPosition().lat();
    var lng = marker.getPosition().lng();
    map.panTo(new google.maps.LatLng(lat, lng));
  };

  $scope.displayMarkers = function(category, subCategory) {
    for (var i = 0; i < $scope.markers.length; i++) {
      if ($scope.markers[i].category === category) {
        if (subCategory) {
          if ($scope.markers[i].subCategory === subCategory) {
            $scope.markers[i].setVisible(true);
          } else {
            $scope.markers[i].setVisible(false);
          }
        } else {
          $scope.markers[i].setVisible(true);
        }
        $scope.moveMarker($scope.map, $scope.markers[i]);
      } else {
        $scope.markers[i].setVisible(false);
      }
    }
  };

  $scope.unique = function(arr) {
    return arr.filter(function(v, i, self) {
      return self.indexOf(v) === i
    });
  };

});
