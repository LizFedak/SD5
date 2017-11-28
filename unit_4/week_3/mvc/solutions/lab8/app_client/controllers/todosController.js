angular.module('ngTodo')
.controller('todosController', function($scope, todoService){
  // initialize
  $scope.todos = [];
  // populate array on start
  $scope.loadData = function(){
    todoService.getTodos()
    .then(function(response){
      console.log(response.headers)
      $scope.todos = response.data;
    });
  };

  $scope.loadData();
  // 
  $scope.addTodo = function(todo) {
    todoService.createTodo(
      {
        task: todo, 
        completed:false
      })
      .then(function(response){
        $scope.loadData();
      });
  };
  //
  $scope.remove = function(todo) {
    todoService.deleteTodo(todo)
      .then(function(response){
        $scope.loadData();
      });
  };
  //
  $scope.update = function(todo) {
    todoService.updateTodo(todo)
      .then(function(response){
        $scope.loadData();
      });
  };

  // NEW FUNCTIONALITY : DISCUSS ngChange directive
  $scope.complete = function(todo) {
    todoService.updateTodo(todo)
      .then(function(response){
        $scope.loadData();
      });
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