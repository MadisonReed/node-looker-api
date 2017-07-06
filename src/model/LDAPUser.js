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
    root.LookerApi30Reference.LDAPUser = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LDAPUser model module.
   * @module model/LDAPUser
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LDAPUser</code>.
   * @alias module:model/LDAPUser
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>LDAPUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LDAPUser} obj Optional instance to populate.
   * @return {module:model/LDAPUser} The populated <code>LDAPUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('ldap_id')) {
        obj['ldap_id'] = ApiClient.convertToType(data['ldap_id'], 'String');
      }
      if (data.hasOwnProperty('all_emails')) {
        obj['all_emails'] = ApiClient.convertToType(data['all_emails'], ['String']);
      }
      if (data.hasOwnProperty('ldap_dn')) {
        obj['ldap_dn'] = ApiClient.convertToType(data['ldap_dn'], 'String');
      }
      if (data.hasOwnProperty('roles')) {
        obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
      }
      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], ['String']);
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
   * Primary email address
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * First name
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;

  /**
   * Last Name
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;

  /**
   * LDAP's Unique ID for the user
   * @member {String} ldap_id
   */
  exports.prototype['ldap_id'] = undefined;

  /**
   * Array of user's email addresses and aliases for use in migration
   * @member {Array.<String>} all_emails
   */
  exports.prototype['all_emails'] = undefined;

  /**
   * LDAP's distinguished name for the user record
   * @member {String} ldap_dn
   */
  exports.prototype['ldap_dn'] = undefined;

  /**
   * Array of user's roles (role names only)
   * @member {Array.<String>} roles
   */
  exports.prototype['roles'] = undefined;

  /**
   * Array of user's groups (group names only)
   * @member {Array.<String>} groups
   */
  exports.prototype['groups'] = undefined;

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
