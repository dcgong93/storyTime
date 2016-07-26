var myApp = angular.module('Myapp', ['ngRoute', 'ngCookies']);

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
				templateUrl: 'partials/userNew.html'
			})

			.when('/dashboard',{
				controller: 'dashboardController',
				templateUrl: 'partials/dashboard.html'
			})

			.when('/new_story', {
				controller: 'new_storyController',
				templateUrl: 'partials/new_story.html'
			})

			.when('/profile', {
				templateUrl: 'partials/profile.html'
			})
	})
}());
