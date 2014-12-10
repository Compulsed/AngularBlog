'use strict';

angular.module('blogApp')
  .controller('BlogsController', function ($scope, $http) {

    // This is bad practice
    $scope.$on('$viewContentLoaded', function() {

      setTimeout(function(){
        hljs.initHighlighting();
      }, 1000);

    });
});
