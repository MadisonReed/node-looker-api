(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/LookmlModel', '../model/Error', '../model/ValidationError', '../model/LookmlModelExplore'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LookmlModel'), require('../model/Error'), require('../model/ValidationError'), require('../model/LookmlModelExplore'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.LookmlModelApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.LookmlModel, root.LookerApi30Reference.Error, root.LookerApi30Reference.ValidationError, root.LookerApi30Reference.LookmlModelExplore);
  }
}(this, function(ApiClient, LookmlModel, Error, ValidationError, LookmlModelExplore) {
  'use strict';

  /**
   * LookmlModel service.
   * @module api/LookmlModelApi
   * @version 3.0.0
   */

  /**
   * Constructs a new LookmlModelApi. 
   * @alias module:api/LookmlModelApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allLookmlModels operation.
     * @callback module:api/LookmlModelApi~allLookmlModelsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LookmlModel>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All LookML Models
     * ### Get information about all lookml models.\n
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/LookmlModelApi~allLookmlModelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/LookmlModel>}
     */
    this.allLookmlModels = function(opts, callback) {
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
      var returnType = [LookmlModel];

      return this.apiClient.callApi(
        '/lookml_models', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createLookmlModel operation.
     * @callback module:api/LookmlModelApi~createLookmlModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LookmlModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create LookML Model
     * ### Create a lookml model using the specified configuration.\n
     * @param {Object} opts Optional parameters
     * @param {module:model/LookmlModel} opts.body LookML Model
     * @param {module:api/LookmlModelApi~createLookmlModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LookmlModel}
     */
    this.createLookmlModel = function(opts, callback) {
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
      var returnType = LookmlModel;

      return this.apiClient.callApi(
        '/lookml_models', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLookmlModel operation.
     * @callback module:api/LookmlModelApi~deleteLookmlModelCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete LookML Model
     * ### Delete a lookml model.\n
     * @param {String} lookmlModelName Name of lookml model.
     * @param {module:api/LookmlModelApi~deleteLookmlModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteLookmlModel = function(lookmlModelName, callback) {
      var postBody = null;

      // verify the required parameter 'lookmlModelName' is set
      if (lookmlModelName == undefined || lookmlModelName == null) {
        throw "Missing the required parameter 'lookmlModelName' when calling deleteLookmlModel";
      }


      var pathParams = {
        'lookml_model_name': lookmlModelName
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
        '/lookml_models/{lookml_model_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lookmlModel operation.
     * @callback module:api/LookmlModelApi~lookmlModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LookmlModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get LookML Model
     * ### Get information about a lookml model.\n
     * @param {String} lookmlModelName Name of lookml model.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/LookmlModelApi~lookmlModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LookmlModel}
     */
    this.lookmlModel = function(lookmlModelName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'lookmlModelName' is set
      if (lookmlModelName == undefined || lookmlModelName == null) {
        throw "Missing the required parameter 'lookmlModelName' when calling lookmlModel";
      }


      var pathParams = {
        'lookml_model_name': lookmlModelName
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
      var returnType = LookmlModel;

      return this.apiClient.callApi(
        '/lookml_models/{lookml_model_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lookmlModelExplore operation.
     * @callback module:api/LookmlModelApi~lookmlModelExploreCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LookmlModelExplore} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get LookML Model Explore
     * ### Get information about a lookml model explore.\n
     * @param {String} lookmlModelName Name of lookml model.
     * @param {String} exploreName Name of explore.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/LookmlModelApi~lookmlModelExploreCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LookmlModelExplore}
     */
    this.lookmlModelExplore = function(lookmlModelName, exploreName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'lookmlModelName' is set
      if (lookmlModelName == undefined || lookmlModelName == null) {
        throw "Missing the required parameter 'lookmlModelName' when calling lookmlModelExplore";
      }

      // verify the required parameter 'exploreName' is set
      if (exploreName == undefined || exploreName == null) {
        throw "Missing the required parameter 'exploreName' when calling lookmlModelExplore";
      }


      var pathParams = {
        'lookml_model_name': lookmlModelName,
        'explore_name': exploreName
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
      var returnType = LookmlModelExplore;

      return this.apiClient.callApi(
        '/lookml_models/{lookml_model_name}/explores/{explore_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLookmlModel operation.
     * @callback module:api/LookmlModelApi~updateLookmlModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LookmlModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update LookML Model
     * ### Update a lookml model using the specified configuration.\n
     * @param {String} lookmlModelName Name of lookml model.
     * @param {module:model/LookmlModel} body LookML Model
     * @param {module:api/LookmlModelApi~updateLookmlModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LookmlModel}
     */
    this.updateLookmlModel = function(lookmlModelName, body, callback) {
      var postBody = body;

      // verify the required parameter 'lookmlModelName' is set
      if (lookmlModelName == undefined || lookmlModelName == null) {
        throw "Missing the required parameter 'lookmlModelName' when calling updateLookmlModel";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateLookmlModel";
      }


      var pathParams = {
        'lookml_model_name': lookmlModelName
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
      var returnType = LookmlModel;

      return this.apiClient.callApi(
        '/lookml_models/{lookml_model_name}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
