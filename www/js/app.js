// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova', 'ngMap' , 'chart.js'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .controller('AppCtrl', function ($scope, $cordovaGeolocation) {

        // MAP code
        $scope.location = {};
        $scope.coord = {
            "lat" : '40.71',
            "lon" : '-74.21'
        };

        $scope.getCurrentLocation = function () {
            console.log('Getting current location');
            $scope.location = {};

            var posOptions = {timeout: 10000, enableHighAccuracy: false};
            $cordovaGeolocation
                .getCurrentPosition(posOptions)
                .then(function (position) {
                    console.log('SUCCESS');
                    console.log(JSON.stringify(position));
                    var lat = position.coords.latitude;
                    var long = position.coords.longitude;

                    $scope.location = {
                        latitude: lat,
                        longitude: long
                    };

                    $scope.coord = {
                        "lat" : lat,
                        "lon" : long
                    };

                }, function (err) {
                    console.log('ERROR');
                    console.log(JSON.stringify(err));
                    $scope.location.error = err;
                });
        }

        // Chart code
        $scope.graph = {};
        $scope.graph.data = [
            //Awake
            [16, 15, 20, 12, 16, 12, 8],
            //Asleep
            [8, 9, 4, 12, 8, 12, 14]
        ];
        $scope.graph.labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        $scope.graph.series = ['Awake', 'Asleep'];
    })
