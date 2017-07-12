(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Group', '../model/GroupIdForGroupInclusion', '../model/Error', '../model/User', '../model/GroupIdForGroupUserInclusion', '../model/ValidationError', '../model/UserAttributeGroupValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Group'), require('../model/GroupIdForGroupInclusion'), require('../model/Error'), require('../model/User'), require('../model/GroupIdForGroupUserInclusion'), require('../model/ValidationError'), require('../model/UserAttributeGroupValue'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.GroupApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.Group, root.LookerApi30Reference.GroupIdForGroupInclusion, root.LookerApi30Reference.Error, root.LookerApi30Reference.User, root.LookerApi30Reference.GroupIdForGroupUserInclusion, root.LookerApi30Reference.ValidationError, root.LookerApi30Reference.UserAttributeGroupValue);
  }
}(this, function(ApiClient, Group, GroupIdForGroupInclusion, Error, User, GroupIdForGroupUserInclusion, ValidationError, UserAttributeGroupValue) {
  'use strict';

  /**
   * Group service.
   * @module api/GroupApi
   * @version 3.0.0
   */

  /**
   * Constructs a new GroupApi. 
   * @alias module:api/GroupApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addGroupGroup operation.
     * @callback module:api/GroupApi~addGroupGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a Group to Group
     * ### Adds a new group to a group.\n
     * @param {Integer} groupId Id of group
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupIdForGroupInclusion} opts.body Group id to add
     * @param {module:api/GroupApi~addGroupGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Group}
     */
    this.addGroupGroup = function(groupId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling addGroupGroup";
      }


      var pathParams = {
        'group_id': groupId
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
      var returnType = Group;

      return this.apiClient.callApi(
        '/groups/{group_id}/groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addGroupUser operation.
     * @callback module:api/GroupApi~addGroupUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a User to Group
     * ### Adds a new user to a group.\n
     * @param {Integer} groupId Id of group
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupIdForGroupUserInclusion} opts.body User id to add
     * @param {module:api/GroupApi~addGroupUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/User}
     */
    this.addGroupUser = function(groupId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling addGroupUser";
      }


      var pathParams = {
        'group_id': groupId
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
      var returnType = User;

      return this.apiClient.callApi(
        '/groups/{group_id}/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allGroupGroups operation.
     * @callback module:api/GroupApi~allGroupGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Group>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Groups in Group
     * ### Get information about all the groups in a group\n
     * @param {Integer} groupId Id of group
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/GroupApi~allGroupGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Group>}
     */
    this.allGroupGroups = function(groupId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling allGroupGroups";
      }


      var pathParams = {
        'group_id': groupId
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
      var returnType = [Group];

      return this.apiClient.callApi(
        '/groups/{group_id}/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allGroupUsers operation.
     * @callback module:api/GroupApi~allGroupUsersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Users in Group
     * ### Get information about all the users directly included in a group.\n
     * @param {Integer} groupId Id of group
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {Integer} opts.page Requested page.
     * @param {Integer} opts.perPage Results per page.
     * @param {String} opts.sorts Fields to sort by.
     * @param {module:api/GroupApi~allGroupUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/User>}
     */
    this.allGroupUsers = function(groupId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling allGroupUsers";
      }


      var pathParams = {
        'group_id': groupId
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
      var returnType = [User];

      return this.apiClient.callApi(
        '/groups/{group_id}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allGroups operation.
     * @callback module:api/GroupApi~allGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Group>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Groups
     * ### Get information about all groups.\n
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {Integer} opts.page Requested page.
     * @param {Integer} opts.perPage Results per page.
     * @param {String} opts.sorts Fields to sort by.
     * @param {Array.<Integer>} opts.ids Optional of ids to get specific groups.
     * @param {Integer} opts.contentMetadataId Id of content metadata to which groups must have access.
     * @param {Boolean} opts.canAddToContentMetadata Select only groups that either can/cannot be given access to content.
     * @param {module:api/GroupApi~allGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Group>}
     */
    this.allGroups = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'fields': opts['fields'],
        'page': opts['page'],
        'per_page': opts['perPage'],
        'sorts': opts['sorts'],
        'ids': this.apiClient.buildCollectionParam(opts['ids'], 'csv'),
        'content_metadata_id': opts['contentMetadataId'],
        'can_add_to_content_metadata': opts['canAddToContentMetadata']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Group];

      return this.apiClient.callApi(
        '/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createGroup operation.
     * @callback module:api/GroupApi~createGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Group
     * ### Creates a new group (admin only).\n
     * @param {Object} opts Optional parameters
     * @param {module:model/Group} opts.body Group
     * @param {String} opts.fields Requested fields.
     * @param {module:api/GroupApi~createGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Group}
     */
    this.createGroup = function(opts, callback) {
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
      var returnType = Group;

      return this.apiClient.callApi(
        '/groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGroup operation.
     * @callback module:api/GroupApi~deleteGroupCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Group
     * ### Deletes a group (admin only).\n
     * @param {Integer} groupId Id of group
     * @param {module:api/GroupApi~deleteGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteGroup = function(groupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling deleteGroup";
      }


      var pathParams = {
        'group_id': groupId
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
        '/groups/{group_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGroupFromGroup operation.
     * @callback module:api/GroupApi~deleteGroupFromGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a Group from Group
     * ### Removes a group from a group.\n
     * @param {Integer} groupId Id of group
     * @param {Integer} deletingGroupId Id of group to delete
     * @param {module:api/GroupApi~deleteGroupFromGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroupFromGroup = function(groupId, deletingGroupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling deleteGroupFromGroup";
      }

      // verify the required parameter 'deletingGroupId' is set
      if (deletingGroupId == undefined || deletingGroupId == null) {
        throw "Missing the required parameter 'deletingGroupId' when calling deleteGroupFromGroup";
      }


      var pathParams = {
        'group_id': groupId,
        'deleting_group_id': deletingGroupId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/groups/{group_id}/groups/{deleting_group_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGroupUser operation.
     * @callback module:api/GroupApi~deleteGroupUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a User from Group
     * ### Removes a user from a group.\n
     * @param {Integer} groupId Id of group
     * @param {Integer} userId Id of user to remove from group
     * @param {module:api/GroupApi~deleteGroupUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroupUser = function(groupId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling deleteGroupUser";
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteGroupUser";
      }


      var pathParams = {
        'group_id': groupId,
        'user_id': userId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/groups/{group_id}/users/{user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserAttributeGroupValue operation.
     * @callback module:api/GroupApi~deleteUserAttributeGroupValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete User Attribute Group Value
     * ### Remove a user attribute value from a group.\n
     * @param {Integer} groupId Id of group
     * @param {Integer} userAttributeId Id of user attribute
     * @param {module:api/GroupApi~deleteUserAttributeGroupValueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUserAttributeGroupValue = function(groupId, userAttributeId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling deleteUserAttributeGroupValue";
      }

      // verify the required parameter 'userAttributeId' is set
      if (userAttributeId == undefined || userAttributeId == null) {
        throw "Missing the required parameter 'userAttributeId' when calling deleteUserAttributeGroupValue";
      }


      var pathParams = {
        'group_id': groupId,
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
      var returnType = null;

      return this.apiClient.callApi(
        '/groups/{group_id}/attribute_values/{user_attribute_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the group operation.
     * @callback module:api/GroupApi~groupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Group
     * ### Get information about a group.\n
     * @param {Integer} groupId Id of group
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/GroupApi~groupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Group}
     */
    this.group = function(groupId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling group";
      }


      var pathParams = {
        'group_id': groupId
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
      var returnType = Group;

      return this.apiClient.callApi(
        '/groups/{group_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGroup operation.
     * @callback module:api/GroupApi~updateGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Group
     * ### Updates the a group (admin only).
     * @param {Integer} groupId Id of group
     * @param {module:model/Group} body Group
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/GroupApi~updateGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Group}
     */
    this.updateGroup = function(groupId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling updateGroup";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateGroup";
      }


      var pathParams = {
        'group_id': groupId
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
      var returnType = Group;

      return this.apiClient.callApi(
        '/groups/{group_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserAttributeGroupValue operation.
     * @callback module:api/GroupApi~updateUserAttributeGroupValueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserAttributeGroupValue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set User Attribute Group Value
     * ### Set the value of a user attribute for a group.\n\nFor information about how user attribute values are calculated, see [Set User Attribute Group Values](#!/UserAttribute/set_user_attribute_group_values).\n
     * @param {Integer} groupId Id of group
     * @param {Integer} userAttributeId Id of user attribute
     * @param {module:model/UserAttributeGroupValue} body New value for group.
     * @param {module:api/GroupApi~updateUserAttributeGroupValueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserAttributeGroupValue}
     */
    this.updateUserAttributeGroupValue = function(groupId, userAttributeId, body, callback) {
      var postBody = body;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling updateUserAttributeGroupValue";
      }

      // verify the required parameter 'userAttributeId' is set
      if (userAttributeId == undefined || userAttributeId == null) {
        throw "Missing the required parameter 'userAttributeId' when calling updateUserAttributeGroupValue";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateUserAttributeGroupValue";
      }


      var pathParams = {
        'group_id': groupId,
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
      var returnType = UserAttributeGroupValue;

      return this.apiClient.callApi(
        '/groups/{group_id}/attribute_values/{user_attribute_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
