myApp.controller('reglogController', function ($scope, registerFactory, loginFactory, $cookies) {

	console.log($cookies);
	
	$scope.registerUser = function(){
		registerFactory.registerUser($scope.newUser, function(data){
			console.log(data);
			$scope.newUser = '';
		})
	}

	$scope.loginUser = function(){
		loginFactory.login($scope.user, function(data){
			console.log(data);
			$scope.user = "";
		})
	}
})