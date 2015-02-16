app.controller('beerCtrl', ['$scope', '$http', function ($scope, $http) {
  
  $http.get('/beers/cBLTUw').
      success (function(data, status){
          $scope.beers = data;
          angular.forEach(data, function(value, index) {
            $scope.rating = value.rating;
            console.log($scope.rating);
            $scope.stars = function(num) {
                return new Array(num);
            };
          });
        }
      );
  }]);