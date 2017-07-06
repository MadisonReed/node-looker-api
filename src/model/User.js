(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './AccessFilter', './CredentialsApi', './CredentialsApi3', './CredentialsEmail', './CredentialsEmbed', './CredentialsGoogle', './CredentialsLDAP', './CredentialsLookerOpenid', './CredentialsSaml', './CredentialsTotp', './Session'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccessFilter'), require('./CredentialsApi'), require('./CredentialsApi3'), require('./CredentialsEmail'), require('./CredentialsEmbed'), require('./CredentialsGoogle'), require('./CredentialsLDAP'), require('./CredentialsLookerOpenid'), require('./CredentialsSaml'), require('./CredentialsTotp'), require('./Session'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.User = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.AccessFilter, root.LookerApi30Reference.CredentialsApi, root.LookerApi30Reference.CredentialsApi3, root.LookerApi30Reference.CredentialsEmail, root.LookerApi30Reference.CredentialsEmbed, root.LookerApi30Reference.CredentialsGoogle, root.LookerApi30Reference.CredentialsLDAP, root.LookerApi30Reference.CredentialsLookerOpenid, root.LookerApi30Reference.CredentialsSaml, root.LookerApi30Reference.CredentialsTotp, root.LookerApi30Reference.Session);
  }
}(this, function(ApiClient, AccessFilter, CredentialsApi, CredentialsApi3, CredentialsEmail, CredentialsEmbed, CredentialsGoogle, CredentialsLDAP, CredentialsLookerOpenid, CredentialsSaml, CredentialsTotp, Session) {
  'use strict';

  /**
   * The User model module.
   * @module model/User
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  var exports = function() {






























  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('is_disabled')) {
        obj['is_disabled'] = ApiClient.convertToType(data['is_disabled'], 'Boolean');
      }
      if (data.hasOwnProperty('avatar_url')) {
        obj['avatar_url'] = ApiClient.convertToType(data['avatar_url'], 'String');
      }
      if (data.hasOwnProperty('home_space_id')) {
        obj['home_space_id'] = ApiClient.convertToType(data['home_space_id'], 'String');
      }
      if (data.hasOwnProperty('personal_space_id')) {
        obj['personal_space_id'] = ApiClient.convertToType(data['personal_space_id'], 'Integer');
      }
      if (data.hasOwnProperty('embed_group_space_id')) {
        obj['embed_group_space_id'] = ApiClient.convertToType(data['embed_group_space_id'], 'Integer');
      }
      if (data.hasOwnProperty('access_filters')) {
        obj['access_filters'] = ApiClient.convertToType(data['access_filters'], [AccessFilter]);
      }
      if (data.hasOwnProperty('credentials_email')) {
        obj['credentials_email'] = CredentialsEmail.constructFromObject(data['credentials_email']);
      }
      if (data.hasOwnProperty('credentials_totp')) {
        obj['credentials_totp'] = CredentialsTotp.constructFromObject(data['credentials_totp']);
      }
      if (data.hasOwnProperty('credentials_ldap')) {
        obj['credentials_ldap'] = CredentialsLDAP.constructFromObject(data['credentials_ldap']);
      }
      if (data.hasOwnProperty('credentials_google')) {
        obj['credentials_google'] = CredentialsGoogle.constructFromObject(data['credentials_google']);
      }
      if (data.hasOwnProperty('credentials_saml')) {
        obj['credentials_saml'] = CredentialsSaml.constructFromObject(data['credentials_saml']);
      }
      if (data.hasOwnProperty('credentials_api')) {
        obj['credentials_api'] = CredentialsApi.constructFromObject(data['credentials_api']);
      }
      if (data.hasOwnProperty('credentials_api3')) {
        obj['credentials_api3'] = ApiClient.convertToType(data['credentials_api3'], [CredentialsApi3]);
      }
      if (data.hasOwnProperty('credentials_embed')) {
        obj['credentials_embed'] = ApiClient.convertToType(data['credentials_embed'], [CredentialsEmbed]);
      }
      if (data.hasOwnProperty('credentials_looker_openid')) {
        obj['credentials_looker_openid'] = CredentialsLookerOpenid.constructFromObject(data['credentials_looker_openid']);
      }
      if (data.hasOwnProperty('sessions')) {
        obj['sessions'] = ApiClient.convertToType(data['sessions'], [Session]);
      }
      if (data.hasOwnProperty('role_ids')) {
        obj['role_ids'] = ApiClient.convertToType(data['role_ids'], ['Integer']);
      }
      if (data.hasOwnProperty('group_ids')) {
        obj['group_ids'] = ApiClient.convertToType(data['group_ids'], ['Integer']);
      }
      if (data.hasOwnProperty('presumed_looker_employee')) {
        obj['presumed_looker_employee'] = ApiClient.convertToType(data['presumed_looker_employee'], 'Boolean');
      }
      if (data.hasOwnProperty('verified_looker_employee')) {
        obj['verified_looker_employee'] = ApiClient.convertToType(data['verified_looker_employee'], 'Boolean');
      }
      if (data.hasOwnProperty('looker_versions')) {
        obj['looker_versions'] = ApiClient.convertToType(data['looker_versions'], ['String']);
      }
      if (data.hasOwnProperty('ui_state')) {
        obj['ui_state'] = ApiClient.convertToType(data['ui_state'], {'String': 'String'});
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
   * Unique Id
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * First name
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;

  /**
   * Last name
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;

  /**
   * Full name for display (available only if both first_name and last_name are set)
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;

  /**
   * EMail address
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * Account has been disabled
   * @member {Boolean} is_disabled
   */
  exports.prototype['is_disabled'] = undefined;

  /**
   * URL for the avatar image (may be generic)
   * @member {String} avatar_url
   */
  exports.prototype['avatar_url'] = undefined;

  /**
   * ID string for user's home space
   * @member {String} home_space_id
   */
  exports.prototype['home_space_id'] = undefined;

  /**
   * ID of user's personal space
   * @member {Integer} personal_space_id
   */
  exports.prototype['personal_space_id'] = undefined;

  /**
   * (Embed only) ID of user's group space based on the external_group_id optionally specified during embed user login
   * @member {Integer} embed_group_space_id
   */
  exports.prototype['embed_group_space_id'] = undefined;

  /**
   * Model access filters.
   * @member {Array.<module:model/AccessFilter>} access_filters
   */
  exports.prototype['access_filters'] = undefined;

  /**
   * Email/Password login credentials
   * @member {module:model/CredentialsEmail} credentials_email
   */
  exports.prototype['credentials_email'] = undefined;

  /**
   * Two-factor credentials
   * @member {module:model/CredentialsTotp} credentials_totp
   */
  exports.prototype['credentials_totp'] = undefined;

  /**
   * LDAP credentials
   * @member {module:model/CredentialsLDAP} credentials_ldap
   */
  exports.prototype['credentials_ldap'] = undefined;

  /**
   * Google auth credentials
   * @member {module:model/CredentialsGoogle} credentials_google
   */
  exports.prototype['credentials_google'] = undefined;

  /**
   * Saml auth credentials
   * @member {module:model/CredentialsSaml} credentials_saml
   */
  exports.prototype['credentials_saml'] = undefined;

  /**
   * API user credentials
   * @member {module:model/CredentialsApi} credentials_api
   */
  exports.prototype['credentials_api'] = undefined;

  /**
   * API 3 credentials
   * @member {Array.<module:model/CredentialsApi3>} credentials_api3
   */
  exports.prototype['credentials_api3'] = undefined;

  /**
   * Embed credentials
   * @member {Array.<module:model/CredentialsEmbed>} credentials_embed
   */
  exports.prototype['credentials_embed'] = undefined;

  /**
   * LookerOpenID credentials. Used for login by Looker Analysts
   * @member {module:model/CredentialsLookerOpenid} credentials_looker_openid
   */
  exports.prototype['credentials_looker_openid'] = undefined;

  /**
   * Active sessions
   * @member {Array.<module:model/Session>} sessions
   */
  exports.prototype['sessions'] = undefined;

  /**
   * Array of ids of the roles for this user
   * @member {Array.<Integer>} role_ids
   */
  exports.prototype['role_ids'] = undefined;

  /**
   * Array of ids of the groups for this user
   * @member {Array.<Integer>} group_ids
   */
  exports.prototype['group_ids'] = undefined;

  /**
   * User is identified as an employee of Looker
   * @member {Boolean} presumed_looker_employee
   */
  exports.prototype['presumed_looker_employee'] = undefined;

  /**
   * User is identified as an employee of Looker who has been verified via Looker corporate authentication
   * @member {Boolean} verified_looker_employee
   */
  exports.prototype['verified_looker_employee'] = undefined;

  /**
   * Array of strings representing the Looker versions that this user has used (this only goes back as far as '3.54.0')
   * @member {Array.<String>} looker_versions
   */
  exports.prototype['looker_versions'] = undefined;

  /**
   * Per user dictionary of undocumented state information owned by the Looker UI.
   * @member {Object.<String, String>} ui_state
   */
  exports.prototype['ui_state'] = undefined;

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
