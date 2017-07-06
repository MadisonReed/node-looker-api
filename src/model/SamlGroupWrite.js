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
    root.LookerApi30Reference.SamlGroupWrite = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SamlGroupWrite model module.
   * @module model/SamlGroupWrite
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SamlGroupWrite</code>.
   * @alias module:model/SamlGroupWrite
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>SamlGroupWrite</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SamlGroupWrite} obj Optional instance to populate.
   * @return {module:model/SamlGroupWrite} The populated <code>SamlGroupWrite</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('role_ids')) {
        obj['role_ids'] = ApiClient.convertToType(data['role_ids'], ['Integer']);
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
   * Name of group in Saml
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Looker Role Ids
   * @member {Array.<Integer>} role_ids
   */
  exports.prototype['role_ids'] = undefined;

  /**
   * Link to saml config
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
