angular.module('blogApp').
  factory('AlertService', function($timeout){
    return {
      alerts: [],

      show: function(message, timeout){
        this.alerts.push(message);

        if(timeout)
          (function(alerts){
            $timeout(function(){
              alerts.shift();
            }, timeout);
          })(this.alerts);

      }
    };
  });
