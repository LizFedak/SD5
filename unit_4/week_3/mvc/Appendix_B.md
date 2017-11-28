# `angular.copy()`
* AngularJS's two way data binding can be problematic. Sometimes you want the value of a model to populate a field, but you don't want changes to that field to affect the model.  
  
* In order to create an exact duplicate of some model data, Angular provides a convenience method `angular.copy(someModel)`
  
* This can be handy in a directive when you want to edit an existing value:
  
```javascript
  $scope.edit = function(address) {
    $scope.currentEditableAddress = angular.copy(address);

    // logic to present form/manipulate 'currentEditableAddress' data
  }
```
  