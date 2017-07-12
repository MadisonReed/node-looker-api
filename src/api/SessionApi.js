(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ApiSession', '../model/Error', '../model/ValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiSession'), require('../model/Error'), require('../model/ValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.SessionApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.ApiSession, root.LookerApi30Reference.Error, root.LookerApi30Reference.ValidationError);
  }
}(this, function(ApiClient, ApiSession, Error, ValidationError) {
  'use strict';

  /**
   * Session service.
   * @module api/SessionApi
   * @version 3.0.0
   */

  /**
   * Constructs a new SessionApi. 
   * @alias module:api/SessionApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the session operation.
     * @callback module:api/SessionApi~sessionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiSession} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Session
     * ### Get API Session \n\nReturns information about the current API session, such as which workspace is selected for the session.\n
     * @param {module:api/SessionApi~sessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ApiSession}
     */
    this.session = function(callback) {
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
      var returnType = ApiSession;

      return this.apiClient.callApi(
        '/session', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSession operation.
     * @callback module:api/SessionApi~updateSessionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiSession} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Session
     * ### Update API Session \n\n#### API Session Workspace\n\nYou can use this endpoint to change the active workspace for the current API session. \n\nOnly one workspace can be active in a session. The active workspace can be changed\nany number of times in a session.\n\nThe default workspace for API sessions is the \&quot;production\&quot; workspace.\n\nAll Looker APIs that use projects or lookml models (such as running queries) will \nuse the version of project and model files defined by this workspace for the lifetime of the \ncurrent API session or until the session workspace is changed again. \n\nAn API session has the same lifetime as the access_token used to authenticate API requests. Each successful\nAPI login generates a new access_token and a new API session. \n\nIf your Looker API client application needs to work in a dev workspace across multiple\nAPI sessions, be sure to select the dev workspace after each login.\n
     * @param {module:model/ApiSession} body Session
     * @param {module:api/SessionApi~updateSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ApiSession}
     */
    this.updateSession = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateSession";
      }


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
      var returnType = ApiSession;

      return this.apiClient.callApi(
        '/session', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
