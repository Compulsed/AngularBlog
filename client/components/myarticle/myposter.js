angular.module('blogApp')
.controller('MyposterCtrl', ['$scope', function($scope) {

  $scope.title = '';
  $scope.contents = '';

}])
.directive('myposter', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/myposter/myposter.html'
  };
});
