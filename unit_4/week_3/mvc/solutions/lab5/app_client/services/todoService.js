angular.module('ngTodo')
.factory('todoService', function(){
  var todosCreated = 3;

  var todos = [
    {task:"go round mums", completed:false, id : 1},
    {task:"get Lizzy back", completed:false, id : 2},
    {task:"sort life out", completed:false, id : 3}
  ];

  var getTodos = function(){
    return todos;
  };

  var createTodo = function(todo) {
    todo.id = ++todosCreated;
    todos.push(todo);
  };

  var deleteTodo = function(todo) {
    todos.splice(todos.indexOf(todo), 1);
  };

  var updateTodo = function(todoEdit) {
    console.log()
    todos.forEach(function(todo) {
      if (todo.id === todoEdit.id) {
        todo.task = todoEdit.task;
        return;
      }
    });
  };

  return {
    getTodos : getTodos,
    createTodo : createTodo,
    deleteTodo : deleteTodo,
    updateTodo : updateTodo
  };
});
