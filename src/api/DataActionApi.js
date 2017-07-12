(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/DataActionForm', '../model/Error', '../model/ValidationError', '../model/DataActionResponse', '../model/DataActionRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DataActionForm'), require('../model/Error'), require('../model/ValidationError'), require('../model/DataActionResponse'), require('../model/DataActionRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.DataActionApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.DataActionForm, root.LookerApi30Reference.Error, root.LookerApi30Reference.ValidationError, root.LookerApi30Reference.DataActionResponse, root.LookerApi30Reference.DataActionRequest);
  }
}(this, function(ApiClient, DataActionForm, Error, ValidationError, DataActionResponse, DataActionRequest) {
  'use strict';

  /**
   * DataAction service.
   * @module api/DataActionApi
   * @version 3.0.0
   */

  /**
   * Constructs a new DataActionApi. 
   * @alias module:api/DataActionApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the fetchRemoteDataActionForm operation.
     * @callback module:api/DataActionApi~fetchRemoteDataActionFormCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataActionForm} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch Remote Data Action Form
     * For some data actions, the remote server may supply a form requesting further user input. This endpoint takes a data action, asks the remote server to generate a form for it, and returns that form to you for presentation to the user.
     * @param {Object} body Data Action Request
     * @param {module:api/DataActionApi~fetchRemoteDataActionFormCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DataActionForm}
     */
    this.fetchRemoteDataActionForm = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling fetchRemoteDataActionForm";
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
      var returnType = DataActionForm;

      return this.apiClient.callApi(
        '/data_actions/form', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the performDataAction operation.
     * @callback module:api/DataActionApi~performDataActionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataActionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a Data Action
     * Perform a data action. The data action object can be obtained from query results, and used to perform an arbitrary action.
     * @param {module:model/DataActionRequest} body Data Action Request
     * @param {module:api/DataActionApi~performDataActionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DataActionResponse}
     */
    this.performDataAction = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling performDataAction";
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
      var returnType = DataActionResponse;

      return this.apiClient.callApi(
        '/data_actions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
