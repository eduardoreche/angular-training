'use strict';

angular.module('app') 
  .controller('ProductsCtrl', ['$scope', '$routeParams', '$location', 'Product', 'ShoppingCart', function($scope, $routeParams, $location, Product, ShoppingCart) {
    $scope.products = Product.query();
    $scope.product = ($routeParams.id ? Product.find($routeParams.id) : {});
    
    $scope.search = '';
    
    $scope.shoppingCart = ShoppingCart.allItems();
    
    $scope.addToShoppingCart = function(product) {
      var duplicated = false;
      
      angular.forEach($scope.shoppingCart, function(item, index) {
        if(item.product.id === product.id) {
          duplicated = true;
          return;
        }          
      });
      
      if(!duplicated)
        ShoppingCart.addItem(product);
    }
    
    $scope.removeShoppingCartItem = function(item) {
      ShoppingCart.removeItem(item);
    }
    
    $scope.viewProduct = function(product) {
      $location.path('/product/'+ product.id);
    }
    
    $scope.viewShoppingCart = function() {
      $location.path('/shoppingCart/');
    }
    
    $scope.shoppingCartTotal = function() {
      return ShoppingCart.total();
    }
  }]);