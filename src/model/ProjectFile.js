(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './GitStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GitStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.ProjectFile = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.GitStatus);
  }
}(this, function(ApiClient, GitStatus) {
  'use strict';

  /**
   * The ProjectFile model module.
   * @module model/ProjectFile
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ProjectFile</code>.
   * @alias module:model/ProjectFile
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>ProjectFile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectFile} obj Optional instance to populate.
   * @return {module:model/ProjectFile} The populated <code>ProjectFile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('mime_type')) {
        obj['mime_type'] = ApiClient.convertToType(data['mime_type'], 'String');
      }
      if (data.hasOwnProperty('git_status')) {
        obj['git_status'] = GitStatus.constructFromObject(data['git_status']);
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * An opaque token uniquely identifying a file within a project. Avoid parsing or decomposing the text of this token. This token is stable within a Looker release but may change between Looker releases
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Path, file name, and extension of the file relative to the project root directory
   * @member {String} path
   */
  exports.prototype['path'] = undefined;

  /**
   * Display name
   * @member {String} title
   */
  exports.prototype['title'] = undefined;

  /**
   * File type: model, view, etc
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * File mime type
   * @member {String} mime_type
   */
  exports.prototype['mime_type'] = undefined;

  /**
   * Status of the file according to git
   * @member {module:model/GitStatus} git_status
   */
  exports.prototype['git_status'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
