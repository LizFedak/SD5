# Modules
* Modules are the broadest, highest level building blocks of an AngularJS application (arguably a module is an Angular application).
  
* To create a new module we use the `module` method on the global `angular` object (we are given access to `angular` when we import the angular.js file.).
  
  * `angular.module('name',[]);`: Creates a module. `'name'` is the name you wish to give to the module, and the second argument is an array of dependencies we wish to inject. For the time being we have no dependencies to inject, so it is empty.
  * **NOTE**: `angular.module('name',[]);` creates a module. If you exclude the `[]`, `angular.module('name');` is a getter method, that will retrieve the module by name. Don't accidently create/retrieve a module when you mean to do the opposite.
  
* The following example illustrates how you could create a new module with the name 'myApp':
  
```html
<!DOCTYPE html>
<html>
<head>
  <title>Modules Ng</title>
</head>
  <script src="../angular.min.js"></script>
  <script type="text/javascript">

    var app = angular.module('myApp',[]);

  </script>
<body>
  <h1>{{"Hello Angular"}}</h1>
</body>
</html>
```
  
* Unfortunately, the code above will render `{{"Hello Angular"}}` in our HTML. We still need to bootstrap the application with the `ngApp` directive. 
  
* Now that we have a module with a name, we can assign the `ngApp` directive a specific application to run (e.g. "myApp"):
  
```html
<!DOCTYPE html>
<html ng-app="myApp">
<head>
  <title>Modules Ng</title>
</head>
  <script src="../../angular.min.js"></script>
  <script type="text/javascript">

    var app = angular.module('myApp',[]);

  </script>
<body>
  <h1>{{"Hello Angular"}}</h1>
</body>
</html>
```
  
* For the time being, our module is simply creating a namespace for our application.
  
#### Continue to [create a controller](4_controllers.md)