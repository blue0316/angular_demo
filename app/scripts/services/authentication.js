'use strict';

/**
 * @ngdoc service
 * @name visualstApp.authentication
 * @description
 * # authentication
 * Service in the visualstApp.
 */
angular.module('visualstApp')
  .service('authentication', function ( $cookies, apiSender) {
    
    // AngularJS will instantiate a singleton by calling "new" on this function

    	//initial
    		var self = this;

    	// login action
    		self.loginAction = function(username, password, callback) {

    		// remove old token
    			$cookies.remove('access_token');
    		// build request body
    			var req_body = {
    				grant_type : 'password' ,
    				username : username , 
    				password : password
    			};
    		// make request
    			apiSender.sendAPIRequest_url('POST' , 'token' , req_body).then(function(res){

    					console.log(res);
    					callback(true);

    				} , function(res){

    					console.log(res);
    					callback(false);

    				}
    			);
    		};

        // register action
            self.registerAction = function(firstname , lastname , email , confirm_email , password , confirm_password , callback) {

            // build request body
                var req_body = {
                    firstname : firstname ,
                    lastname : lastname ,
                    email : email ,
                    confirmEmail : confirm_email ,
                    password : password ,
                    confirmPassword : confirm_password
                };
            // make request
                apiSender.sendAPIRequest_json('POST' , 'api/Account/Register' , req_body).then(function(res){

                        console.log(res);
                        callback(true);

                    } , function(res){

                        console.log(res);
                        callback(false);

                    }
                );
            };
  });
