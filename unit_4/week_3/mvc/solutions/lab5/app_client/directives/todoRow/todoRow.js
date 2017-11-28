angular.module('ngTodo')
.directive('todoRow', function($compile){
  return {
    restrict : 'A',
    scope : {
      todo : "=",
      remove : "=",
      update : "="
    },
    templateUrl : "directives/todoRow/todoRow.template.html",
    link : function($scope,$element,$attr){
      $scope.currentTodo = {};
      var editForm = null;

      if ($scope.todo.completed) {
        $element.css({'text-decoration' :'line-through', color : "#808080"});
      }

      $scope.save = function(todo) {
        $scope.update(todo);
        editForm.remove();
      }

      $scope.edit = function(todo){
        $scope.currentTodo = angular.copy(todo);
        var $row = 
        "<table class='table'>" + 
          "<tr>" +
            "<td>" +
              "<input type='text' ng-model='currentTodo.task' class='form-control'/>" +
            "</td>" +
            "<td>" + 
              "<button class='btn btn-primary' ng-click='save(currentTodo)'>Save</button>" + 
            "</td>" +
            "<td>" + 
              "<button class='btn btn-primary' ng-click='cancel()'>Cancel</button>" +
            "</td>" +
          "</tr>" +
        "</table>";

        editForm = $compile($row)($scope);

        $element.after(editForm);
      };

      $scope.cancel = function() {
        if (editForm != null) {
          $scope.currentTodo = {};
          editForm.remove();
        }
      };
    }
  }
});