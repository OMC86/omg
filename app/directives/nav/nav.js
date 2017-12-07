angular.module('OmgApp')

	.directive('navBar', function(){
		return{
			restrict: 'EA',
			templateUrl: 'app/directives/nav/nav.html'
		};
	});