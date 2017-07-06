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
    root.LookerApi30Reference.ApiVersionElement = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ApiVersionElement model module.
   * @module model/ApiVersionElement
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ApiVersionElement</code>.
   * @alias module:model/ApiVersionElement
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>ApiVersionElement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiVersionElement} obj Optional instance to populate.
   * @return {module:model/ApiVersionElement} The populated <code>ApiVersionElement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('full_version')) {
        obj['full_version'] = ApiClient.convertToType(data['full_version'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('swagger_url')) {
        obj['swagger_url'] = ApiClient.convertToType(data['swagger_url'], 'String');
      }
    }
    return obj;
  }


  /**
   * Version number as it appears in '/api/xxx/' urls
   * @member {String} version
   */
  exports.prototype['version'] = undefined;

  /**
   * Full version number including minor version
   * @member {String} full_version
   */
  exports.prototype['full_version'] = undefined;

  /**
   * Status of this version
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Url for swagger.json for this version
   * @member {String} swagger_url
   */
  exports.prototype['swagger_url'] = undefined;




  return exports;
}));
