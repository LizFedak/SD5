# Module Configuration Blocks
* A modules configuration block is where Angular application routes are set and configured.
  
* Configuration blocks are chained off of a module with the `.config()` method.
  
* To configure routes, we need to inject the `$routeProvider` dependency exposed from the `'ngRoute'` module:
  
```javascript
angular.module('myApp', ['ngRoute'])
.config(function($routeProvider){
  // Route configurations...
});
```
  
#### Continue to [configure routes](4_routes.md)