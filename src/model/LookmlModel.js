(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './LookmlModelNavExplore'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LookmlModelNavExplore'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.LookmlModel = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.LookmlModelNavExplore);
  }
}(this, function(ApiClient, LookmlModelNavExplore) {
  'use strict';

  /**
   * The LookmlModel model module.
   * @module model/LookmlModel
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LookmlModel</code>.
   * @alias module:model/LookmlModel
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>LookmlModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LookmlModel} obj Optional instance to populate.
   * @return {module:model/LookmlModel} The populated <code>LookmlModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('project_name')) {
        obj['project_name'] = ApiClient.convertToType(data['project_name'], 'String');
      }
      if (data.hasOwnProperty('allowed_db_connection_names')) {
        obj['allowed_db_connection_names'] = ApiClient.convertToType(data['allowed_db_connection_names'], ['String']);
      }
      if (data.hasOwnProperty('unlimited_db_connections')) {
        obj['unlimited_db_connections'] = ApiClient.convertToType(data['unlimited_db_connections'], 'Boolean');
      }
      if (data.hasOwnProperty('has_content')) {
        obj['has_content'] = ApiClient.convertToType(data['has_content'], 'Boolean');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('explores')) {
        obj['explores'] = ApiClient.convertToType(data['explores'], [LookmlModelNavExplore]);
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Name of the model. Also used as the unique identifier
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Name of project containing the model
   * @member {String} project_name
   */
  exports.prototype['project_name'] = undefined;

  /**
   * Array of names of connections this model is allowed to use
   * @member {Array.<String>} allowed_db_connection_names
   */
  exports.prototype['allowed_db_connection_names'] = undefined;

  /**
   * Is this model allowed to use all current and future connections
   * @member {Boolean} unlimited_db_connections
   */
  exports.prototype['unlimited_db_connections'] = undefined;

  /**
   * Does this model declaration have have lookml content?
   * @member {Boolean} has_content
   */
  exports.prototype['has_content'] = undefined;

  /**
   * UI-friendly name for this model
   * @member {String} label
   */
  exports.prototype['label'] = undefined;

  /**
   * Array of explores (if has_content)
   * @member {Array.<module:model/LookmlModelNavExplore>} explores
   */
  exports.prototype['explores'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
