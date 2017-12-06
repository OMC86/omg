/**
 * Created by Chris on 28/11/2017.
 */
angular.module('OmgApp', [
    'ui.router',
])

    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/')

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'components/home.html'
            })
    })



