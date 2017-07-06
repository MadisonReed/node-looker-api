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
    root.LookerApi30Reference.Session = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Session model module.
   * @module model/Session
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Session</code>.
   * @alias module:model/Session
   * @class
   */
  var exports = function() {
















  };

  /**
   * Constructs a <code>Session</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Session} obj Optional instance to populate.
   * @return {module:model/Session} The populated <code>Session</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('ip_address')) {
        obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
      }
      if (data.hasOwnProperty('browser')) {
        obj['browser'] = ApiClient.convertToType(data['browser'], 'String');
      }
      if (data.hasOwnProperty('operating_system')) {
        obj['operating_system'] = ApiClient.convertToType(data['operating_system'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('credentials_type')) {
        obj['credentials_type'] = ApiClient.convertToType(data['credentials_type'], 'String');
      }
      if (data.hasOwnProperty('extended_at')) {
        obj['extended_at'] = ApiClient.convertToType(data['extended_at'], 'String');
      }
      if (data.hasOwnProperty('extended_count')) {
        obj['extended_count'] = ApiClient.convertToType(data['extended_count'], 'Integer');
      }
      if (data.hasOwnProperty('sudo_user_id')) {
        obj['sudo_user_id'] = ApiClient.convertToType(data['sudo_user_id'], 'Integer');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
      if (data.hasOwnProperty('expires_at')) {
        obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'String');
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
   * IP address of user when this session was initiated
   * @member {String} ip_address
   */
  exports.prototype['ip_address'] = undefined;

  /**
   * User's browser type
   * @member {String} browser
   */
  exports.prototype['browser'] = undefined;

  /**
   * User's Operating System
   * @member {String} operating_system
   */
  exports.prototype['operating_system'] = undefined;

  /**
   * City component of user location (derived from IP address)
   * @member {String} city
   */
  exports.prototype['city'] = undefined;

  /**
   * State component of user location (derived from IP address)
   * @member {String} state
   */
  exports.prototype['state'] = undefined;

  /**
   * Country component of user location (derived from IP address)
   * @member {String} country
   */
  exports.prototype['country'] = undefined;

  /**
   * Type of credentials used for logging in this session
   * @member {String} credentials_type
   */
  exports.prototype['credentials_type'] = undefined;

  /**
   * Time when this session was last extended by the user
   * @member {String} extended_at
   */
  exports.prototype['extended_at'] = undefined;

  /**
   * Number of times this session was extended
   * @member {Integer} extended_count
   */
  exports.prototype['extended_count'] = undefined;

  /**
   * Actual user in the case when this session represents one user sudo'ing as another
   * @member {Integer} sudo_user_id
   */
  exports.prototype['sudo_user_id'] = undefined;

  /**
   * Time when this session was initiated
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;

  /**
   * Time when this session will expire
   * @member {String} expires_at
   */
  exports.prototype['expires_at'] = undefined;

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
