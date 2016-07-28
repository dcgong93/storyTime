myApp.controller('new_storyController', ['$scope', '$location', 'StoryFactory','$cookies', function($scope, $location, StoryFactory, $cookies){
	// Here is where we are creating indexController.
	// You have to make sure that our index controller matches the name
	// that we pass in, in our router.
	// So far the only variable that I'm injecting into this controller
	// is $scope.

	console.log('I am able to load my new_storyController along with my new_story partial');

	$scope.userObj = $cookies.getObject('auth');
	console.log('I am able to load my dash ctrl along with my dashboard partial', $scope.userObj.fname);

  $scope.createStory = function(){
    console.log('client side new story controller');
    StoryFactory.addStory($scope.story, function(data){
  		$scope.story = data;
			console.log($scope.story[0]._id);
			$location.path("/story/"+$scope.story[0]._id);
  	})
  }
}])
