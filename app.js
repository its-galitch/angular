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
    }
});

// CONTROLLERS
myApp.controller('mainController', ['$scope',
    function ($scope, $log, nameService) {
    $scope.name='Main';
    
    $log.log(nameService.name);
    $log.log(nameService.namelength());
        
    
    }]);

myApp.controller('secondController', ['$scope', '$routParams','$log',
    function ($scope, $routeParams, $log) {
    
    $scope.num = $routeParams.num;
    
   
    $scope.word = 'Second';
    
        
}]);




