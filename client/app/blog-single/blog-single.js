'use strict';

angular.module('blogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('blogEntry', {
        url: '/blog/:_id',
        templateUrl: 'app/blog-single/blog-single.html',
        controller: 'BlogSingleCtrl'
      });
  });
