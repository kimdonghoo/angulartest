/**
 * 
 */

var todoList = [ { done : true, title : "AngularJS 독서" }, 
                 { done : false, title : "AngularJS 공부하기" }, 
                 { done : false, title : "AngularJS 개인 프로젝트 구성" } ];


function todoCtrl($scope){
	$scope.appName = "AngularJS TODO APP";
	$scope.todoList = todoList;
	
	$scope.addNewTodo = funtion(newTitle){
		todoList.push({done:false, title:newTitle});
		$scope.newTitle = '';
	};
}

