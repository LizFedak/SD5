# `ngChange` Directive
* The `ngChange` directive watches for any change to the given expression.
  
* `ngChange` is evaluated IMMEDIATELY, not when submitted.
  
* `ngChange` can be assigned a function to call, possibly with a corresponding model as an argument.
  
```html
<!-- Assume $scope.address -->
<select ng-change="updateState(address)" ng-model="address.state">
  <option ng-repeat="state in states">{{state}}</option>
</select>
```
