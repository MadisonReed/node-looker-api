(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/Datagroup', '../model/ValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Datagroup'), require('../model/ValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.DatagroupApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.Error, root.LookerApi30Reference.Datagroup, root.LookerApi30Reference.ValidationError);
  }
}(this, function(ApiClient, Error, Datagroup, ValidationError) {
  'use strict';

  /**
   * Datagroup service.
   * @module api/DatagroupApi
   * @version 3.0.0
   */

  /**
   * Constructs a new DatagroupApi. 
   * @alias module:api/DatagroupApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allDatagroups operation.
     * @callback module:api/DatagroupApi~allDatagroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Datagroup>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Datagroups
     * ### Get information about all datagroups.\n
     * @param {module:api/DatagroupApi~allDatagroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Datagroup>}
     */
    this.allDatagroups = function(callback) {
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
      var returnType = [Datagroup];

      return this.apiClient.callApi(
        '/datagroups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the datagroup operation.
     * @callback module:api/DatagroupApi~datagroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Datagroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Datagroup
     * ### Get information about a datagroup.\n
     * @param {String} datagroupId ID of datagroup.
     * @param {module:api/DatagroupApi~datagroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Datagroup}
     */
    this.datagroup = function(datagroupId, callback) {
      var postBody = null;

      // verify the required parameter 'datagroupId' is set
      if (datagroupId == undefined || datagroupId == null) {
        throw "Missing the required parameter 'datagroupId' when calling datagroup";
      }


      var pathParams = {
        'datagroup_id': datagroupId
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
      var returnType = Datagroup;

      return this.apiClient.callApi(
        '/datagroups/{datagroup_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDatagroup operation.
     * @callback module:api/DatagroupApi~updateDatagroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Datagroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Datagroup
     * ### Update a datagroup using the specified params.\n
     * @param {String} datagroupId ID of datagroup.
     * @param {module:model/Datagroup} body Datagroup
     * @param {module:api/DatagroupApi~updateDatagroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Datagroup}
     */
    this.updateDatagroup = function(datagroupId, body, callback) {
      var postBody = body;

      // verify the required parameter 'datagroupId' is set
      if (datagroupId == undefined || datagroupId == null) {
        throw "Missing the required parameter 'datagroupId' when calling updateDatagroup";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateDatagroup";
      }


      var pathParams = {
        'datagroup_id': datagroupId
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
      var returnType = Datagroup;

      return this.apiClient.callApi(
        '/datagroups/{datagroup_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
