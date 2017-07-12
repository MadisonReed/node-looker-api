(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/SpaceBase', '../model/Error', '../model/Space', '../model/ValidationError', '../model/Dashboard', '../model/LookWithQuery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SpaceBase'), require('../model/Error'), require('../model/Space'), require('../model/ValidationError'), require('../model/Dashboard'), require('../model/LookWithQuery'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.SpaceApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.SpaceBase, root.LookerApi30Reference.Error, root.LookerApi30Reference.Space, root.LookerApi30Reference.ValidationError, root.LookerApi30Reference.Dashboard, root.LookerApi30Reference.LookWithQuery);
  }
}(this, function(ApiClient, SpaceBase, Error, Space, ValidationError, Dashboard, LookWithQuery) {
  'use strict';

  /**
   * Space service.
   * @module api/SpaceApi
   * @version 3.0.0
   */

  /**
   * Constructs a new SpaceApi. 
   * @alias module:api/SpaceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allSpaces operation.
     * @callback module:api/SpaceApi~allSpacesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SpaceBase>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Spaces
     * ### Get information about all spaces.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/SpaceApi~allSpacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/SpaceBase>}
     */
    this.allSpaces = function(opts, callback) {
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
      var returnType = [SpaceBase];

      return this.apiClient.callApi(
        '/spaces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createSpace operation.
     * @callback module:api/SpaceApi~createSpaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Space} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Space
     * ### Create a space with specified information.
     * @param {Object} opts Optional parameters
     * @param {module:model/Space} opts.body Space
     * @param {module:api/SpaceApi~createSpaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Space}
     */
    this.createSpace = function(opts, callback) {
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
      var returnType = Space;

      return this.apiClient.callApi(
        '/spaces', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSpace operation.
     * @callback module:api/SpaceApi~deleteSpaceCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Space
     * ### Delete the space with a specific id including any children spaces.\n**DANGER** this will delete all looks and dashboards in the space.\n
     * @param {String} spaceId Id of space
     * @param {module:api/SpaceApi~deleteSpaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteSpace = function(spaceId, callback) {
      var postBody = null;

      // verify the required parameter 'spaceId' is set
      if (spaceId == undefined || spaceId == null) {
        throw "Missing the required parameter 'spaceId' when calling deleteSpace";
      }


      var pathParams = {
        'space_id': spaceId
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
        '/spaces/{space_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchSpaces operation.
     * @callback module:api/SpaceApi~searchSpacesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Space>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Spaces
     * Search for spaces by creator id, parent id, name, etc
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {Integer} opts.page Requested page.
     * @param {Integer} opts.perPage Results per page.
     * @param {Integer} opts.limit Number of results to return. (used with offset and takes priority over page and per_page)
     * @param {Integer} opts.offset Number of results to skip before returning any. (used with limit and takes priority over page and per_page)
     * @param {String} opts.sorts Fields to sort by.
     * @param {String} opts.name Match Space title.
     * @param {Integer} opts.id Match Space id
     * @param {String} opts.parentId Filter on a children of a particular space.
     * @param {String} opts.creatorId Filter on dashboards created by a particular user.
     * @param {module:api/SpaceApi~searchSpacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Space>}
     */
    this.searchSpaces = function(opts, callback) {
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
        'name': opts['name'],
        'id': opts['id'],
        'parent_id': opts['parentId'],
        'creator_id': opts['creatorId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Space];

      return this.apiClient.callApi(
        '/spaces/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the space operation.
     * @callback module:api/SpaceApi~spaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Space} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Space
     * ### Get information about the space with a specific id.
     * @param {String} spaceId Id of space
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/SpaceApi~spaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Space}
     */
    this.space = function(spaceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'spaceId' is set
      if (spaceId == undefined || spaceId == null) {
        throw "Missing the required parameter 'spaceId' when calling space";
      }


      var pathParams = {
        'space_id': spaceId
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
      var returnType = Space;

      return this.apiClient.callApi(
        '/spaces/{space_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the spaceAncestors operation.
     * @callback module:api/SpaceApi~spaceAncestorsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Space>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Space Ancestors
     * ### Get the ancestors of a space
     * @param {String} spaceId Id of space
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/SpaceApi~spaceAncestorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Space>}
     */
    this.spaceAncestors = function(spaceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'spaceId' is set
      if (spaceId == undefined || spaceId == null) {
        throw "Missing the required parameter 'spaceId' when calling spaceAncestors";
      }


      var pathParams = {
        'space_id': spaceId
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
      var returnType = [Space];

      return this.apiClient.callApi(
        '/spaces/{space_id}/ancestors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the spaceChildren operation.
     * @callback module:api/SpaceApi~spaceChildrenCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Space>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Space Children
     * ### Get the children of a space.
     * @param {String} spaceId Id of space
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {Integer} opts.page Requested page.
     * @param {Integer} opts.perPage Results per page.
     * @param {String} opts.sorts Fields to sort by.
     * @param {module:api/SpaceApi~spaceChildrenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Space>}
     */
    this.spaceChildren = function(spaceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'spaceId' is set
      if (spaceId == undefined || spaceId == null) {
        throw "Missing the required parameter 'spaceId' when calling spaceChildren";
      }


      var pathParams = {
        'space_id': spaceId
      };
      var queryParams = {
        'fields': opts['fields'],
        'page': opts['page'],
        'per_page': opts['perPage'],
        'sorts': opts['sorts']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Space];

      return this.apiClient.callApi(
        '/spaces/{space_id}/children', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the spaceChildrenSearch operation.
     * @callback module:api/SpaceApi~spaceChildrenSearchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Space>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Space Children
     * ### Search the children of a space
     * @param {String} spaceId Id of space
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {String} opts.sorts Fields to sort by.
     * @param {String} opts.name Match Space name.
     * @param {module:api/SpaceApi~spaceChildrenSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Space>}
     */
    this.spaceChildrenSearch = function(spaceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'spaceId' is set
      if (spaceId == undefined || spaceId == null) {
        throw "Missing the required parameter 'spaceId' when calling spaceChildrenSearch";
      }


      var pathParams = {
        'space_id': spaceId
      };
      var queryParams = {
        'fields': opts['fields'],
        'sorts': opts['sorts'],
        'name': opts['name']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Space];

      return this.apiClient.callApi(
        '/spaces/{space_id}/children/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the spaceDashboards operation.
     * @callback module:api/SpaceApi~spaceDashboardsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Dashboard>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Space Dashboards
     * ### Get the dashboards in a space
     * @param {String} spaceId Id of space
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/SpaceApi~spaceDashboardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Dashboard>}
     */
    this.spaceDashboards = function(spaceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'spaceId' is set
      if (spaceId == undefined || spaceId == null) {
        throw "Missing the required parameter 'spaceId' when calling spaceDashboards";
      }


      var pathParams = {
        'space_id': spaceId
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
      var returnType = [Dashboard];

      return this.apiClient.callApi(
        '/spaces/{space_id}/dashboards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the spaceLooks operation.
     * @callback module:api/SpaceApi~spaceLooksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LookWithQuery>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Space Looks
     * ### Get the looks in a space
     * @param {String} spaceId Id of space
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/SpaceApi~spaceLooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/LookWithQuery>}
     */
    this.spaceLooks = function(spaceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'spaceId' is set
      if (spaceId == undefined || spaceId == null) {
        throw "Missing the required parameter 'spaceId' when calling spaceLooks";
      }


      var pathParams = {
        'space_id': spaceId
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
      var returnType = [LookWithQuery];

      return this.apiClient.callApi(
        '/spaces/{space_id}/looks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the spaceParent operation.
     * @callback module:api/SpaceApi~spaceParentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Space} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Space Parent
     * ### Get the parent of a space
     * @param {String} spaceId Id of space
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/SpaceApi~spaceParentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Space}
     */
    this.spaceParent = function(spaceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'spaceId' is set
      if (spaceId == undefined || spaceId == null) {
        throw "Missing the required parameter 'spaceId' when calling spaceParent";
      }


      var pathParams = {
        'space_id': spaceId
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
      var returnType = Space;

      return this.apiClient.callApi(
        '/spaces/{space_id}/parent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSpace operation.
     * @callback module:api/SpaceApi~updateSpaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Space} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Space
     * ### Update the space with a specific id.
     * @param {String} spaceId Id of space
     * @param {module:model/Space} body Space
     * @param {module:api/SpaceApi~updateSpaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Space}
     */
    this.updateSpace = function(spaceId, body, callback) {
      var postBody = body;

      // verify the required parameter 'spaceId' is set
      if (spaceId == undefined || spaceId == null) {
        throw "Missing the required parameter 'spaceId' when calling updateSpace";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateSpace";
      }


      var pathParams = {
        'space_id': spaceId
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
      var returnType = Space;

      return this.apiClient.callApi(
        '/spaces/{space_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
