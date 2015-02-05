app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('beer', {
      url: "/",
      templateUrl: "beer.html",
      controller: "beerCtrl"
    })
    .state('gird', {
      url: "/grid",
      templateUrl: "grid.html",
      controller: "beerCtrl"
    });
});