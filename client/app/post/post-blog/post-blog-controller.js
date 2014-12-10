  'use strict';

    angular.module('blogApp')
    .controller('PostBlogController', function($scope, $http, $location, AlertService) {
      // Defines the inital data
      $scope.reset = function(){
          $scope.post = {
            title: '',
            contents: ''
          };
      };

      $scope.previewHighlight = function(){
        $('pre code').each(function(i, block) {
          hljs.highlightBlock(block);
        });
      }

      // Triggers if fields contain content
      $scope.postEntry = function(){

        if($scope.post.title && $scope.post.contents){
          $http.post('/api/posts', {
            title : $scope.post.title,
            contents: $scope.post.contents
          }).
            success(function(data, status, headers, config){

              AlertService.show({
                type: 'success',
                msg: 'Successfully posted the article!'
              }, 5000);

              $location.path('/blogs');
            }).
            error(function(data, status, headers, config){
              AlertService.show({
                type: 'danger',
                msg: 'Error, unable to post the article!'
              }, 5000);

              console.log('failed to post to /api/posts');
            });
        }
      };

      // Executes to initally set up the data
      $scope.reset();
    });
