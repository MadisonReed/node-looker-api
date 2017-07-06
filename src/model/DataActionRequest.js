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
    root.LookerApi30Reference.DataActionRequest = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DataActionRequest model module.
   * @module model/DataActionRequest
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DataActionRequest</code>.
   * @alias module:model/DataActionRequest
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>DataActionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataActionRequest} obj Optional instance to populate.
   * @return {module:model/DataActionRequest} The populated <code>DataActionRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], {'String': 'String'});
      }
      if (data.hasOwnProperty('form_values')) {
        obj['form_values'] = ApiClient.convertToType(data['form_values'], {'String': 'String'});
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * The JSON describing the data action. This JSON should be considered opaque and should be passed through unmodified from the query result it came from.
   * @member {Object.<String, String>} action
   */
  exports.prototype['action'] = undefined;

  /**
   * User input for any form values the data action might use.
   * @member {Object.<String, String>} form_values
   */
  exports.prototype['form_values'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
