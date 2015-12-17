'use strict';

angular.module('app')
  .directive('productCard', function() {
    return {
      restrict: 'E', 
      require: '^product',
      templateUrl: 'product-card.html'
    };
  });