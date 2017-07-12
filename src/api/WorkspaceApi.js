(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/Workspace'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Workspace'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.WorkspaceApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.Error, root.LookerApi30Reference.Workspace);
  }
}(this, function(ApiClient, Error, Workspace) {
  'use strict';

  /**
   * Workspace service.
   * @module api/WorkspaceApi
   * @version 3.0.0
   */

  /**
   * Constructs a new WorkspaceApi. 
   * @alias module:api/WorkspaceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allWorkspaces operation.
     * @callback module:api/WorkspaceApi~allWorkspacesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Workspace>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Workspaces
     * ### Get All Workspaces \n\nReturns all workspaces available to the calling user.\n
     * @param {module:api/WorkspaceApi~allWorkspacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Workspace>}
     */
    this.allWorkspaces = function(callback) {
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
      var returnType = [Workspace];

      return this.apiClient.callApi(
        '/workspaces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the workspace operation.
     * @callback module:api/WorkspaceApi~workspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Workspace} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Workspace
     * ### Get A Workspace \n\nReturns information about a workspace such as the git status and selected branches\nof all projects available to the caller&#39;s user account.\n\nA workspace defines which versions of project files will be used to evaluate expressions\nand operations that use model definitions - operations such as running queries or rendering dashboards. \nEach project has its own git repository, and each project in a workspace may be configured to reference \nparticular branch or revision within their respective repositories. \n\nThere are two predefined workspaces available: \&quot;production\&quot; and \&quot;dev\&quot;. \n\nThe production workspace is shared across all Looker users. Models in the production workspace are read-only.\nChanging files in production is accomplished by modifying files in a git branch and using Pull Requests\nto merge the changes from the dev branch into the production branch, and then telling\nLooker to sync with production.\n\nThe dev workspace is local to each Looker user. Changes made to project/model files in the dev workspace only affect\nthat user, and only when the dev workspace is selected as the active workspace for the API session.  \n(See set_session_workspace()). \n\nThe dev workspace is NOT unique to an API session. Two applications accessing the Looker API using\nthe same user account will see the same files in the dev workspace. To avoid collisions between\nAPI clients it&#39;s best to have each client login with API3 credentials for a different user account.\n\nChanges made to files in a dev workspace are persistent across API sessions. It&#39;s a good\nidea to commit any changes you&#39;ve made to the git repository, but not strictly required. Your modified files\nreside in a special user-specific directory on the Looker server and will still be there when you login in again\nlater and use update_session(workspace_id: \&quot;dev\&quot;) to select the dev workspace for the new API session.\n
     * @param {String} workspaceId Id of the workspace 
     * @param {module:api/WorkspaceApi~workspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Workspace}
     */
    this.workspace = function(workspaceId, callback) {
      var postBody = null;

      // verify the required parameter 'workspaceId' is set
      if (workspaceId == undefined || workspaceId == null) {
        throw "Missing the required parameter 'workspaceId' when calling workspace";
      }


      var pathParams = {
        'workspace_id': workspaceId
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
      var returnType = Workspace;

      return this.apiClient.callApi(
        '/workspaces/{workspace_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
