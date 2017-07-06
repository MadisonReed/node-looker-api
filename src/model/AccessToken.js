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
    root.LookerApi30Reference.AccessToken = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AccessToken model module.
   * @module model/AccessToken
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>AccessToken</code>.
   * @alias module:model/AccessToken
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>AccessToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccessToken} obj Optional instance to populate.
   * @return {module:model/AccessToken} The populated <code>AccessToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('access_token')) {
        obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
      }
      if (data.hasOwnProperty('token_type')) {
        obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
      }
      if (data.hasOwnProperty('expires_in')) {
        obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * Access Token used for API calls
   * @member {String} access_token
   */
  exports.prototype['access_token'] = undefined;

  /**
   * Type of Token
   * @member {String} token_type
   */
  exports.prototype['token_type'] = undefined;

  /**
   * Number of seconds before the token expires
   * @member {Integer} expires_in
   */
  exports.prototype['expires_in'] = undefined;




  return exports;
}));
