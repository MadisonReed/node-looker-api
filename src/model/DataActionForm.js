(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DataActionFormField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DataActionFormField'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.DataActionForm = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.DataActionFormField);
  }
}(this, function(ApiClient, DataActionFormField) {
  'use strict';

  /**
   * The DataActionForm model module.
   * @module model/DataActionForm
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DataActionForm</code>.
   * @alias module:model/DataActionForm
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>DataActionForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataActionForm} obj Optional instance to populate.
   * @return {module:model/DataActionForm} The populated <code>DataActionForm</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], [DataActionFormField]);
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Array of form fields.
   * @member {Array.<module:model/DataActionFormField>} fields
   */
  exports.prototype['fields'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
