
myApp.controller('indexController', function($scope, loginFactory, $cookies, $location){
	console.log('I am able to load my indexController along with my index partial');

	$scope.loginUser = function(){
		loginFactory.login($scope.user, function(data){
			console.log('these are cookies');
			if(data.errors){
				$scope.user = "";
				$scope.test = data;
			}else{
				$scope.user = "";
				$location.path('/dashboard');
			}


		})
	}
})
