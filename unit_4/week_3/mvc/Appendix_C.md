# `$element.remove()`
* In a directive, `$element.remove()` will remove a jqlite element from the DOM.
  
```javascript
link : function($scope,$element,$attr){
  var myEditForm = null;

  $scope.edit = function(data){
    // logic to append a form on button click
  }

  $scope.cancel = function(){
    if (myEditForm != null) {
      myEditForm.remove(); // REMOVE THE FORM!
    }
  }
}
```
