# Setting Controllers for Views with Routes
* You might be wondering where you will set the controller for these views. AngularJS give you the ability to set the controller for a view in the route configuration with the `controller` property.
  
```javascript
angular.module('routingApp', ['ngRoute'])
.config(function($routeProvider){
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
      templateUrl: '_404.view.html'
    });
})
```
  
* Each of the above controllers will be given scope over the partial rendered by the `templateUrl` property. This reduces the likelihood of variable collision:
  
```javascript
angular.module('routingApp', ['ngRoute'])
.config(function($routeProvider){
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
      templateUrl: '_404.view.html'
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
});
```
  
* The above controllers all have a `$scope.message` property, however they will not have any overlap as they will each be included individually with a template.
  
![home ctrl](../imgs/home_route_ctrl.png)
  
![about ctrl](../imgs/about_route_ctrl.png)
  
![contact ctrl](../imgs/contact_route_ctrl.png)
  
#### Continue to [`ngInclude` directive](7_ng_include.md)