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
    root.LookerApi30Reference.SamlMetadataParseResult = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SamlMetadataParseResult model module.
   * @module model/SamlMetadataParseResult
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SamlMetadataParseResult</code>.
   * @alias module:model/SamlMetadataParseResult
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>SamlMetadataParseResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SamlMetadataParseResult} obj Optional instance to populate.
   * @return {module:model/SamlMetadataParseResult} The populated <code>SamlMetadataParseResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idp_issuer')) {
        obj['idp_issuer'] = ApiClient.convertToType(data['idp_issuer'], 'String');
      }
      if (data.hasOwnProperty('idp_url')) {
        obj['idp_url'] = ApiClient.convertToType(data['idp_url'], 'String');
      }
      if (data.hasOwnProperty('idp_cert')) {
        obj['idp_cert'] = ApiClient.convertToType(data['idp_cert'], 'String');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Identify Provider Issuer
   * @member {String} idp_issuer
   */
  exports.prototype['idp_issuer'] = undefined;

  /**
   * Identify Provider Url
   * @member {String} idp_url
   */
  exports.prototype['idp_url'] = undefined;

  /**
   * Identify Provider Certificate
   * @member {String} idp_cert
   */
  exports.prototype['idp_cert'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
