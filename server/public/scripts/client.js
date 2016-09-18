(function(){
  var storeApp = angular.module('StoreApp', [ ])
  // controllers are where we define our apps behavior by adding functions and values
  storeApp.controller('StoreController', function(){
    this.product = gem;
  });

  var gem = {
    name: 'Ruby',
    price: 2.95,
    description: 'This is a red gem!',
    canPurchase: true,
    soldOut: false
  }
})();
