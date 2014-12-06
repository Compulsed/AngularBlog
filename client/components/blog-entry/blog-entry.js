'use strict';

angular.module('blogApp')
.directive('blogEntry', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/blog-entry/blog-entry.html'
  };
});
