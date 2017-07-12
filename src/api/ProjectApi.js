(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/ProjectFile', '../model/Project', '../model/ProjectValidationCache', '../model/ProjectValidation', '../model/ValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/ProjectFile'), require('../model/Project'), require('../model/ProjectValidationCache'), require('../model/ProjectValidation'), require('../model/ValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.ProjectApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.Error, root.LookerApi30Reference.ProjectFile, root.LookerApi30Reference.Project, root.LookerApi30Reference.ProjectValidationCache, root.LookerApi30Reference.ProjectValidation, root.LookerApi30Reference.ValidationError);
  }
}(this, function(ApiClient, Error, ProjectFile, Project, ProjectValidationCache, ProjectValidation, ValidationError) {
  'use strict';

  /**
   * Project service.
   * @module api/ProjectApi
   * @version 3.0.0
   */

  /**
   * Constructs a new ProjectApi. 
   * @alias module:api/ProjectApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allProjectFiles operation.
     * @callback module:api/ProjectApi~allProjectFilesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProjectFile>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Project Files
     * ### Get All Project Files\n\nReturns a list of the files in the project\n
     * @param {String} projectId Project Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields
     * @param {module:api/ProjectApi~allProjectFilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ProjectFile>}
     */
    this.allProjectFiles = function(projectId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling allProjectFiles";
      }


      var pathParams = {
        'project_id': projectId
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
      var returnType = [ProjectFile];

      return this.apiClient.callApi(
        '/projects/{project_id}/files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allProjects operation.
     * @callback module:api/ProjectApi~allProjectsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Project>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Projects
     * ### Get All Projects\n\nReturns all projects visible to the current user\n
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields
     * @param {module:api/ProjectApi~allProjectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Project>}
     */
    this.allProjects = function(opts, callback) {
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
      var returnType = [Project];

      return this.apiClient.callApi(
        '/projects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the project operation.
     * @callback module:api/ProjectApi~projectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Project
     * ### Get A Project\n\nReturns the project with the given project id\n
     * @param {String} projectId Project Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields
     * @param {module:api/ProjectApi~projectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Project}
     */
    this.project = function(projectId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling project";
      }


      var pathParams = {
        'project_id': projectId
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
      var returnType = Project;

      return this.apiClient.callApi(
        '/projects/{project_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the projectFile operation.
     * @callback module:api/ProjectApi~projectFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectFile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Project File
     * ### Get Project File Info\n\nReturns information about a file in the project\n
     * @param {String} projectId Project Id
     * @param {String} fileId File Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields
     * @param {module:api/ProjectApi~projectFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ProjectFile}
     */
    this.projectFile = function(projectId, fileId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling projectFile";
      }

      // verify the required parameter 'fileId' is set
      if (fileId == undefined || fileId == null) {
        throw "Missing the required parameter 'fileId' when calling projectFile";
      }


      var pathParams = {
        'project_id': projectId
      };
      var queryParams = {
        'file_id': fileId,
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProjectFile;

      return this.apiClient.callApi(
        '/projects/{project_id}/files/file', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the projectValidationResults operation.
     * @callback module:api/ProjectApi~projectValidationResultsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectValidationCache} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cached Project Validation Results
     * ### Get Cached Project Validation Results\n\nReturns the cached results of a previous project validation calculation, if any.\nReturns http status 204 No Content if no validation results exist.\n\nValidating the content of all the files in a project can be computationally intensive\nfor large projects. Use this API to simply fetch the results of the most recent\nproject validation rather than revalidating the entire project from scratch.\n\nA value of `\&quot;stale\&quot;: true` in the response indicates that the project has changed since\nthe cached validation results were computed. The cached validation results may no longer\nreflect the current state of the project.\n
     * @param {String} projectId Project Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields
     * @param {module:api/ProjectApi~projectValidationResultsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ProjectValidationCache}
     */
    this.projectValidationResults = function(projectId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling projectValidationResults";
      }


      var pathParams = {
        'project_id': projectId
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
      var returnType = ProjectValidationCache;

      return this.apiClient.callApi(
        '/projects/{project_id}/validate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the resetProjectToProduction operation.
     * @callback module:api/ProjectApi~resetProjectToProductionCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset To Production
     * ### Reset a project to the revision of the project that is in production.\n\n**DANGER** this will delete any changes that have not been pushed to a remote repository.\n
     * @param {String} projectId Id of project
     * @param {module:api/ProjectApi~resetProjectToProductionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.resetProjectToProduction = function(projectId, callback) {
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling resetProjectToProduction";
      }


      var pathParams = {
        'project_id': projectId
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
        '/projects/{project_id}/reset_to_production', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateProject operation.
     * @callback module:api/ProjectApi~validateProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectValidation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate Project
     * ### Validate Project\n\nPerforms lint validation of all lookml files in the project.\nReturns a list of errors found, if any.\n\nValidating the content of all the files in a project can be computationally intensive\nfor large projects. For best performance, call `validate_project(project_id)` only\nwhen you really want to recompute project validation. To quickly display the results of \nthe most recent project validation (without recomputing), use `project_validation_results(project_id)`\n
     * @param {String} projectId Project Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields
     * @param {module:api/ProjectApi~validateProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ProjectValidation}
     */
    this.validateProject = function(projectId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling validateProject";
      }


      var pathParams = {
        'project_id': projectId
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
      var returnType = ProjectValidation;

      return this.apiClient.callApi(
        '/projects/{project_id}/validate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
