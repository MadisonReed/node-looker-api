(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AccessToken', '../model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AccessToken'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.ApiAuthApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.AccessToken, root.LookerApi30Reference.Error);
  }
}(this, function(ApiClient, AccessToken, Error) {
  'use strict';

  /**
   * ApiAuth service.
   * @module api/ApiAuthApi
   * @version 3.0.0
   */

  /**
   * Constructs a new ApiAuthApi. 
   * @alias module:api/ApiAuthApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    /**
     * Callback function to receive the result of the login operation.
     * @callback module:api/ApiAuthApi~loginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccessToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Login
     * ### Present client credentials to obtain an authorization token\n\nLooker API implements the OAuth2 [Resource Owner Password Credentials Grant](https://looker.com/docs/r/api/outh2_resource_owner_pc) pattern.\nThe client credentials required for this login must be obtained by creating an API3 key on a user account\nin the Looker Admin console. The API3 key consists of a public `client_id` and a private `client_secret`.\n\nThe access token returned by `login` must be used in the HTTP Authorization header of subsequent\nAPI requests, like this:\n```\nAuthorization: token 4QDkCyCtZzYgj4C2p2cj3csJH7zqS5RzKs2kTnG4\n```\nReplace \&quot;4QDkCy...\&quot; with the `access_token` value returned by `login`.\nThe word &#39;token&#39; is a string literal and must be included exactly as shown.\n\nFor more information and detailed examples of Looker API authorization, see [How to Authenticate to Looker API3](https://github.com/looker/looker-sdk-ruby/blob/master/authentication.md).\n
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientId client_id part of API3 Key.
     * @param {String} opts.clientSecret client_secret part of API3 Key.
     * @param {module:api/ApiAuthApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AccessToken}
     */
    this.login = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'client_id': opts['clientId'],
        'client_secret': opts['clientSecret']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = AccessToken;

      var apiClient = this.apiClient;
      return this.apiClient.callApi(
        '/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
        //
        //new function(error, loginData) {
        //  if (error) {
        //    throw new Error('Login error: ' + error);
        //  } else {
        //    apiClient.authentications = {};
        //    apiClient.authentications["oauth2"] = {"type": "oauth2", "accessToken": loginData.access_token};
        //  }
        //
        //  callback(error, loginData);
        //}
      );
    }

    /**
     * Callback function to receive the result of the loginUser operation.
     * @callback module:api/ApiAuthApi~loginUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccessToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Login user
     * ### Create an access token for a given user.\n\nThis can only be called by an authenticated admin user. It allows that admin to generate a new\nauthentication token for the user with the given user id. That token can then be used for subsequent\nAPI calls - which are then performed *as* that target user.\n\nThe target user does *not* need to have a pre-existing API client_id/client_secret pair. And, no such\ncredentials are created by this call.\n\nThis allows for building systems where api user authentication for an arbitrary number of users is done\noutside of Looker and funneled through a single &#39;service account&#39; with admin permissions. Note that a\nnew access token is generated on each call. If target users are going to be making numerous API\ncalls in a short period then it is wise to cache this authentication token rather than call this before\neach of those API calls.\n\nSee &#39;login&#39; for more detail on the access token and how to use it.\n
     * @param {Integer} userId Id of user.
     * @param {module:api/ApiAuthApi~loginUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AccessToken}
     */
    this.loginUser = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling loginUser";
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AccessToken;

      return this.apiClient.callApi(
        '/login/{user_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the logout operation.
     * @callback module:api/ApiAuthApi~logoutCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Logout
     * ### Logout of the API and invalidate the current access token.\n
     * @param {module:api/ApiAuthApi~logoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.logout = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/logout', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
