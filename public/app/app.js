(function() {

angular.module('mpWebsite', ['ui.router','ui.bootstrap', 'angular-parallax'])


.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '../templates/home.html',
			controller: 'homeCtrl',
			views: {
				'illustrations': {
					templateUrl: '../templates/illustrations.html',
					controller: 'illustrationCtrl',
					controllerAs: 'sub'
				},
				'visualizations': {
					templateUrl: '../templates/visualizations.html',
					controller: 'visualizationCtrl',
				}
			}
	})
});
})();