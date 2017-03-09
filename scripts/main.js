angular.module('app', ['ngRoute'])
          
          
.controller('mortgageController', function($scope, $routeParams) {

    $scope.updateMortgage = function () {
      $scope.monthlyPayment = $scope.principle*($scope.rate/100/12*(1+$scope.rate/100/12)**(12*$scope.time))/((1+$scope.rate/100/12)**(12*$scope.time)-1);
   };

 })

.controller('interestController', function($scope, $routeParams) {

    $scope.updateInterest = function () {
      $scope.finalSum = $scope.principle*(1+($scope.rate/100)/$scope.comp)**($scope.comp*$scope.time);
   };

 })

.controller('returnController', function($scope, $routeParams) {

    $scope.updateReturn = function () {
      $scope.ror = $scope.return/$scope.investment;
   };

 })

.controller('leverageController', function($scope, $routeParams) {

    $scope.updateLeverage = function () {
      $scope.leverage = ($scope.liab+$scope.debt)/$scope.income;
   };

 })

.config(function($routeProvider) {

    $routeProvider
    .when('/mortgage',{
        templateUrl: 'pages/mortgageCalculator.html',
        controller: 'mortgageController',
    })

    .when('/interest',{
        templateUrl: 'pages/compoundingInterest.html',
        controller: 'interestController',
    })

    .when('/return',{
        templateUrl: 'pages/return.html',
        controller: 'returnController',
    })

    .when('/leverage',{
        templateUrl: 'pages/leverage.html',
        controller: 'leverageController',
    })

    .otherwise({redirectTo:'/'})

});
