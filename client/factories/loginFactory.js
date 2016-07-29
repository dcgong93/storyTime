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

	factory.deleteUser = function(cb){
		$cookies.remove('auth');
		cb('hello');
	}

	return factory;
})