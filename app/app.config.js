'use strict';

angular.
  module('myApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/movies', {
          template: '<movie-list></movie-list>'
        }).
        when('/movies/:movieId', {
          template: '<movie-description></movie-description>'
        }).
        otherwise('/movies');
    }
  ]);