#Creating an AngularJS Authentication Service
* With the server ground work layed to authenticate a user's login, we need to create a client side service with Angular which will:
  
  * authenticate a user (login)
  * store tokens in local storage
  * retrieve tokens from local storage
  * remove tokens from local storage (logout)
  * confirm that a user is logged in
  * access information about the current user
  
* Below is an example of a service which can accomplish these tasks:
  
```javascript
// app_client/services/authenticationService.js

angular.module('ngTodo')
.factory('authenticationService', function($window, $http){
    // Place JWT into local storage
    var saveToken = function(token){
      $window.localStorage['todo-token'] = token;
    };

    // Retrieve JWT from local storage
    var getToken = function() {
      return $window.localStorage['todo-token'];
    };

    // Contact the server, authenticate user credentials
    var login = function(user) {
      return $http.post('/login', user)
              .then(function(response){
                saveToken(response.data.token);
              });
    };

    // Remove JWT from local storage
    var logout = function() {
      $window.localStorage.removeItem('todo-token');
    };

    // Check that a user's login is valid (present AND not expired)
    var isLoggedIn = function() {
      var token = getToken();

      if (token) {
        // $window.atob decodes a the encoded string
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.exp > Date.now() / 1000;

      } else {
        return false;
      }
    };

    // Get current user from JWT
    var currentUser = function() {
      if (isLoggedIn()) {
        var token = getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return {
          email : payload.email,
          name : payload.username,
          id : payload.id
        };
      }
    };

    return {
      login : login,
      logout : logout,
      isLoggedIn : isLoggedIn,
      currentUser : currentUser,
      getToken : getToken
    }
})
```
  
#### Continue to [Protect API Routes with Custom Authentication Middleware](5_api_todo_ctrl.md)