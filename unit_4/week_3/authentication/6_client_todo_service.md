# Updating Todo Service with Authentication Headers
* Last but not least, you will need to update your Angular 'todoService' routes with 'x-access-token' headers, and use the 'authenticationService' to retrieve/include the user token from local storage.
  
* In doing so, the server's authentication method will unpack the logged in users JWT, and grant them access to the routes.

```javascript
angular.module('ngTodo')
.factory('todoService', function($http, authenticationService){

  var getTodos = function(){
    return $http({
      method : 'GET',
      url : '/todos',
      headers : {
        'x-access-token' : authenticationService.getToken()
      }
    })
  };

  // 
  var createTodo = function(todo) {
    return $http({
      method : 'POST',
      url : '/todos',
      headers : {
        'Content-Type': 'application/json',
        'x-access-token' : authenticationService.getToken()
      },
      data : todo
    })
  };

  var deleteTodo = function(todo) {
    return $http({
      method : 'DELETE',
      url : '/todos/' + todo._id,
      headers : {
        'x-access-token' : authenticationService.getToken()
      }
    })
  };

  var updateTodo = function(todo) {
    return $http({
      method : 'PUT',
      url : '/todos/' + todo._id,
      headers : {
        'Content-Type' : 'application/json',
        'x-access-token' : authenticationService.getToken()
      },
      data : todo
    })
  };

  return {
    getTodos : getTodos,
    createTodo : createTodo,
    deleteTodo : deleteTodo,
    updateTodo : updateTodo
  };
});

```
  
#### Continue to [Authentication Lab](7_lab.md)