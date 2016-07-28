myApp.controller('userController', function($scope, $cookies){
	$scope.userObj = $cookies.getObject('auth');
	console.log('I am able to load my userController along with my index partial');
})