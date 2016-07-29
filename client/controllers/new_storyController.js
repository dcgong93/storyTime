myApp.controller('new_storyController', ['$scope','$cookies','$location', 'StoryFactory', 'loginFactory', function($scope, $cookies,$location, StoryFactory, loginFactory){


	console.log('I am able to load my new_storyController along with my new_story partial');
	$scope.userObj = $cookies.getObject('auth');

	$scope.deleteUser = function(){
		loginFactory.deleteUser(function(data){
			$location.path('/');
		})
	}

  	$scope.createStory = function(){
    console.log('client side new story controller');
    $scope.story._user = $cookies.getObject('auth')._id;
    StoryFactory.addStory($scope.story, function(data){
    	console.log('this is the fucking story', data)
  		$scope.story = data;
			console.log('dont know',$scope.story[0]._id);
			$location.path("/story/"+$scope.story[0]._id);
  	})
  }
}])
