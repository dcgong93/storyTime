myApp.factory('loginFactory', function($http, $cookies){
	var factory = {};

	factory.login = function(user, cb){
		$http.post('/sessions', user).then(function(data){
			$cookies.put('loggedUser', data.data)
			var logged = $cookies.get('loggedUser')
			console.log('cookies', logged);
		})
	}

	return factory;
})