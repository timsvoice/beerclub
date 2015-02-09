app.controller('brewdbCtrl', ['$scope', '$http', function ($scope, $http) {
  
  $scope.brewerydb_key ='b7336846d8cc7073b22ed905911c5f3b';
  $scope.cors = 'http://www.corsproxy.com/';

  $http.get($scope.cors + 'api.brewerydb.com/v2/beers/random?key=' + $scope.brewerydb_key + '').
      success (function(data, status){
          console.log(data);
        }).
        error (function(data) {
          console.log('fail');
        }
      );
}]);