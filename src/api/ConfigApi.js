(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/LegacyFeature', '../model/Error', '../model/Timezone', '../model/BackupConfiguration', '../model/ValidationError', '../model/Whitelabel', '../model/ApiVersion'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LegacyFeature'), require('../model/Error'), require('../model/Timezone'), require('../model/BackupConfiguration'), require('../model/ValidationError'), require('../model/Whitelabel'), require('../model/ApiVersion'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.ConfigApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.LegacyFeature, root.LookerApi30Reference.Error, root.LookerApi30Reference.Timezone, root.LookerApi30Reference.BackupConfiguration, root.LookerApi30Reference.ValidationError, root.LookerApi30Reference.Whitelabel, root.LookerApi30Reference.ApiVersion);
  }
}(this, function(ApiClient, LegacyFeature, Error, Timezone, BackupConfiguration, ValidationError, Whitelabel, ApiVersion) {
  'use strict';

  /**
   * Config service.
   * @module api/ConfigApi
   * @version 3.0.0
   */

  /**
   * Constructs a new ConfigApi. 
   * @alias module:api/ConfigApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allLegacyFeatures operation.
     * @callback module:api/ConfigApi~allLegacyFeaturesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LegacyFeature>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Legacy Features
     * ### Get all legacy features.\n
     * @param {module:api/ConfigApi~allLegacyFeaturesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/LegacyFeature>}
     */
    this.allLegacyFeatures = function(callback) {
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
      var returnType = [LegacyFeature];

      return this.apiClient.callApi(
        '/legacy_features', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allTimezones operation.
     * @callback module:api/ConfigApi~allTimezonesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Timezone>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Timezones
     * ### Get a list of timezones that Looker supports (e.g. useful for scheduling tasks).\n
     * @param {module:api/ConfigApi~allTimezonesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Timezone>}
     */
    this.allTimezones = function(callback) {
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
      var returnType = [Timezone];

      return this.apiClient.callApi(
        '/timezones', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the backupConfiguration operation.
     * @callback module:api/ConfigApi~backupConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BackupConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Backup Configuration
     * ### Get the current Looker internal database backup configuration.\n
     * @param {module:api/ConfigApi~backupConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BackupConfiguration}
     */
    this.backupConfiguration = function(callback) {
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
      var returnType = BackupConfiguration;

      return this.apiClient.callApi(
        '/backup_configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the legacyFeature operation.
     * @callback module:api/ConfigApi~legacyFeatureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LegacyFeature} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Legacy Feature
     * ### Get information about the legacy feature with a specific id.\n
     * @param {Integer} legacyFeatureId id of legacy feature
     * @param {module:api/ConfigApi~legacyFeatureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LegacyFeature}
     */
    this.legacyFeature = function(legacyFeatureId, callback) {
      var postBody = null;

      // verify the required parameter 'legacyFeatureId' is set
      if (legacyFeatureId == undefined || legacyFeatureId == null) {
        throw "Missing the required parameter 'legacyFeatureId' when calling legacyFeature";
      }


      var pathParams = {
        'legacy_feature_id': legacyFeatureId
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
      var returnType = LegacyFeature;

      return this.apiClient.callApi(
        '/legacy_features/{legacy_feature_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBackupConfiguration operation.
     * @callback module:api/ConfigApi~updateBackupConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BackupConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Backup Configuration
     * ### Update the Looker internal database backup configuration.\n
     * @param {module:model/BackupConfiguration} body Options for Backup Configuration
     * @param {module:api/ConfigApi~updateBackupConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BackupConfiguration}
     */
    this.updateBackupConfiguration = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateBackupConfiguration";
      }


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
      var returnType = BackupConfiguration;

      return this.apiClient.callApi(
        '/backup_configuration', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLegacyFeature operation.
     * @callback module:api/ConfigApi~updateLegacyFeatureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LegacyFeature} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Legacy Feature
     * ### Update information about the legacy feature with a specific id.\n
     * @param {Integer} legacyFeatureId id of legacy feature
     * @param {module:model/LegacyFeature} body Legacy Feature
     * @param {module:api/ConfigApi~updateLegacyFeatureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LegacyFeature}
     */
    this.updateLegacyFeature = function(legacyFeatureId, body, callback) {
      var postBody = body;

      // verify the required parameter 'legacyFeatureId' is set
      if (legacyFeatureId == undefined || legacyFeatureId == null) {
        throw "Missing the required parameter 'legacyFeatureId' when calling updateLegacyFeature";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateLegacyFeature";
      }


      var pathParams = {
        'legacy_feature_id': legacyFeatureId
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
      var returnType = LegacyFeature;

      return this.apiClient.callApi(
        '/legacy_features/{legacy_feature_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWhitelabelConfiguration operation.
     * @callback module:api/ConfigApi~updateWhitelabelConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Whitelabel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Whitelabel configuration
     * ### Update the whitelabel configuration\n
     * @param {module:model/Whitelabel} body Whitelabel configuration
     * @param {module:api/ConfigApi~updateWhitelabelConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Whitelabel}
     */
    this.updateWhitelabelConfiguration = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateWhitelabelConfiguration";
      }


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
      var returnType = Whitelabel;

      return this.apiClient.callApi(
        '/whitelabel_configuration', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the versions operation.
     * @callback module:api/ConfigApi~versionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiVersion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get ApiVersion
     * ### Get information about all API versions supported by this Looker instance.\n
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ConfigApi~versionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ApiVersion}
     */
    this.versions = function(opts, callback) {
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
      var returnType = ApiVersion;

      return this.apiClient.callApi(
        '/versions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the whitelabelConfiguration operation.
     * @callback module:api/ConfigApi~whitelabelConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Whitelabel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Whitelabel configuration
     * ### This feature is enabled only by special license.\n### Gets the whitelabel configuration, which includes hiding documentation links, custom favicon uploading, etc.\n
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ConfigApi~whitelabelConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Whitelabel}
     */
    this.whitelabelConfiguration = function(opts, callback) {
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
      var returnType = Whitelabel;

      return this.apiClient.callApi(
        '/whitelabel_configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
