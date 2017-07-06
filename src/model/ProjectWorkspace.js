(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.ProjectWorkspace = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ProjectWorkspace model module.
   * @module model/ProjectWorkspace
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ProjectWorkspace</code>.
   * @alias module:model/ProjectWorkspace
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>ProjectWorkspace</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectWorkspace} obj Optional instance to populate.
   * @return {module:model/ProjectWorkspace} The populated <code>ProjectWorkspace</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('workspace_id')) {
        obj['workspace_id'] = ApiClient.convertToType(data['workspace_id'], 'String');
      }
      if (data.hasOwnProperty('git_status')) {
        obj['git_status'] = ApiClient.convertToType(data['git_status'], 'String');
      }
      if (data.hasOwnProperty('git_head')) {
        obj['git_head'] = ApiClient.convertToType(data['git_head'], 'String');
      }
      if (data.hasOwnProperty('git_branch')) {
        obj['git_branch'] = ApiClient.convertToType(data['git_branch'], 'String');
      }
      if (data.hasOwnProperty('lookml_type')) {
        obj['lookml_type'] = ApiClient.convertToType(data['lookml_type'], 'String');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * The local workspace this project resides in
   * @member {String} workspace_id
   */
  exports.prototype['workspace_id'] = undefined;

  /**
   * The status of the local git directory
   * @member {String} git_status
   */
  exports.prototype['git_status'] = undefined;

  /**
   * Git head revision name
   * @member {String} git_head
   */
  exports.prototype['git_head'] = undefined;

  /**
   * The name of the branch currently active in the local project directory
   * @member {String} git_branch
   */
  exports.prototype['git_branch'] = undefined;

  /**
   * The lookml syntax used by all files in this project
   * @member {String} lookml_type
   */
  exports.prototype['lookml_type'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
