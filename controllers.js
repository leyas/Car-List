var carsControllers = angular.module('carsControllers', []);
var cars = [{id: 0, model:"Zetor", price:4600}, {id: 1, model:"VV", price:50146}, {id: 2, model:"Nissan", price:14600}, {id: 3, model:"Opel", price:21006} ];

carsControllers.controller('CarListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    /*$http.get('cars.json').success(function(data) {
      $scope.cars = data;
    });*/
	$scope.cars = cars;

    $scope.orderProp = 'price';
  }]);

carsControllers.controller('CarDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.carId = $routeParams.carId;
    $scope.carModel = cars[$routeParams.carId]["model"];
    $scope.carPrice = cars[$routeParams.carId]["price"];
  }]);