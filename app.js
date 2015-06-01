var carsApp = angular.module('carsApp', [
  'ngRoute',
  'carsControllers'
]);

carsApp.directive("required2", function(){
	return {
		restrict: "E",
		template: "<p>(*)to pole jest wymagane</p>"
	}
});

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