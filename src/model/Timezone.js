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
    root.LookerApi30Reference.Timezone = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Timezone model module.
   * @module model/Timezone
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Timezone</code>.
   * @alias module:model/Timezone
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>Timezone</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Timezone} obj Optional instance to populate.
   * @return {module:model/Timezone} The populated <code>Timezone</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('group')) {
        obj['group'] = ApiClient.convertToType(data['group'], 'String');
      }
    }
    return obj;
  }


  /**
   * Timezone
   * @member {String} value
   */
  exports.prototype['value'] = undefined;

  /**
   * Description of timezone
   * @member {String} label
   */
  exports.prototype['label'] = undefined;

  /**
   * Timezone group (e.g Common, Other, etc.)
   * @member {String} group
   */
  exports.prototype['group'] = undefined;




  return exports;
}));
