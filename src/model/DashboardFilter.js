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
    root.LookerApi30Reference.DashboardFilter = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DashboardFilter model module.
   * @module model/DashboardFilter
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DashboardFilter</code>.
   * @alias module:model/DashboardFilter
   * @class
   */
  var exports = function() {















  };

  /**
   * Constructs a <code>DashboardFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DashboardFilter} obj Optional instance to populate.
   * @return {module:model/DashboardFilter} The populated <code>DashboardFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('dashboard_id')) {
        obj['dashboard_id'] = ApiClient.convertToType(data['dashboard_id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('default_value')) {
        obj['default_value'] = ApiClient.convertToType(data['default_value'], 'String');
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = ApiClient.convertToType(data['model'], 'String');
      }
      if (data.hasOwnProperty('explore')) {
        obj['explore'] = ApiClient.convertToType(data['explore'], 'String');
      }
      if (data.hasOwnProperty('dimension')) {
        obj['dimension'] = ApiClient.convertToType(data['dimension'], 'String');
      }
      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], {'String': 'String'});
      }
      if (data.hasOwnProperty('row')) {
        obj['row'] = ApiClient.convertToType(data['row'], 'Integer');
      }
      if (data.hasOwnProperty('listens_to_filters')) {
        obj['listens_to_filters'] = ApiClient.convertToType(data['listens_to_filters'], ['String']);
      }
      if (data.hasOwnProperty('allow_multiple_values')) {
        obj['allow_multiple_values'] = ApiClient.convertToType(data['allow_multiple_values'], 'Boolean');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Unique Id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Id of Dashboard
   * @member {String} dashboard_id
   */
  exports.prototype['dashboard_id'] = undefined;

  /**
   * Name of filter
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Name of title
   * @member {String} title
   */
  exports.prototype['title'] = undefined;

  /**
   * Type of filter: one of date, number, string, or field
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * Default value of filter
   * @member {String} default_value
   */
  exports.prototype['default_value'] = undefined;

  /**
   * Model of filter (required if type = field)
   * @member {String} model
   */
  exports.prototype['model'] = undefined;

  /**
   * Explore of filter (required if type = field)
   * @member {String} explore
   */
  exports.prototype['explore'] = undefined;

  /**
   * Dimension of filter (required if type = field)
   * @member {String} dimension
   */
  exports.prototype['dimension'] = undefined;

  /**
   * Field information
   * @member {Object.<String, String>} field
   */
  exports.prototype['field'] = undefined;

  /**
   * Position of filter when displaying
   * @member {Integer} row
   */
  exports.prototype['row'] = undefined;

  /**
   * Array of listeners for faceted filters
   * @member {Array.<String>} listens_to_filters
   */
  exports.prototype['listens_to_filters'] = undefined;

  /**
   * Whether the filter allows multiple filter values
   * @member {Boolean} allow_multiple_values
   */
  exports.prototype['allow_multiple_values'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
