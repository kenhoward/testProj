var app = angular.module('noServer', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'home/home.html',
			controller: 'homeCtrl'
		})
		.when('/about', {
			templateUrl: 'about/about.html',
			controller: 'aboutCtrl'
		})
		.when('/portfolio', {
			templateUrl: 'portfolio/portfolio.html',
			controller: 'portfolioCtrl'
		})
		.when('/services', {
			templateUrl: 'services/services.html',
			controller: 'servicesCtrl'
		})
		.when('/blog', {
			templateUrl: 'blog/blog.html',
			controller: 'blogCtrl'
		})
		.when('/contact', {
			templateUrl: 'contact/contact.html',
			controller: 'contactCtrl'
		})
		.otherwise('/', {
			redirectTo: '/'
		})
			
	
})