myApp.factory('userFactory', function($http,$cookies){

	// This is my dummyFactory. I usually add this into any project that 
	// I do. Just so that I can use it for reference as I add new Factories
	// below we have an example of how we would create a post request, as well 
	// as how we would create a get request. 


	var users = []

	var factory = {}
	factory.getUser = function(id, callback) {
		console.log('made it to userFactory', id);
		$http.get('/currentUser/'+ id).then(function(data) {
			callback(data.data);
		})
	}

	factory.updateUser = function(updateUser,id,callback){
		console.log(updateUser);
		console.log(id);
		updateUser.id = id;
		$http.post('/users/'+ id +'/update', updateUser).then(function(data){
			console.log('made it back from backend this one user', data.data);
			// $cookies.putObject('auth', data.data);
			// console.log($cookies);
			callback(data.data);
		});
	}

	factory.getStories = function(id , callback) {
		console.log("This is userFactory", {id: id});
		$http.get('/stories/user/'+id).then(function(data){
			callback(data);
		})

	}



	return factory;
})