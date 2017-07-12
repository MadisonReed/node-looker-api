(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/DBConnection', '../model/Error', '../model/DialectInfo', '../model/ValidationError', '../model/DBConnectionTestResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DBConnection'), require('../model/Error'), require('../model/DialectInfo'), require('../model/ValidationError'), require('../model/DBConnectionTestResult'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.ConnectionApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.DBConnection, root.LookerApi30Reference.Error, root.LookerApi30Reference.DialectInfo, root.LookerApi30Reference.ValidationError, root.LookerApi30Reference.DBConnectionTestResult);
  }
}(this, function(ApiClient, DBConnection, Error, DialectInfo, ValidationError, DBConnectionTestResult) {
  'use strict';

  /**
   * Connection service.
   * @module api/ConnectionApi
   * @version 3.0.0
   */

  /**
   * Constructs a new ConnectionApi. 
   * @alias module:api/ConnectionApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allConnections operation.
     * @callback module:api/ConnectionApi~allConnectionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DBConnection>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Connections
     * ### Get information about all connections.\n
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ConnectionApi~allConnectionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/DBConnection>}
     */
    this.allConnections = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [DBConnection];

      return this.apiClient.callApi(
        '/connections', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allDialectInfos operation.
     * @callback module:api/ConnectionApi~allDialectInfosCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DialectInfo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Dialect Infos
     * ### Get information about all dialects.\n
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ConnectionApi~allDialectInfosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/DialectInfo>}
     */
    this.allDialectInfos = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [DialectInfo];

      return this.apiClient.callApi(
        '/dialect_info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the connection operation.
     * @callback module:api/ConnectionApi~connectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DBConnection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Connection
     * ### Get information about a connection.\n
     * @param {String} connectionName Name of connection
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ConnectionApi~connectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DBConnection}
     */
    this.connection = function(connectionName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'connectionName' is set
      if (connectionName == undefined || connectionName == null) {
        throw "Missing the required parameter 'connectionName' when calling connection";
      }


      var pathParams = {
        'connection_name': connectionName
      };
      var queryParams = {
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DBConnection;

      return this.apiClient.callApi(
        '/connections/{connection_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createConnection operation.
     * @callback module:api/ConnectionApi~createConnectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DBConnection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Connection
     * ### Create a connection using the specified configuration.\n
     * @param {Object} opts Optional parameters
     * @param {module:model/DBConnection} opts.body Connection
     * @param {module:api/ConnectionApi~createConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DBConnection}
     */
    this.createConnection = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


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
      var returnType = DBConnection;

      return this.apiClient.callApi(
        '/connections', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteConnection operation.
     * @callback module:api/ConnectionApi~deleteConnectionCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Connection
     * ### Delete a connection.\n
     * @param {String} connectionName Name of connection
     * @param {module:api/ConnectionApi~deleteConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteConnection = function(connectionName, callback) {
      var postBody = null;

      // verify the required parameter 'connectionName' is set
      if (connectionName == undefined || connectionName == null) {
        throw "Missing the required parameter 'connectionName' when calling deleteConnection";
      }


      var pathParams = {
        'connection_name': connectionName
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
        '/connections/{connection_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testConnection operation.
     * @callback module:api/ConnectionApi~testConnectionCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DBConnectionTestResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test Connection
     * ### Test an existing connection.\n\nNote that a connection&#39;s &#39;dialect&#39; property has a &#39;connection_tests&#39; property that lists the\nspecific types of tests that the connection supports.\n\nUnsupported tests in the request will be ignored.\n
     * @param {String} connectionName Name of connection
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.tests Array of names of tests to run
     * @param {module:api/ConnectionApi~testConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/DBConnectionTestResult>}
     */
    this.testConnection = function(connectionName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'connectionName' is set
      if (connectionName == undefined || connectionName == null) {
        throw "Missing the required parameter 'connectionName' when calling testConnection";
      }


      var pathParams = {
        'connection_name': connectionName
      };
      var queryParams = {
        'tests': this.apiClient.buildCollectionParam(opts['tests'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [DBConnectionTestResult];

      return this.apiClient.callApi(
        '/connections/{connection_name}/test', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testConnectionConfig operation.
     * @callback module:api/ConnectionApi~testConnectionConfigCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DBConnectionTestResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test Connection Configuration
     * ### Test a connection configuration.\n\nNote that a connection&#39;s &#39;dialect&#39; property has a &#39;connection_tests&#39; property that lists the\nspecific types of tests that the connection supports.\n\nUnsupported tests in the request will be ignored.\n
     * @param {Object} opts Optional parameters
     * @param {module:model/DBConnection} opts.body Connection
     * @param {Array.<String>} opts.tests Array of names of tests to run
     * @param {module:api/ConnectionApi~testConnectionConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/DBConnectionTestResult>}
     */
    this.testConnectionConfig = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
        'tests': this.apiClient.buildCollectionParam(opts['tests'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [DBConnectionTestResult];

      return this.apiClient.callApi(
        '/connections/test', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateConnection operation.
     * @callback module:api/ConnectionApi~updateConnectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DBConnection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Connection
     * ### Update a connection using the specified configuration.\n
     * @param {String} connectionName Name of connection
     * @param {module:model/DBConnection} body Connection
     * @param {module:api/ConnectionApi~updateConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DBConnection}
     */
    this.updateConnection = function(connectionName, body, callback) {
      var postBody = body;

      // verify the required parameter 'connectionName' is set
      if (connectionName == undefined || connectionName == null) {
        throw "Missing the required parameter 'connectionName' when calling updateConnection";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateConnection";
      }


      var pathParams = {
        'connection_name': connectionName
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
      var returnType = DBConnection;

      return this.apiClient.callApi(
        '/connections/{connection_name}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
