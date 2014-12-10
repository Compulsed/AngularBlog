'use strict';

angular.module('blogApp')
.directive('postBlog', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/post/post-blog/post-blog.html'
  };
});
