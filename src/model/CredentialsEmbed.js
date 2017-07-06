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
    root.LookerApi30Reference.CredentialsEmbed = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CredentialsEmbed model module.
   * @module model/CredentialsEmbed
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>CredentialsEmbed</code>.
   * @alias module:model/CredentialsEmbed
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>CredentialsEmbed</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CredentialsEmbed} obj Optional instance to populate.
   * @return {module:model/CredentialsEmbed} The populated <code>CredentialsEmbed</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('external_user_id')) {
        obj['external_user_id'] = ApiClient.convertToType(data['external_user_id'], 'String');
      }
      if (data.hasOwnProperty('external_group_id')) {
        obj['external_group_id'] = ApiClient.convertToType(data['external_group_id'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
      if (data.hasOwnProperty('logged_in_at')) {
        obj['logged_in_at'] = ApiClient.convertToType(data['logged_in_at'], 'String');
      }
      if (data.hasOwnProperty('is_disabled')) {
        obj['is_disabled'] = ApiClient.convertToType(data['is_disabled'], 'Boolean');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
   * Embedder's unique id for the user
   * @member {String} external_user_id
   */
  exports.prototype['external_user_id'] = undefined;

  /**
   * Embedder's id for a group to which this user was added during the most recent login
   * @member {String} external_group_id
   */
  exports.prototype['external_group_id'] = undefined;

  /**
   * Timestamp for the creation of this credential
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;

  /**
   * Timestamp for most recent login using credential
   * @member {String} logged_in_at
   */
  exports.prototype['logged_in_at'] = undefined;

  /**
   * Has this credential been disabled?
   * @member {Boolean} is_disabled
   */
  exports.prototype['is_disabled'] = undefined;

  /**
   * Short name for the type of this kind of credential
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

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
