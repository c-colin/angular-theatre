'use strict';

angular.
  module('core.movie').
  factory('Movie', ['$resource','$http',
    function($resource,$http) {
      $http.defaults.headers.common['Authorization'] = '2d7a4814d02fb3ad6f28b19ba2004ede';
      $http.defaults.headers.common['Content-Type'] = 'application/json';
      return $resource('https://tv-api-exercise-2.herokuapp.com/movies/:movieId', {}, {
        query: {
          method: 'GET',
          params: {movieId: '@id'},
          isArray: true
        }
      });
    }
  ]);

