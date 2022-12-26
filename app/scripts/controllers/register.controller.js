'use strict';

/**
 * @ngdoc function
 * @name visualstApp.controller:RegisterControllerCtrl
 * @description
 * # RegisterControllerCtrl
 * Controller of the visualstApp
 */
angular.module('visualstApp')
  .controller('RegisterCtrl', function ($scope, authentication) {

// controller contents goes here

	// initial
		var self = this;

		$scope.user = {
			firstname : 'test1',
			lastname : 'test',
			email : 'test@1.com',
			confirm_email : 'test@1.com',
			password : 'TestTest1!',
			confirm_password : 'TestTest1!'
		};

	// register button click
		$scope.DoRegister = function($event) {
			authentication.registerAction($scope.user.firstname , $scope.user.lastname , $scope.user.email ,
				$scope.user.confirm_email , $scope.user.password , $scope.user.confirm_password , function(res){

				if (res) {
					console.log('success');
				}

			});
		};
  });
