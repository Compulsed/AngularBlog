'use strict';

angular.module('blogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('blogs', {
        url: '/blogs',
        templateUrl: 'app/blogs/blogs.html',
        controller: 'BlogsController'
      });
  });
