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
    root.LookerApi30Reference.Datagroup = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Datagroup model module.
   * @module model/Datagroup
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Datagroup</code>.
   * @alias module:model/Datagroup
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>Datagroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Datagroup} obj Optional instance to populate.
   * @return {module:model/Datagroup} The populated <code>Datagroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('model_name')) {
        obj['model_name'] = ApiClient.convertToType(data['model_name'], 'String');
      }
      if (data.hasOwnProperty('trigger_value')) {
        obj['trigger_value'] = ApiClient.convertToType(data['trigger_value'], 'String');
      }
      if (data.hasOwnProperty('trigger_error')) {
        obj['trigger_error'] = ApiClient.convertToType(data['trigger_error'], 'String');
      }
      if (data.hasOwnProperty('stale_before')) {
        obj['stale_before'] = ApiClient.convertToType(data['stale_before'], 'Integer');
      }
      if (data.hasOwnProperty('triggered_at')) {
        obj['triggered_at'] = ApiClient.convertToType(data['triggered_at'], 'Integer');
      }
      if (data.hasOwnProperty('trigger_check_at')) {
        obj['trigger_check_at'] = ApiClient.convertToType(data['trigger_check_at'], 'Integer');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Integer');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * ID of the datagroup. Also used as the unique identifier.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Name of the datagroup. Unique when combined with model_name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Name of the model containing the datagroup. Unique when combined with name.
   * @member {String} model_name
   */
  exports.prototype['model_name'] = undefined;

  /**
   * The value of the trigger when last checked.
   * @member {String} trigger_value
   */
  exports.prototype['trigger_value'] = undefined;

  /**
   * The message returned with the error of the last trigger check.
   * @member {String} trigger_error
   */
  exports.prototype['trigger_error'] = undefined;

  /**
   * UNIX timestamp before which cache entries are considered stale. Cannot be in the future.
   * @member {Integer} stale_before
   */
  exports.prototype['stale_before'] = undefined;

  /**
   * UNIX timestamp at which this entry became triggered. Cannot be in the future.
   * @member {Integer} triggered_at
   */
  exports.prototype['triggered_at'] = undefined;

  /**
   * UNIX timestamp at which this entry trigger was last checked.
   * @member {Integer} trigger_check_at
   */
  exports.prototype['trigger_check_at'] = undefined;

  /**
   * UNIX timestamp at which this entry was created.
   * @member {Integer} created_at
   */
  exports.prototype['created_at'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
