var leagueSmith = angular.module('leagueSmith',['ngAnimate'])

  .controller("aboutController", ['$scope', function($scope) {
    $scope.hello = false;
    $scope.firstLoad = true;

    $scope.toggleStates = function() {
      $scope.hello = !$scope.hello;
      $scope.firstLoad = false;
    };

  }]);
