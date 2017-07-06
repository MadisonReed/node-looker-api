(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Group', './Role', './SamlGroupRead', './SamlGroupWrite', './SamlUserAttributeRead', './SamlUserAttributeWrite'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Group'), require('./Role'), require('./SamlGroupRead'), require('./SamlGroupWrite'), require('./SamlUserAttributeRead'), require('./SamlUserAttributeWrite'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.SamlConfig = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.Group, root.LookerApi30Reference.Role, root.LookerApi30Reference.SamlGroupRead, root.LookerApi30Reference.SamlGroupWrite, root.LookerApi30Reference.SamlUserAttributeRead, root.LookerApi30Reference.SamlUserAttributeWrite);
  }
}(this, function(ApiClient, Group, Role, SamlGroupRead, SamlGroupWrite, SamlUserAttributeRead, SamlUserAttributeWrite) {
  'use strict';

  /**
   * The SamlConfig model module.
   * @module model/SamlConfig
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SamlConfig</code>.
   * @alias module:model/SamlConfig
   * @class
   */
  var exports = function() {





























  };

  /**
   * Constructs a <code>SamlConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SamlConfig} obj Optional instance to populate.
   * @return {module:model/SamlConfig} The populated <code>SamlConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('idp_cert')) {
        obj['idp_cert'] = ApiClient.convertToType(data['idp_cert'], 'String');
      }
      if (data.hasOwnProperty('idp_url')) {
        obj['idp_url'] = ApiClient.convertToType(data['idp_url'], 'String');
      }
      if (data.hasOwnProperty('idp_issuer')) {
        obj['idp_issuer'] = ApiClient.convertToType(data['idp_issuer'], 'String');
      }
      if (data.hasOwnProperty('idp_audience')) {
        obj['idp_audience'] = ApiClient.convertToType(data['idp_audience'], 'String');
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
      if (data.hasOwnProperty('new_user_migration_types')) {
        obj['new_user_migration_types'] = ApiClient.convertToType(data['new_user_migration_types'], 'String');
      }
      if (data.hasOwnProperty('alternate_email_login_allowed')) {
        obj['alternate_email_login_allowed'] = ApiClient.convertToType(data['alternate_email_login_allowed'], 'Boolean');
      }
      if (data.hasOwnProperty('test_slug')) {
        obj['test_slug'] = ApiClient.convertToType(data['test_slug'], 'String');
      }
      if (data.hasOwnProperty('modified_at')) {
        obj['modified_at'] = ApiClient.convertToType(data['modified_at'], 'String');
      }
      if (data.hasOwnProperty('modified_by')) {
        obj['modified_by'] = ApiClient.convertToType(data['modified_by'], 'String');
      }
      if (data.hasOwnProperty('default_new_user_roles')) {
        obj['default_new_user_roles'] = ApiClient.convertToType(data['default_new_user_roles'], [Role]);
      }
      if (data.hasOwnProperty('default_new_user_groups')) {
        obj['default_new_user_groups'] = ApiClient.convertToType(data['default_new_user_groups'], [Group]);
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
      if (data.hasOwnProperty('groups_attribute')) {
        obj['groups_attribute'] = ApiClient.convertToType(data['groups_attribute'], 'String');
      }
      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], [SamlGroupRead]);
      }
      if (data.hasOwnProperty('groups_with_role_ids')) {
        obj['groups_with_role_ids'] = ApiClient.convertToType(data['groups_with_role_ids'], [SamlGroupWrite]);
      }
      if (data.hasOwnProperty('auth_requires_role')) {
        obj['auth_requires_role'] = ApiClient.convertToType(data['auth_requires_role'], 'Boolean');
      }
      if (data.hasOwnProperty('user_attributes')) {
        obj['user_attributes'] = ApiClient.convertToType(data['user_attributes'], [SamlUserAttributeRead]);
      }
      if (data.hasOwnProperty('user_attributes_with_ids')) {
        obj['user_attributes_with_ids'] = ApiClient.convertToType(data['user_attributes_with_ids'], [SamlUserAttributeWrite]);
      }
      if (data.hasOwnProperty('groups_finder_type')) {
        obj['groups_finder_type'] = ApiClient.convertToType(data['groups_finder_type'], 'String');
      }
      if (data.hasOwnProperty('groups_member_value')) {
        obj['groups_member_value'] = ApiClient.convertToType(data['groups_member_value'], 'String');
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
   * Enable/Disable Saml authentication for the server
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;

  /**
   * Identify Provider Certificate (provided by IdP)
   * @member {String} idp_cert
   */
  exports.prototype['idp_cert'] = undefined;

  /**
   * Identify Provider Url (provided by IdP)
   * @member {String} idp_url
   */
  exports.prototype['idp_url'] = undefined;

  /**
   * Identify Provider Issuer (provided by IdP)
   * @member {String} idp_issuer
   */
  exports.prototype['idp_issuer'] = undefined;

  /**
   * Identify Provider Audience (set in IdP config). Optional in Looker. Set this only if you want Looker to validate the audience value returned by the IdP.
   * @member {String} idp_audience
   */
  exports.prototype['idp_audience'] = undefined;

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
   * Merge first-time saml login to existing user account by email addresses. When a user logs in for the first time via saml this option will connect this user into their existing account by finding the account with a matching email address by testing the given types of credentials for existing users. Otherwise a new user account will be created for the user. This list (if provided) must be a comma separated list of string like 'email,ldap,google'
   * @member {String} new_user_migration_types
   */
  exports.prototype['new_user_migration_types'] = undefined;

  /**
   * Allow alternate email-based login via '/login/email' for admins and for specified users with the 'login_special_email' permission. This option is useful as a fallback during ldap setup, if ldap config problems occur later, or if you need to support some users who are not in your ldap directory. Looker email/password logins are always disabled for regular users when ldap is enabled.
   * @member {Boolean} alternate_email_login_allowed
   */
  exports.prototype['alternate_email_login_allowed'] = undefined;

  /**
   * Slug to identify configurations that are created in order to run a Saml config test
   * @member {String} test_slug
   */
  exports.prototype['test_slug'] = undefined;

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
   * (Read-only) Roles that will be applied to new users the first time they login via Saml
   * @member {Array.<module:model/Role>} default_new_user_roles
   */
  exports.prototype['default_new_user_roles'] = undefined;

  /**
   * (Read-only) Groups that will be applied to new users the first time they login via Saml
   * @member {Array.<module:model/Group>} default_new_user_groups
   */
  exports.prototype['default_new_user_groups'] = undefined;

  /**
   * (Write-only) Array of ids of roles that will be applied to new users the first time they login via Saml
   * @member {Array.<Integer>} default_new_user_role_ids
   */
  exports.prototype['default_new_user_role_ids'] = undefined;

  /**
   * (Write-only) Array of ids of groups that will be applied to new users the first time they login via Saml
   * @member {Array.<Integer>} default_new_user_group_ids
   */
  exports.prototype['default_new_user_group_ids'] = undefined;

  /**
   * Set user roles in Looker based on groups from Saml
   * @member {Boolean} set_roles_from_groups
   */
  exports.prototype['set_roles_from_groups'] = undefined;

  /**
   * Name of user record attributes used to indicate groups. Used when 'groups_finder_type' is set to 'grouped_attribute_values'
   * @member {String} groups_attribute
   */
  exports.prototype['groups_attribute'] = undefined;

  /**
   * (Read-only) Array of mappings between Saml Groups and Looker Roles
   * @member {Array.<module:model/SamlGroupRead>} groups
   */
  exports.prototype['groups'] = undefined;

  /**
   * (Read/Write) Array of mappings between Saml Groups and arrays of Looker Role ids
   * @member {Array.<module:model/SamlGroupWrite>} groups_with_role_ids
   */
  exports.prototype['groups_with_role_ids'] = undefined;

  /**
   * Users will not be allowed to login at all unless a role for them is found in Saml if set to true
   * @member {Boolean} auth_requires_role
   */
  exports.prototype['auth_requires_role'] = undefined;

  /**
   * (Read-only) Array of mappings between Saml User Attributes and Looker User Attributes
   * @member {Array.<module:model/SamlUserAttributeRead>} user_attributes
   */
  exports.prototype['user_attributes'] = undefined;

  /**
   * (Read/Write) Array of mappings between Saml User Attributes and arrays of Looker User Attribute ids
   * @member {Array.<module:model/SamlUserAttributeWrite>} user_attributes_with_ids
   */
  exports.prototype['user_attributes_with_ids'] = undefined;

  /**
   * Identifier for a strategy for how Looker will find groups in the SAML response. One of ['grouped_attribute_values', 'individual_attributes']
   * @member {String} groups_finder_type
   */
  exports.prototype['groups_finder_type'] = undefined;

  /**
   * Value for group attribute used to indicate membership. Used when 'groups_finder_type' is set to 'individual_attributes'
   * @member {String} groups_member_value
   */
  exports.prototype['groups_member_value'] = undefined;

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
