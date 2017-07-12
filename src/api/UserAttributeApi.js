(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/UserAttributeGroupValue', '../model/UserAttribute', '../model/ValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/UserAttributeGroupValue'), require('../model/UserAttribute'), require('../model/ValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.UserAttributeApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.Error, root.LookerApi30Reference.UserAttributeGroupValue, root.LookerApi30Reference.UserAttribute, root.LookerApi30Reference.ValidationError);
  }
}(this, function(ApiClient, Error, UserAttributeGroupValue, UserAttribute, ValidationError) {
  'use strict';

  /**
   * UserAttribute service.
   * @module api/UserAttributeApi
   * @version 3.0.0
   */

  /**
   * Constructs a new UserAttributeApi. 
   * @alias module:api/UserAttributeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allUserAttributeGroupValues operation.
     * @callback module:api/UserAttributeApi~allUserAttributeGroupValuesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserAttributeGroupValue>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User Attribute Group Values
     * ### Returns all values of a user attribute defined by user groups, in precedence order.\n\nA user may be a member of multiple groups which define different values for a given user attribute.\nThe order of group-values in the response determines precedence for selecting which group-value applies\nto a given user.  For more information, see [Set User Attribute Group Values](#!/UserAttribute/set_user_attribute_group_values).\n\nResults will only include groups that the caller&#39;s user account has permission to see.\n
     * @param {Integer} userAttributeId Id of user attribute
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserAttributeApi~allUserAttributeGroupValuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/UserAttributeGroupValue>}
     */
    this.allUserAttributeGroupValues = function(userAttributeId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userAttributeId' is set
      if (userAttributeId == undefined || userAttributeId == null) {
        throw "Missing the required parameter 'userAttributeId' when calling allUserAttributeGroupValues";
      }


      var pathParams = {
        'user_attribute_id': userAttributeId
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
      var returnType = [UserAttributeGroupValue];

      return this.apiClient.callApi(
        '/user_attributes/{user_attribute_id}/group_values', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allUserAttributes operation.
     * @callback module:api/UserAttributeApi~allUserAttributesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserAttribute>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All User Attributes
     * ### Get information about all user attributes.\n
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {String} opts.sorts Fields to sort by.
     * @param {module:api/UserAttributeApi~allUserAttributesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/UserAttribute>}
     */
    this.allUserAttributes = function(opts, callback) {
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
      var returnType = [UserAttribute];

      return this.apiClient.callApi(
        '/user_attributes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createUserAttribute operation.
     * @callback module:api/UserAttributeApi~createUserAttributeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserAttribute} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create User Attribute
     * ### Create a new user attribute.\n
     * @param {Object} opts Optional parameters
     * @param {module:model/UserAttribute} opts.body User Attribute
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserAttributeApi~createUserAttributeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserAttribute}
     */
    this.createUserAttribute = function(opts, callback) {
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
      var returnType = UserAttribute;

      return this.apiClient.callApi(
        '/user_attributes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserAttribute operation.
     * @callback module:api/UserAttributeApi~deleteUserAttributeCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete User Attribute
     * ### Delete a user attribute (admin only).\n
     * @param {Integer} userAttributeId Id of user_attribute
     * @param {module:api/UserAttributeApi~deleteUserAttributeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteUserAttribute = function(userAttributeId, callback) {
      var postBody = null;

      // verify the required parameter 'userAttributeId' is set
      if (userAttributeId == undefined || userAttributeId == null) {
        throw "Missing the required parameter 'userAttributeId' when calling deleteUserAttribute";
      }


      var pathParams = {
        'user_attribute_id': userAttributeId
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
        '/user_attributes/{user_attribute_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setUserAttributeGroupValues operation.
     * @callback module:api/UserAttributeApi~setUserAttributeGroupValuesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserAttributeGroupValue>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set User Attribute Group Values
     * ### Define values for a user attribute across a set of groups, in priority order.\n\nThis function defines all values for a user attribute defined by user groups. This is a global setting, potentially affecting\nall users in the system. This function replaces any existing group value definitions for the indicated user attribute.\n\nThe value of a user attribute for a given user is determined by searching the following locations, in this order:\n\n1. the user&#39;s account settings\n2. the groups that the user is a member of\n3. the default value of the user attribute, if any\n\nThe user may be a member of multiple groups which define different values for that user attribute. The order of items in the group_values parameter\ndetermines which group takes priority for that user. Lowest array index wins.\n\nAn alternate method to indicate the selection precedence of group-values is to assign numbers to the &#39;rank&#39; property of each\ngroup-value object in the array. Lowest &#39;rank&#39; value wins. If you use this technique, you must assign a\nrank value to every group-value object in the array.\n\nTo set a user attribute value for a single user, see [Set User Attribute Value](#!/User/set_user_attribute_user_value).\nTo set a user attribute value for all members of a group, see [Set User Attribute Group Value](#!/Group/update_user_attribute_group_value)\n
     * @param {Integer} userAttributeId Id of user attribute
     * @param {Array.<module:model/UserAttributeGroupValue>} body Array of group values.
     * @param {module:api/UserAttributeApi~setUserAttributeGroupValuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/UserAttributeGroupValue>}
     */
    this.setUserAttributeGroupValues = function(userAttributeId, body, callback) {
      var postBody = body;

      // verify the required parameter 'userAttributeId' is set
      if (userAttributeId == undefined || userAttributeId == null) {
        throw "Missing the required parameter 'userAttributeId' when calling setUserAttributeGroupValues";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling setUserAttributeGroupValues";
      }


      var pathParams = {
        'user_attribute_id': userAttributeId
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
      var returnType = [UserAttributeGroupValue];

      return this.apiClient.callApi(
        '/user_attributes/{user_attribute_id}/group_values', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserAttribute operation.
     * @callback module:api/UserAttributeApi~updateUserAttributeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserAttribute} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update User Attribute
     * ### Update a user attribute definition.\n
     * @param {Integer} userAttributeId Id of user attribute
     * @param {module:model/UserAttribute} body User Attribute
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserAttributeApi~updateUserAttributeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserAttribute}
     */
    this.updateUserAttribute = function(userAttributeId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'userAttributeId' is set
      if (userAttributeId == undefined || userAttributeId == null) {
        throw "Missing the required parameter 'userAttributeId' when calling updateUserAttribute";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateUserAttribute";
      }


      var pathParams = {
        'user_attribute_id': userAttributeId
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
      var returnType = UserAttribute;

      return this.apiClient.callApi(
        '/user_attributes/{user_attribute_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userAttribute operation.
     * @callback module:api/UserAttributeApi~userAttributeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserAttribute} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User Attribute
     * ### Get information about a user attribute.\n
     * @param {Integer} userAttributeId Id of user attribute
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserAttributeApi~userAttributeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserAttribute}
     */
    this.userAttribute = function(userAttributeId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userAttributeId' is set
      if (userAttributeId == undefined || userAttributeId == null) {
        throw "Missing the required parameter 'userAttributeId' when calling userAttribute";
      }


      var pathParams = {
        'user_attribute_id': userAttributeId
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
      var returnType = UserAttribute;

      return this.apiClient.callApi(
        '/user_attributes/{user_attribute_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
