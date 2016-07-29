myApp.controller('dashboardController', ['$scope', '$location', '$cookies','StoryFactory', "loginFactory", function($scope, $location, $cookies,StoryFactory,loginFactory){
	$scope.userObj = $cookies.getObject('auth');
	console.log('I am able to load my dash ctrl along with my dashboard partial', $scope.userObj.fname);

	$scope.deleteUser = function(){
		loginFactory.deleteUser(function(data){
			$location.path('/');
		})
	}

	StoryFactory.getStories(function(data){
	console.log('dashboard controller getting stories', data);
	$scope.stories = data;
	})
}])
