var myApp = angular.module('Myapp', ['ngRoute', 'ngCookies']);
// We instantiate our application and we inject ngrouter so that it's available
// and so that we can use it to set up our routes below.


(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/',
			{
				controller: 'indexController',
				templateUrl: "partials/index.html"
			})

			.when('/user/new',
			{
				controller: 'reglogController',
				templateUrl: 'partials/userNew.html',
			})

			.when('/dashboard',{
				controller: 'dashboardController',
				templateUrl: 'partials/dashboard.html',
				authenticated: true
			})

			.when('/new_story', {
				controller: 'new_storyController',
				templateUrl: 'partials/new_story.html',
				authenticated: true
			})

			.when('/profile/:id', {
				controller: 'userController',
				templateUrl: 'partials/profile.html',
				authenticated: true
			})

			.when('/story/:id', {
				controller: 'storyController',
				templateUrl: 'partials/story.html',
				authenticated: true
			})

			.otherwise({redirectTo:'/'});

	})
}());

myApp.run(function($rootScope, $location, loginFactory){
	$rootScope.$on("$routeChangeStart",
		function(event, next, current){
			if(next.$$route.authenticated) {
				if (!loginFactory.getAuthStatus()) {
					$location.path('/');
				}
			}

			if(next.$$route.originalPath == '/') {
				if (loginFactory.getAuthStatus()) {
					$location.path(current.$$route.originalPath);
				}
			}

			if(next.$$route.originalPath == '/user/new') {
				if (loginFactory.getAuthStatus()) {
					$location.path(current.$$route.originalPath);
				}
			}
		});
})
