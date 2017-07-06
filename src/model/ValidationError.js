(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ValidationErrorDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ValidationErrorDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.ValidationError = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.ValidationErrorDetail);
  }
}(this, function(ApiClient, ValidationErrorDetail) {
  'use strict';

  /**
   * The ValidationError model module.
   * @module model/ValidationError
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ValidationError</code>.
   * @alias module:model/ValidationError
   * @class
   * @param message
   * @param documentationUrl
   */
  var exports = function(message, documentationUrl) {

    this['message'] = message;

    this['documentation_url'] = documentationUrl;
  };

  /**
   * Constructs a <code>ValidationError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidationError} obj Optional instance to populate.
   * @return {module:model/ValidationError} The populated <code>ValidationError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [ValidationErrorDetail]);
      }
      if (data.hasOwnProperty('documentation_url')) {
        obj['documentation_url'] = ApiClient.convertToType(data['documentation_url'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;

  /**
   * Error detail array
   * @member {Array.<module:model/ValidationErrorDetail>} errors
   */
  exports.prototype['errors'] = undefined;

  /**
   * Documentation link
   * @member {String} documentation_url
   */
  exports.prototype['documentation_url'] = undefined;




  return exports;
}));
