myApp.factory('loginFactory', function($http, $cookies){
	var factory = {};
	var currentUser = {};

	factory.login = function(user, cb){
		$http.post('/sessions', user).then(function(data){
			if(data.data.errors){
				cb(data.data.errors);
			}else{
				$cookies.put('auth', data.data);
				currentUser = data.data;
				cb('hello');
			}
		});
	};

	factory.getAuthStatus = function(){
		var status = $cookies.get('auth');
		if (status) {
			return true;
		}else{
			return false;
		}
	}

	return factory;
})