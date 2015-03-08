angular.module('DemoApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'ContactCtrl'
    });
  }])

.controller('ContactCtrl', [function() {
  this.status = {
    message: 'Use the form to send your contact information.'
  }
}]);
