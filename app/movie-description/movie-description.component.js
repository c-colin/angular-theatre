'use strict';

// Register `movieDescription` component, along with its associated controller and template
angular.
  module('movieDescription').
  component('movieDescription', {
    templateUrl: 'movie-description/movie-description.template.html',
    controller: ['$routeParams','Movie','Categorie','Actor',
      function MovieDescriptionController($routeParams,Movie,Categorie,Actor) {
        var self = this;

        // This method is called to set to actorHovered the id of the actor who is hovered over by the mouse.
        // Its value is -1 when no actor name is hovered.
        self.setActorId = function setActorId(actorId) {
          self.actorHovered = actorId;
        };

        // actorHovered is initialized by -1
        self.setActorId(-1); 

        // get the movies json data
     	  self.movie = Movie.get({movieId:$routeParams.movieId});

        // get the movies/id/categories json data
     	  self.categories = Categorie.query({movieId:$routeParams.movieId});

        // get the movies/id/actors json data
     	  self.actors = Actor.query({movieId:$routeParams.movieId});
      }
    ]
  });