(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Group', './LDAPGroupRead', './LDAPGroupWrite', './Role'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Group'), require('./LDAPGroupRead'), require('./LDAPGroupWrite'), require('./Role'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.LDAPConfig = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.Group, root.LookerApi30Reference.LDAPGroupRead, root.LookerApi30Reference.LDAPGroupWrite, root.LookerApi30Reference.Role);
  }
}(this, function(ApiClient, Group, LDAPGroupRead, LDAPGroupWrite, Role) {
  'use strict';

  /**
   * The LDAPConfig model module.
   * @module model/LDAPConfig
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LDAPConfig</code>.
   * @alias module:model/LDAPConfig
   * @class
   */
  var exports = function() {





































  };

  /**
   * Constructs a <code>LDAPConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LDAPConfig} obj Optional instance to populate.
   * @return {module:model/LDAPConfig} The populated <code>LDAPConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('connection_host')) {
        obj['connection_host'] = ApiClient.convertToType(data['connection_host'], 'String');
      }
      if (data.hasOwnProperty('connection_port')) {
        obj['connection_port'] = ApiClient.convertToType(data['connection_port'], 'String');
      }
      if (data.hasOwnProperty('connection_tls')) {
        obj['connection_tls'] = ApiClient.convertToType(data['connection_tls'], 'Boolean');
      }
      if (data.hasOwnProperty('auth_username')) {
        obj['auth_username'] = ApiClient.convertToType(data['auth_username'], 'String');
      }
      if (data.hasOwnProperty('auth_password')) {
        obj['auth_password'] = ApiClient.convertToType(data['auth_password'], 'String');
      }
      if (data.hasOwnProperty('has_auth_password')) {
        obj['has_auth_password'] = ApiClient.convertToType(data['has_auth_password'], 'Boolean');
      }
      if (data.hasOwnProperty('user_bind_base_dn')) {
        obj['user_bind_base_dn'] = ApiClient.convertToType(data['user_bind_base_dn'], 'String');
      }
      if (data.hasOwnProperty('user_id_attribute_names')) {
        obj['user_id_attribute_names'] = ApiClient.convertToType(data['user_id_attribute_names'], 'String');
      }
      if (data.hasOwnProperty('user_objectclass')) {
        obj['user_objectclass'] = ApiClient.convertToType(data['user_objectclass'], 'String');
      }
      if (data.hasOwnProperty('user_attribute_map_email')) {
        obj['user_attribute_map_email'] = ApiClient.convertToType(data['user_attribute_map_email'], 'String');
      }
      if (data.hasOwnProperty('user_attribute_map_first_name')) {
        obj['user_attribute_map_first_name'] = ApiClient.convertToType(data['user_attribute_map_first_name'], 'String');
      }
      if (data.hasOwnProperty('user_attribute_map_last_name')) {
        obj['user_attribute_map_last_name'] = ApiClient.convertToType(data['user_attribute_map_last_name'], 'String');
      }
      if (data.hasOwnProperty('user_attribute_map_ldap_id')) {
        obj['user_attribute_map_ldap_id'] = ApiClient.convertToType(data['user_attribute_map_ldap_id'], 'String');
      }
      if (data.hasOwnProperty('merge_new_users_by_email')) {
        obj['merge_new_users_by_email'] = ApiClient.convertToType(data['merge_new_users_by_email'], 'Boolean');
      }
      if (data.hasOwnProperty('alternate_email_login_allowed')) {
        obj['alternate_email_login_allowed'] = ApiClient.convertToType(data['alternate_email_login_allowed'], 'Boolean');
      }
      if (data.hasOwnProperty('modified_at')) {
        obj['modified_at'] = ApiClient.convertToType(data['modified_at'], 'String');
      }
      if (data.hasOwnProperty('modified_by')) {
        obj['modified_by'] = ApiClient.convertToType(data['modified_by'], 'String');
      }
      if (data.hasOwnProperty('default_new_user_groups')) {
        obj['default_new_user_groups'] = ApiClient.convertToType(data['default_new_user_groups'], [Group]);
      }
      if (data.hasOwnProperty('default_new_user_roles')) {
        obj['default_new_user_roles'] = ApiClient.convertToType(data['default_new_user_roles'], [Role]);
      }
      if (data.hasOwnProperty('default_new_user_role_ids')) {
        obj['default_new_user_role_ids'] = ApiClient.convertToType(data['default_new_user_role_ids'], ['Integer']);
      }
      if (data.hasOwnProperty('default_new_user_group_ids')) {
        obj['default_new_user_group_ids'] = ApiClient.convertToType(data['default_new_user_group_ids'], ['Integer']);
      }
      if (data.hasOwnProperty('set_roles_from_groups')) {
        obj['set_roles_from_groups'] = ApiClient.convertToType(data['set_roles_from_groups'], 'Boolean');
      }
      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], [LDAPGroupRead]);
      }
      if (data.hasOwnProperty('groups_with_role_ids')) {
        obj['groups_with_role_ids'] = ApiClient.convertToType(data['groups_with_role_ids'], [LDAPGroupWrite]);
      }
      if (data.hasOwnProperty('auth_requires_role')) {
        obj['auth_requires_role'] = ApiClient.convertToType(data['auth_requires_role'], 'Boolean');
      }
      if (data.hasOwnProperty('groups_finder_type')) {
        obj['groups_finder_type'] = ApiClient.convertToType(data['groups_finder_type'], 'String');
      }
      if (data.hasOwnProperty('groups_base_dn')) {
        obj['groups_base_dn'] = ApiClient.convertToType(data['groups_base_dn'], 'String');
      }
      if (data.hasOwnProperty('groups_member_attribute')) {
        obj['groups_member_attribute'] = ApiClient.convertToType(data['groups_member_attribute'], 'String');
      }
      if (data.hasOwnProperty('groups_user_attribute')) {
        obj['groups_user_attribute'] = ApiClient.convertToType(data['groups_user_attribute'], 'String');
      }
      if (data.hasOwnProperty('groups_objectclasses')) {
        obj['groups_objectclasses'] = ApiClient.convertToType(data['groups_objectclasses'], 'String');
      }
      if (data.hasOwnProperty('force_no_page')) {
        obj['force_no_page'] = ApiClient.convertToType(data['force_no_page'], 'Boolean');
      }
      if (data.hasOwnProperty('test_ldap_user')) {
        obj['test_ldap_user'] = ApiClient.convertToType(data['test_ldap_user'], 'String');
      }
      if (data.hasOwnProperty('test_ldap_password')) {
        obj['test_ldap_password'] = ApiClient.convertToType(data['test_ldap_password'], 'String');
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
   * Enable/Disable LDAP authentication for the server
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;

  /**
   * LDAP server hostname
   * @member {String} connection_host
   */
  exports.prototype['connection_host'] = undefined;

  /**
   * LDAP host port
   * @member {String} connection_port
   */
  exports.prototype['connection_port'] = undefined;

  /**
   * Use Transport Layer Security
   * @member {Boolean} connection_tls
   */
  exports.prototype['connection_tls'] = undefined;

  /**
   * Distinguished name of LDAP account used to access the LDAP server
   * @member {String} auth_username
   */
  exports.prototype['auth_username'] = undefined;

  /**
   * (Write-only) Password for the LDAP account used to access the LDAP server
   * @member {String} auth_password
   */
  exports.prototype['auth_password'] = undefined;

  /**
   * (Read-only) Has the password been set for the LDAP account used to access the LDAP server
   * @member {Boolean} has_auth_password
   */
  exports.prototype['has_auth_password'] = undefined;

  /**
   * Distinguished name of LDAP node used as the base for user searches
   * @member {String} user_bind_base_dn
   */
  exports.prototype['user_bind_base_dn'] = undefined;

  /**
   * Name(s) of user record attributes used for matching user login id (comma separated list)
   * @member {String} user_id_attribute_names
   */
  exports.prototype['user_id_attribute_names'] = undefined;

  /**
   * (Optional) Name of user record objectclass used for finding user during login id
   * @member {String} user_objectclass
   */
  exports.prototype['user_objectclass'] = undefined;

  /**
   * Name of user record attributes used to indicate email address field
   * @member {String} user_attribute_map_email
   */
  exports.prototype['user_attribute_map_email'] = undefined;

  /**
   * Name of user record attributes used to indicate first name
   * @member {String} user_attribute_map_first_name
   */
  exports.prototype['user_attribute_map_first_name'] = undefined;

  /**
   * Name of user record attributes used to indicate last name
   * @member {String} user_attribute_map_last_name
   */
  exports.prototype['user_attribute_map_last_name'] = undefined;

  /**
   * Name of user record attributes used to indicate unique record id
   * @member {String} user_attribute_map_ldap_id
   */
  exports.prototype['user_attribute_map_ldap_id'] = undefined;

  /**
   * Merge first-time ldap login to existing user account by email addresses. When a user logs in for the first time via ldap this option will connect this user into their existing account by finding the account with a matching email address. Otherwise a new user account will be created for the user.
   * @member {Boolean} merge_new_users_by_email
   */
  exports.prototype['merge_new_users_by_email'] = undefined;

  /**
   * Allow alternate email-based login via '/login/email' for admins and for specified users with the 'login_special_email' permission. This option is useful as a fallback during ldap setup, if ldap config problems occur later, or if you need to support some users who are not in your ldap directory. Looker email/password logins are always disabled for regular users when ldap is enabled.
   * @member {Boolean} alternate_email_login_allowed
   */
  exports.prototype['alternate_email_login_allowed'] = undefined;

  /**
   * When this config was last modified
   * @member {String} modified_at
   */
  exports.prototype['modified_at'] = undefined;

  /**
   * User id of user who last modified this config
   * @member {String} modified_by
   */
  exports.prototype['modified_by'] = undefined;

  /**
   * (Read-only) Groups that will be applied to new users the first time they login via LDAP
   * @member {Array.<module:model/Group>} default_new_user_groups
   */
  exports.prototype['default_new_user_groups'] = undefined;

  /**
   * (Read-only) Roles that will be applied to new users the first time they login via LDAP
   * @member {Array.<module:model/Role>} default_new_user_roles
   */
  exports.prototype['default_new_user_roles'] = undefined;

  /**
   * (Write-only) Array of ids of roles that will be applied to new users the first time they login via LDAP
   * @member {Array.<Integer>} default_new_user_role_ids
   */
  exports.prototype['default_new_user_role_ids'] = undefined;

  /**
   * (Write-only) Array of ids of groups that will be applied to new users the first time they login via LDAP
   * @member {Array.<Integer>} default_new_user_group_ids
   */
  exports.prototype['default_new_user_group_ids'] = undefined;

  /**
   * Set user roles in Looker based on groups from LDAP
   * @member {Boolean} set_roles_from_groups
   */
  exports.prototype['set_roles_from_groups'] = undefined;

  /**
   * (Read-only) Array of mappings between LDAP Groups and Looker Roles
   * @member {Array.<module:model/LDAPGroupRead>} groups
   */
  exports.prototype['groups'] = undefined;

  /**
   * (Read/Write) Array of mappings between LDAP Groups and arrays of Looker Role ids
   * @member {Array.<module:model/LDAPGroupWrite>} groups_with_role_ids
   */
  exports.prototype['groups_with_role_ids'] = undefined;

  /**
   * Users will not be allowed to login at all unless a role for them is found in LDAP if set to true
   * @member {Boolean} auth_requires_role
   */
  exports.prototype['auth_requires_role'] = undefined;

  /**
   * Identifier for a strategy for how Looker will search for groups in the LDAP server
   * @member {String} groups_finder_type
   */
  exports.prototype['groups_finder_type'] = undefined;

  /**
   * Base dn for finding groups in LDAP searches
   * @member {String} groups_base_dn
   */
  exports.prototype['groups_base_dn'] = undefined;

  /**
   * LDAP Group attribute that signifies the members of the groups. Most commonly 'member'
   * @member {String} groups_member_attribute
   */
  exports.prototype['groups_member_attribute'] = undefined;

  /**
   * LDAP Group attribute that signifies the user in a group. Most commonly 'dn'
   * @member {String} groups_user_attribute
   */
  exports.prototype['groups_user_attribute'] = undefined;

  /**
   * Optional comma-separated list of supported LDAP objectclass for groups when doing groups searches
   * @member {String} groups_objectclasses
   */
  exports.prototype['groups_objectclasses'] = undefined;

  /**
   * Don't attempt to do LDAP search result paging (RFC 2696) even if the LDAP server claims to support it.
   * @member {Boolean} force_no_page
   */
  exports.prototype['force_no_page'] = undefined;

  /**
   * (Write-only) Test LDAP user login id. For ldap tests only.
   * @member {String} test_ldap_user
   */
  exports.prototype['test_ldap_user'] = undefined;

  /**
   * (Write-only) Test LDAP user password. For ldap tests only.
   * @member {String} test_ldap_password
   */
  exports.prototype['test_ldap_password'] = undefined;

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
