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
    root.LookerApi30Reference.Query = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Query model module.
   * @module model/Query
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Query</code>.
   * @alias module:model/Query
   * @class
   * @param model
   * @param view
   */
  var exports = function(model, view) {


    this['model'] = model;
    this['view'] = view;






















  };

  /**
   * Constructs a <code>Query</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Query} obj Optional instance to populate.
   * @return {module:model/Query} The populated <code>Query</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = ApiClient.convertToType(data['model'], 'String');
      }
      if (data.hasOwnProperty('view')) {
        obj['view'] = ApiClient.convertToType(data['view'], 'String');
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], ['String']);
      }
      if (data.hasOwnProperty('pivots')) {
        obj['pivots'] = ApiClient.convertToType(data['pivots'], ['String']);
      }
      if (data.hasOwnProperty('fill_fields')) {
        obj['fill_fields'] = ApiClient.convertToType(data['fill_fields'], ['String']);
      }
      if (data.hasOwnProperty('filters')) {
        obj['filters'] = ApiClient.convertToType(data['filters'], {'String': 'String'});
      }
      if (data.hasOwnProperty('filter_expression')) {
        obj['filter_expression'] = ApiClient.convertToType(data['filter_expression'], 'String');
      }
      if (data.hasOwnProperty('sorts')) {
        obj['sorts'] = ApiClient.convertToType(data['sorts'], ['String']);
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'String');
      }
      if (data.hasOwnProperty('column_limit')) {
        obj['column_limit'] = ApiClient.convertToType(data['column_limit'], 'String');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Boolean');
      }
      if (data.hasOwnProperty('row_total')) {
        obj['row_total'] = ApiClient.convertToType(data['row_total'], 'String');
      }
      if (data.hasOwnProperty('runtime')) {
        obj['runtime'] = ApiClient.convertToType(data['runtime'], 'Number');
      }
      if (data.hasOwnProperty('vis_config')) {
        obj['vis_config'] = ApiClient.convertToType(data['vis_config'], {'String': 'String'});
      }
      if (data.hasOwnProperty('filter_config')) {
        obj['filter_config'] = ApiClient.convertToType(data['filter_config'], {'String': 'String'});
      }
      if (data.hasOwnProperty('visible_ui_sections')) {
        obj['visible_ui_sections'] = ApiClient.convertToType(data['visible_ui_sections'], 'String');
      }
      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
      }
      if (data.hasOwnProperty('dynamic_fields')) {
        obj['dynamic_fields'] = ApiClient.convertToType(data['dynamic_fields'], ['String']);
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('share_url')) {
        obj['share_url'] = ApiClient.convertToType(data['share_url'], 'String');
      }
      if (data.hasOwnProperty('expanded_share_url')) {
        obj['expanded_share_url'] = ApiClient.convertToType(data['expanded_share_url'], 'String');
      }
      if (data.hasOwnProperty('query_timezone')) {
        obj['query_timezone'] = ApiClient.convertToType(data['query_timezone'], 'String');
      }
      if (data.hasOwnProperty('has_table_calculations')) {
        obj['has_table_calculations'] = ApiClient.convertToType(data['has_table_calculations'], 'Boolean');
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
   * Model
   * @member {String} model
   */
  exports.prototype['model'] = undefined;

  /**
   * View
   * @member {String} view
   */
  exports.prototype['view'] = undefined;

  /**
   * Fields
   * @member {Array.<String>} fields
   */
  exports.prototype['fields'] = undefined;

  /**
   * Pivots
   * @member {Array.<String>} pivots
   */
  exports.prototype['pivots'] = undefined;

  /**
   * Fill Fields
   * @member {Array.<String>} fill_fields
   */
  exports.prototype['fill_fields'] = undefined;

  /**
   * Filters
   * @member {Object.<String, String>} filters
   */
  exports.prototype['filters'] = undefined;

  /**
   * Filter Expression
   * @member {String} filter_expression
   */
  exports.prototype['filter_expression'] = undefined;

  /**
   * Sorts
   * @member {Array.<String>} sorts
   */
  exports.prototype['sorts'] = undefined;

  /**
   * Limit
   * @member {String} limit
   */
  exports.prototype['limit'] = undefined;

  /**
   * Column Limit
   * @member {String} column_limit
   */
  exports.prototype['column_limit'] = undefined;

  /**
   * Total
   * @member {Boolean} total
   */
  exports.prototype['total'] = undefined;

  /**
   * Raw Total
   * @member {String} row_total
   */
  exports.prototype['row_total'] = undefined;

  /**
   * Runtime
   * @member {Number} runtime
   */
  exports.prototype['runtime'] = undefined;

  /**
   * Visualization Config
   * @member {Object.<String, String>} vis_config
   */
  exports.prototype['vis_config'] = undefined;

  /**
   * Filter Config
   * @member {Object.<String, String>} filter_config
   */
  exports.prototype['filter_config'] = undefined;

  /**
   * Visible UI Sections
   * @member {String} visible_ui_sections
   */
  exports.prototype['visible_ui_sections'] = undefined;

  /**
   * Slug
   * @member {String} slug
   */
  exports.prototype['slug'] = undefined;

  /**
   * Dynamic Fields
   * @member {Array.<String>} dynamic_fields
   */
  exports.prototype['dynamic_fields'] = undefined;

  /**
   * Client Id
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;

  /**
   * Share Url
   * @member {String} share_url
   */
  exports.prototype['share_url'] = undefined;

  /**
   * Expanded Share Url
   * @member {String} expanded_share_url
   */
  exports.prototype['expanded_share_url'] = undefined;

  /**
   * Query Timezone
   * @member {String} query_timezone
   */
  exports.prototype['query_timezone'] = undefined;

  /**
   * Has Table Calculations
   * @member {Boolean} has_table_calculations
   */
  exports.prototype['has_table_calculations'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
