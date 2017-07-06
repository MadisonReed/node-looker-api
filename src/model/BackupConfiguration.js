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
    root.LookerApi30Reference.BackupConfiguration = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BackupConfiguration model module.
   * @module model/BackupConfiguration
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BackupConfiguration</code>.
   * @alias module:model/BackupConfiguration
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>BackupConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BackupConfiguration} obj Optional instance to populate.
   * @return {module:model/BackupConfiguration} The populated <code>BackupConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('custom_s3_bucket')) {
        obj['custom_s3_bucket'] = ApiClient.convertToType(data['custom_s3_bucket'], 'String');
      }
      if (data.hasOwnProperty('custom_s3_bucket_region')) {
        obj['custom_s3_bucket_region'] = ApiClient.convertToType(data['custom_s3_bucket_region'], 'String');
      }
      if (data.hasOwnProperty('custom_s3_key')) {
        obj['custom_s3_key'] = ApiClient.convertToType(data['custom_s3_key'], 'String');
      }
      if (data.hasOwnProperty('custom_s3_secret')) {
        obj['custom_s3_secret'] = ApiClient.convertToType(data['custom_s3_secret'], 'String');
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
   * Type of backup: looker-s3 or custom-s3
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * Name of bucket for custom-s3 backups
   * @member {String} custom_s3_bucket
   */
  exports.prototype['custom_s3_bucket'] = undefined;

  /**
   * Name of region where the bucket is located
   * @member {String} custom_s3_bucket_region
   */
  exports.prototype['custom_s3_bucket_region'] = undefined;

  /**
   * AWS S3 key used for custom-s3 backups
   * @member {String} custom_s3_key
   */
  exports.prototype['custom_s3_key'] = undefined;

  /**
   * AWS S3 secret used for custom-s3 backups
   * @member {String} custom_s3_secret
   */
  exports.prototype['custom_s3_secret'] = undefined;

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
