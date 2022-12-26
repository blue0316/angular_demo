'use strict';

/**
 * @ngdoc service
 * @name visualstApp.apiSender
 * @description
 * # apiSender
 * Service in the visualstApp.
 */
angular.module('visualstApp')
  .service('apiSender', function ($http, $cookies) {

    // AngularJS will instantiate a singleton by calling "new" on this function

    // initial
    	var self = this;
    	var api_store_url = 'http://www.arvidapi.com/';
    	self.access_token = '';

   	// send api request : url encoded request
   		self.sendAPIRequest_url = function(httpMethod , APIMethod, data) {

   			var req = {
          method : httpMethod ,
   				url : api_store_url + APIMethod ,
   				data : data ,
          transformRequest: function(obj) {
              var str = [];
              for(var p in obj)
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
              return str.join("&");
          },
   				headers : {
            'Content-Type': 'application/x-www-form-urlencoded'
   				}
   			};
   			return $http(req);
   		};
    // send api request : json request
      self.sendAPIRequest_json = function(httpMethod , APIMethod , data) {

        self.access_token = $cookies.get('access_token');

        var req = {
          method : httpMethod ,
          url : api_store_url + APIMethod ,
          data : data ,
          headers : {
            'Authorization': self.access_token
          }
        };
        return $http(req);
      };
    // send api request : json request  -- authentication require
    self.sendAPIRequest_json = function(httpMethod , APIMethod , data) {

      self.access_token = $cookies.get('access_token');

      var req = {
        method : httpMethod ,
        url : api_store_url + APIMethod ,
        data : data ,
        headers : {
          //'Authorization': self.access_token
        }
      };
      return $http(req);
    };

});
