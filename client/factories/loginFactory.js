myApp.factory('loginFactory', function($http, $cookies){
	var factory = {};
	var currentUser = {};


	factory.login = function(user, cb){
		$http.post('/sessions', user).then(function(data){
			if(data.data.errors){
				cb(data.data.errors);
			}else{
				$cookies.putObject('auth', data.data);
				cb(data);
			}
		});
	}

	// factory.getUser = function(cb){
	// 	console.log('getUser',$cookies.get("auth"));
	// 	cb($cookies.get("auth"));
	// }

	factory.getAuthStatus = function(){
		var status = $cookies.get('auth');
		if (status) {
			console.log('logged');
			return true;
		}else{
			return false;
			console.log('not logged');
		}
	}

	return factory;
})