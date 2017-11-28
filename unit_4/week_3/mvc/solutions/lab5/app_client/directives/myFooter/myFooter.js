angular.module('ngTodo')
.directive('myFooter', function(){
  return {
    restrict : 'E',
    scope : {
      todos : "="
    },
    templateUrl : "directives/myFooter/myfooter.template.html",
    link : function($scope,$element,$attr){
      $element.css('text-align', 'center')
      $scope.completedTodos = function() {
        var count = 0;
        $scope.todos.forEach(function(todo){
          if (todo.completed) {
            count ++;
          }
        });
        return count;
      }

    }
  };
});