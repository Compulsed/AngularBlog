'use strict';

angular.module('blogApp')
.directive('blogPost', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/blog-post/blog-post.html'
  };
});
