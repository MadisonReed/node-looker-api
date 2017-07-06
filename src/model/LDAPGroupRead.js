(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Role'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Role'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.LDAPGroupRead = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.Role);
  }
}(this, function(ApiClient, Role) {
  'use strict';

  /**
   * The LDAPGroupRead model module.
   * @module model/LDAPGroupRead
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LDAPGroupRead</code>.
   * @alias module:model/LDAPGroupRead
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>LDAPGroupRead</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LDAPGroupRead} obj Optional instance to populate.
   * @return {module:model/LDAPGroupRead} The populated <code>LDAPGroupRead</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('roles')) {
        obj['roles'] = ApiClient.convertToType(data['roles'], [Role]);
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
   * Name of group in LDAP
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Looker Roles
   * @member {Array.<module:model/Role>} roles
   */
  exports.prototype['roles'] = undefined;

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
