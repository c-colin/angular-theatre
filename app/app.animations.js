'use strict';

// animates the display of the author's description
angular.
  module('myApp').
  animation('.actor-description', function actorAnimationFactory() {
    return {
      addClass: animateIn,
      removeClass: animateOut
    };

    function animateIn(element, className, done) {
      if (className !== 'selected') return;

      element.stop( true, true ).animate({opacity: 1}, done);

      return function animateInEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }

    function animateOut(element, className, done) {
      if (className !== 'selected') return;
     element.stop( true, true ).animate({opacity: 0}, done);

      return function animateOutEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }
  });