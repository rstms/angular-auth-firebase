var myApp = angular.module('HelloApp', [])

.controller('HelloController', function() {

  console.log('log log log');

  this.test='This is a test!';

  this.alert = function (msg) {
    window.alert(msg);
  };

});

