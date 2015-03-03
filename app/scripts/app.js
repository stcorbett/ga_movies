'use strict';

/**
 * @ngdoc overview
 * @name gaMoviesApp
 * @description
 * # gaMoviesApp
 *
 * Main module of the application.
 */
angular
  .module('gaMoviesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',

    'search.ctrl',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
