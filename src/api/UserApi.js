(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AccessFilter', '../model/Error', '../model/CredentialsApi3', '../model/CredentialsEmbed', '../model/Session', '../model/User', '../model/ValidationError', '../model/CredentialsApi', '../model/CredentialsEmail', '../model/CredentialsTotp', '../model/UserAttributeWithValue', '../model/Role', '../model/CredentialsGoogle', '../model/CredentialsLDAP', '../model/CredentialsLookerOpenid', '../model/CredentialsSaml'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AccessFilter'), require('../model/Error'), require('../model/CredentialsApi3'), require('../model/CredentialsEmbed'), require('../model/Session'), require('../model/User'), require('../model/ValidationError'), require('../model/CredentialsApi'), require('../model/CredentialsEmail'), require('../model/CredentialsTotp'), require('../model/UserAttributeWithValue'), require('../model/Role'), require('../model/CredentialsGoogle'), require('../model/CredentialsLDAP'), require('../model/CredentialsLookerOpenid'), require('../model/CredentialsSaml'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.UserApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.AccessFilter, root.LookerApi30Reference.Error, root.LookerApi30Reference.CredentialsApi3, root.LookerApi30Reference.CredentialsEmbed, root.LookerApi30Reference.Session, root.LookerApi30Reference.User, root.LookerApi30Reference.ValidationError, root.LookerApi30Reference.CredentialsApi, root.LookerApi30Reference.CredentialsEmail, root.LookerApi30Reference.CredentialsTotp, root.LookerApi30Reference.UserAttributeWithValue, root.LookerApi30Reference.Role, root.LookerApi30Reference.CredentialsGoogle, root.LookerApi30Reference.CredentialsLDAP, root.LookerApi30Reference.CredentialsLookerOpenid, root.LookerApi30Reference.CredentialsSaml);
  }
}(this, function(ApiClient, AccessFilter, Error, CredentialsApi3, CredentialsEmbed, Session, User, ValidationError, CredentialsApi, CredentialsEmail, CredentialsTotp, UserAttributeWithValue, Role, CredentialsGoogle, CredentialsLDAP, CredentialsLookerOpenid, CredentialsSaml) {
  'use strict';

  /**
   * User service.
   * @module api/UserApi
   * @version 3.0.0
   */

  /**
   * Constructs a new UserApi. 
   * @alias module:api/UserApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allUserAccessFilters operation.
     * @callback module:api/UserApi~allUserAccessFiltersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AccessFilter>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Access Filters
     * ### Access filter for the specified user.
     * @param {Integer} userId id of user
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~allUserAccessFiltersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/AccessFilter>}
     */
    this.allUserAccessFilters = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling allUserAccessFilters";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = [AccessFilter];

      return this.apiClient.callApi(
        '/users/{user_id}/access_filters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allUserCredentialsApi3s operation.
     * @callback module:api/UserApi~allUserCredentialsApi3sCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CredentialsApi3>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All API 3 Credentials
     * ### API 3 login information for the specified user. This is for the newer API keys that can be added for any user.
     * @param {Integer} userId id of user
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~allUserCredentialsApi3sCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/CredentialsApi3>}
     */
    this.allUserCredentialsApi3s = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling allUserCredentialsApi3s";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = [CredentialsApi3];

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_api3', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allUserCredentialsEmbeds operation.
     * @callback module:api/UserApi~allUserCredentialsEmbedsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CredentialsEmbed>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Embedding Credentials
     * ### Embed login information for the specified user.
     * @param {Integer} userId id of user
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~allUserCredentialsEmbedsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/CredentialsEmbed>}
     */
    this.allUserCredentialsEmbeds = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling allUserCredentialsEmbeds";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = [CredentialsEmbed];

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_embed', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allUserSessions operation.
     * @callback module:api/UserApi~allUserSessionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Session>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Web Login Sessions
     * ### Web login session for the specified user.
     * @param {Integer} userId id of user
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~allUserSessionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Session>}
     */
    this.allUserSessions = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling allUserSessions";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = [Session];

      return this.apiClient.callApi(
        '/users/{user_id}/sessions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allUsers operation.
     * @callback module:api/UserApi~allUsersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Users
     * ### Get information about all users.\n
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {Integer} opts.page Requested page.
     * @param {Integer} opts.perPage Results per page.
     * @param {String} opts.sorts Fields to sort by.
     * @param {Array.<Integer>} opts.ids Optional list of ids to get specific users.
     * @param {module:api/UserApi~allUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/User>}
     */
    this.allUsers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'fields': opts['fields'],
        'page': opts['page'],
        'per_page': opts['perPage'],
        'sorts': opts['sorts'],
        'ids': this.apiClient.buildCollectionParam(opts['ids'], 'csv')
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
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createUser operation.
     * @callback module:api/UserApi~createUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create User
     * ### Create a user with the specified information.\n
     * @param {Object} opts Optional parameters
     * @param {module:model/User} opts.body User
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~createUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/User}
     */
    this.createUser = function(opts, callback) {
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
      var returnType = User;

      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createUserAccessFilter operation.
     * @callback module:api/UserApi~createUserAccessFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccessFilter} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Access Filter
     * ### Access filter for the specified user.
     * @param {Integer} userId id of user
     * @param {Object} opts Optional parameters
     * @param {module:model/AccessFilter} opts.body Access Filter
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~createUserAccessFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AccessFilter}
     */
    this.createUserAccessFilter = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling createUserAccessFilter";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = AccessFilter;

      return this.apiClient.callApi(
        '/users/{user_id}/access_filters', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createUserCredentialsApi operation.
     * @callback module:api/UserApi~createUserCredentialsApiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialsApi} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create API Credential
     * ### API login information for the specified user. This is for &#39;API Users&#39; used for the &#39;old&#39; query API.
     * @param {Integer} userId id of user
     * @param {Object} opts Optional parameters
     * @param {module:model/CredentialsApi} opts.body API Credential
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~createUserCredentialsApiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CredentialsApi}
     */
    this.createUserCredentialsApi = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling createUserCredentialsApi";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = CredentialsApi;

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_api', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createUserCredentialsApi3 operation.
     * @callback module:api/UserApi~createUserCredentialsApi3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialsApi3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create API 3 Credential
     * ### API 3 login information for the specified user. This is for the newer API keys that can be added for any user.
     * @param {Integer} userId id of user
     * @param {Object} opts Optional parameters
     * @param {module:model/CredentialsApi3} opts.body API 3 Credential
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~createUserCredentialsApi3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CredentialsApi3}
     */
    this.createUserCredentialsApi3 = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling createUserCredentialsApi3";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = CredentialsApi3;

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_api3', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createUserCredentialsEmail operation.
     * @callback module:api/UserApi~createUserCredentialsEmailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialsEmail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Email/Password Credential
     * ### Email/password login information for the specified user.
     * @param {Integer} userId id of user
     * @param {Object} opts Optional parameters
     * @param {module:model/CredentialsEmail} opts.body Email/Password Credential
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~createUserCredentialsEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CredentialsEmail}
     */
    this.createUserCredentialsEmail = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling createUserCredentialsEmail";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = CredentialsEmail;

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_email', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createUserCredentialsEmailPasswordReset operation.
     * @callback module:api/UserApi~createUserCredentialsEmailPasswordResetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialsEmail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Password Reset Token
     * ### Create a password reset token.\nThis will create a cryptographically secure random password reset token for the user.\nIf the user already has a password reset token then this invalidates the old token and creates a new one.\nThe token is expressed as the &#39;password_reset_url&#39; of the user&#39;s email/password credential object.\nThis takes an optional &#39;expires&#39; param to indicate if the new token should be an expiring token.\nTokens that expire are typically used for self-service password resets for existing users.\nInvitation emails for new users typically are not set to expire.\nThe expire period is always 60 minutes when expires is enabled.\nThis method can be called with an empty body.\n
     * @param {Integer} userId Id of user
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.expires Expiring token.
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~createUserCredentialsEmailPasswordResetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CredentialsEmail}
     */
    this.createUserCredentialsEmailPasswordReset = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling createUserCredentialsEmailPasswordReset";
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'expires': opts['expires'],
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CredentialsEmail;

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_email/password_reset', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createUserCredentialsTotp operation.
     * @callback module:api/UserApi~createUserCredentialsTotpCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialsTotp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Two-Factor Credential
     * ### Two-factor login information for the specified user.
     * @param {Integer} userId id of user
     * @param {Object} opts Optional parameters
     * @param {module:model/CredentialsTotp} opts.body Two-Factor Credential
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~createUserCredentialsTotpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CredentialsTotp}
     */
    this.createUserCredentialsTotp = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling createUserCredentialsTotp";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = CredentialsTotp;

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_totp', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback module:api/UserApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete User
     * ### Delete the user with a specific id.\n\n**DANGER** this will delete the user and all looks and other information owned by the user.\n
     * @param {Integer} userId Id of user
     * @param {module:api/UserApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteUser = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteUser";
      }


      var pathParams = {
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/users/{user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserAccessFilter operation.
     * @callback module:api/UserApi~deleteUserAccessFilterCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Access Filter
     * ### Access filter for the specified user.
     * @param {Integer} userId id of user
     * @param {Integer} accessFilterId id of Access Filter
     * @param {module:api/UserApi~deleteUserAccessFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteUserAccessFilter = function(userId, accessFilterId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteUserAccessFilter";
      }

      // verify the required parameter 'accessFilterId' is set
      if (accessFilterId == undefined || accessFilterId == null) {
        throw "Missing the required parameter 'accessFilterId' when calling deleteUserAccessFilter";
      }


      var pathParams = {
        'user_id': userId,
        'access_filter_id': accessFilterId
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
        '/users/{user_id}/access_filters/{access_filter_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserAttributeUserValue operation.
     * @callback module:api/UserApi~deleteUserAttributeUserValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete User Attribute User Value
     * ### Delete a user attribute value from a user&#39;s account settings.\n\nAfter the user attribute value is deleted from the user&#39;s account settings, subsequent requests\nfor the user attribute value for this user will draw from the user&#39;s groups or the default\nvalue of the user attribute. See [Get User Attribute Values](#!/User/user_attribute_user_values) for more\ninformation about how user attribute values are resolved.\n
     * @param {Integer} userId Id of user
     * @param {Integer} userAttributeId Id of user attribute
     * @param {module:api/UserApi~deleteUserAttributeUserValueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUserAttributeUserValue = function(userId, userAttributeId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteUserAttributeUserValue";
      }

      // verify the required parameter 'userAttributeId' is set
      if (userAttributeId == undefined || userAttributeId == null) {
        throw "Missing the required parameter 'userAttributeId' when calling deleteUserAttributeUserValue";
      }


      var pathParams = {
        'user_id': userId,
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
        '/users/{user_id}/attribute_values/{user_attribute_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserCredentialsApi operation.
     * @callback module:api/UserApi~deleteUserCredentialsApiCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete API Credential
     * ### API login information for the specified user. This is for &#39;API Users&#39; used for the &#39;old&#39; query API.
     * @param {Integer} userId id of user
     * @param {module:api/UserApi~deleteUserCredentialsApiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteUserCredentialsApi = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteUserCredentialsApi";
      }


      var pathParams = {
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_api', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserCredentialsApi3 operation.
     * @callback module:api/UserApi~deleteUserCredentialsApi3Callback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete API 3 Credential
     * ### API 3 login information for the specified user. This is for the newer API keys that can be added for any user.
     * @param {Integer} userId id of user
     * @param {Integer} credentialsApi3Id id of API 3 Credential
     * @param {module:api/UserApi~deleteUserCredentialsApi3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteUserCredentialsApi3 = function(userId, credentialsApi3Id, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteUserCredentialsApi3";
      }

      // verify the required parameter 'credentialsApi3Id' is set
      if (credentialsApi3Id == undefined || credentialsApi3Id == null) {
        throw "Missing the required parameter 'credentialsApi3Id' when calling deleteUserCredentialsApi3";
      }


      var pathParams = {
        'user_id': userId,
        'credentials_api3_id': credentialsApi3Id
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
        '/users/{user_id}/credentials_api3/{credentials_api3_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserCredentialsEmail operation.
     * @callback module:api/UserApi~deleteUserCredentialsEmailCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Email/Password Credential
     * ### Email/password login information for the specified user.
     * @param {Integer} userId id of user
     * @param {module:api/UserApi~deleteUserCredentialsEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteUserCredentialsEmail = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteUserCredentialsEmail";
      }


      var pathParams = {
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_email', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserCredentialsEmbed operation.
     * @callback module:api/UserApi~deleteUserCredentialsEmbedCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Embedding Credential
     * ### Embed login information for the specified user.
     * @param {Integer} userId id of user
     * @param {Integer} credentialsEmbedId id of Embedding Credential
     * @param {module:api/UserApi~deleteUserCredentialsEmbedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteUserCredentialsEmbed = function(userId, credentialsEmbedId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteUserCredentialsEmbed";
      }

      // verify the required parameter 'credentialsEmbedId' is set
      if (credentialsEmbedId == undefined || credentialsEmbedId == null) {
        throw "Missing the required parameter 'credentialsEmbedId' when calling deleteUserCredentialsEmbed";
      }


      var pathParams = {
        'user_id': userId,
        'credentials_embed_id': credentialsEmbedId
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
        '/users/{user_id}/credentials_embed/{credentials_embed_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserCredentialsGoogle operation.
     * @callback module:api/UserApi~deleteUserCredentialsGoogleCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Google Auth Credential
     * ### Google authentication login information for the specified user.
     * @param {Integer} userId id of user
     * @param {module:api/UserApi~deleteUserCredentialsGoogleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteUserCredentialsGoogle = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteUserCredentialsGoogle";
      }


      var pathParams = {
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_google', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserCredentialsLdap operation.
     * @callback module:api/UserApi~deleteUserCredentialsLdapCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete LDAP Credential
     * ### LDAP login information for the specified user.
     * @param {Integer} userId id of user
     * @param {module:api/UserApi~deleteUserCredentialsLdapCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteUserCredentialsLdap = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteUserCredentialsLdap";
      }


      var pathParams = {
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_ldap', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserCredentialsLookerOpenid operation.
     * @callback module:api/UserApi~deleteUserCredentialsLookerOpenidCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Looker OpenId Credential
     * ### Looker Openid login information for the specified user. Used by Looker Analysts.
     * @param {Integer} userId id of user
     * @param {module:api/UserApi~deleteUserCredentialsLookerOpenidCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteUserCredentialsLookerOpenid = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteUserCredentialsLookerOpenid";
      }


      var pathParams = {
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_looker_openid', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserCredentialsSaml operation.
     * @callback module:api/UserApi~deleteUserCredentialsSamlCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Saml Auth Credential
     * ### Saml authentication login information for the specified user.
     * @param {Integer} userId id of user
     * @param {module:api/UserApi~deleteUserCredentialsSamlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteUserCredentialsSaml = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteUserCredentialsSaml";
      }


      var pathParams = {
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_saml', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserCredentialsTotp operation.
     * @callback module:api/UserApi~deleteUserCredentialsTotpCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Two-Factor Credential
     * ### Two-factor login information for the specified user.
     * @param {Integer} userId id of user
     * @param {module:api/UserApi~deleteUserCredentialsTotpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteUserCredentialsTotp = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteUserCredentialsTotp";
      }


      var pathParams = {
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_totp', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserSession operation.
     * @callback module:api/UserApi~deleteUserSessionCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Web Login Session
     * ### Web login session for the specified user.
     * @param {Integer} userId id of user
     * @param {Integer} sessionId id of Web Login Session
     * @param {module:api/UserApi~deleteUserSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteUserSession = function(userId, sessionId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteUserSession";
      }

      // verify the required parameter 'sessionId' is set
      if (sessionId == undefined || sessionId == null) {
        throw "Missing the required parameter 'sessionId' when calling deleteUserSession";
      }


      var pathParams = {
        'user_id': userId,
        'session_id': sessionId
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
        '/users/{user_id}/sessions/{session_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the me operation.
     * @callback module:api/UserApi~meCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Current User
     * ### Get information about the current user; i.e. the user account currently calling the API.\n
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~meCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/User}
     */
    this.me = function(opts, callback) {
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
      var returnType = User;

      return this.apiClient.callApi(
        '/user', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchUsers operation.
     * @callback module:api/UserApi~searchUsersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Users
     * ### Search users.\n
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {Integer} opts.page Requested page.
     * @param {Integer} opts.perPage Results per page.
     * @param {String} opts.sorts Fields to sort by.
     * @param {Integer} opts.id Match User Id.
     * @param {String} opts.firstName Match First name.
     * @param {String} opts.lastName Match Last name.
     * @param {Boolean} opts.verifiedLookerEmployee Match Verified Looker employee.
     * @param {String} opts.email Match Email Address.
     * @param {Boolean} opts.isDisabled Match Is disabled.
     * @param {Boolean} opts.filterOr Do an OR search with parameters
     * @param {Integer} opts.contentMetadataId Id of content metadata to which users must have access
     * @param {Integer} opts.groupId Id of group of which users must be directly members
     * @param {module:api/UserApi~searchUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/User>}
     */
    this.searchUsers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'fields': opts['fields'],
        'page': opts['page'],
        'per_page': opts['perPage'],
        'sorts': opts['sorts'],
        'id': opts['id'],
        'first_name': opts['firstName'],
        'last_name': opts['lastName'],
        'verified_looker_employee': opts['verifiedLookerEmployee'],
        'email': opts['email'],
        'is_disabled': opts['isDisabled'],
        'filter_or': opts['filterOr'],
        'content_metadata_id': opts['contentMetadataId'],
        'group_id': opts['groupId']
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
        '/users/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchUsersNames operation.
     * @callback module:api/UserApi~searchUsersNamesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search User Names
     * ### Search users where first_name OR last_name OR email matches a string.\n\nThe results will be AND&#39;d with any additional search parameters that are (optionally) included.\n
     * @param {String} pattern Pattern to match.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {Integer} opts.page Requested page.
     * @param {Integer} opts.perPage Results per page.
     * @param {String} opts.sorts Fields to sort by.
     * @param {Integer} opts.id Match User Id.
     * @param {String} opts.firstName Match First name.
     * @param {String} opts.lastName Match Last name.
     * @param {Boolean} opts.verifiedLookerEmployee Match Verified Looker employee.
     * @param {String} opts.email Match Email Address.
     * @param {Boolean} opts.isDisabled Match Is disabled.
     * @param {module:api/UserApi~searchUsersNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/User>}
     */
    this.searchUsersNames = function(pattern, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'pattern' is set
      if (pattern == undefined || pattern == null) {
        throw "Missing the required parameter 'pattern' when calling searchUsersNames";
      }


      var pathParams = {
        'pattern': pattern
      };
      var queryParams = {
        'fields': opts['fields'],
        'page': opts['page'],
        'per_page': opts['perPage'],
        'sorts': opts['sorts'],
        'id': opts['id'],
        'first_name': opts['firstName'],
        'last_name': opts['lastName'],
        'verified_looker_employee': opts['verifiedLookerEmployee'],
        'email': opts['email'],
        'is_disabled': opts['isDisabled']
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
        '/users/search/names/{pattern}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setUserAttributeUserValue operation.
     * @callback module:api/UserApi~setUserAttributeUserValueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserAttributeWithValue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set User Attribute User Value
     * ### Store a custom value for a user attribute in a user&#39;s account settings.\n\nPer-user user attribute values take precedence over group or default values.\n
     * @param {Integer} userId Id of user
     * @param {Integer} userAttributeId Id of user attribute
     * @param {module:model/UserAttributeWithValue} body New attribute value for user.
     * @param {module:api/UserApi~setUserAttributeUserValueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserAttributeWithValue}
     */
    this.setUserAttributeUserValue = function(userId, userAttributeId, body, callback) {
      var postBody = body;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling setUserAttributeUserValue";
      }

      // verify the required parameter 'userAttributeId' is set
      if (userAttributeId == undefined || userAttributeId == null) {
        throw "Missing the required parameter 'userAttributeId' when calling setUserAttributeUserValue";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling setUserAttributeUserValue";
      }


      var pathParams = {
        'user_id': userId,
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
      var returnType = UserAttributeWithValue;

      return this.apiClient.callApi(
        '/users/{user_id}/attribute_values/{user_attribute_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setUserRoles operation.
     * @callback module:api/UserApi~setUserRolesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Role>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set User Roles
     * ### Set roles of the user with a specific id.\n
     * @param {Integer} userId id of user
     * @param {Array.<module:model/Integer>} body array of roles ids for user
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~setUserRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Role>}
     */
    this.setUserRoles = function(userId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling setUserRoles";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling setUserRoles";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = [Role];

      return this.apiClient.callApi(
        '/users/{user_id}/roles', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:api/UserApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update User
     * ### Update information about the user with a specific id.\n
     * @param {Integer} userId Id of user
     * @param {module:model/User} body User
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/User}
     */
    this.updateUser = function(userId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling updateUser";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateUser";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = User;

      return this.apiClient.callApi(
        '/users/{user_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserAccessFilter operation.
     * @callback module:api/UserApi~updateUserAccessFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccessFilter} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Access Filter
     * ### Access filter for the specified user.
     * @param {Integer} userId id of user
     * @param {Integer} accessFilterId id of Access Filter
     * @param {module:model/AccessFilter} body Access Filter
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~updateUserAccessFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AccessFilter}
     */
    this.updateUserAccessFilter = function(userId, accessFilterId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling updateUserAccessFilter";
      }

      // verify the required parameter 'accessFilterId' is set
      if (accessFilterId == undefined || accessFilterId == null) {
        throw "Missing the required parameter 'accessFilterId' when calling updateUserAccessFilter";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateUserAccessFilter";
      }


      var pathParams = {
        'user_id': userId,
        'access_filter_id': accessFilterId
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
      var returnType = AccessFilter;

      return this.apiClient.callApi(
        '/users/{user_id}/access_filters/{access_filter_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserCredentialsEmail operation.
     * @callback module:api/UserApi~updateUserCredentialsEmailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialsEmail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Email/Password Credential
     * ### Email/password login information for the specified user.
     * @param {Integer} userId id of user
     * @param {module:model/CredentialsEmail} body Email/Password Credential
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~updateUserCredentialsEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CredentialsEmail}
     */
    this.updateUserCredentialsEmail = function(userId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling updateUserCredentialsEmail";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateUserCredentialsEmail";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = CredentialsEmail;

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_email', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the user operation.
     * @callback module:api/UserApi~userCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User by Id
     * ### Get information about the user with a specific id.\n\nIf the caller is an admin or the caller is the user being specified, then full user information will\nbe returned. Otherwise, a minimal &#39;public&#39; variant of the user information will be returned. This contains\nThe user name and avatar url, but no sensitive information.\n
     * @param {Integer} userId Id of user
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~userCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/User}
     */
    this.user = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling user";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = User;

      return this.apiClient.callApi(
        '/users/{user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userAccessFilter operation.
     * @callback module:api/UserApi~userAccessFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccessFilter} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Access Filter
     * ### Access filter for the specified user.
     * @param {Integer} userId Id of user
     * @param {Integer} accessFilterId Id of Access Filter
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~userAccessFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AccessFilter}
     */
    this.userAccessFilter = function(userId, accessFilterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling userAccessFilter";
      }

      // verify the required parameter 'accessFilterId' is set
      if (accessFilterId == undefined || accessFilterId == null) {
        throw "Missing the required parameter 'accessFilterId' when calling userAccessFilter";
      }


      var pathParams = {
        'user_id': userId,
        'access_filter_id': accessFilterId
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
      var returnType = AccessFilter;

      return this.apiClient.callApi(
        '/users/{user_id}/access_filters/{access_filter_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userAttributeUserValues operation.
     * @callback module:api/UserApi~userAttributeUserValuesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserAttributeWithValue>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User Attribute Values
     * ### Get user attribute values for a given user.\n\nReturns the values of specified user attributes (or all user attributes) for a certain user.\n\nA value for each user attribute is searched for in the following locations, in this order:\n1. in the user&#39;s account information\n1. in groups that the user is a member of\n1. the default value of the user attribute\n\nIf more than one group has a value defined for a user attribute, the group with the lowest rank wins.\n\nThe response will only include user attributes for which values were found. Use `include_unset=true` to include\nempty records for user attributes with no value.\n\nThe value of all hidden user attributes will be blank.\n
     * @param {Integer} userId Id of user
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {Array.<Integer>} opts.userAttributeIds Specific user attributes to request. Omit or leave blank to request all user attributes.
     * @param {Boolean} opts.allValues If true, returns all values in the search path instead of just the first value found. Useful for debugging group precedence.
     * @param {Boolean} opts.includeUnset If true, returns an empty record for each requested attribute that has no user, group, or default value.
     * @param {module:api/UserApi~userAttributeUserValuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/UserAttributeWithValue>}
     */
    this.userAttributeUserValues = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling userAttributeUserValues";
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'fields': opts['fields'],
        'user_attribute_ids': this.apiClient.buildCollectionParam(opts['userAttributeIds'], 'csv'),
        'all_values': opts['allValues'],
        'include_unset': opts['includeUnset']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [UserAttributeWithValue];

      return this.apiClient.callApi(
        '/users/{user_id}/attribute_values', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userCredentialsApi operation.
     * @callback module:api/UserApi~userCredentialsApiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialsApi} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get API Credential
     * ### API login information for the specified user. This is for &#39;API Users&#39; used for the &#39;old&#39; query API.
     * @param {Integer} userId id of user
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~userCredentialsApiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CredentialsApi}
     */
    this.userCredentialsApi = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling userCredentialsApi";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = CredentialsApi;

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_api', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userCredentialsApi3 operation.
     * @callback module:api/UserApi~userCredentialsApi3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialsApi3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get API 3 Credential
     * ### API 3 login information for the specified user. This is for the newer API keys that can be added for any user.
     * @param {Integer} userId Id of user
     * @param {Integer} credentialsApi3Id Id of API 3 Credential
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~userCredentialsApi3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CredentialsApi3}
     */
    this.userCredentialsApi3 = function(userId, credentialsApi3Id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling userCredentialsApi3";
      }

      // verify the required parameter 'credentialsApi3Id' is set
      if (credentialsApi3Id == undefined || credentialsApi3Id == null) {
        throw "Missing the required parameter 'credentialsApi3Id' when calling userCredentialsApi3";
      }


      var pathParams = {
        'user_id': userId,
        'credentials_api3_id': credentialsApi3Id
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
      var returnType = CredentialsApi3;

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_api3/{credentials_api3_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userCredentialsEmail operation.
     * @callback module:api/UserApi~userCredentialsEmailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialsEmail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Email/Password Credential
     * ### Email/password login information for the specified user.
     * @param {Integer} userId id of user
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~userCredentialsEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CredentialsEmail}
     */
    this.userCredentialsEmail = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling userCredentialsEmail";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = CredentialsEmail;

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_email', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userCredentialsEmbed operation.
     * @callback module:api/UserApi~userCredentialsEmbedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialsEmbed} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Embedding Credential
     * ### Embed login information for the specified user.
     * @param {Integer} userId Id of user
     * @param {Integer} credentialsEmbedId Id of Embedding Credential
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~userCredentialsEmbedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CredentialsEmbed}
     */
    this.userCredentialsEmbed = function(userId, credentialsEmbedId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling userCredentialsEmbed";
      }

      // verify the required parameter 'credentialsEmbedId' is set
      if (credentialsEmbedId == undefined || credentialsEmbedId == null) {
        throw "Missing the required parameter 'credentialsEmbedId' when calling userCredentialsEmbed";
      }


      var pathParams = {
        'user_id': userId,
        'credentials_embed_id': credentialsEmbedId
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
      var returnType = CredentialsEmbed;

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_embed/{credentials_embed_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userCredentialsGoogle operation.
     * @callback module:api/UserApi~userCredentialsGoogleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialsGoogle} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Google Auth Credential
     * ### Google authentication login information for the specified user.
     * @param {Integer} userId id of user
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~userCredentialsGoogleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CredentialsGoogle}
     */
    this.userCredentialsGoogle = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling userCredentialsGoogle";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = CredentialsGoogle;

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_google', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userCredentialsLdap operation.
     * @callback module:api/UserApi~userCredentialsLdapCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialsLDAP} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get LDAP Credential
     * ### LDAP login information for the specified user.
     * @param {Integer} userId id of user
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~userCredentialsLdapCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CredentialsLDAP}
     */
    this.userCredentialsLdap = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling userCredentialsLdap";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = CredentialsLDAP;

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_ldap', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userCredentialsLookerOpenid operation.
     * @callback module:api/UserApi~userCredentialsLookerOpenidCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialsLookerOpenid} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Looker OpenId Credential
     * ### Looker Openid login information for the specified user. Used by Looker Analysts.
     * @param {Integer} userId id of user
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~userCredentialsLookerOpenidCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CredentialsLookerOpenid}
     */
    this.userCredentialsLookerOpenid = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling userCredentialsLookerOpenid";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = CredentialsLookerOpenid;

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_looker_openid', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userCredentialsSaml operation.
     * @callback module:api/UserApi~userCredentialsSamlCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialsSaml} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Saml Auth Credential
     * ### Saml authentication login information for the specified user.
     * @param {Integer} userId id of user
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~userCredentialsSamlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CredentialsSaml}
     */
    this.userCredentialsSaml = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling userCredentialsSaml";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = CredentialsSaml;

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_saml', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userCredentialsTotp operation.
     * @callback module:api/UserApi~userCredentialsTotpCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialsTotp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Two-Factor Credential
     * ### Two-factor login information for the specified user.
     * @param {Integer} userId id of user
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~userCredentialsTotpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CredentialsTotp}
     */
    this.userCredentialsTotp = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling userCredentialsTotp";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = CredentialsTotp;

      return this.apiClient.callApi(
        '/users/{user_id}/credentials_totp', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userForCredential operation.
     * @callback module:api/UserApi~userForCredentialCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User by Credential Id
     * ### Get information about the user with a credential of given type with specific id.\n\nThis is used to do things like find users by their embed external_user_id. Or, find the user with\na given api3 client_id, etc. The &#39;credential_type&#39; matchs the &#39;type&#39; name of the various credential\ntypes. It must be one of the values listed in the table below. The &#39;credential_id&#39; is your unique Id\nfor the user and is specific to each type of credential.\n\nAn example using the Ruby sdk might look like:\n\n`sdk.user_for_credential(&#39;embed&#39;, &#39;customer-4959425&#39;)`\n\nThis table shows the supported &#39;Credential Type&#39; strings. The right column is for reference; it shows\nwhich field in the given credential type is actually searched when finding a user with the supplied\n&#39;credential_id&#39;.\n\n| Credential Types | Id Field Matched |\n| ---------------- | ---------------- |\n| email            | email            |\n| google           | google_user_id   |\n| saml             | saml_user_id     |\n| ldap             | ldap_id          |\n| api              | token            |\n| api3             | client_id        |\n| embed            | external_user_id |\n| looker_openid    | email            |\n\nNOTE: &#39;api&#39; is the legacy Looker query API. The API you are currently looking at is &#39;api3&#39;.\n\n
     * @param {String} credentialType Type name of credential
     * @param {String} credentialId Id of credential
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~userForCredentialCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/User}
     */
    this.userForCredential = function(credentialType, credentialId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'credentialType' is set
      if (credentialType == undefined || credentialType == null) {
        throw "Missing the required parameter 'credentialType' when calling userForCredential";
      }

      // verify the required parameter 'credentialId' is set
      if (credentialId == undefined || credentialId == null) {
        throw "Missing the required parameter 'credentialId' when calling userForCredential";
      }


      var pathParams = {
        'credential_type': credentialType,
        'credential_id': credentialId
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
      var returnType = User;

      return this.apiClient.callApi(
        '/users/credential/{credential_type}/{credential_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userRoles operation.
     * @callback module:api/UserApi~userRolesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Role>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User Roles
     * ### Get information about roles of the user with a specific id.\n
     * @param {Integer} userId id of user
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {Boolean} opts.directAssociationOnly Get only roles associated directly with the user: exclude those only associated through groups.
     * @param {module:api/UserApi~userRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Role>}
     */
    this.userRoles = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling userRoles";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = [Role];

      return this.apiClient.callApi(
        '/users/{user_id}/roles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userSession operation.
     * @callback module:api/UserApi~userSessionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Session} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Web Login Session
     * ### Web login session for the specified user.
     * @param {Integer} userId Id of user
     * @param {Integer} sessionId Id of Web Login Session
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/UserApi~userSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Session}
     */
    this.userSession = function(userId, sessionId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling userSession";
      }

      // verify the required parameter 'sessionId' is set
      if (sessionId == undefined || sessionId == null) {
        throw "Missing the required parameter 'sessionId' when calling userSession";
      }


      var pathParams = {
        'user_id': userId,
        'session_id': sessionId
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
      var returnType = Session;

      return this.apiClient.callApi(
        '/users/{user_id}/sessions/{session_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
