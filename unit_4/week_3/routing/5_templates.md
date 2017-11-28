# AngularJS Templates
* Assigning templates to routes is easy using the `templateUrl` property, which allows you to designate the path to a template by name:
  
```javascript
angular.module('routingApp', ['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'home.view.html',
    })
    .when('/about',{
      templateUrl: 'about.view.html',
    })
    .when('/contact',{
      templateUrl: 'contact.view.html',
    })
    .otherwise({
      redirectTo: '/'
    });
});
```
  
* **NOTE**: The above naming convention is not mandatory.
  
* To insert views into the main template, use the `ngView` directive. *There can only be one `ngView` directive per page*. The example below assigns the templated partial to the body:
  
```html
<!-- Main Template / index.html -->
<!DOCTYPE html>
<html ng-app="routingApp">
<head>
  <title>View Example Ng</title>
  <script src="angular.min.js"></script>
  <script src="angular-route.min.js"></script>
  <script src="ngApp.js"></script>
</head>
  <body ng-view>
  </body>
</html>
```
  
* **NOTE**: The `ngView` directive does not have to be on the body element
  
* Now you can create HTML partial templates which will be inserted by the routes with the `templateUrl` when a route is navigated to:
  
```html
<!-- home.view.html -->
<h1>Home Template</h1>
```
  
```html
<!-- about.view.html -->
<h1>About Template</h1>
```
  
```html
<!-- contact.view.html -->
<h1>Contact Template</h1>
```
  
* If you want, you can also use a `templateUrl` in the otherwise catch all route instead of a `redirectTo`
  
```javascript
    .otherwise({
      templateUrl: '_404.view.html'
    });
```
  
```html
<!-- _404.view.html -->
<h1>404 - Not Found</h1>
```
  
#### Continue to [designating controllers for views](6_controller.md)