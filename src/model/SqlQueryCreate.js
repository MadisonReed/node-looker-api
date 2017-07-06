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
    root.LookerApi30Reference.SqlQueryCreate = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SqlQueryCreate model module.
   * @module model/SqlQueryCreate
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SqlQueryCreate</code>.
   * @alias module:model/SqlQueryCreate
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>SqlQueryCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SqlQueryCreate} obj Optional instance to populate.
   * @return {module:model/SqlQueryCreate} The populated <code>SqlQueryCreate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('connection_id')) {
        obj['connection_id'] = ApiClient.convertToType(data['connection_id'], 'String');
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
   * Id of Connection
   * @member {String} connection_id
   */
  exports.prototype['connection_id'] = undefined;

  /**
   * SQL query
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
