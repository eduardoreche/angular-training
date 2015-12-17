'use strict';
 
angular.module('app', ['ngRoute'])

  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'product-list.html',
        controller: 'ProductsCtrl'
      })
      .when('/product/:id', {
        templateUrl: 'product.html', 
        controller: 'ProductsCtrl'
      })
      .when('/shoppingCart', {
        templateUrl: 'shopping-cart.html', 
        controller: 'ProductsCtrl'
      })
      
      .otherwise({
				redirectTo:'/'
			});
  });