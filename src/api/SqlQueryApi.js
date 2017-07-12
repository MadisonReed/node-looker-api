(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/SqlQuery', '../model/Error', '../model/SqlQueryCreate', '../model/ValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SqlQuery'), require('../model/Error'), require('../model/SqlQueryCreate'), require('../model/ValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.SqlQueryApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.SqlQuery, root.LookerApi30Reference.Error, root.LookerApi30Reference.SqlQueryCreate, root.LookerApi30Reference.ValidationError);
  }
}(this, function(ApiClient, SqlQuery, Error, SqlQueryCreate, ValidationError) {
  'use strict';

  /**
   * SqlQuery service.
   * @module api/SqlQueryApi
   * @version 3.0.0
   */

  /**
   * Constructs a new SqlQueryApi. 
   * @alias module:api/SqlQueryApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createSqlQuery operation.
     * @callback module:api/SqlQueryApi~createSqlQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SqlQuery} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create SQL Runner Query
     * Create a SQL Runner query.
     * @param {module:model/SqlQueryCreate} body SQL Runner Query
     * @param {module:api/SqlQueryApi~createSqlQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/SqlQuery}
     */
    this.createSqlQuery = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createSqlQuery";
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
      var returnType = SqlQuery;

      return this.apiClient.callApi(
        '/sql_queries', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sqlQuery operation.
     * @callback module:api/SqlQueryApi~sqlQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SqlQuery} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get SQL Runner Query
     * Get a SQL Runner query.
     * @param {String} slug slug of query
     * @param {module:api/SqlQueryApi~sqlQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/SqlQuery}
     */
    this.sqlQuery = function(slug, callback) {
      var postBody = null;

      // verify the required parameter 'slug' is set
      if (slug == undefined || slug == null) {
        throw "Missing the required parameter 'slug' when calling sqlQuery";
      }


      var pathParams = {
        'slug': slug
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
      var returnType = SqlQuery;

      return this.apiClient.callApi(
        '/sql_queries/{slug}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
