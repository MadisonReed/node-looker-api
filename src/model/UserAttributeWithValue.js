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
    root.LookerApi30Reference.UserAttributeWithValue = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UserAttributeWithValue model module.
   * @module model/UserAttributeWithValue
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>UserAttributeWithValue</code>.
   * @alias module:model/UserAttributeWithValue
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>UserAttributeWithValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAttributeWithValue} obj Optional instance to populate.
   * @return {module:model/UserAttributeWithValue} The populated <code>UserAttributeWithValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('rank')) {
        obj['rank'] = ApiClient.convertToType(data['rank'], 'Integer');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Integer');
      }
      if (data.hasOwnProperty('user_can_edit')) {
        obj['user_can_edit'] = ApiClient.convertToType(data['user_can_edit'], 'Boolean');
      }
      if (data.hasOwnProperty('value_is_hidden')) {
        obj['value_is_hidden'] = ApiClient.convertToType(data['value_is_hidden'], 'Boolean');
      }
      if (data.hasOwnProperty('user_attribute_id')) {
        obj['user_attribute_id'] = ApiClient.convertToType(data['user_attribute_id'], 'Integer');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Name of user attribute
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Human-friendly label for user attribute
   * @member {String} label
   */
  exports.prototype['label'] = undefined;

  /**
   * Precedence for setting value on user (lowest wins)
   * @member {Integer} rank
   */
  exports.prototype['rank'] = undefined;

  /**
   * Value of attribute for user
   * @member {String} value
   */
  exports.prototype['value'] = undefined;

  /**
   * Id of User
   * @member {Integer} user_id
   */
  exports.prototype['user_id'] = undefined;

  /**
   * Can the user set this value
   * @member {Boolean} user_can_edit
   */
  exports.prototype['user_can_edit'] = undefined;

  /**
   * If true, the \"value\" field will be null, because the attribute settings block access to this value
   * @member {Boolean} value_is_hidden
   */
  exports.prototype['value_is_hidden'] = undefined;

  /**
   * Id of User Attribute
   * @member {Integer} user_attribute_id
   */
  exports.prototype['user_attribute_id'] = undefined;

  /**
   * How user got this value for this attribute
   * @member {String} source
   */
  exports.prototype['source'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
