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
    root.LookerApi30Reference.LookmlModelExploreAccessFilter = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LookmlModelExploreAccessFilter model module.
   * @module model/LookmlModelExploreAccessFilter
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LookmlModelExploreAccessFilter</code>.
   * @alias module:model/LookmlModelExploreAccessFilter
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>LookmlModelExploreAccessFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LookmlModelExploreAccessFilter} obj Optional instance to populate.
   * @return {module:model/LookmlModelExploreAccessFilter} The populated <code>LookmlModelExploreAccessFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('user_attribute')) {
        obj['user_attribute'] = ApiClient.convertToType(data['user_attribute'], 'String');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Field to be filtered
   * @member {String} field
   */
  exports.prototype['field'] = undefined;

  /**
   * User attribute name
   * @member {String} user_attribute
   */
  exports.prototype['user_attribute'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
