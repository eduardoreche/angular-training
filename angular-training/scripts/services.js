'use strict';

angular.module('app')
  .factory('Product', function() { 
    var products = [
      {"id": "1", "category": "Smartphone", "description": "Motorola Moto X Style Dual Chip", "price": 2499, "installments": 10, "image": "product1.jpg"}, 
      {"id": "2", "category": "Smart TV", "description": "LED 43'' LG 43UF7700 Ultra HD 4K", "price": 2569, "installments": 10, "image": "product2.jpg"}, 
      {"id": "3", "category": "Smartphone", "description": "Asus Zenfone Go Dual Chip", "price": 799, "installments": 10, "image": "product3.jpg"}, 
      {"id": "4", "category": "Smartphone", "description": "Samsung Galaxy S5 New Edition DS Dual Chip", "price": 1799, "installments": 10, "image": "product4.jpg"}, 
      {"id": "5", "category": "Smartphone", "description": "Samsung Galaxy S6 Edge Plus Dourado 32GB 4G", "price": 3420, "installments": 10, "image": "product5.jpg"}, 
      {"id": "6", "category": "TV", "description": "LED 49 LG Full HD 49LF5500 2 HDMI 1 USB 60Hz", "price": 1799, "installments": 10, "image": "product6.png"},
      {"id": "7", "category": "Smart TV", "description": "LED 65'' LG Cinema 3D 65UB9500 Ultra HD", "price": 7749, "installments": 12, "image": "product7.jpg"},
      {"id": "8", "category": "TV", "description": "LED 3D 42'' LG 42LF6200 Full HD", "price": 1799, "installments": 10, "image": "product8.jpg"},
      {"id": "9", "category": "Eletroportátil", "description": "Robô Aspirador de Pó Ropo Glass com Limpeza Programável", "price": 1199, "installments": 10, "image": "product9.jpg"}       
    ];
  
    return {
      query: function() { 
        return products 
      }, 
      
      find: function(id) {
        var result = null;
        angular.forEach(products, function(item, index) {
          if(item.id === id) {
            result = item;
            return;
          }  
        });
        return result;
      }
    }
  })
  
  .factory('ShoppingCart', function() {
    var shoppingCart = [];
  
    return {
      allItems: function() {
        return shoppingCart;
      },
      
      addItem: function(product) {
        shoppingCart.push({product: product, quantity: 1});
      }, 
      
      removeItem: function(item) {
         shoppingCart.splice(shoppingCart.indexOf(item), 1);
      },
      
      total: function() {
        var total = 0;
        angular.forEach(shoppingCart, function(item, index) {
          total += (item.product.price * item.quantity);
        });
        
        return total;
      }
    };
  });
  
