'use strict';

/**
 * @ngdoc function
 * @name gaMoviesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gaMoviesApp
 */
angular.module('gaMoviesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'SitePoint'
    ];
  });
