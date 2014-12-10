'use strict';

angular.module('blogApp')
  .controller('BlogController', function ($scope, $http, $stateParams) {

    $scope.post = {
      title: '',
      contents: ''
    };

    $http.get('/api/posts/' + $stateParams._id).success(function(post) {
      $scope.post = post;

      // Dirty 
      setTimeout(function(){
        $('pre code').each(function(i, block) {
          hljs.highlightBlock(block);
        });
      }, 200);

    });

});
