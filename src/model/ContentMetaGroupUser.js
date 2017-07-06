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
    root.LookerApi30Reference.ContentMetaGroupUser = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ContentMetaGroupUser model module.
   * @module model/ContentMetaGroupUser
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ContentMetaGroupUser</code>.
   * @alias module:model/ContentMetaGroupUser
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>ContentMetaGroupUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentMetaGroupUser} obj Optional instance to populate.
   * @return {module:model/ContentMetaGroupUser} The populated <code>ContentMetaGroupUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('content_metadata_id')) {
        obj['content_metadata_id'] = ApiClient.convertToType(data['content_metadata_id'], 'String');
      }
      if (data.hasOwnProperty('permission_type')) {
        obj['permission_type'] = ApiClient.convertToType(data['permission_type'], 'String');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Integer');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Integer');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Unique Id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Id of associated Content Metadata
   * @member {String} content_metadata_id
   */
  exports.prototype['content_metadata_id'] = undefined;

  /**
   * Type of permission: \"view\" or \"edit\"
   * @member {String} permission_type
   */
  exports.prototype['permission_type'] = undefined;

  /**
   * ID of associated group
   * @member {Integer} group_id
   */
  exports.prototype['group_id'] = undefined;

  /**
   * ID of associated user
   * @member {Integer} user_id
   */
  exports.prototype['user_id'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
