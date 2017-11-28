angular.module('routingApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'home.view.html',
      controller: 'homeController'
    })
    .when('/about',{
      templateUrl: 'about.view.html',
      controller: 'aboutController'
    })
    .when('/contact',{
      templateUrl: 'contact.view.html',
      controller: 'contactController'
    })
    .otherwise({
      // redirectTo: '/'
      templateUrl: '_404.view.html'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true
    });
})
.controller('homeController', function($scope){
  $scope.message = "You are in the HOME controller";
})
.controller('aboutController', function($scope){
  $scope.message = "You are in the ABOUT controller";
})
.controller('contactController', function($scope){
  $scope.message = "You are in the CONTACT controller";
})