'use strict';

// Register `movieList` component, along with its associated controller and template
angular.
  module('movieList').
  component('movieList', { 
    templateUrl: 'movie-list/movie-list.template.html',
    controller: ['Movie',
      function MovieListController(Movie) {
        this.movies = Movie.query();
      }
    ]
  });