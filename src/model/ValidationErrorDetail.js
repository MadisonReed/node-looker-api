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
    root.LookerApi30Reference.ValidationErrorDetail = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ValidationErrorDetail model module.
   * @module model/ValidationErrorDetail
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ValidationErrorDetail</code>.
   * @alias module:model/ValidationErrorDetail
   * @class
   * @param documentationUrl
   */
  var exports = function(documentationUrl) {




    this['documentation_url'] = documentationUrl;
  };

  /**
   * Constructs a <code>ValidationErrorDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidationErrorDetail} obj Optional instance to populate.
   * @return {module:model/ValidationErrorDetail} The populated <code>ValidationErrorDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('documentation_url')) {
        obj['documentation_url'] = ApiClient.convertToType(data['documentation_url'], 'String');
      }
    }
    return obj;
  }


  /**
   * Field with error
   * @member {String} field
   */
  exports.prototype['field'] = undefined;

  /**
   * Error code
   * @member {String} code
   */
  exports.prototype['code'] = undefined;

  /**
   * Error info message
   * @member {String} message
   */
  exports.prototype['message'] = undefined;

  /**
   * Documentation link
   * @member {String} documentation_url
   */
  exports.prototype['documentation_url'] = undefined;




  return exports;
}));
