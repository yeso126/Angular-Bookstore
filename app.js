(function() {
  var app = angular.module('store', []);

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Whatever',
      canPurchase: false,
      soldOut: false
    },
    {
      name: 'Pentagonal Gem',
      price: 4.95,
      description: 'Whatever',
      canPurchase: true,
      soldOut: false
    }
  ];


  app.controller('StoreController', function(){
    this.products = gems;
  });

})();
