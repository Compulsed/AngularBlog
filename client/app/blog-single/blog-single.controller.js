'use strict';

angular.module('blogApp')
  .controller('BlogSingleCtrl', function ($scope, $http, $stateParams) {

    $scope.post = {
      title: '',
      contents: ''
    };

    $http.get('/api/posts/' + $stateParams._id).success(function(post) {
      $scope.post = post
    });

});
