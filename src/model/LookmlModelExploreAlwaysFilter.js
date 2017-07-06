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
    root.LookerApi30Reference.LookmlModelExploreAlwaysFilter = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LookmlModelExploreAlwaysFilter model module.
   * @module model/LookmlModelExploreAlwaysFilter
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LookmlModelExploreAlwaysFilter</code>.
   * @alias module:model/LookmlModelExploreAlwaysFilter
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>LookmlModelExploreAlwaysFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LookmlModelExploreAlwaysFilter} obj Optional instance to populate.
   * @return {module:model/LookmlModelExploreAlwaysFilter} The populated <code>LookmlModelExploreAlwaysFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Value
   * @member {String} value
   */
  exports.prototype['value'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
