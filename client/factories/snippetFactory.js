myApp.factory('SnippetFactory', ['$http', function($http){

	// This is my dummyFactory. I usually add this into any project that
	// I do. Just so that I can use it for reference as I add new Factories
	// below we have an example of how we would create a post request, as well
	// as how we would create a get request.

	var factory = {};
  	var snippets = [];
	var story = {};

	factory.getStory = function(id, callback){
		console.log('story factory  id', id)
		$http.get('/story/'+ id).then(function(data){
			story = data.data;
			console.log('snippet factory data.data', data.data);
			for(var i=0; i<data.data._snippets.length; i++){
				snippets.push(data.data._snippets[i]);
			}
			callback(story);
		})
	};

	factory.getSnippets = function(story_id, callback){
		$http.get('/snippets/'+story_id).then( function(data){
			snippets = data.data;
			console.log('sniipppppp',snippets);
			callback(snippets);
		})
	};

	factory.createSnippet = function(info, callback){
		console.log('made it to snippet factory', info);
		$http.post('/snippets', info).then(function(data){
			console.log('back from backend -> this is snippet', data);
			if(data.error){
				console.log(data.error);
			} else {
				console.log("++++++++++++++++", snippets);
				snippets.push(data.data);
				console.log("++++++++++++++++", snippets);
				callback(snippets);
			}
		})
	};

	return factory;
}])
