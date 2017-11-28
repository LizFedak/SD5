angular.module('ngTodo')
.factory('todoService', function($http){

  var getTodos = function(){
    return $http({
      method : 'GET',
      url : '/todos'
    })
  };

  // 
  var createTodo = function(todo) {
    return $http({
      method : 'POST',
      url : '/todos',
      headers : {
        'Content-Type': 'application/json'
      },
      data : todo
    })
  };

  var deleteTodo = function(todo) {
    return $http({
      method : 'DELETE',
      url : '/todos/' + todo._id
    })
  };

  var updateTodo = function(todo) {
    return $http({
      method : 'PUT',
      url : '/todos/' + todo._id,
      headers : {
        'Content-Type' : 'application/json'
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
