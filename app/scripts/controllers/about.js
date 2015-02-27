'use strict';

/**
 * @ngdoc function
 * @name gaMoviesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gaMoviesApp
 */
angular.module('gaMoviesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
