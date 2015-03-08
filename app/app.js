angular.module('DemoApp', [
  'ngRoute', 
  'DemoApp.about',
  'DemoApp.contact',
  'DemoApp.login',
  'DemoApp.signup',
  'DemoApp.logout',
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/logout'});
}])

.controller('MenuCtrl', [function() {
  this.menuMap = [
    {label: 'LOGOUT', enable: false, url: '/logout'},
    {label: 'SIGNUP', enable: true, url: '/signup'},
    {label: 'LOGIN', enable: true, url: '/login'},
    {label: 'CONTACT', enable: true, url: '/contact'},
    {label: 'ABOUT', enable: true, url: '/about'}
  ];
}]);
