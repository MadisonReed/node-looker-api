(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.DataActionResponse = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.ValidationError);
  }
}(this, function(ApiClient, ValidationError) {
  'use strict';

  /**
   * The DataActionResponse model module.
   * @module model/DataActionResponse
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DataActionResponse</code>.
   * @alias module:model/DataActionResponse
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>DataActionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataActionResponse} obj Optional instance to populate.
   * @return {module:model/DataActionResponse} The populated <code>DataActionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('webhook_id')) {
        obj['webhook_id'] = ApiClient.convertToType(data['webhook_id'], 'String');
      }
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
      if (data.hasOwnProperty('refresh_query')) {
        obj['refresh_query'] = ApiClient.convertToType(data['refresh_query'], 'Boolean');
      }
      if (data.hasOwnProperty('validation_errors')) {
        obj['validation_errors'] = ValidationError.constructFromObject(data['validation_errors']);
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
   * ID of the webhook event that sent this data action. In some error conditions, this may be null.
   * @member {String} webhook_id
   */
  exports.prototype['webhook_id'] = undefined;

  /**
   * Whether the data action was successful.
   * @member {Boolean} success
   */
  exports.prototype['success'] = undefined;

  /**
   * When true, indicates that the client should refresh (rerun) the source query because the data may have been changed by the action.
   * @member {Boolean} refresh_query
   */
  exports.prototype['refresh_query'] = undefined;

  /**
   * Validation errors returned by the data action server.
   * @member {module:model/ValidationError} validation_errors
   */
  exports.prototype['validation_errors'] = undefined;

  /**
   * Optional message returned by the data action server describing the state of the action that took place. This can be used to implement custom failure messages. If a failure is related to a particular form field, the server should send back a validation error instead. The Looker web UI does not currently display any message if the action indicates 'success', but may do so in the future.
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
