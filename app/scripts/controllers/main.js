'use strict';

/**
 * @ngdoc function
 * @name ngInsomeniaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngInsomeniaApp
 */
angular.module('ngInsomeniaApp')
  .controller('MainCtrl', function ($scope, $log) {

      angular.element(document).scroll(function() {
        var val = angular.element(this).scrollTop();
        $log.debug('scroll: ', val);
        if (val > 100) {
          $scope.isTop = false;
        } else {
          $scope.isTop = true;
        }
      });

  });
