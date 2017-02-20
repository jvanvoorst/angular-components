(function() {
	var app = angular.module('app', []);
	// controller that displays hello world
	app.controller('HomeCtrl', function() {
		this.message = "Hello, World";
	});
})();