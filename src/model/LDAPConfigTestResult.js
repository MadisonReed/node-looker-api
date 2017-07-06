(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './LDAPUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LDAPUser'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.LDAPConfigTestResult = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.LDAPUser);
  }
}(this, function(ApiClient, LDAPUser) {
  'use strict';

  /**
   * The LDAPConfigTestResult model module.
   * @module model/LDAPConfigTestResult
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LDAPConfigTestResult</code>.
   * @alias module:model/LDAPConfigTestResult
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>LDAPConfigTestResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LDAPConfigTestResult} obj Optional instance to populate.
   * @return {module:model/LDAPConfigTestResult} The populated <code>LDAPConfigTestResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = LDAPUser.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('trace')) {
        obj['trace'] = ApiClient.convertToType(data['trace'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Test status code: always 'success' or 'error'
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Short human readable test about the result
   * @member {String} message
   */
  exports.prototype['message'] = undefined;

  /**
   * Additional details for error cases
   * @member {String} details
   */
  exports.prototype['details'] = undefined;

  /**
   * User details from LDAP server for auth tests
   * @member {module:model/LDAPUser} user
   */
  exports.prototype['user'] = undefined;

  /**
   * A more detailed trace incremental results during auth tests
   * @member {String} trace
   */
  exports.prototype['trace'] = undefined;

  /**
   * Link to ldap config
   * @member {String} url
   */
  exports.prototype['url'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
