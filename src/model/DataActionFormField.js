(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DataActionFormSelectOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DataActionFormSelectOption'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.DataActionFormField = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.DataActionFormSelectOption);
  }
}(this, function(ApiClient, DataActionFormSelectOption) {
  'use strict';

  /**
   * The DataActionFormField model module.
   * @module model/DataActionFormField
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DataActionFormField</code>.
   * @alias module:model/DataActionFormField
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>DataActionFormField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataActionFormField} obj Optional instance to populate.
   * @return {module:model/DataActionFormField} The populated <code>DataActionFormField</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('required')) {
        obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = ApiClient.convertToType(data['options'], [DataActionFormSelectOption]);
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Human-readable label
   * @member {String} label
   */
  exports.prototype['label'] = undefined;

  /**
   * Description of field
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * Type of field.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * Whether or not the field is required. This is a user-interface hint. A user interface displaying this form should not submit it without a value for this field. The action server must also perform this validation.
   * @member {Boolean} required
   */
  exports.prototype['required'] = undefined;

  /**
   * If the form type is 'select', a list of options to be selected from.
   * @member {Array.<module:model/DataActionFormSelectOption>} options
   */
  exports.prototype['options'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
