myApp.controller('storyController', ['$scope', 'SnippetFactory', function($scope, SnippetFactory){
	// Here is where we are creating indexController.
	// You have to make sure that our index controller matches the name
	// that we pass in, in our router.
	// So far the only variable that I'm injecting into this controller
	// is $scope.

	console.log('I am able to load my storyController along with story.html partial');

  $scope.addSnippet = function(){
    console.log('client side new story controller');
		console.log('before', $scope.snippet);
		$scope.snippet._users = $cookie._id;
		console.log('after', $scope.snippet);

    SnippetFactory.createSnippet($scope.story, function(data){
  		$scope.story = data;
  	})
  }
}])
