'use strict';

angular.module('blogApp')
.directive('blogListing', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/blogs/blog-listing/blog-listing.html'
  };
});
