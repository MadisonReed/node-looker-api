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
    root.LookerApi30Reference.UserAttribute = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UserAttribute model module.
   * @module model/UserAttribute
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>UserAttribute</code>.
   * @alias module:model/UserAttribute
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>UserAttribute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAttribute} obj Optional instance to populate.
   * @return {module:model/UserAttribute} The populated <code>UserAttribute</code> instance.
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
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('default_value')) {
        obj['default_value'] = ApiClient.convertToType(data['default_value'], 'String');
      }
      if (data.hasOwnProperty('is_system')) {
        obj['is_system'] = ApiClient.convertToType(data['is_system'], 'Boolean');
      }
      if (data.hasOwnProperty('value_is_hidden')) {
        obj['value_is_hidden'] = ApiClient.convertToType(data['value_is_hidden'], 'Boolean');
      }
      if (data.hasOwnProperty('user_can_view')) {
        obj['user_can_view'] = ApiClient.convertToType(data['user_can_view'], 'Boolean');
      }
      if (data.hasOwnProperty('user_can_edit')) {
        obj['user_can_edit'] = ApiClient.convertToType(data['user_can_edit'], 'Boolean');
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
   * Type of user attribute (\"string\", \"number\", \"datetime\", \"yesno\", \"zipcode\")
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * Default value for when no value is set on the user
   * @member {String} default_value
   */
  exports.prototype['default_value'] = undefined;

  /**
   * Attribute is a system default
   * @member {Boolean} is_system
   */
  exports.prototype['is_system'] = undefined;

  /**
   * If true, users will not be able to view values of this attribute
   * @member {Boolean} value_is_hidden
   */
  exports.prototype['value_is_hidden'] = undefined;

  /**
   * Non-admin users can see the values of their attributes and use them in filters
   * @member {Boolean} user_can_view
   */
  exports.prototype['user_can_view'] = undefined;

  /**
   * Users can change the value of this attribute for themselves
   * @member {Boolean} user_can_edit
   */
  exports.prototype['user_can_edit'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
