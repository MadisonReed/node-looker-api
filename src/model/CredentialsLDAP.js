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
    root.LookerApi30Reference.CredentialsLDAP = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CredentialsLDAP model module.
   * @module model/CredentialsLDAP
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>CredentialsLDAP</code>.
   * @alias module:model/CredentialsLDAP
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>CredentialsLDAP</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CredentialsLDAP} obj Optional instance to populate.
   * @return {module:model/CredentialsLDAP} The populated <code>CredentialsLDAP</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('ldap_id')) {
        obj['ldap_id'] = ApiClient.convertToType(data['ldap_id'], 'String');
      }
      if (data.hasOwnProperty('ldap_dn')) {
        obj['ldap_dn'] = ApiClient.convertToType(data['ldap_dn'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
      if (data.hasOwnProperty('logged_in_at')) {
        obj['logged_in_at'] = ApiClient.convertToType(data['logged_in_at'], 'String');
      }
      if (data.hasOwnProperty('is_disabled')) {
        obj['is_disabled'] = ApiClient.convertToType(data['is_disabled'], 'Boolean');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
   * EMail address
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * LDAP Unique ID for this user
   * @member {String} ldap_id
   */
  exports.prototype['ldap_id'] = undefined;

  /**
   * LDAP Distinguished name for this user (as-of the last login)
   * @member {String} ldap_dn
   */
  exports.prototype['ldap_dn'] = undefined;

  /**
   * Timestamp for the creation of this credential
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;

  /**
   * Timestamp for most recent login using credential
   * @member {String} logged_in_at
   */
  exports.prototype['logged_in_at'] = undefined;

  /**
   * Has this credential been disabled?
   * @member {Boolean} is_disabled
   */
  exports.prototype['is_disabled'] = undefined;

  /**
   * Short name for the type of this kind of credential
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * Link to get this item
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
