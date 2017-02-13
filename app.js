// MODULE
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/second/:num',{
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
});
// my own service
myApp.service('nameService', function () {
   
    var self = this;
    this.name = ' John Doe';
    this.namelength = function () {
        return self.name.length;
    };
});

// CONTROLLERS
myApp.controller('mainController', ['$scope','$log','nameService',
    function ($scope, $log, nameService) {
    $scope.name=nameService.name;
    
    
    
    $scope.$watch('name',function (newValue, oldValue) {
        nameService.name = newValue;
    });

    }]);

myApp.controller('secondController', ['$scope', '$routeParams','$log','nameService',
    function ($scope, $routeParams, $log,nameService) {
    
    $scope.num = $routeParams.num;
    
   
    $scope.name = nameService.name;
    $scope.$watch('name',function (newValue, oldValue) {
        nameService.name = newValue;
    });
    
        
}]);




