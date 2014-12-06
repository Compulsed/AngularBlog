'use strict';

angular.module('blogApp')
.controller('BlogFormCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  // Defines the inital data
  $scope.reset = function(){
      $scope.post = {
        title: '',
        contents: ''
      };
  };

  // Triggers if fields contain content
  $scope.postEntry = function(){
    if($scope.post.title && $scope.post.contents){
      console.log($scope.post);

      $http.post('/api/posts', {
        title : $scope.post.title,
        contents: $scope.post.contents
      }).
        success(function(data, status, headers, config) {
          $location.path('/blog');
        }).
        error(function(data, status, headers, config){
          console.log('failed to post to /api/posts');
        });

    }
  };

  // Executes to initally set up the data
  $scope.reset();
}]);
