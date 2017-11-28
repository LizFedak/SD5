angular.module('ngTodo')
.filter('completedFilter', function(){
  return function(todos, showComplete){
    var results = [];
    todos.forEach(function(todo){
      if (!todo.completed || showComplete) {
        results.push(todo);
      }
    });
    return results;
  }
});