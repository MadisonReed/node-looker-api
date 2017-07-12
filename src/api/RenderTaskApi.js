(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CreateDashboardRenderTask', '../model/RenderTask', '../model/Error', '../model/ValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateDashboardRenderTask'), require('../model/RenderTask'), require('../model/Error'), require('../model/ValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.RenderTaskApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.CreateDashboardRenderTask, root.LookerApi30Reference.RenderTask, root.LookerApi30Reference.Error, root.LookerApi30Reference.ValidationError);
  }
}(this, function(ApiClient, CreateDashboardRenderTask, RenderTask, Error, ValidationError) {
  'use strict';

  /**
   * RenderTask service.
   * @module api/RenderTaskApi
   * @version 3.0.0
   */

  /**
   * Constructs a new RenderTaskApi. 
   * @alias module:api/RenderTaskApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createDashboardRenderTask operation.
     * @callback module:api/RenderTaskApi~createDashboardRenderTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RenderTask} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Dashboard Render Task
     * ### Create a new task to render a dashboard to a document or image.\n\nReturns a render task object.\nTo check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task).\nOnce the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).\n\n
     * @param {Integer} dashboardId Id of dashboard to render
     * @param {String} resultFormat Output type: pdf, png, or jpg
     * @param {module:model/CreateDashboardRenderTask} body Dashboard render task parameters
     * @param {Integer} width Output width in pixels
     * @param {Integer} height Output height in pixels
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/RenderTaskApi~createDashboardRenderTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RenderTask}
     */
    this.createDashboardRenderTask = function(dashboardId, resultFormat, body, width, height, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'dashboardId' is set
      if (dashboardId == undefined || dashboardId == null) {
        throw "Missing the required parameter 'dashboardId' when calling createDashboardRenderTask";
      }

      // verify the required parameter 'resultFormat' is set
      if (resultFormat == undefined || resultFormat == null) {
        throw "Missing the required parameter 'resultFormat' when calling createDashboardRenderTask";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createDashboardRenderTask";
      }

      // verify the required parameter 'width' is set
      if (width == undefined || width == null) {
        throw "Missing the required parameter 'width' when calling createDashboardRenderTask";
      }

      // verify the required parameter 'height' is set
      if (height == undefined || height == null) {
        throw "Missing the required parameter 'height' when calling createDashboardRenderTask";
      }


      var pathParams = {
        'dashboard_id': dashboardId,
        'result_format': resultFormat
      };
      var queryParams = {
        'width': width,
        'height': height,
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RenderTask;

      return this.apiClient.callApi(
        '/render_tasks/dashboards/{dashboard_id}/{result_format}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createLookRenderTask operation.
     * @callback module:api/RenderTaskApi~createLookRenderTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RenderTask} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Look Render Task
     * ### Create a new task to render a look to an image.\n\nReturns a render task object.\nTo check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task).\nOnce the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).\n\n
     * @param {Integer} lookId Id of look to render
     * @param {String} resultFormat Output type: png, or jpg
     * @param {Integer} width Output width in pixels
     * @param {Integer} height Output height in pixels
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/RenderTaskApi~createLookRenderTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RenderTask}
     */
    this.createLookRenderTask = function(lookId, resultFormat, width, height, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'lookId' is set
      if (lookId == undefined || lookId == null) {
        throw "Missing the required parameter 'lookId' when calling createLookRenderTask";
      }

      // verify the required parameter 'resultFormat' is set
      if (resultFormat == undefined || resultFormat == null) {
        throw "Missing the required parameter 'resultFormat' when calling createLookRenderTask";
      }

      // verify the required parameter 'width' is set
      if (width == undefined || width == null) {
        throw "Missing the required parameter 'width' when calling createLookRenderTask";
      }

      // verify the required parameter 'height' is set
      if (height == undefined || height == null) {
        throw "Missing the required parameter 'height' when calling createLookRenderTask";
      }


      var pathParams = {
        'look_id': lookId,
        'result_format': resultFormat
      };
      var queryParams = {
        'width': width,
        'height': height,
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RenderTask;

      return this.apiClient.callApi(
        '/render_tasks/looks/{look_id}/{result_format}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createLookmlDashboardRenderTask operation.
     * @callback module:api/RenderTaskApi~createLookmlDashboardRenderTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RenderTask} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Lookml Dashboard Render Task
     * ### Create a new task to render a lookml dashboard to a document or image.\n\nReturns a render task object.\nTo check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task).\nOnce the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).\n\n
     * @param {String} dashboardId Id of lookml dashboard to render
     * @param {String} resultFormat Output type: pdf, png, or jpg
     * @param {module:model/CreateDashboardRenderTask} body Dashboard render task parameters
     * @param {Integer} width Output width in pixels
     * @param {Integer} height Output height in pixels
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/RenderTaskApi~createLookmlDashboardRenderTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RenderTask}
     */
    this.createLookmlDashboardRenderTask = function(dashboardId, resultFormat, body, width, height, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'dashboardId' is set
      if (dashboardId == undefined || dashboardId == null) {
        throw "Missing the required parameter 'dashboardId' when calling createLookmlDashboardRenderTask";
      }

      // verify the required parameter 'resultFormat' is set
      if (resultFormat == undefined || resultFormat == null) {
        throw "Missing the required parameter 'resultFormat' when calling createLookmlDashboardRenderTask";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createLookmlDashboardRenderTask";
      }

      // verify the required parameter 'width' is set
      if (width == undefined || width == null) {
        throw "Missing the required parameter 'width' when calling createLookmlDashboardRenderTask";
      }

      // verify the required parameter 'height' is set
      if (height == undefined || height == null) {
        throw "Missing the required parameter 'height' when calling createLookmlDashboardRenderTask";
      }


      var pathParams = {
        'dashboard_id': dashboardId,
        'result_format': resultFormat
      };
      var queryParams = {
        'width': width,
        'height': height,
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RenderTask;

      return this.apiClient.callApi(
        '/render_tasks/lookml_dashboards/{dashboard_id}/{result_format}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createQueryRenderTask operation.
     * @callback module:api/RenderTaskApi~createQueryRenderTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RenderTask} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Query Render Task
     * ### Create a new task to render an existing query to an image.\n\nReturns a render task object.\nTo check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task).\nOnce the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).\n\n
     * @param {Integer} queryId Id of the query to render
     * @param {String} resultFormat Output type: png or jpg
     * @param {Integer} width Output width in pixels
     * @param {Integer} height Output height in pixels
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/RenderTaskApi~createQueryRenderTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RenderTask}
     */
    this.createQueryRenderTask = function(queryId, resultFormat, width, height, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'queryId' is set
      if (queryId == undefined || queryId == null) {
        throw "Missing the required parameter 'queryId' when calling createQueryRenderTask";
      }

      // verify the required parameter 'resultFormat' is set
      if (resultFormat == undefined || resultFormat == null) {
        throw "Missing the required parameter 'resultFormat' when calling createQueryRenderTask";
      }

      // verify the required parameter 'width' is set
      if (width == undefined || width == null) {
        throw "Missing the required parameter 'width' when calling createQueryRenderTask";
      }

      // verify the required parameter 'height' is set
      if (height == undefined || height == null) {
        throw "Missing the required parameter 'height' when calling createQueryRenderTask";
      }


      var pathParams = {
        'query_id': queryId,
        'result_format': resultFormat
      };
      var queryParams = {
        'width': width,
        'height': height,
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RenderTask;

      return this.apiClient.callApi(
        '/render_tasks/queries/{query_id}/{result_format}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the renderTask operation.
     * @callback module:api/RenderTaskApi~renderTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RenderTask} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Render Task
     * ### Get information about a render task.\n\nReturns a render task object.\nTo check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task).\nOnce the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).\n\n
     * @param {String} renderTaskId Id of render task
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/RenderTaskApi~renderTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RenderTask}
     */
    this.renderTask = function(renderTaskId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'renderTaskId' is set
      if (renderTaskId == undefined || renderTaskId == null) {
        throw "Missing the required parameter 'renderTaskId' when calling renderTask";
      }


      var pathParams = {
        'render_task_id': renderTaskId
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
      var returnType = RenderTask;

      return this.apiClient.callApi(
        '/render_tasks/{render_task_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the renderTaskResults operation.
     * @callback module:api/RenderTaskApi~renderTaskResultsCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Render Task Results
     * ### Get the document or image produced by a completed render task.\n\nReturns `102 Processing` if the render task has not completed.\n
     * @param {String} renderTaskId Id of render task
     * @param {module:api/RenderTaskApi~renderTaskResultsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.renderTaskResults = function(renderTaskId, callback) {
      var postBody = null;

      // verify the required parameter 'renderTaskId' is set
      if (renderTaskId == undefined || renderTaskId == null) {
        throw "Missing the required parameter 'renderTaskId' when calling renderTaskResults";
      }


      var pathParams = {
        'render_task_id': renderTaskId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['image/jpeg', 'image/png', 'application/pdf'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/render_tasks/{render_task_id}/results', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
