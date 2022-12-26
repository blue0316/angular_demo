'use strict';

/**
 * @ngdoc overview
 * @name visualstApp
 * @description
 * # visualstApp
 *
 * Main module of the application.
 */
angular
  .module('visualstApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngCookies'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.view.html',
        controller: 'LoginCtrl',
        controllerAs: 'LoginController'
      })
      .when('/register' , {
        templateUrl: 'views/register.view.html',
        controller: 'RegisterCtrl',
        controllerAs: 'RegisterController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
