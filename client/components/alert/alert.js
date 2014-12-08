angular.module('blogApp').
  controller('AlertCtrl', function ($scope, AlertService, $q) {
    $scope.alerts = AlertService.alerts;

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

  });
