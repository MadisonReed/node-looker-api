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
    root.LookerApi30Reference.ModelsNotValidated = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsNotValidated model module.
   * @module model/ModelsNotValidated
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ModelsNotValidated</code>.
   * @alias module:model/ModelsNotValidated
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>ModelsNotValidated</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsNotValidated} obj Optional instance to populate.
   * @return {module:model/ModelsNotValidated} The populated <code>ModelsNotValidated</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('project_file_id')) {
        obj['project_file_id'] = ApiClient.convertToType(data['project_file_id'], 'String');
      }
    }
    return obj;
  }


  /**
   * Model name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Project file
   * @member {String} project_file_id
   */
  exports.prototype['project_file_id'] = undefined;




  return exports;
}));
