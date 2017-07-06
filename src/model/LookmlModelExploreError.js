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
    root.LookerApi30Reference.LookmlModelExploreError = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LookmlModelExploreError model module.
   * @module model/LookmlModelExploreError
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LookmlModelExploreError</code>.
   * @alias module:model/LookmlModelExploreError
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>LookmlModelExploreError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LookmlModelExploreError} obj Optional instance to populate.
   * @return {module:model/LookmlModelExploreError} The populated <code>LookmlModelExploreError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], 'String');
      }
      if (data.hasOwnProperty('error_pos')) {
        obj['error_pos'] = ApiClient.convertToType(data['error_pos'], 'String');
      }
      if (data.hasOwnProperty('field_error')) {
        obj['field_error'] = ApiClient.convertToType(data['field_error'], 'Boolean');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Error Message
   * @member {String} message
   */
  exports.prototype['message'] = undefined;

  /**
   * Details
   * @member {String} details
   */
  exports.prototype['details'] = undefined;

  /**
   * Error source location
   * @member {String} error_pos
   */
  exports.prototype['error_pos'] = undefined;

  /**
   * Is this a field error
   * @member {Boolean} field_error
   */
  exports.prototype['field_error'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
