'use strict';

angular.module('blogApp')
.controller('BlogEntryCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.oneAtATime = true;

  $scope.posts = [];

  $http.get('/api/posts').success(function(posts) {
    $scope.posts = posts.reverse();
  });


  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
}]);
