'use strict';

angular.module('blogApp')
.directive('blogListing', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/blog/blog-listing/blog-listing.html'
  };
});
