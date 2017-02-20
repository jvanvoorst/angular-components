(function() {
	'use strict';
	var app = angular.module('app');

	app.component('userInfo', {
		bindings: {
			caption: '<'
		},
		templateUrl: '/js/components/userComponent.html',
		controller: function() {
			this.records = [{
		        name: "Alfreds Futterkiste",
		        city: "Berlin",
		        country: "Germany"
		      	}, 
		      	{
		        name: "Ana Trujillo Emparedados y helados",
		        city: "México D.F.",
		        country: "Mexico"
		      	},
		      	{
		        name: "Blondel père et fils",
		        city: "Strasbourg",
		        country: "France"
		      	},
		      	{
		        name: "Bólido Comidas preparadas",
		        city: "Madrid",
		        country: "Spain"
		    }];
		}
	});
})();