(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ProjectWorkspace'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProjectWorkspace'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.Project = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.ProjectWorkspace);
  }
}(this, function(ApiClient, ProjectWorkspace) {
  'use strict';

  /**
   * The Project model module.
   * @module model/Project
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Project</code>.
   * @alias module:model/Project
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Project} obj Optional instance to populate.
   * @return {module:model/Project} The populated <code>Project</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('uses_git')) {
        obj['uses_git'] = ApiClient.convertToType(data['uses_git'], 'Boolean');
      }
      if (data.hasOwnProperty('git_remote_url')) {
        obj['git_remote_url'] = ApiClient.convertToType(data['git_remote_url'], 'String');
      }
      if (data.hasOwnProperty('git_service_name')) {
        obj['git_service_name'] = ApiClient.convertToType(data['git_service_name'], 'String');
      }
      if (data.hasOwnProperty('pull_request_mode')) {
        obj['pull_request_mode'] = ApiClient.convertToType(data['pull_request_mode'], 'String');
      }
      if (data.hasOwnProperty('validation_required')) {
        obj['validation_required'] = ApiClient.convertToType(data['validation_required'], 'Boolean');
      }
      if (data.hasOwnProperty('is_example')) {
        obj['is_example'] = ApiClient.convertToType(data['is_example'], 'Boolean');
      }
      if (data.hasOwnProperty('local_state')) {
        obj['local_state'] = ProjectWorkspace.constructFromObject(data['local_state']);
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Project Id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Project display name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * If true the project is configured with a git repository
   * @member {Boolean} uses_git
   */
  exports.prototype['uses_git'] = undefined;

  /**
   * Git remote repository url
   * @member {String} git_remote_url
   */
  exports.prototype['git_remote_url'] = undefined;

  /**
   * Name of the git service provider
   * @member {String} git_service_name
   */
  exports.prototype['git_service_name'] = undefined;

  /**
   * The git pull request policy for this project. Must be one of [\"off\", \"links\", \"recommended\", \"required\"]
   * @member {String} pull_request_mode
   */
  exports.prototype['pull_request_mode'] = undefined;

  /**
   * Validation policy: If true, the project must pass all validation checks before project changes can be committed to the git repository
   * @member {Boolean} validation_required
   */
  exports.prototype['validation_required'] = undefined;

  /**
   * If true the project is an example project and cannot be modified
   * @member {Boolean} is_example
   */
  exports.prototype['is_example'] = undefined;

  /**
   * Details about local project state in the currently selected workspace
   * @member {module:model/ProjectWorkspace} local_state
   */
  exports.prototype['local_state'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
