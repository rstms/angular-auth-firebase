angular.module('DemoApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'about/about.html',
    controller: 'AboutCtrl',
    });
  }])

.controller('AboutCtrl', [function() {
   this.status = {
    message: 'Use the form to send your contact information.'
  }
}]);
