'use strict';

angular.module('search.ctrl', [])
  .controller('SearchCtrl', function ($scope, Omdb) {

    $scope.searching = false;

    $scope.executeSearch = function executeSearch() {
      $scope.searching = true;
      Omdb.searchMovies($scope.query, function(error, data) {
        $scope.searching = false;
        $scope.movies = data.Search;
      });
    };
  })

  .factory('Omdb', function($http) {
    return {
      searchMovies: function(query, callback) {
        $http.get('http://www.omdbapi.com/', { params: {s: query,type: 'movie' } })
          .success(function (data) {
            callback(null, data);
          })
          .error(function (e) {
            callback(e);
          });
      }
    };
  });
