(function() {
  var app = angular.module('store', []);

  var gems = [
    {
      name: '1984',
      price: 2,
      description: 'Nineteen Eighty-Four, often published as 1984, is a dystopian novel by English author George Orwell published in 1949. The novel is set in Airstrip One (formerly known as Great Britain), a province of the superstate Oceania in a world of perpetual war, omnipresent government surveillance and public manipulation, dictated by a political system euphemistically named English Socialism (or Ingsoc in the governments invented language, Newspeak) under the control of a privileged Inner Party elite, that persecutes individualism and independent thinking as thoughtcrime',
      canPurchase: false,
      soldOut: false,
      images: [
        {
          full: 'images/full/1984.jpg',
          thumb: 'images/thumb/1984.jpg'
        }
      ]
    },
    {
      name: 'The Hobbit',
      price: 4.95,
      description: 'The Hobbit is a novel by J.R.R. Tolkien, set in Middle-earth. The book was first published on September 21, 1937 and is set in the years 2941 to 2942 of the Third Age before the events of The Lord of the Rings.',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'images/full/hobbit.jpg',
          thumb: 'images/thumb/hobbit.jpg'
        }
      ]
    }
  ];


  app.controller('StoreController', function(){
    this.products = gems;
  });

})();
