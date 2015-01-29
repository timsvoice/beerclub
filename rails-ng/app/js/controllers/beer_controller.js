app.controller('beerCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('/beers').
      success (function(data, status){
          console.log(data, status);
      });
}]);