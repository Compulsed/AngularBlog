angular.module('blogApp')
.controller('MyPosterCtrl', ['$scope', function($scope) {

  $scope.title = '';
  $scope.contents = '';

  $scope.submit = function() {
    if ($scope.title && $scope.contents) {
      console.log($scope.title, $scope.contents);

      $scope.title = '';
      $scope.contents = '';
    }
  };
}]);
