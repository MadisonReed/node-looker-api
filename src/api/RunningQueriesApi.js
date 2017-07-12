(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/RunningQueries', '../model/ValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/RunningQueries'), require('../model/ValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.RunningQueriesApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.Error, root.LookerApi30Reference.RunningQueries, root.LookerApi30Reference.ValidationError);
  }
}(this, function(ApiClient, Error, RunningQueries, ValidationError) {
  'use strict';

  /**
   * RunningQueries service.
   * @module api/RunningQueriesApi
   * @version 3.0.0
   */

  /**
   * Constructs a new RunningQueriesApi. 
   * @alias module:api/RunningQueriesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allRunningQueries operation.
     * @callback module:api/RunningQueriesApi~allRunningQueriesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RunningQueries>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Running Queries
     * Get information about all running queries.\n
     * @param {module:api/RunningQueriesApi~allRunningQueriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/RunningQueries>}
     */
    this.allRunningQueries = function(callback) {
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
      var returnType = [RunningQueries];

      return this.apiClient.callApi(
        '/running_queries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the killQuery operation.
     * @callback module:api/RunningQueriesApi~killQueryCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Kill Running Query
     * Kill a query with a specific query_task_id.\n
     * @param {String} queryTaskId Query task id.
     * @param {module:api/RunningQueriesApi~killQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.killQuery = function(queryTaskId, callback) {
      var postBody = null;

      // verify the required parameter 'queryTaskId' is set
      if (queryTaskId == undefined || queryTaskId == null) {
        throw "Missing the required parameter 'queryTaskId' when calling killQuery";
      }


      var pathParams = {
        'query_task_id': queryTaskId
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
        '/running_queries/{query_task_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
