var app = angular.module('TodoApp', [])

app.controller("TodoCtrl", function($scope){
  $scope.title = "Welcome to your Todo App";

  $scope.todos = [
    {name:"mow the lawn", complete:"incomplete"},
    {name:"laundry", complete:"incomplete"},
    {name:"all the naps", complete:"complete"},
  ];
  $scope.killTodo=function(todo){
    var todoIndex = $scope.todos.indexOf(todo);
    if(todoIndex>=0){
      $scope.todos.splice(todoIndex, 1)
    }

  };

    // $scope.searchText="";

})


app.controller("PastaCtrl",function($scope){
  $scope.pasta = "I love carbs";
  $scope.foods="";
})
