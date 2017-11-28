# Refactor into files
* As you've probably guessed AngularJS typically isn't written entirely in one HTML file. After the labs, your todo application is probably 200 or more lines of code...less than 50 of which is HTML.
  
* Before moving on to networking, let's remove our Angular from the HTML, and break it into smaller, more maintainable files.  
  
* AngularJS's modules can be retrieved by name after being created:
  
```javascript
angular.module.('myApp', []); // create module

angular.module('myApp'); // retrieve module
```
  
* This syntax can lead to mistakes, but also allows us to break our code into more maintainable fragments. Once retrieved, controllers, services, directives, and filters can be registered to the module:
  
```javascript
// direct chaining example
angular.module('myApp')
  .controller('newController', function(){
    // controller logic
  });

// chain to variable example
var app = angular.module('myApp');
app.controller('newController', function(){
  // controller logic
});

// BOTH OF THESE DO THE SAME THING AND ARE VALID
```
  
* Now we can create new files, retrieve the module, and assign additional components to our application.
  
* Keep in mind, that in order for these additional files to be evaluated, they need to be sourced into the HTML, AFTER AngularJS, and after the module they are retrieving: 
  
```html
<!DOCTYPE html>
<html ng-app="myApp">
<head>
  <title>Refactor Ng</title>
  <!-- AngularJS -->
  <script src="angular.min.js"></script>
  <!-- The module file -->
  <script src="ngApp.js"></script>
  <!-- some controller -->
  <script src="controllers/myController.js"></script>
  <!-- some filter -->
  <script src="filters/myFilter.js"></script>
  <!-- some service -->
  <script src="services/myService.js"></script>
  <!-- some directive -->
  <script src="directives/myDirective/myDirective.js"></script>
</head>
<body ng-controller="myController">
  <div ng-repeat="data in data | myFilter">
    <my-directive data="data"></my-directive>
  </div>
</body>
</html>
```
  
* Convention is for each file in an Angular project to only have a single responsibility. Only one filter/service/directive/controller should be in any one file, and that file should be in a resource specific directory.
  
#### Continue to [refactor your todo app](_22_lab5.md)

