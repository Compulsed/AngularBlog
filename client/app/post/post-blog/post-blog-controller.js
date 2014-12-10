  'use strict';

    angular.module('blogApp')
    .controller('PostBlogController', function($scope, $http, $location, AlertService) {
      // Defines the inital data
      $scope.reset = function(){
          $scope.post = {
            title: '',
            contents: ''
          };
      };

      $scope.previewHighlight = function(){
        $('pre code').each(function(i, block) {
          hljs.highlightBlock(block);
        });
      }

      // Triggers if fields contain content
      $scope.postEntry = function(){

        if($scope.post.title && $scope.post.contents){
          $http.post('/api/posts', {
            title : $scope.post.title,
            contents: $scope.post.contents
          }).
            success(function(data, status, headers, config){

              AlertService.show({
                type: 'success',
                msg: 'Successfully posted the article!'
              }, 5000);

              $location.path('/blogs');
            }).
            error(function(data, status, headers, config){
              AlertService.show({
                type: 'danger',
                msg: 'Error, unable to post the article!'
              }, 5000);

              console.log('failed to post to /api/posts');
            });
        }
      };

      setTimeout(function(){
        enableTab('blog-input');
      }, 1000);

      // Executes to initally set up the data
      $scope.reset();
    });

    // Changes the tab from moving between forms to an actual tab character
    function enableTab(id) {
      var el = document.getElementById(id);
      el.onkeydown = function(e) {
        if (e.keyCode === 9) { // tab was pressed

          // get caret position/selection
          var val = this.value,
          start = this.selectionStart,
          end = this.selectionEnd;

          // set textarea value to: text before caret + tab + text after caret
          this.value = val.substring(0, start) + '\t' + val.substring(end);

          // put caret at right position again
          this.selectionStart = this.selectionEnd = start + 1;

          // prevent the focus lose
          return false;

        }
      };
    }
