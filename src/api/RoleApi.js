(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/ModelSet', '../model/PermissionSet', '../model/Permission', '../model/Role', '../model/ValidationError', '../model/Group', '../model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/ModelSet'), require('../model/PermissionSet'), require('../model/Permission'), require('../model/Role'), require('../model/ValidationError'), require('../model/Group'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.RoleApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.Error, root.LookerApi30Reference.ModelSet, root.LookerApi30Reference.PermissionSet, root.LookerApi30Reference.Permission, root.LookerApi30Reference.Role, root.LookerApi30Reference.ValidationError, root.LookerApi30Reference.Group, root.LookerApi30Reference.User);
  }
}(this, function(ApiClient, Error, ModelSet, PermissionSet, Permission, Role, ValidationError, Group, User) {
  'use strict';

  /**
   * Role service.
   * @module api/RoleApi
   * @version 3.0.0
   */

  /**
   * Constructs a new RoleApi. 
   * @alias module:api/RoleApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allModelSets operation.
     * @callback module:api/RoleApi~allModelSetsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelSet>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Model Sets
     * ### Get information about all model sets.\n
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/RoleApi~allModelSetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ModelSet>}
     */
    this.allModelSets = function(opts, callback) {
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
      var returnType = [ModelSet];

      return this.apiClient.callApi(
        '/model_sets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allPermissionSets operation.
     * @callback module:api/RoleApi~allPermissionSetsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PermissionSet>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Permission Sets
     * ### Get information about all permission sets.\n
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/RoleApi~allPermissionSetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/PermissionSet>}
     */
    this.allPermissionSets = function(opts, callback) {
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
      var returnType = [PermissionSet];

      return this.apiClient.callApi(
        '/permission_sets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allPermissions operation.
     * @callback module:api/RoleApi~allPermissionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Permission>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Permissions
     * ### Get all supported permissions.\n
     * @param {module:api/RoleApi~allPermissionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Permission>}
     */
    this.allPermissions = function(callback) {
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
      var returnType = [Permission];

      return this.apiClient.callApi(
        '/permissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allRoles operation.
     * @callback module:api/RoleApi~allRolesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Role>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Roles
     * ### Get information about all roles.\n
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {Array.<Integer>} opts.ids Optional list of ids to get specific roles.
     * @param {module:api/RoleApi~allRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Role>}
     */
    this.allRoles = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'fields': opts['fields'],
        'ids': this.apiClient.buildCollectionParam(opts['ids'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Role];

      return this.apiClient.callApi(
        '/roles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createModelSet operation.
     * @callback module:api/RoleApi~createModelSetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelSet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Model Set
     * ### Create a model set with the specified information. Model sets are used by Roles.\n
     * @param {Object} opts Optional parameters
     * @param {module:model/ModelSet} opts.body ModelSet
     * @param {module:api/RoleApi~createModelSetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ModelSet}
     */
    this.createModelSet = function(opts, callback) {
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
      var returnType = ModelSet;

      return this.apiClient.callApi(
        '/model_sets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createPermissionSet operation.
     * @callback module:api/RoleApi~createPermissionSetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionSet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Permission Set
     * ### Create a permission set with the specified information. Permission sets are used by Roles.\n
     * @param {Object} opts Optional parameters
     * @param {module:model/PermissionSet} opts.body Permission Set
     * @param {module:api/RoleApi~createPermissionSetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PermissionSet}
     */
    this.createPermissionSet = function(opts, callback) {
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
      var returnType = PermissionSet;

      return this.apiClient.callApi(
        '/permission_sets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createRole operation.
     * @callback module:api/RoleApi~createRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Role} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Role
     * ### Create a role with the specified information.\n
     * @param {Object} opts Optional parameters
     * @param {module:model/Role} opts.body Role
     * @param {module:api/RoleApi~createRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Role}
     */
    this.createRole = function(opts, callback) {
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
      var returnType = Role;

      return this.apiClient.callApi(
        '/roles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteModelSet operation.
     * @callback module:api/RoleApi~deleteModelSetCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Model Set
     * ### Delete the model set with a specific id.\n
     * @param {Integer} modelSetId id of model set
     * @param {module:api/RoleApi~deleteModelSetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteModelSet = function(modelSetId, callback) {
      var postBody = null;

      // verify the required parameter 'modelSetId' is set
      if (modelSetId == undefined || modelSetId == null) {
        throw "Missing the required parameter 'modelSetId' when calling deleteModelSet";
      }


      var pathParams = {
        'model_set_id': modelSetId
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
        '/model_sets/{model_set_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePermissionSet operation.
     * @callback module:api/RoleApi~deletePermissionSetCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Permission Set
     * ### Delete the permission set with a specific id.\n
     * @param {Integer} permissionSetId Id of permission set
     * @param {module:api/RoleApi~deletePermissionSetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deletePermissionSet = function(permissionSetId, callback) {
      var postBody = null;

      // verify the required parameter 'permissionSetId' is set
      if (permissionSetId == undefined || permissionSetId == null) {
        throw "Missing the required parameter 'permissionSetId' when calling deletePermissionSet";
      }


      var pathParams = {
        'permission_set_id': permissionSetId
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
        '/permission_sets/{permission_set_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRole operation.
     * @callback module:api/RoleApi~deleteRoleCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Role
     * ### Delete the role with a specific id.\n
     * @param {Integer} roleId id of role
     * @param {module:api/RoleApi~deleteRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteRole = function(roleId, callback) {
      var postBody = null;

      // verify the required parameter 'roleId' is set
      if (roleId == undefined || roleId == null) {
        throw "Missing the required parameter 'roleId' when calling deleteRole";
      }


      var pathParams = {
        'role_id': roleId
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
        '/roles/{role_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the modelSet operation.
     * @callback module:api/RoleApi~modelSetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelSet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Model Set
     * ### Get information about the model set with a specific id.\n
     * @param {Integer} modelSetId Id of model set
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/RoleApi~modelSetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ModelSet}
     */
    this.modelSet = function(modelSetId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'modelSetId' is set
      if (modelSetId == undefined || modelSetId == null) {
        throw "Missing the required parameter 'modelSetId' when calling modelSet";
      }


      var pathParams = {
        'model_set_id': modelSetId
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
      var returnType = ModelSet;

      return this.apiClient.callApi(
        '/model_sets/{model_set_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the permissionSet operation.
     * @callback module:api/RoleApi~permissionSetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionSet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Permission Set
     * ### Get information about the permission set with a specific id.\n
     * @param {Integer} permissionSetId Id of permission set
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/RoleApi~permissionSetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PermissionSet}
     */
    this.permissionSet = function(permissionSetId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'permissionSetId' is set
      if (permissionSetId == undefined || permissionSetId == null) {
        throw "Missing the required parameter 'permissionSetId' when calling permissionSet";
      }


      var pathParams = {
        'permission_set_id': permissionSetId
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
      var returnType = PermissionSet;

      return this.apiClient.callApi(
        '/permission_sets/{permission_set_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the role operation.
     * @callback module:api/RoleApi~roleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Role} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Role
     * ### Get information about the role with a specific id.\n
     * @param {Integer} roleId id of role
     * @param {module:api/RoleApi~roleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Role}
     */
    this.role = function(roleId, callback) {
      var postBody = null;

      // verify the required parameter 'roleId' is set
      if (roleId == undefined || roleId == null) {
        throw "Missing the required parameter 'roleId' when calling role";
      }


      var pathParams = {
        'role_id': roleId
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
      var returnType = Role;

      return this.apiClient.callApi(
        '/roles/{role_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the roleGroups operation.
     * @callback module:api/RoleApi~roleGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Group>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Role Groups
     * ### Get information about all the groups with the role that has a specific id.\n
     * @param {Integer} roleId id of role
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/RoleApi~roleGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Group>}
     */
    this.roleGroups = function(roleId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'roleId' is set
      if (roleId == undefined || roleId == null) {
        throw "Missing the required parameter 'roleId' when calling roleGroups";
      }


      var pathParams = {
        'role_id': roleId
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
        '/roles/{role_id}/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the roleUsers operation.
     * @callback module:api/RoleApi~roleUsersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Role Users
     * ### Get information about all the users with the role that has a specific id.\n
     * @param {Integer} roleId id of user
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {Boolean} opts.directAssociationOnly Get only users associated directly with the role: exclude those only associated through groups.
     * @param {module:api/RoleApi~roleUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/User>}
     */
    this.roleUsers = function(roleId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'roleId' is set
      if (roleId == undefined || roleId == null) {
        throw "Missing the required parameter 'roleId' when calling roleUsers";
      }


      var pathParams = {
        'role_id': roleId
      };
      var queryParams = {
        'fields': opts['fields'],
        'direct_association_only': opts['directAssociationOnly']
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
        '/roles/{role_id}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setRoleGroups operation.
     * @callback module:api/RoleApi~setRoleGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Group>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Role Groups
     * ### Set all groups for a role, removing all existing group associations from that role.\n
     * @param {Integer} roleId Id of Role
     * @param {Array.<module:model/Integer>} body Array of Group Ids
     * @param {module:api/RoleApi~setRoleGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Group>}
     */
    this.setRoleGroups = function(roleId, body, callback) {
      var postBody = body;

      // verify the required parameter 'roleId' is set
      if (roleId == undefined || roleId == null) {
        throw "Missing the required parameter 'roleId' when calling setRoleGroups";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling setRoleGroups";
      }


      var pathParams = {
        'role_id': roleId
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
      var returnType = [Group];

      return this.apiClient.callApi(
        '/roles/{role_id}/groups', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setRoleUsers operation.
     * @callback module:api/RoleApi~setRoleUsersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Role Users
     * ### Set all the users of the role with a specific id.\n
     * @param {Integer} roleId id of role
     * @param {Array.<module:model/Integer>} body array of user ids for role
     * @param {module:api/RoleApi~setRoleUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/User>}
     */
    this.setRoleUsers = function(roleId, body, callback) {
      var postBody = body;

      // verify the required parameter 'roleId' is set
      if (roleId == undefined || roleId == null) {
        throw "Missing the required parameter 'roleId' when calling setRoleUsers";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling setRoleUsers";
      }


      var pathParams = {
        'role_id': roleId
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
      var returnType = [User];

      return this.apiClient.callApi(
        '/roles/{role_id}/users', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateModelSet operation.
     * @callback module:api/RoleApi~updateModelSetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelSet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Model Set
     * ### Update information about the model set with a specific id.\n
     * @param {Integer} modelSetId id of model set
     * @param {module:model/ModelSet} body ModelSet
     * @param {module:api/RoleApi~updateModelSetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ModelSet}
     */
    this.updateModelSet = function(modelSetId, body, callback) {
      var postBody = body;

      // verify the required parameter 'modelSetId' is set
      if (modelSetId == undefined || modelSetId == null) {
        throw "Missing the required parameter 'modelSetId' when calling updateModelSet";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateModelSet";
      }


      var pathParams = {
        'model_set_id': modelSetId
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
      var returnType = ModelSet;

      return this.apiClient.callApi(
        '/model_sets/{model_set_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePermissionSet operation.
     * @callback module:api/RoleApi~updatePermissionSetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionSet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Permission Set
     * ### Update information about the permission set with a specific id.\n
     * @param {Integer} permissionSetId id of permission set
     * @param {module:model/PermissionSet} body Permission Set
     * @param {module:api/RoleApi~updatePermissionSetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PermissionSet}
     */
    this.updatePermissionSet = function(permissionSetId, body, callback) {
      var postBody = body;

      // verify the required parameter 'permissionSetId' is set
      if (permissionSetId == undefined || permissionSetId == null) {
        throw "Missing the required parameter 'permissionSetId' when calling updatePermissionSet";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updatePermissionSet";
      }


      var pathParams = {
        'permission_set_id': permissionSetId
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
      var returnType = PermissionSet;

      return this.apiClient.callApi(
        '/permission_sets/{permission_set_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRole operation.
     * @callback module:api/RoleApi~updateRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Role} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Role
     * ### Update information about the role with a specific id.\n
     * @param {Integer} roleId id of role
     * @param {module:model/Role} body Role
     * @param {module:api/RoleApi~updateRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Role}
     */
    this.updateRole = function(roleId, body, callback) {
      var postBody = body;

      // verify the required parameter 'roleId' is set
      if (roleId == undefined || roleId == null) {
        throw "Missing the required parameter 'roleId' when calling updateRole";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateRole";
      }


      var pathParams = {
        'role_id': roleId
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
      var returnType = Role;

      return this.apiClient.callApi(
        '/roles/{role_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
