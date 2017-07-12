(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/DashboardBase', '../model/Dashboard', '../model/ValidationError', '../model/PrefetchDashboardRequest', '../model/PrefetchDashboardFilterValue', '../model/PrefetchMapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/DashboardBase'), require('../model/Dashboard'), require('../model/ValidationError'), require('../model/PrefetchDashboardRequest'), require('../model/PrefetchDashboardFilterValue'), require('../model/PrefetchMapper'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.DashboardApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.Error, root.LookerApi30Reference.DashboardBase, root.LookerApi30Reference.Dashboard, root.LookerApi30Reference.ValidationError, root.LookerApi30Reference.PrefetchDashboardRequest, root.LookerApi30Reference.PrefetchDashboardFilterValue, root.LookerApi30Reference.PrefetchMapper);
  }
}(this, function(ApiClient, Error, DashboardBase, Dashboard, ValidationError, PrefetchDashboardRequest, PrefetchDashboardFilterValue, PrefetchMapper) {
  'use strict';

  /**
   * Dashboard service.
   * @module api/DashboardApi
   * @version 3.0.0
   */

  /**
   * Constructs a new DashboardApi. 
   * @alias module:api/DashboardApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allDashboards operation.
     * @callback module:api/DashboardApi~allDashboardsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DashboardBase>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Dashboards
     * Get information about all dashboards.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/DashboardApi~allDashboardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/DashboardBase>}
     */
    this.allDashboards = function(opts, callback) {
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
      var returnType = [DashboardBase];

      return this.apiClient.callApi(
        '/dashboards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createDashboard operation.
     * @callback module:api/DashboardApi~createDashboardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Dashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Dashboard
     * ### Create a dashboard with specified information.
     * @param {Object} opts Optional parameters
     * @param {module:model/Dashboard} opts.body Dashboard
     * @param {module:api/DashboardApi~createDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Dashboard}
     */
    this.createDashboard = function(opts, callback) {
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
      var returnType = Dashboard;

      return this.apiClient.callApi(
        '/dashboards', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createDashboardPrefetch operation.
     * @callback module:api/DashboardApi~createDashboardPrefetchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PrefetchDashboardRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Dashboard Prefetch
     * ### Create a prefetch for a dashboard with the specified information.\n
     * @param {String} dashboardId Id of dashboard
     * @param {Object} opts Optional parameters
     * @param {module:model/PrefetchDashboardRequest} opts.body Parameters for prefetch request
     * @param {module:api/DashboardApi~createDashboardPrefetchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PrefetchDashboardRequest}
     */
    this.createDashboardPrefetch = function(dashboardId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'dashboardId' is set
      if (dashboardId == undefined || dashboardId == null) {
        throw "Missing the required parameter 'dashboardId' when calling createDashboardPrefetch";
      }


      var pathParams = {
        'dashboard_id': dashboardId
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
      var returnType = PrefetchDashboardRequest;

      return this.apiClient.callApi(
        '/dashboards/{dashboard_id}/prefetch', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dashboard operation.
     * @callback module:api/DashboardApi~dashboardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Dashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Dashboard
     * ### Get information about the dashboard with a specific id.
     * @param {String} dashboardId Id of dashboard
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/DashboardApi~dashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Dashboard}
     */
    this.dashboard = function(dashboardId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'dashboardId' is set
      if (dashboardId == undefined || dashboardId == null) {
        throw "Missing the required parameter 'dashboardId' when calling dashboard";
      }


      var pathParams = {
        'dashboard_id': dashboardId
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
      var returnType = Dashboard;

      return this.apiClient.callApi(
        '/dashboards/{dashboard_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dashboardPrefetch operation.
     * @callback module:api/DashboardApi~dashboardPrefetchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PrefetchMapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Dashboard Prefetch
     * ### Get a prefetch for a dashboard with the specified information.\n
     * @param {String} dashboardId Id of dashboard
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/PrefetchDashboardFilterValue>} opts.dashboardFilters JSON encoded string of Dashboard filters that were applied to prefetch
     * @param {module:api/DashboardApi~dashboardPrefetchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PrefetchMapper}
     */
    this.dashboardPrefetch = function(dashboardId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'dashboardId' is set
      if (dashboardId == undefined || dashboardId == null) {
        throw "Missing the required parameter 'dashboardId' when calling dashboardPrefetch";
      }


      var pathParams = {
        'dashboard_id': dashboardId
      };
      var queryParams = {
        'dashboard_filters': this.apiClient.buildCollectionParam(opts['dashboardFilters'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PrefetchMapper;

      return this.apiClient.callApi(
        '/dashboards/{dashboard_id}/prefetch', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDashboard operation.
     * @callback module:api/DashboardApi~deleteDashboardCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Dashboard
     * ### Delete the dashboard with a specific id.
     * @param {String} dashboardId Id of dashboard
     * @param {module:api/DashboardApi~deleteDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteDashboard = function(dashboardId, callback) {
      var postBody = null;

      // verify the required parameter 'dashboardId' is set
      if (dashboardId == undefined || dashboardId == null) {
        throw "Missing the required parameter 'dashboardId' when calling deleteDashboard";
      }


      var pathParams = {
        'dashboard_id': dashboardId
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
        '/dashboards/{dashboard_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchDashboards operation.
     * @callback module:api/DashboardApi~searchDashboardsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Dashboard>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Dashboards
     * Get information about all dashboards.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {Integer} opts.page Requested page.
     * @param {Integer} opts.perPage Results per page.
     * @param {Integer} opts.limit Number of results to return. (used with offset and takes priority over page and per_page)
     * @param {Integer} opts.offset Number of results to skip before returning any. (used with limit and takes priority over page and per_page)
     * @param {String} opts.sorts Fields to sort by.
     * @param {String} opts.title Match Dashboard title.
     * @param {String} opts.description Match Dashboard description.
     * @param {Integer} opts.contentFavoriteId Filter on a content favorite id.
     * @param {String} opts.spaceId Filter on a particular space.
     * @param {String} opts.deleted Filter on dashboards deleted status.
     * @param {String} opts.userId Filter on dashboards created by a particular user.
     * @param {String} opts.viewCount Filter on a particular value of view_count
     * @param {module:api/DashboardApi~searchDashboardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Dashboard>}
     */
    this.searchDashboards = function(opts, callback) {
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
        'deleted': opts['deleted'],
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
      var returnType = [Dashboard];

      return this.apiClient.callApi(
        '/dashboards/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDashboard operation.
     * @callback module:api/DashboardApi~updateDashboardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Dashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Dashboard
     * ### Update the dashboard with a specific id.
     * @param {String} dashboardId Id of dashboard
     * @param {module:model/Dashboard} body Dashboard
     * @param {module:api/DashboardApi~updateDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Dashboard}
     */
    this.updateDashboard = function(dashboardId, body, callback) {
      var postBody = body;

      // verify the required parameter 'dashboardId' is set
      if (dashboardId == undefined || dashboardId == null) {
        throw "Missing the required parameter 'dashboardId' when calling updateDashboard";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateDashboard";
      }


      var pathParams = {
        'dashboard_id': dashboardId
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
      var returnType = Dashboard;

      return this.apiClient.callApi(
        '/dashboards/{dashboard_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
