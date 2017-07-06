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
    root.LookerApi30Reference.UserAttributeGroupValue = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UserAttributeGroupValue model module.
   * @module model/UserAttributeGroupValue
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>UserAttributeGroupValue</code>.
   * @alias module:model/UserAttributeGroupValue
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>UserAttributeGroupValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAttributeGroupValue} obj Optional instance to populate.
   * @return {module:model/UserAttributeGroupValue} The populated <code>UserAttributeGroupValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Integer');
      }
      if (data.hasOwnProperty('user_attribute_id')) {
        obj['user_attribute_id'] = ApiClient.convertToType(data['user_attribute_id'], 'Integer');
      }
      if (data.hasOwnProperty('value_is_hidden')) {
        obj['value_is_hidden'] = ApiClient.convertToType(data['value_is_hidden'], 'Boolean');
      }
      if (data.hasOwnProperty('rank')) {
        obj['rank'] = ApiClient.convertToType(data['rank'], 'Integer');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Unique Id of this group-attribute relation
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Id of group
   * @member {Integer} group_id
   */
  exports.prototype['group_id'] = undefined;

  /**
   * Id of user attribute
   * @member {Integer} user_attribute_id
   */
  exports.prototype['user_attribute_id'] = undefined;

  /**
   * If true, the \"value\" field will be null, because the attribute settings block access to this value
   * @member {Boolean} value_is_hidden
   */
  exports.prototype['value_is_hidden'] = undefined;

  /**
   * Precedence for resolving value for user
   * @member {Integer} rank
   */
  exports.prototype['rank'] = undefined;

  /**
   * Value of user attribute for group
   * @member {String} value
   */
  exports.prototype['value'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
