'use strict';

angular.module('blogApp')
  .controller('BlogController', function ($scope, $http, $stateParams) {

    $scope.post = {
      title: '',
      contents: ''
    };

    $http.get('/api/posts/' + $stateParams._id).success(function(post) {
      $scope.post = post;
    });

    // This is bad practice
    $scope.$on('$viewContentLoaded', function() {

      setTimeout(function(){
        hljs.initHighlighting();
      }, 2000);

    });

});
