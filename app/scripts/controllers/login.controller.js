'use strict';

/**
 * @ngdoc function
 * @name visualstApp.controller:LoginControllerCtrl
 * @description
 * # LoginControllerCtrl
 * Controller of the visualstApp
 */
angular.module('visualstApp')
  .controller('LoginCtrl', function ($scope, authentication) {

//	controller contents goes here

	// set me to instance
		var self = this;

	// login modal user information
		$scope.user = {
  		name : "one@two.com",
   		password: "TestTest1!"
    	};   

    // login button click
    	$scope.DoLogin = function($event) {

    		authentication.loginAction($scope.user.name , $scope.user.password , function(res){
    			if (res) {
    				console.log('success');
    			}
    		});

    	};
});
