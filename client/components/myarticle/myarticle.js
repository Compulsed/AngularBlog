angular.module('blogApp')
.controller('Controller', ['$scope', function($scope) {

  $scope.title = '';
  $scope.contents = '';

}])
.directive('myarticle', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/myarticle/myarticle.html'
  };
});
