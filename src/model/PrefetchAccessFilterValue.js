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
    root.LookerApi30Reference.PrefetchAccessFilterValue = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PrefetchAccessFilterValue model module.
   * @module model/PrefetchAccessFilterValue
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PrefetchAccessFilterValue</code>.
   * @alias module:model/PrefetchAccessFilterValue
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>PrefetchAccessFilterValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrefetchAccessFilterValue} obj Optional instance to populate.
   * @return {module:model/PrefetchAccessFilterValue} The populated <code>PrefetchAccessFilterValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('model')) {
        obj['model'] = ApiClient.convertToType(data['model'], 'String');
      }
      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
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
   * Access filter model name.
   * @member {String} model
   */
  exports.prototype['model'] = undefined;

  /**
   * Access filter field name.
   * @member {String} field
   */
  exports.prototype['field'] = undefined;

  /**
   * Access filter value
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
