myApp.controller('storyController', ['$scope', '$location', '$cookies', 'SnippetFactory', '$routeParams', function($scope, $location, $cookies, SnippetFactory, $routeParams){
	$scope.userObj = $cookies.getObject('auth');
	console.log('I am able to load my storyController along with story.html partial');
	var storId = $routeParams.id;
	console.log('this is storId', storId);
	SnippetFactory.getStory(storId, function(data){
		console.log('story controller to get new story', data);
		$scope.story = data;
	})

  $scope.addSnippet = function(){
    console.log('client side story controller create snippet', $scope.snippet);
		$scope.snippet._users = $cookies.get('auth')._id;
		console.log('printing cookies id', $cookies.getObject('_id'));
		$scope.snippet._stories = $routeParams.id;
		console.log('printing params id',$routeParams.id);
    SnippetFactory.createSnippet($scope.snippet, function(data){
  		$scope.snippet = data;
  	})
  }
}])
