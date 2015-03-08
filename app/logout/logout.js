angular.module('DemoApp.logout', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/logout', {
    templateUrl: 'logout/logout.html',
    controller: 'LogoutCtrl'
    });
  }])

.controller('LogoutCtrl', [function() {
  this.status = {
    message: 'Authorization is required.  Please login or sign up.'
  }
}]);
