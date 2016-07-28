
myApp.controller('dashboardController', ['$scope', '$cookies','StoryFactory', "loginFactory", function($scope, $cookies,StoryFactory,loginFactory){
	$scope.userObj = $cookies.getObject('auth');
	console.log('I am able to load my dash ctrl along with my dashboard partial', $scope.userObj.fname);


	StoryFactory.getStories(function(data){
	console.log('dashboard controller getting stories', data);
	$scope.stories = data;
	})
}])
