(function(){
  // modules are where our application components live
  var storeApp = angular.module('StoreApp', [ ])
  // controllers are where we define our apps behavior by adding functions and values
  storeApp.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [{
    name: 'Ruby',
    price: 2.95,
    description: 'This is a red gem!',
    canPurchase: true,
    soldOut: false
  },
  {
    name: 'Saphire',
    price: 5.95,
    description: 'This is a blue gem!',
    canPurchase: false,
    soldOut: false
  },
  {
    name: 'Emerald',
    price: 12.95,
    description: 'This is a green gem!',
    canPurchase: true,
    soldOut: true
  }];
})();
