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
    root.LookerApi30Reference.DBConnectionTestResult = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DBConnectionTestResult model module.
   * @module model/DBConnectionTestResult
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DBConnectionTestResult</code>.
   * @alias module:model/DBConnectionTestResult
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>DBConnectionTestResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DBConnectionTestResult} obj Optional instance to populate.
   * @return {module:model/DBConnectionTestResult} The populated <code>DBConnectionTestResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('connection_string')) {
        obj['connection_string'] = ApiClient.convertToType(data['connection_string'], 'String');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Name of test
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Result code of test
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Result message of test
   * @member {String} message
   */
  exports.prototype['message'] = undefined;

  /**
   * JDBC connection string. (only populated in the 'connect' test)
   * @member {String} connection_string
   */
  exports.prototype['connection_string'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
