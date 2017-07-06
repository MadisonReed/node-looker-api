(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Project'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Project'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.Workspace = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.Project);
  }
}(this, function(ApiClient, Project) {
  'use strict';

  /**
   * The Workspace model module.
   * @module model/Workspace
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Workspace</code>.
   * @alias module:model/Workspace
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>Workspace</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Workspace} obj Optional instance to populate.
   * @return {module:model/Workspace} The populated <code>Workspace</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('projects')) {
        obj['projects'] = ApiClient.convertToType(data['projects'], [Project]);
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * The unique id of this user workspace. Predefined workspace ids include \"production\" and \"dev\"
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * The local state of each project in the workspace
   * @member {Array.<module:model/Project>} projects
   */
  exports.prototype['projects'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
