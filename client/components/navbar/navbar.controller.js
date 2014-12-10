'use strict';

angular.module('blogApp')
  .controller('NavbarController', function ($scope, $location, $element) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }, {
      'title': 'Blogs',
      'link': '/blogs'
    }, {
      'title': 'Post',
      'link': '/post'
    }, {
      'title': 'Projects',
      'link': '/project'
    }, {
      'title': 'About',
      'link': '/about'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };

  });
