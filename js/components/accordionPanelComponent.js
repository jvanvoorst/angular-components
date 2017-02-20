(function() {
	'use strict';
	var app = angular.module('app');

	function AccordionPanelController() {
		var self = this;

		self.$onInit = function() {
			self.parent.addPanel(self);
		};

		self.turnOn = function() {
			self.selected = true;
		};

		self.turnOff = function() {
			self.selected = false;
		};

		self.select = function() {
			self.parent.selectPanel(self);
		};
	}

	app .component('accordionPanel', {
		transclude: true,
		require: {
			'parent': '^accordion'
		},
		bindings: {
			heading: '@'
		},
		templateUrl: '/js/components/accordionPanel.html',
      	controller: AccordionPanelController
 	});

})();