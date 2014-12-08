'use strict';

angular.module('blogApp')
.controller('BlogEntryCtrl', function($scope, $http, AlertService) {
  $scope.oneAtATime = true;

  $scope.posts = [];

  $http.get('/api/posts').success(function(posts) {
    $scope.posts = posts.reverse();
  });

  $scope.remove = function(post, event){

    var target = angular.element(event.target);
    target.removeClass('glyphicon-remove');
    target.addClass('glyphicon-refresh');

    var panel = target.parents('.panel');

    $http.delete('/api/posts/' + post._id)
      .success(function(data, status, headers, config, statusText){
        AlertService.alerts.push({
          type: 'success',
          msg: 'Successfully deleted the article!'
        });

        panel.fadeOut();
      })
      .error(function(data, status, headers, config, statusText){
        AlertService.alerts.push({
          type: 'danger',
          msg: 'Failed to delete the article!'
        });

        console.log('failed to delete to /api/posts/' + post._id);
      });
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});
