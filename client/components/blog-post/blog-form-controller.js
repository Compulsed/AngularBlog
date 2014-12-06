'use strict';

angular.module('blogApp')
.controller('BlogFormCtrl', ['$scope', '$location', function($scope, $location) {
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

      $location.path('/'); // Maybe should redirect to the post?
    }
  };

  // Executes to initally set up the data
  $scope.reset();
}]);
