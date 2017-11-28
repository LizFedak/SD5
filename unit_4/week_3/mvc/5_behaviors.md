# *Behaviors*
* Behaviors are the functions an Angular controller exposes to the view through the `$scope`.
  
* First we will look at a very simple example of how to construct a behavior.
  
### Creating a Behavior
* A behavior is just a function expression stored within a property of the `$scope`:
  
```html
<!DOCTYPE html>
<html ng-app="myApp">
<head>
  <title>Behaviors Ng</title>
</head>
  <script src="../../angular.min.js"></script>
  <script type="text/javascript">
    var app = angular.module('myApp', []);

    app.controller('todosController', function($scope){

      $scope.greet = function(){
        return "Hello Angular Behaviors"
      }

    });
  </script>
<body ng-controller="todosController">
  <h1>{{greet()}}</h1>
</body>
</html>
```
  
* Above, we attached a function to the 'greet' property of the `$scope`, invoking it in an expression. The result has the HTML evaluate the return value from the behavior.
  
### Using behaviors with directives
* As opposed to the above example where a behavior was used in an expression, you will frequently see behaviors paired with directives.
  
* A simple example of this is to pair a behavior with the `ngClick` directive:
  
```html
<!DOCTYPE html>
<html ng-app="myApp">
<head>
  <title>Behaviors Ng</title>
</head>
  <script src="../../angular.min.js"></script>
  <script type="text/javascript">
    var app = angular.module('myApp', []);

    app.controller('todosController', function($scope){

      $scope.userName = "";

      $scope.assignUserName = function(name) {
        $scope.userName = name;
      }

    });
  </script>
<body ng-controller="todosController">
  <input type="text" ng-model="inputName" />
  <button ng-click="assignUserName(inputName)">Submit</button>
  <h1 ng-show="userName">Active User: {{userName}}</h1>
</body>
</html>
```
  
* The above example is similar to one we've seen previously. The key difference is that instead of using two-way data binding to live update the `ngModel` (in this case `inputName`) to the `<h1>` element, we are using a behavior to assign it to another property of `$scope`.
  
* This example also illustrates that behaviors can be passed arguments which correspond to model data either exposed by the `$scope` object, or initialized in an `ngModel` directive.
  
* Reviewing the `$scope` object before and after the user input is submitted is extremely illuminating:
  
```javascript
// $scope on load (before submission)
b {$$childTail: null, $$childHead: null, $$nextSibling: null, $$watchers: null, $$listeners: Object…}
$$ChildScope:null
$$childHead:null
$$childTail:null
$$listenerCount:Object
$$listeners:Object
$$nextSibling:null
$$prevSibling:null
$$watchers:Array[3]
$$watchersCount:3
$id:2
$parent:m
assignUserName:function(name)
userName:""
__proto__:m
```
  
* On load, `$scope` doesn't know what `inputName` is. That model hasn't been initialized with a value yet.
  

```javascript
// $scope after user submission
b {$$childTail: null, $$childHead: null, $$nextSibling: null, $$watchers: Array[3], $$listeners: Object…}
$$ChildScope:null
$$childHead:null
$$childTail:null
$$listenerCount:Object
$$listeners:Object
$$nextSibling:null
$$prevSibling:null
$$watchers:Array[3]
$$watchersCount:3
$id:2
$parent:m
assignUserName:function(name)
inputName:"Bob Dobbs"
userName:"Bob Dobbs"
__proto__:m
```
  
* As you can see a number of things have changed. First we now have an array of three watched objects (`$$watchers`). Remember dirty checking? These are the values being checked. More importantly, `inputName` has been added to the `$scope` after being initialized. This is how it is retrieved by name and passed to the `assignUserName(inputName)` behavior.
  
#### Continue to [the `ngRepeat` directive](6_ng_repeat.md)