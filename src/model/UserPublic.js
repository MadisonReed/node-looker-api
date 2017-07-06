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
    root.LookerApi30Reference.UserPublic = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UserPublic model module.
   * @module model/UserPublic
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>UserPublic</code>.
   * @alias module:model/UserPublic
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>UserPublic</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserPublic} obj Optional instance to populate.
   * @return {module:model/UserPublic} The populated <code>UserPublic</code> instance.
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
      if (data.hasOwnProperty('avatar_url')) {
        obj['avatar_url'] = ApiClient.convertToType(data['avatar_url'], 'String');
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
   * First Name
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;

  /**
   * Last Name
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;

  /**
   * Full name for display (available only if both first_name and last_name are set)
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;

  /**
   * URL for the avatar image (may be generic)
   * @member {String} avatar_url
   */
  exports.prototype['avatar_url'] = undefined;

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
