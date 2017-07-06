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
    root.LookerApi30Reference.Snippet = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Snippet model module.
   * @module model/Snippet
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Snippet</code>.
   * @alias module:model/Snippet
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>Snippet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Snippet} obj Optional instance to populate.
   * @return {module:model/Snippet} The populated <code>Snippet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('sql')) {
        obj['sql'] = ApiClient.convertToType(data['sql'], 'String');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Name of the snippet
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Label of the snippet
   * @member {String} label
   */
  exports.prototype['label'] = undefined;

  /**
   * SQL text of the snippet
   * @member {String} sql
   */
  exports.prototype['sql'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
