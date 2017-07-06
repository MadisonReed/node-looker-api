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
    root.LookerApi30Reference.SpaceBase = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SpaceBase model module.
   * @module model/SpaceBase
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SpaceBase</code>.
   * @alias module:model/SpaceBase
   * @class
   */
  var exports = function() {
















  };

  /**
   * Constructs a <code>SpaceBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpaceBase} obj Optional instance to populate.
   * @return {module:model/SpaceBase} The populated <code>SpaceBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('content_metadata_id')) {
        obj['content_metadata_id'] = ApiClient.convertToType(data['content_metadata_id'], 'Integer');
      }
      if (data.hasOwnProperty('creator_id')) {
        obj['creator_id'] = ApiClient.convertToType(data['creator_id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('is_personal')) {
        obj['is_personal'] = ApiClient.convertToType(data['is_personal'], 'Boolean');
      }
      if (data.hasOwnProperty('is_personal_descendant')) {
        obj['is_personal_descendant'] = ApiClient.convertToType(data['is_personal_descendant'], 'Boolean');
      }
      if (data.hasOwnProperty('is_shared_root')) {
        obj['is_shared_root'] = ApiClient.convertToType(data['is_shared_root'], 'Boolean');
      }
      if (data.hasOwnProperty('is_users_root')) {
        obj['is_users_root'] = ApiClient.convertToType(data['is_users_root'], 'Boolean');
      }
      if (data.hasOwnProperty('is_root')) {
        obj['is_root'] = ApiClient.convertToType(data['is_root'], 'Boolean');
      }
      if (data.hasOwnProperty('is_user_root')) {
        obj['is_user_root'] = ApiClient.convertToType(data['is_user_root'], 'Boolean');
      }
      if (data.hasOwnProperty('is_embed')) {
        obj['is_embed'] = ApiClient.convertToType(data['is_embed'], 'Boolean');
      }
      if (data.hasOwnProperty('is_embed_shared_root')) {
        obj['is_embed_shared_root'] = ApiClient.convertToType(data['is_embed_shared_root'], 'Boolean');
      }
      if (data.hasOwnProperty('is_embed_users_root')) {
        obj['is_embed_users_root'] = ApiClient.convertToType(data['is_embed_users_root'], 'Boolean');
      }
      if (data.hasOwnProperty('external_id')) {
        obj['external_id'] = ApiClient.convertToType(data['external_id'], 'String');
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
   * Id of content metadata
   * @member {Integer} content_metadata_id
   */
  exports.prototype['content_metadata_id'] = undefined;

  /**
   * User Id of Creator
   * @member {Integer} creator_id
   */
  exports.prototype['creator_id'] = undefined;

  /**
   * Unique Name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Space is a user's personal space
   * @member {Boolean} is_personal
   */
  exports.prototype['is_personal'] = undefined;

  /**
   * Space is descendant of a user's personal space
   * @member {Boolean} is_personal_descendant
   */
  exports.prototype['is_personal_descendant'] = undefined;

  /**
   * Space is the root shared space
   * @member {Boolean} is_shared_root
   */
  exports.prototype['is_shared_root'] = undefined;

  /**
   * Space is the root user space
   * @member {Boolean} is_users_root
   */
  exports.prototype['is_users_root'] = undefined;

  /**
   * (DEPRECATED) Space is the root shared space (alias of is_shared_root)
   * @member {Boolean} is_root
   */
  exports.prototype['is_root'] = undefined;

  /**
   * (DEPRECATED) Space is the root user space (alias of is_users_root
   * @member {Boolean} is_user_root
   */
  exports.prototype['is_user_root'] = undefined;

  /**
   * Space is an embed space
   * @member {Boolean} is_embed
   */
  exports.prototype['is_embed'] = undefined;

  /**
   * Space is the root embed shared space
   * @member {Boolean} is_embed_shared_root
   */
  exports.prototype['is_embed_shared_root'] = undefined;

  /**
   * Space is the root embed users space
   * @member {Boolean} is_embed_users_root
   */
  exports.prototype['is_embed_users_root'] = undefined;

  /**
   * Embedder's Id if this space was autogenerated as an embedding shared space via 'external_group_id' in an SSO embed login
   * @member {String} external_id
   */
  exports.prototype['external_id'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
