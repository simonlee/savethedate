var savethedate = angular.module('savethedate', [
  'ngRoute',
  'controllers'
]);

savethedate.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/savethedate', {
        templateUrl: '/partials/greeting.html',
        controller:  'MainController'
      }).
      when('/form', {
        templateUrl: '/partials/form.html',
        controller:  'MainController'
      }).
      when('/thankyou', {
        templateUrl: '/partials/thankyou.html',
        controller:  'MainController'
      }).
      otherwise({
        redirectTo: '/savethedate'
      });
  }]);
