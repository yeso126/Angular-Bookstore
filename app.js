(function() {
  var app = angular.module('store', []);

  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Whatever'
  };

  app.controller('StoreController', function(){
    this.product = gem;
  });

})();
