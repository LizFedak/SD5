# Configure Routes
* To configure AngularJS routes, we use the `$routeProvider` service to assign behavior to various routes using the `$routeProvider.when('/route',{})` method:
  
```javascript
angular.module('routingApp', ['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when('/',{
      // designate behavior for index route
    });
});
```
  
* You can chain additional route configurations in the same way:
  
```javascript
angular.module('routingApp', ['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when('/',{
      // designate behavior for index route
    })
    .when('/about',{
      // designate behavior for about route
    })
    .when('/contact',{
      // designate behavior for contact route
    });
});
```
  
* It is usually a good idea to have a catch all route to handle unmatched routes, to catch unmapped routes, use `.otherwise({})`:
  
```javascript
angular.module('routingApp', ['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when('/',{
      // designate behavior for index route
    })
    .when('/about',{
      // designate behavior for about route
    })
    .when('/contact',{
      // designate behavior for contact route
    })
    .otherwise({
      // handle other routes
    });
});
```
  
* If you wish you can use the `.otherwise({})` to redirect to an existing route using the `redirectTo` property:
  
```javascript
angular.module('routingApp', ['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when('/',{
      // designate behavior for index route
    })
    .when('/about',{
      // designate behavior for about route
    })
    .when('/contact',{
      // designate behavior for contact route
    })
    .otherwise({
      redirectTo: '/' // redirect to index route
    });
});
```
  
#### Continue to [using templates](5_templates.md)