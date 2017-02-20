(function() {
	'use strict';
	var app = angular.module('app');

	app.component('menuBar', {
		bindings: {
			brand: '<'
		},
		templateUrl: '/js/components/appComponent.html',
		controller: function() {
			this.menu = [{
				name: "Home",
				component: "home"
			},
			{
				name: "About",
				component: "about"
			},
			{
				name: "Contact",
				component: "contact"
			}];
		}
	});
})();