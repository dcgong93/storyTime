myApp.controller('userController', function($scope, $cookies, $routeParams, $location, userFactory, loginFactory){
	$scope.userObj = $cookies.getObject('auth');
	console.log('I am able to load my userController along with my index partial');
	console.log($scope.userObj._id);

	userFactory.getUser($scope.userObj._id,function(data) {
		$scope.User = data[0];
	})

	userFactory.getStories($scope.userObj._id, function(data) {
		console.log("Made it to userController to get story",data);
		$scope.stories = data.data;
	})

	$scope.updateUser = function() {
		userFactory.updateUser($scope.editUser, $scope.userObj._id, function(data) {
			$location.path('/profile/'+$scope.userObj._id);
			userFactory.getUser($scope.userObj._id,function(data) {
				$scope.User = data[0];
			})
		})
	}

})