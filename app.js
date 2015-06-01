var carsApp = angular.module('carsApp', [
  'ngRoute',
  'carsControllers'
]);

carsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/cars', {
        templateUrl: 'car-list.html',
        controller: 'CarListCtrl'
      }).
      when('/cars/:carId', {
        templateUrl: 'car-detail.html',
        controller: 'CarDetailCtrl'
      }).
      otherwise({
        redirectTo: '/cars'
      });
  }]);