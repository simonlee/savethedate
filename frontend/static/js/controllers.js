var controllers = angular.module('controllers', []);

controllers.controller('MainController', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
    $scope.master = {};
    $scope.errorMessage = "";
    $scope.title = "Save The Date";

    $scope.submitForm = function(form) {
      $scope.master = angular.copy(form);
      if (form.$valid) {
        $http.post('/api/address', $scope.address).
          success(function(data, status, headers, config) {
            $location.path('/thankyou');
          }).
          error(function(data, status, headers, config) {
            $scope.errorMessage = "There has been an error. Please try again in a few minutes.";
          });
      } else {
        $scope.errorMessage = "Please fill out all required fields.";
      }
    };

    $scope.reset = function(form) {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
      $scope.address = angular.copy($scope.master);
    };

    $scope.reset();
  }]);

