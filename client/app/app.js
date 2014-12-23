'use strict';

angular.module('blogApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'btford.markdown',
  'angularMoment',
  'hljs',
  'angular.filter',
  'angular-loading-bar',
  'ngAnimate'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    var access = routingConfig.accessLevels;

    // Anonymous routes
    // Home, Blogs, Projects, About, Login
    $stateProvider
    .state('anon', {
      abstract: true,
      template: "<ui-view/>",
      data: {
        access: access.anon
      }
    })
    .state('anon.about', {
      url: '/about',
      templateUrl: 'app/about/about.html',
      controller: 'AboutController'
    })
    .state('anon.project', {
      url: '/project',
      templateUrl: 'app/project/project.html',
      controller: 'ProjectController'
    })
    .state('anon.login', {
      url: '/login',
      tempalteUrl: 'app/login/login.html',
      controller: 'LoginController'
    });


    // Admin routes
    // Post
    $stateProvider
    .state('admin', {
      abstract: true,
      template: "<ui-view/>",
      data: {
        access: access.admin
      }
    })
    .state('admin.post', {
      url: '/post',
      templateUrl: 'app/post/post.html',
      controller: 'PostController'
    });



    $urlRouterProvider
      .otherwise('/');

      // FIX for trailing slashes. Gracefully "borrowed" from https://github.com/angular-ui/ui-router/issues/50
      $urlRouterProvider.rule(function($injector, $location) {
        if($location.protocol() === 'file')
          return;

          var path = $location.path()
          // Note: misnomer. This returns a query object, not a search string
          , search = $location.search()
          , params
          ;

          // check to see if the path already ends in '/'
          if (path[path.length - 1] === '/') {
            return;
          }

          // If there was no search string / query params, return with a `/`
          if (Object.keys(search).length === 0) {
            return path + '/';
          }

          // Otherwise build the search string and return a `/?` prefix
          params = [];
          angular.forEach(search, function(v, k){
            params.push(k + '=' + v);
          });
          return path + '/?' + params.join('&');
        });


        $httpProvider.interceptors.push(function($q, $location) {
          return {
            'responseError': function(response) {
              if(response.status === 401 || response.status === 403) {
                $location.path('/login');
              }
              return $q.reject(response);
            }
          };
        });

    $locationProvider.html5Mode(true);
  });
