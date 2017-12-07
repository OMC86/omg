/**
 * Created by Chris on 28/11/2017.
 */
angular.module('OmgApp', [
    'ngRoute'
])

.config(function($locationProvider, $routeProvider){
    $locationProvider.html5Mode(true);  // Enable href routing without hashes

	$routeProvider

	.when('/', {
        templateUrl: 'app/components/home/home.html',
	    controller: 'HomeCtrl'
	})

});



