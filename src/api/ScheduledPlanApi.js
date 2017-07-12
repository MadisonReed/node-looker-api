(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ScheduledPlan', '../model/Error', '../model/ValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ScheduledPlan'), require('../model/Error'), require('../model/ValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.ScheduledPlanApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.ScheduledPlan, root.LookerApi30Reference.Error, root.LookerApi30Reference.ValidationError);
  }
}(this, function(ApiClient, ScheduledPlan, Error, ValidationError) {
  'use strict';

  /**
   * ScheduledPlan service.
   * @module api/ScheduledPlanApi
   * @version 3.0.0
   */

  /**
   * Constructs a new ScheduledPlanApi. 
   * @alias module:api/ScheduledPlanApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allScheduledPlans operation.
     * @callback module:api/ScheduledPlanApi~allScheduledPlansCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ScheduledPlan>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Scheduled Plans
     * ### List all scheduled plans which belong to the requesting user\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.userId User Id (default is requesting user if not specified)
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ScheduledPlanApi~allScheduledPlansCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ScheduledPlan>}
     */
    this.allScheduledPlans = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'user_id': opts['userId'],
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ScheduledPlan];

      return this.apiClient.callApi(
        '/scheduled_plans', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createScheduledPlan operation.
     * @callback module:api/ScheduledPlanApi~createScheduledPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScheduledPlan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Scheduled Plan
     * ### Schedule a Look or Dashboard by creating a scheduled plan.\n\nAdmins can create scheduled plans on behalf of other users by specifying a user id.\n
     * @param {Object} opts Optional parameters
     * @param {module:model/ScheduledPlan} opts.body Scheduled Plan
     * @param {module:api/ScheduledPlanApi~createScheduledPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ScheduledPlan}
     */
    this.createScheduledPlan = function(opts, callback) {
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
      var returnType = ScheduledPlan;

      return this.apiClient.callApi(
        '/scheduled_plans', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteScheduledPlan operation.
     * @callback module:api/ScheduledPlanApi~deleteScheduledPlanCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Scheduled Plan
     * ### Delete the scheduled plan with the specified id.\n\nAdmins can delete other users&#39; Scheduled Plans.\n
     * @param {Integer} scheduledPlanId Scheduled Plan Id
     * @param {module:api/ScheduledPlanApi~deleteScheduledPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteScheduledPlan = function(scheduledPlanId, callback) {
      var postBody = null;

      // verify the required parameter 'scheduledPlanId' is set
      if (scheduledPlanId == undefined || scheduledPlanId == null) {
        throw "Missing the required parameter 'scheduledPlanId' when calling deleteScheduledPlan";
      }


      var pathParams = {
        'scheduled_plan_id': scheduledPlanId
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
        '/scheduled_plans/{scheduled_plan_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the scheduledPlan operation.
     * @callback module:api/ScheduledPlanApi~scheduledPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScheduledPlan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Scheduled Plan
     * ### Get information about a scheduled plan.\n\nAdmins can fetch information about other users&#39; Scheduled Plans.\n
     * @param {Integer} scheduledPlanId Scheduled Plan Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ScheduledPlanApi~scheduledPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ScheduledPlan}
     */
    this.scheduledPlan = function(scheduledPlanId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'scheduledPlanId' is set
      if (scheduledPlanId == undefined || scheduledPlanId == null) {
        throw "Missing the required parameter 'scheduledPlanId' when calling scheduledPlan";
      }


      var pathParams = {
        'scheduled_plan_id': scheduledPlanId
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
      var returnType = ScheduledPlan;

      return this.apiClient.callApi(
        '/scheduled_plans/{scheduled_plan_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the scheduledPlanRunOnce operation.
     * @callback module:api/ScheduledPlanApi~scheduledPlanRunOnceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScheduledPlan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run Scheduled Plan Once
     * ### Schedule a Look or Dashboard to run once _now_ with a scheduled plan.\n\nThis can be useful for testing a Scheduled Plan before committing to a production schedule.\n\nAdmins can create scheduled plans on behalf of other users by specifying a user id.\n
     * @param {Object} opts Optional parameters
     * @param {module:model/ScheduledPlan} opts.body Scheduled Plan
     * @param {module:api/ScheduledPlanApi~scheduledPlanRunOnceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ScheduledPlan}
     */
    this.scheduledPlanRunOnce = function(opts, callback) {
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
      var returnType = ScheduledPlan;

      return this.apiClient.callApi(
        '/scheduled_plans/run_once', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the scheduledPlansForDashboard operation.
     * @callback module:api/ScheduledPlanApi~scheduledPlansForDashboardCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ScheduledPlan>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Scheduled Plans for Dashboard
     * ### Get scheduled plans by using a dashboard id for the requesting user or a specified user id (with :see_schedules permission)\n
     * @param {Integer} dashboardId Dashboard Id
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.userId User Id (default is requesting user if not specified)
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ScheduledPlanApi~scheduledPlansForDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ScheduledPlan>}
     */
    this.scheduledPlansForDashboard = function(dashboardId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'dashboardId' is set
      if (dashboardId == undefined || dashboardId == null) {
        throw "Missing the required parameter 'dashboardId' when calling scheduledPlansForDashboard";
      }


      var pathParams = {
        'dashboard_id': dashboardId
      };
      var queryParams = {
        'user_id': opts['userId'],
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ScheduledPlan];

      return this.apiClient.callApi(
        '/scheduled_plans/dashboard/{dashboard_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the scheduledPlansForLook operation.
     * @callback module:api/ScheduledPlanApi~scheduledPlansForLookCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ScheduledPlan>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Scheduled Plans for Look
     * ### Get scheduled plans by using a look id for the requesting user or a specified user id (with :see_schedules permission)\n
     * @param {Integer} lookId Look Id
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.userId User Id (default is requesting user if not specified)
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ScheduledPlanApi~scheduledPlansForLookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ScheduledPlan>}
     */
    this.scheduledPlansForLook = function(lookId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'lookId' is set
      if (lookId == undefined || lookId == null) {
        throw "Missing the required parameter 'lookId' when calling scheduledPlansForLook";
      }


      var pathParams = {
        'look_id': lookId
      };
      var queryParams = {
        'user_id': opts['userId'],
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ScheduledPlan];

      return this.apiClient.callApi(
        '/scheduled_plans/look/{look_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the scheduledPlansForLookmlDashboard operation.
     * @callback module:api/ScheduledPlanApi~scheduledPlansForLookmlDashboardCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ScheduledPlan>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Scheduled Plans for LookML Dashboard
     * ### Get scheduled plans by using a LookML dashboard id for the requesting user or a specified user id (with :see_schedules permission)\n
     * @param {Integer} lookmlDashboardId LookML Dashboard Id
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.userId User Id (default is requesting user if not specified)
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ScheduledPlanApi~scheduledPlansForLookmlDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ScheduledPlan>}
     */
    this.scheduledPlansForLookmlDashboard = function(lookmlDashboardId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'lookmlDashboardId' is set
      if (lookmlDashboardId == undefined || lookmlDashboardId == null) {
        throw "Missing the required parameter 'lookmlDashboardId' when calling scheduledPlansForLookmlDashboard";
      }


      var pathParams = {
        'lookml_dashboard_id': lookmlDashboardId
      };
      var queryParams = {
        'user_id': opts['userId'],
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ScheduledPlan];

      return this.apiClient.callApi(
        '/scheduled_plans/lookml_dashboard/{lookml_dashboard_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the scheduledPlansForSpace operation.
     * @callback module:api/ScheduledPlanApi~scheduledPlansForSpaceCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ScheduledPlan>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Scheduled Plans for Space
     * ### Get scheduled plans by using a space id for the requesting user.\n
     * @param {Integer} spaceId Space Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ScheduledPlanApi~scheduledPlansForSpaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ScheduledPlan>}
     */
    this.scheduledPlansForSpace = function(spaceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'spaceId' is set
      if (spaceId == undefined || spaceId == null) {
        throw "Missing the required parameter 'spaceId' when calling scheduledPlansForSpace";
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
      var returnType = [ScheduledPlan];

      return this.apiClient.callApi(
        '/scheduled_plans/space/{space_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateScheduledPlan operation.
     * @callback module:api/ScheduledPlanApi~updateScheduledPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScheduledPlan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Scheduled Plan
     * ### Update the scheduled plan with the specified id.\n\nAdmins can update other users&#39; Scheduled Plans.\n
     * @param {Integer} scheduledPlanId Scheduled Plan Id
     * @param {module:model/ScheduledPlan} body Scheduled Plan
     * @param {module:api/ScheduledPlanApi~updateScheduledPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ScheduledPlan}
     */
    this.updateScheduledPlan = function(scheduledPlanId, body, callback) {
      var postBody = body;

      // verify the required parameter 'scheduledPlanId' is set
      if (scheduledPlanId == undefined || scheduledPlanId == null) {
        throw "Missing the required parameter 'scheduledPlanId' when calling updateScheduledPlan";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateScheduledPlan";
      }


      var pathParams = {
        'scheduled_plan_id': scheduledPlanId
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
      var returnType = ScheduledPlan;

      return this.apiClient.callApi(
        '/scheduled_plans/{scheduled_plan_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
