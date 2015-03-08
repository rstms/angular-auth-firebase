angular.module('DemoApp.signup', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signup', {
    templateUrl: 'signup/signup.html',
    controller: 'SignupCtrl'
    });
  }])

.controller('SignupCtrl', [function() {
  this.status = {
    message: 'Use the form to sign up for a new account.'
  }
}]);
