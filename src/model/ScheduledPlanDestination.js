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
    root.LookerApi30Reference.ScheduledPlanDestination = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ScheduledPlanDestination model module.
   * @module model/ScheduledPlanDestination
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ScheduledPlanDestination</code>.
   * @alias module:model/ScheduledPlanDestination
   * @class
   */
  var exports = function() {













  };

  /**
   * Constructs a <code>ScheduledPlanDestination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScheduledPlanDestination} obj Optional instance to populate.
   * @return {module:model/ScheduledPlanDestination} The populated <code>ScheduledPlanDestination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('scheduled_plan_id')) {
        obj['scheduled_plan_id'] = ApiClient.convertToType(data['scheduled_plan_id'], 'Integer');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('apply_formatting')) {
        obj['apply_formatting'] = ApiClient.convertToType(data['apply_formatting'], 'Boolean');
      }
      if (data.hasOwnProperty('apply_vis')) {
        obj['apply_vis'] = ApiClient.convertToType(data['apply_vis'], 'Boolean');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('looker_recipient')) {
        obj['looker_recipient'] = ApiClient.convertToType(data['looker_recipient'], 'Boolean');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = ApiClient.convertToType(data['parameters'], 'String');
      }
      if (data.hasOwnProperty('secret_parameters')) {
        obj['secret_parameters'] = ApiClient.convertToType(data['secret_parameters'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
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
   * Id of a scheduled plan you own
   * @member {Integer} scheduled_plan_id
   */
  exports.prototype['scheduled_plan_id'] = undefined;

  /**
   * Format requested by the given destination (i.e. PDF, etc.)
   * @member {String} format
   */
  exports.prototype['format'] = undefined;

  /**
   * Are values formatted? (containing currency symbols, digit separators, etc.
   * @member {Boolean} apply_formatting
   */
  exports.prototype['apply_formatting'] = undefined;

  /**
   * Whether visualization options are applied to the results.
   * @member {Boolean} apply_vis
   */
  exports.prototype['apply_vis'] = undefined;

  /**
   * Address for recipient. For email e.g. 'user@example.com'. For webhooks e.g. 'https://domain/path'. For Amazon S3 e.g. 's3://bucket-name/path/'. For SFTP e.g. 'sftp://host-name/path/'. 
   * @member {String} address
   */
  exports.prototype['address'] = undefined;

  /**
   * Whether the recipient is a Looker user on the current instance (only applicable for email recipients)
   * @member {Boolean} looker_recipient
   */
  exports.prototype['looker_recipient'] = undefined;

  /**
   * Type of the address ('email', 'webhook', 's3', or 'sftp')
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * JSON object containing parameters for external scheduling. For Amazon S3, this requires keys and values for access_key_id and region. For SFTP, this requires a key and value for username.
   * @member {String} parameters
   */
  exports.prototype['parameters'] = undefined;

  /**
   * (Write-only) JSON object containing secret parameters for external scheduling. For Amazon S3, this requires a key and value for secret_access_key. For SFTP, this requires a key and value for password.
   * @member {String} secret_parameters
   */
  exports.prototype['secret_parameters'] = undefined;

  /**
   * Optional message to be included in scheduled emails
   * @member {String} message
   */
  exports.prototype['message'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
