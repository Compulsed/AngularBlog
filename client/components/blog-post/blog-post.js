angular.module('blogApp')
.controller('BlogPostCtrl', ['$scope', function($scope) {

  $scope.post = {
    title: '',
    contents: ''
  };

}])
.directive('blogPost', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/blog-post/blog-post.html'
  };
});
