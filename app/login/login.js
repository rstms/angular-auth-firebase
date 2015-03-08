angular.module('DemoApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
    });
  }])

.controller('LoginCtrl', [function() {
  this.status = {
    message: 'Use the form to login.'
  }

}]);
