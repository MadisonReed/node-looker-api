(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ContentMetaGroupUser', '../model/Error', '../model/ContentMeta', '../model/ContentFavorite', '../model/ValidationError', '../model/ContentView'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ContentMetaGroupUser'), require('../model/Error'), require('../model/ContentMeta'), require('../model/ContentFavorite'), require('../model/ValidationError'), require('../model/ContentView'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.ContentApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.ContentMetaGroupUser, root.LookerApi30Reference.Error, root.LookerApi30Reference.ContentMeta, root.LookerApi30Reference.ContentFavorite, root.LookerApi30Reference.ValidationError, root.LookerApi30Reference.ContentView);
  }
}(this, function(ApiClient, ContentMetaGroupUser, Error, ContentMeta, ContentFavorite, ValidationError, ContentView) {
  'use strict';

  /**
   * Content service.
   * @module api/ContentApi
   * @version 3.0.0
   */

  /**
   * Constructs a new ContentApi. 
   * @alias module:api/ContentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allContentMetadataAccesss operation.
     * @callback module:api/ContentApi~allContentMetadataAccesssCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ContentMetaGroupUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Content Metadata Accesss
     * ### All content metadata access records for a content metadata item.\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.contentMetadataId Id of content metadata
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ContentApi~allContentMetadataAccesssCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ContentMetaGroupUser>}
     */
    this.allContentMetadataAccesss = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'content_metadata_id': opts['contentMetadataId'],
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ContentMetaGroupUser];

      return this.apiClient.callApi(
        '/content_metadata_access', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allContentMetadatas operation.
     * @callback module:api/ContentApi~allContentMetadatasCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ContentMeta>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Content Metadatas
     * ### Get information about all content metadata in a space.\n
     * @param {Integer} parentId Parent space of content.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ContentApi~allContentMetadatasCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ContentMeta>}
     */
    this.allContentMetadatas = function(parentId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'parentId' is set
      if (parentId == undefined || parentId == null) {
        throw "Missing the required parameter 'parentId' when calling allContentMetadatas";
      }


      var pathParams = {
      };
      var queryParams = {
        'parent_id': parentId,
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ContentMeta];

      return this.apiClient.callApi(
        '/content_metadata', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contentFavorite operation.
     * @callback module:api/ContentApi~contentFavoriteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentFavorite} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Favorite Content
     * ### Get favorite content by its id
     * @param {Integer} contentFavoriteId Id of favorite content
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ContentApi~contentFavoriteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContentFavorite}
     */
    this.contentFavorite = function(contentFavoriteId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'contentFavoriteId' is set
      if (contentFavoriteId == undefined || contentFavoriteId == null) {
        throw "Missing the required parameter 'contentFavoriteId' when calling contentFavorite";
      }


      var pathParams = {
        'content_favorite_id': contentFavoriteId
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
      var returnType = ContentFavorite;

      return this.apiClient.callApi(
        '/content_favorite/{content_favorite_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contentMetadata operation.
     * @callback module:api/ContentApi~contentMetadataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentMeta} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Content Metadata
     * ### Get information about an individual content metadata record.\n
     * @param {Integer} contentMetadataId Id of content metadata
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ContentApi~contentMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContentMeta}
     */
    this.contentMetadata = function(contentMetadataId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'contentMetadataId' is set
      if (contentMetadataId == undefined || contentMetadataId == null) {
        throw "Missing the required parameter 'contentMetadataId' when calling contentMetadata";
      }


      var pathParams = {
        'content_metadata_id': contentMetadataId
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
      var returnType = ContentMeta;

      return this.apiClient.callApi(
        '/content_metadata/{content_metadata_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createContentFavorite operation.
     * @callback module:api/ContentApi~createContentFavoriteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentFavorite} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Favorite Content
     * ### Create favorite content
     * @param {Object} opts Optional parameters
     * @param {module:model/ContentFavorite} opts.body Favorite Content
     * @param {module:api/ContentApi~createContentFavoriteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContentFavorite}
     */
    this.createContentFavorite = function(opts, callback) {
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
      var returnType = ContentFavorite;

      return this.apiClient.callApi(
        '/content_favorite', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createContentMetadataAccess operation.
     * @callback module:api/ContentApi~createContentMetadataAccessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentMetaGroupUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Content Metadata Access
     * ### Create content metadata access.\n
     * @param {Object} opts Optional parameters
     * @param {module:model/ContentMetaGroupUser} opts.body Content Metadata Access
     * @param {module:api/ContentApi~createContentMetadataAccessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContentMetaGroupUser}
     */
    this.createContentMetadataAccess = function(opts, callback) {
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
      var returnType = ContentMetaGroupUser;

      return this.apiClient.callApi(
        '/content_metadata_access', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteContentFavorite operation.
     * @callback module:api/ContentApi~deleteContentFavoriteCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Favorite Content
     * ### Delete favorite content
     * @param {Integer} contentFavoriteId Id of favorite content
     * @param {module:api/ContentApi~deleteContentFavoriteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteContentFavorite = function(contentFavoriteId, callback) {
      var postBody = null;

      // verify the required parameter 'contentFavoriteId' is set
      if (contentFavoriteId == undefined || contentFavoriteId == null) {
        throw "Missing the required parameter 'contentFavoriteId' when calling deleteContentFavorite";
      }


      var pathParams = {
        'content_favorite_id': contentFavoriteId
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
        '/content_favorite/{content_favorite_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteContentMetadataAccess operation.
     * @callback module:api/ContentApi~deleteContentMetadataAccessCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Content Metadata Access
     * ### Remove content metadata access.\n
     * @param {Integer} contentMetadataAccessId Id of content metadata access
     * @param {module:api/ContentApi~deleteContentMetadataAccessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteContentMetadataAccess = function(contentMetadataAccessId, callback) {
      var postBody = null;

      // verify the required parameter 'contentMetadataAccessId' is set
      if (contentMetadataAccessId == undefined || contentMetadataAccessId == null) {
        throw "Missing the required parameter 'contentMetadataAccessId' when calling deleteContentMetadataAccess";
      }


      var pathParams = {
        'content_metadata_access_id': contentMetadataAccessId
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
        '/content_metadata_access/{content_metadata_access_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchContentFavorites operation.
     * @callback module:api/ContentApi~searchContentFavoritesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ContentFavorite>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Favorite Contents
     * ### Search Favorite Content\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.userId Match User Id
     * @param {Integer} opts.limit Number of results to return. (used with offset)
     * @param {Integer} opts.offset Number of results to skip before returning any. (used with limit)
     * @param {String} opts.sorts Fields to sort by.
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ContentApi~searchContentFavoritesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ContentFavorite>}
     */
    this.searchContentFavorites = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'user_id': opts['userId'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sorts': opts['sorts'],
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ContentFavorite];

      return this.apiClient.callApi(
        '/content_favorite/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchContentViews operation.
     * @callback module:api/ContentApi~searchContentViewsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ContentView>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Content Views
     * ### Search Content View\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.viewCount Match view count
     * @param {Integer} opts.groupId Match Group Id
     * @param {String} opts.contentType Type of content to report on
     * @param {Integer} opts.limit Number of results to return. Use with `offset` to manage pagination of results
     * @param {Integer} opts.offset Number of results to skip before returning data
     * @param {Integer} opts.userId Match user id
     * @param {String} opts.sorts Fields to sort by
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ContentApi~searchContentViewsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ContentView>}
     */
    this.searchContentViews = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'view_count': opts['viewCount'],
        'group_id': opts['groupId'],
        'content_type': opts['contentType'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'user_id': opts['userId'],
        'sorts': opts['sorts'],
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ContentView];

      return this.apiClient.callApi(
        '/content_view/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateContentMetadata operation.
     * @callback module:api/ContentApi~updateContentMetadataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentMeta} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Content Metadata
     * ### Move a piece of content.\n
     * @param {Integer} contentMetadataId Id of content metadata
     * @param {module:model/ContentMeta} body Content Metadata
     * @param {module:api/ContentApi~updateContentMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContentMeta}
     */
    this.updateContentMetadata = function(contentMetadataId, body, callback) {
      var postBody = body;

      // verify the required parameter 'contentMetadataId' is set
      if (contentMetadataId == undefined || contentMetadataId == null) {
        throw "Missing the required parameter 'contentMetadataId' when calling updateContentMetadata";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateContentMetadata";
      }


      var pathParams = {
        'content_metadata_id': contentMetadataId
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
      var returnType = ContentMeta;

      return this.apiClient.callApi(
        '/content_metadata/{content_metadata_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateContentMetadataAccess operation.
     * @callback module:api/ContentApi~updateContentMetadataAccessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentMetaGroupUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Content Metadata Access
     * ### Update type of access for content metadata.\n
     * @param {Integer} contentMetadataAccessId Id of content metadata access
     * @param {module:model/ContentMetaGroupUser} body Content Metadata Access
     * @param {module:api/ContentApi~updateContentMetadataAccessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContentMetaGroupUser}
     */
    this.updateContentMetadataAccess = function(contentMetadataAccessId, body, callback) {
      var postBody = body;

      // verify the required parameter 'contentMetadataAccessId' is set
      if (contentMetadataAccessId == undefined || contentMetadataAccessId == null) {
        throw "Missing the required parameter 'contentMetadataAccessId' when calling updateContentMetadataAccess";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateContentMetadataAccess";
      }


      var pathParams = {
        'content_metadata_access_id': contentMetadataAccessId
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
      var returnType = ContentMetaGroupUser;

      return this.apiClient.callApi(
        '/content_metadata_access/{content_metadata_access_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
