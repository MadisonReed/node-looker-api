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
    root.LookerApi30Reference.ProjectError = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ProjectError model module.
   * @module model/ProjectError
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ProjectError</code>.
   * @alias module:model/ProjectError
   * @class
   */
  var exports = function() {













  };

  /**
   * Constructs a <code>ProjectError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectError} obj Optional instance to populate.
   * @return {module:model/ProjectError} The populated <code>ProjectError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('severity')) {
        obj['severity'] = ApiClient.convertToType(data['severity'], 'String');
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('field_name')) {
        obj['field_name'] = ApiClient.convertToType(data['field_name'], 'String');
      }
      if (data.hasOwnProperty('file_path')) {
        obj['file_path'] = ApiClient.convertToType(data['file_path'], 'String');
      }
      if (data.hasOwnProperty('line_number')) {
        obj['line_number'] = ApiClient.convertToType(data['line_number'], 'Integer');
      }
      if (data.hasOwnProperty('model_id')) {
        obj['model_id'] = ApiClient.convertToType(data['model_id'], 'String');
      }
      if (data.hasOwnProperty('explore')) {
        obj['explore'] = ApiClient.convertToType(data['explore'], 'String');
      }
      if (data.hasOwnProperty('help_url')) {
        obj['help_url'] = ApiClient.convertToType(data['help_url'], 'String');
      }
      if (data.hasOwnProperty('params')) {
        obj['params'] = ApiClient.convertToType(data['params'], {'String': 'String'});
      }
      if (data.hasOwnProperty('sanitized_message')) {
        obj['sanitized_message'] = ApiClient.convertToType(data['sanitized_message'], 'String');
      }
    }
    return obj;
  }


  /**
   * A stable token that uniquely identifies this class of error, ignoring parameter values. Error message text may vary due to parameters or localization, but error codes do not. For example, a \"File not found\" error will have the same error code regardless of the filename in question or the user's display language
   * @member {String} code
   */
  exports.prototype['code'] = undefined;

  /**
   * Severity: fatal, error, warning, info, success
   * @member {String} severity
   */
  exports.prototype['severity'] = undefined;

  /**
   * Error classification: syntax, deprecation, model_configuration, etc
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;

  /**
   * Error message which may contain information such as dashboard or model names that may be considered sensitive in some use cases. Avoid storing or sending this message outside of Looker
   * @member {String} message
   */
  exports.prototype['message'] = undefined;

  /**
   * The field associated with this error
   * @member {String} field_name
   */
  exports.prototype['field_name'] = undefined;

  /**
   * Name of the file containing this error
   * @member {String} file_path
   */
  exports.prototype['file_path'] = undefined;

  /**
   * Line number in the file of this error
   * @member {Integer} line_number
   */
  exports.prototype['line_number'] = undefined;

  /**
   * The model associated with this error
   * @member {String} model_id
   */
  exports.prototype['model_id'] = undefined;

  /**
   * The explore associated with this error
   * @member {String} explore
   */
  exports.prototype['explore'] = undefined;

  /**
   * A link to Looker documentation about this error
   * @member {String} help_url
   */
  exports.prototype['help_url'] = undefined;

  /**
   * Error parameters
   * @member {Object.<String, String>} params
   */
  exports.prototype['params'] = undefined;

  /**
   * A version of the error message that does not contain potentially sensitive information. Suitable for situations in which messages are stored or sent to consumers outside of Looker, such as external logs. Sanitized messages will display \"(?)\" where sensitive information would appear in the corresponding non-sanitized message
   * @member {String} sanitized_message
   */
  exports.prototype['sanitized_message'] = undefined;




  return exports;
}));
