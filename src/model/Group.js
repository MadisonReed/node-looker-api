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
    root.LookerApi30Reference.Group = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Group model module.
   * @module model/Group
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Group</code>.
   * @alias module:model/Group
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Group} obj Optional instance to populate.
   * @return {module:model/Group} The populated <code>Group</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('user_count')) {
        obj['user_count'] = ApiClient.convertToType(data['user_count'], 'Integer');
      }
      if (data.hasOwnProperty('contains_current_user')) {
        obj['contains_current_user'] = ApiClient.convertToType(data['contains_current_user'], 'Boolean');
      }
      if (data.hasOwnProperty('externally_managed')) {
        obj['externally_managed'] = ApiClient.convertToType(data['externally_managed'], 'Boolean');
      }
      if (data.hasOwnProperty('include_by_default')) {
        obj['include_by_default'] = ApiClient.convertToType(data['include_by_default'], 'Boolean');
      }
      if (data.hasOwnProperty('external_group_id')) {
        obj['external_group_id'] = ApiClient.convertToType(data['external_group_id'], 'String');
      }
      if (data.hasOwnProperty('can_add_to_content_metadata')) {
        obj['can_add_to_content_metadata'] = ApiClient.convertToType(data['can_add_to_content_metadata'], 'Boolean');
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
   * Name of group
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Number of users included in this group
   * @member {Integer} user_count
   */
  exports.prototype['user_count'] = undefined;

  /**
   * Currently logged in user is group member
   * @member {Boolean} contains_current_user
   */
  exports.prototype['contains_current_user'] = undefined;

  /**
   * Group membership controlled outside of Looker
   * @member {Boolean} externally_managed
   */
  exports.prototype['externally_managed'] = undefined;

  /**
   * New users are added to this group by default
   * @member {Boolean} include_by_default
   */
  exports.prototype['include_by_default'] = undefined;

  /**
   * External Id group if embed group
   * @member {String} external_group_id
   */
  exports.prototype['external_group_id'] = undefined;

  /**
   * Group can be used in content access controls
   * @member {Boolean} can_add_to_content_metadata
   */
  exports.prototype['can_add_to_content_metadata'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
