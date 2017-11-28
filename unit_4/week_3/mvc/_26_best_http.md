# Using $http
* To use the $http service in one of your components (be it a controller, or a service), you need to inject the dependency:
  
```javascript
angular.module('myApp')
.factory('myDataService', function($http){
  var getData = function() {
    return $http({
      method : 'GET',
      url : '/products'
    })
  };

  return {
    getData : getData
  }
});
```
  
* The above would be a very typical implementation of $http in a service.
  
* This service exclusively retrieves the data, it does not transform it, or do anything with the response. The benefit to this approach is that it is extremely abstract and can be applied in multiple controllers where the data that was retrieved is needed.
  
* As the service's 'getData' method is returning the `$http()`, the component which uses this method will have access to the promise. *Remember: the return from an `$http()` method is a promise.* By leaving the promise handling to the controller, it can bend the response data to its will.
  
### Using the service in a controller

```javascript
angular.module('myApp')
.controller('myController', function($scope, myDataService){

  $scope.data = [];

  $scope.loadData = function(){
    myDataService.getData()
      .then(function(response){
        $scope.data = response.data;
      });
  }

  $scope.loadData();
})
```
  
* This controller injects both `$scope`, and the service we defined above.
  * `$scope.data` is initialized as an empty array. If there are any other methods that rely on `$scope.data` being defined (or even more likely, being an iterateable array), it will need to be initialized as empty as the data to populate it will load asynchronously.
  
  * `$scope.loadData` is a function which invokes the `getData()` method from our service, assigning the response data to the `$scope.data` property.
  
  * `$scope.loadData()` will be invoked when the controller is loaded initially, ensuring that the `$scope.data` is populated with actual values as fast as possible.
  
#### Continue to [lab 8](_27_lab8.md)