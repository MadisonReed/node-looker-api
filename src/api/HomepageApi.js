(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/HomepageItem', '../model/HomepageSection', '../model/ValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/HomepageItem'), require('../model/HomepageSection'), require('../model/ValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.HomepageApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.Error, root.LookerApi30Reference.HomepageItem, root.LookerApi30Reference.HomepageSection, root.LookerApi30Reference.ValidationError);
  }
}(this, function(ApiClient, Error, HomepageItem, HomepageSection, ValidationError) {
  'use strict';

  /**
   * Homepage service.
   * @module api/HomepageApi
   * @version 3.0.0
   */

  /**
   * Constructs a new HomepageApi. 
   * @alias module:api/HomepageApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allHomepageItems operation.
     * @callback module:api/HomepageApi~allHomepageItemsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/HomepageItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Homepage Items
     * ### Get information about all homepage items.\n
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {String} opts.sorts Fields to sort by.
     * @param {String} opts.homepageSectionId Filter to a specific homepage section
     * @param {module:api/HomepageApi~allHomepageItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/HomepageItem>}
     */
    this.allHomepageItems = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'fields': opts['fields'],
        'sorts': opts['sorts'],
        'homepage_section_id': opts['homepageSectionId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [HomepageItem];

      return this.apiClient.callApi(
        '/homepage_items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allHomepageSections operation.
     * @callback module:api/HomepageApi~allHomepageSectionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/HomepageSection>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Homepage sections
     * ### Get information about all homepage sections.\n
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {String} opts.sorts Fields to sort by.
     * @param {module:api/HomepageApi~allHomepageSectionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/HomepageSection>}
     */
    this.allHomepageSections = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'fields': opts['fields'],
        'sorts': opts['sorts']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [HomepageSection];

      return this.apiClient.callApi(
        '/homepage_sections', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createHomepageItem operation.
     * @callback module:api/HomepageApi~createHomepageItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HomepageItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Homepage Item
     * ### Create a new homepage item.\n
     * @param {Object} opts Optional parameters
     * @param {module:model/HomepageItem} opts.body Homepage Item
     * @param {String} opts.fields Requested fields.
     * @param {module:api/HomepageApi~createHomepageItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/HomepageItem}
     */
    this.createHomepageItem = function(opts, callback) {
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
      var returnType = HomepageItem;

      return this.apiClient.callApi(
        '/homepage_items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createHomepageSection operation.
     * @callback module:api/HomepageApi~createHomepageSectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HomepageSection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Homepage section
     * ### Create a new homepage section.\n
     * @param {Object} opts Optional parameters
     * @param {module:model/HomepageSection} opts.body Homepage section
     * @param {String} opts.fields Requested fields.
     * @param {module:api/HomepageApi~createHomepageSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/HomepageSection}
     */
    this.createHomepageSection = function(opts, callback) {
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
      var returnType = HomepageSection;

      return this.apiClient.callApi(
        '/homepage_sections', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteHomepageItem operation.
     * @callback module:api/HomepageApi~deleteHomepageItemCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Homepage Item
     * ### Delete a homepage item.\n
     * @param {Integer} homepageItemId Id of homepage_item
     * @param {module:api/HomepageApi~deleteHomepageItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteHomepageItem = function(homepageItemId, callback) {
      var postBody = null;

      // verify the required parameter 'homepageItemId' is set
      if (homepageItemId == undefined || homepageItemId == null) {
        throw "Missing the required parameter 'homepageItemId' when calling deleteHomepageItem";
      }


      var pathParams = {
        'homepage_item_id': homepageItemId
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
        '/homepage_items/{homepage_item_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteHomepageSection operation.
     * @callback module:api/HomepageApi~deleteHomepageSectionCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Homepage section
     * ### Delete a homepage section.\n
     * @param {Integer} homepageSectionId Id of homepage_section
     * @param {module:api/HomepageApi~deleteHomepageSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteHomepageSection = function(homepageSectionId, callback) {
      var postBody = null;

      // verify the required parameter 'homepageSectionId' is set
      if (homepageSectionId == undefined || homepageSectionId == null) {
        throw "Missing the required parameter 'homepageSectionId' when calling deleteHomepageSection";
      }


      var pathParams = {
        'homepage_section_id': homepageSectionId
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
        '/homepage_sections/{homepage_section_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the homepageItem operation.
     * @callback module:api/HomepageApi~homepageItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HomepageItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Homepage Item
     * ### Get information about a homepage item.\n
     * @param {Integer} homepageItemId Id of homepage item
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/HomepageApi~homepageItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/HomepageItem}
     */
    this.homepageItem = function(homepageItemId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'homepageItemId' is set
      if (homepageItemId == undefined || homepageItemId == null) {
        throw "Missing the required parameter 'homepageItemId' when calling homepageItem";
      }


      var pathParams = {
        'homepage_item_id': homepageItemId
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
      var returnType = HomepageItem;

      return this.apiClient.callApi(
        '/homepage_items/{homepage_item_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the homepageSection operation.
     * @callback module:api/HomepageApi~homepageSectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HomepageSection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Homepage section
     * ### Get information about a homepage section.\n
     * @param {Integer} homepageSectionId Id of homepage section
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/HomepageApi~homepageSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/HomepageSection}
     */
    this.homepageSection = function(homepageSectionId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'homepageSectionId' is set
      if (homepageSectionId == undefined || homepageSectionId == null) {
        throw "Missing the required parameter 'homepageSectionId' when calling homepageSection";
      }


      var pathParams = {
        'homepage_section_id': homepageSectionId
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
      var returnType = HomepageSection;

      return this.apiClient.callApi(
        '/homepage_sections/{homepage_section_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateHomepageItem operation.
     * @callback module:api/HomepageApi~updateHomepageItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HomepageItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Homepage Item
     * ### Update a homepage item definition.\n
     * @param {Integer} homepageItemId Id of homepage item
     * @param {module:model/HomepageItem} body Homepage Item
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/HomepageApi~updateHomepageItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/HomepageItem}
     */
    this.updateHomepageItem = function(homepageItemId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'homepageItemId' is set
      if (homepageItemId == undefined || homepageItemId == null) {
        throw "Missing the required parameter 'homepageItemId' when calling updateHomepageItem";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateHomepageItem";
      }


      var pathParams = {
        'homepage_item_id': homepageItemId
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
      var returnType = HomepageItem;

      return this.apiClient.callApi(
        '/homepage_items/{homepage_item_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateHomepageSection operation.
     * @callback module:api/HomepageApi~updateHomepageSectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HomepageSection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Homepage section
     * ### Update a homepage section definition.\n
     * @param {Integer} homepageSectionId Id of homepage section
     * @param {module:model/HomepageSection} body Homepage section
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/HomepageApi~updateHomepageSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/HomepageSection}
     */
    this.updateHomepageSection = function(homepageSectionId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'homepageSectionId' is set
      if (homepageSectionId == undefined || homepageSectionId == null) {
        throw "Missing the required parameter 'homepageSectionId' when calling updateHomepageSection";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateHomepageSection";
      }


      var pathParams = {
        'homepage_section_id': homepageSectionId
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
      var returnType = HomepageSection;

      return this.apiClient.callApi(
        '/homepage_sections/{homepage_section_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
