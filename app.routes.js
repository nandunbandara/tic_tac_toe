/**
 * Created by root on 6/28/17.
 */
angular.module('ttt.routes',['ngRoute'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'templates/home.html',
            controller: 'homeController as home'
        })

        .when('/game',{
            templateUrl: 'templates/gameInterface.html',
            controller: 'gameController as game'
        })
}])