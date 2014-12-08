angular.module('blogApp').
  controller('AlertCtrl', function ($scope, AlertService) {
    $scope.alerts = AlertService.alerts;
    // [
    // { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    // { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    //];

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

  });
