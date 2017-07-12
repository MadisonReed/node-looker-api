(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/Look', '../model/ValidationError', '../model/LookWithQuery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Look'), require('../model/ValidationError'), require('../model/LookWithQuery'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.LookApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.Error, root.LookerApi30Reference.Look, root.LookerApi30Reference.ValidationError, root.LookerApi30Reference.LookWithQuery);
  }
}(this, function(ApiClient, Error, Look, ValidationError, LookWithQuery) {
  'use strict';

  /**
   * Look service.
   * @module api/LookApi
   * @version 3.0.0
   */

  /**
   * Constructs a new LookApi. 
   * @alias module:api/LookApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allLooks operation.
     * @callback module:api/LookApi~allLooksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Look>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Looks
     * ### Get all the looks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/LookApi~allLooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Look>}
     */
    this.allLooks = function(opts, callback) {
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
      var returnType = [Look];

      return this.apiClient.callApi(
        '/looks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createLook operation.
     * @callback module:api/LookApi~createLookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LookWithQuery} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Look
     * ### Create a Look with specified information.
     * @param {Object} opts Optional parameters
     * @param {module:model/LookWithQuery} opts.body Look
     * @param {String} opts.fields Requested fields.
     * @param {module:api/LookApi~createLookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LookWithQuery}
     */
    this.createLook = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


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
      var returnType = LookWithQuery;

      return this.apiClient.callApi(
        '/looks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLook operation.
     * @callback module:api/LookApi~deleteLookCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Look
     * ### Delete the look with a specific id.
     * @param {Integer} lookId Id of look
     * @param {module:api/LookApi~deleteLookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteLook = function(lookId, callback) {
      var postBody = null;

      // verify the required parameter 'lookId' is set
      if (lookId == undefined || lookId == null) {
        throw "Missing the required parameter 'lookId' when calling deleteLook";
      }


      var pathParams = {
        'look_id': lookId
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
        '/looks/{look_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the look operation.
     * @callback module:api/LookApi~lookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LookWithQuery} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Look
     * ### Get a Look.\n\nReturn detailed information about the Look and its associated Query.\n\n
     * @param {Integer} lookId Id of look
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/LookApi~lookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LookWithQuery}
     */
    this.look = function(lookId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'lookId' is set
      if (lookId == undefined || lookId == null) {
        throw "Missing the required parameter 'lookId' when calling look";
      }


      var pathParams = {
        'look_id': lookId
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
      var returnType = LookWithQuery;

      return this.apiClient.callApi(
        '/looks/{look_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the runLook operation.
     * @callback module:api/LookApi~runLookCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run Look
     * ### Run a Look.\n\nRuns a given look&#39;s query and returns the results in the requested format.\n\nSuported formats:\n\n| result_format | Description\n| :-----------: | :--- |\n| json | Plain json\n| json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query\n| csv | Comma separated values with a header\n| txt | Tab separated values with a header\n| html | Simple html\n| md | Simple markdown\n| xlsx | MS Excel spreadsheet\n| sql | Returns the generated SQL rather than running the query\n| png | A PNG image of the visualization of the query\n| jpg | A JPG image of the visualization of the query\n\n\n
     * @param {Integer} lookId Id of look
     * @param {String} resultFormat Format of result
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit Row limit (may override the limit in the saved query).
     * @param {Boolean} opts.applyFormatting Apply model-specified formatting to each result.
     * @param {Boolean} opts.applyVis Apply visualization options to results.
     * @param {Boolean} opts.cache Get results from cache if available.
     * @param {Integer} opts.imageWidth Render width for image formats.
     * @param {Integer} opts.imageHeight Render height for image formats.
     * @param {Boolean} opts.generateDrillLinks Generate drill links (only applicable to &#39;json_detail&#39; format.
     * @param {Boolean} opts.forceProduction Force use of production models even if the user is in development mode.
     * @param {Boolean} opts.cacheOnly Retrieve any results from cache even if the results have expired.
     * @param {String} opts.pathPrefix Prefix to use for drill links (url encoded).
     * @param {Boolean} opts.rebuildPdts Rebuild PDTS used in query.
     * @param {Boolean} opts.serverTableCalcs Perform table calculations on query results
     * @param {module:api/LookApi~runLookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.runLook = function(lookId, resultFormat, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'lookId' is set
      if (lookId == undefined || lookId == null) {
        throw "Missing the required parameter 'lookId' when calling runLook";
      }

      // verify the required parameter 'resultFormat' is set
      if (resultFormat == undefined || resultFormat == null) {
        throw "Missing the required parameter 'resultFormat' when calling runLook";
      }


      var pathParams = {
        'look_id': lookId,
        'result_format': resultFormat
      };
      var queryParams = {
        'limit': opts['limit'],
        'apply_formatting': opts['applyFormatting'],
        'apply_vis': opts['applyVis'],
        'cache': opts['cache'],
        'image_width': opts['imageWidth'],
        'image_height': opts['imageHeight'],
        'generate_drill_links': opts['generateDrillLinks'],
        'force_production': opts['forceProduction'],
        'cache_only': opts['cacheOnly'],
        'path_prefix': opts['pathPrefix'],
        'rebuild_pdts': opts['rebuildPdts'],
        'server_table_calcs': opts['serverTableCalcs']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['text', 'application/json', 'image/png', 'image/jpg'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/looks/{look_id}/run/{result_format}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchLooks operation.
     * @callback module:api/LookApi~searchLooksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Look>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Looks
     * Search looks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {Integer} opts.page Requested page.
     * @param {Integer} opts.perPage Results per page.
     * @param {Integer} opts.limit Number of results to return. (used with offset and takes priority over page and per_page)
     * @param {Integer} opts.offset Number of results to skip before returning any. (used with limit and takes priority over page and per_page)
     * @param {String} opts.sorts Fields to sort by.
     * @param {String} opts.title Match Look title.
     * @param {String} opts.description Match Look description.
     * @param {Integer} opts.contentFavoriteId Match content favorite id
     * @param {String} opts.spaceId Filter on a particular space.
     * @param {String} opts.userId Filter on dashboards created by a particular user.
     * @param {String} opts.viewCount Filter on a particular value of view_count
     * @param {module:api/LookApi~searchLooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Look>}
     */
    this.searchLooks = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'fields': opts['fields'],
        'page': opts['page'],
        'per_page': opts['perPage'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sorts': opts['sorts'],
        'title': opts['title'],
        'description': opts['description'],
        'content_favorite_id': opts['contentFavoriteId'],
        'space_id': opts['spaceId'],
        'user_id': opts['userId'],
        'view_count': opts['viewCount']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Look];

      return this.apiClient.callApi(
        '/looks/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLook operation.
     * @callback module:api/LookApi~updateLookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LookWithQuery} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Look
     * ### Update the Look with a specific id.
     * @param {Integer} lookId Id of look
     * @param {module:model/LookWithQuery} body Look
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/LookApi~updateLookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LookWithQuery}
     */
    this.updateLook = function(lookId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'lookId' is set
      if (lookId == undefined || lookId == null) {
        throw "Missing the required parameter 'lookId' when calling updateLook";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateLook";
      }


      var pathParams = {
        'look_id': lookId
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
      var returnType = LookWithQuery;

      return this.apiClient.callApi(
        '/looks/{look_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
