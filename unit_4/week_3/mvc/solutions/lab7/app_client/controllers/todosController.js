angular.module('ngTodo')
.controller('todosController', function($scope, todoService){
  $scope.todos = todoService.getTodos();

  $scope.addTodo = function(todo) {
    todoService.createTodo({task: todo, completed:false});
  };

  $scope.remove = function(todo) {
    todoService.deleteTodo(todo);
  };

  $scope.update = function(todo) {
    todoService.updateTodo(todo);
  }

  $scope.showComplete = false;

  $scope.incompleteTodosCount = function(){
    var count = 0;
    $scope.todos.forEach(function(todo){
      if (!todo.completed){
        count++;
      }
    });
    return count;
  };

  $scope.warnUserStyle = function(){
    return ($scope.incompleteTodosCount() > 3) 
            ? "label-warning" 
            : "label-success";
  };
});