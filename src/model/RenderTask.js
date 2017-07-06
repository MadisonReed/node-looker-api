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
    root.LookerApi30Reference.RenderTask = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RenderTask model module.
   * @module model/RenderTask
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>RenderTask</code>.
   * @alias module:model/RenderTask
   * @class
   */
  var exports = function() {




















  };

  /**
   * Constructs a <code>RenderTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RenderTask} obj Optional instance to populate.
   * @return {module:model/RenderTask} The populated <code>RenderTask</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
      if (data.hasOwnProperty('finalized_at')) {
        obj['finalized_at'] = ApiClient.convertToType(data['finalized_at'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('status_detail')) {
        obj['status_detail'] = ApiClient.convertToType(data['status_detail'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Integer');
      }
      if (data.hasOwnProperty('runtime')) {
        obj['runtime'] = ApiClient.convertToType(data['runtime'], 'Number');
      }
      if (data.hasOwnProperty('query_runtime')) {
        obj['query_runtime'] = ApiClient.convertToType(data['query_runtime'], 'Number');
      }
      if (data.hasOwnProperty('render_runtime')) {
        obj['render_runtime'] = ApiClient.convertToType(data['render_runtime'], 'Number');
      }
      if (data.hasOwnProperty('result_format')) {
        obj['result_format'] = ApiClient.convertToType(data['result_format'], 'String');
      }
      if (data.hasOwnProperty('look_id')) {
        obj['look_id'] = ApiClient.convertToType(data['look_id'], 'Integer');
      }
      if (data.hasOwnProperty('dashboard_id')) {
        obj['dashboard_id'] = ApiClient.convertToType(data['dashboard_id'], 'Integer');
      }
      if (data.hasOwnProperty('lookml_dashboard_id')) {
        obj['lookml_dashboard_id'] = ApiClient.convertToType(data['lookml_dashboard_id'], 'String');
      }
      if (data.hasOwnProperty('query_id')) {
        obj['query_id'] = ApiClient.convertToType(data['query_id'], 'Integer');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Integer');
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Integer');
      }
      if (data.hasOwnProperty('dashboard_style')) {
        obj['dashboard_style'] = ApiClient.convertToType(data['dashboard_style'], 'String');
      }
      if (data.hasOwnProperty('dashboard_filters')) {
        obj['dashboard_filters'] = ApiClient.convertToType(data['dashboard_filters'], 'String');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Id of this render task
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Date/Time render task was created
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;

  /**
   * Date/Time render task was completed
   * @member {String} finalized_at
   */
  exports.prototype['finalized_at'] = undefined;

  /**
   * Render task status: enqueued_for_query, querying, enqueued_for_render, rendering, success, failure
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Additional information about the current status
   * @member {String} status_detail
   */
  exports.prototype['status_detail'] = undefined;

  /**
   * The user account permissions in which the render task will execute
   * @member {Integer} user_id
   */
  exports.prototype['user_id'] = undefined;

  /**
   * Total seconds elapsed for render task
   * @member {Number} runtime
   */
  exports.prototype['runtime'] = undefined;

  /**
   * Number of seconds elapsed running queries
   * @member {Number} query_runtime
   */
  exports.prototype['query_runtime'] = undefined;

  /**
   * Number of seconds elapsed rendering data
   * @member {Number} render_runtime
   */
  exports.prototype['render_runtime'] = undefined;

  /**
   * Output format: pdf, png, or jpg
   * @member {String} result_format
   */
  exports.prototype['result_format'] = undefined;

  /**
   * Id of look to render
   * @member {Integer} look_id
   */
  exports.prototype['look_id'] = undefined;

  /**
   * Id of dashboard to render
   * @member {Integer} dashboard_id
   */
  exports.prototype['dashboard_id'] = undefined;

  /**
   * Id of lookml dashboard to render
   * @member {String} lookml_dashboard_id
   */
  exports.prototype['lookml_dashboard_id'] = undefined;

  /**
   * Id of query to render
   * @member {Integer} query_id
   */
  exports.prototype['query_id'] = undefined;

  /**
   * Output width in pixels
   * @member {Integer} width
   */
  exports.prototype['width'] = undefined;

  /**
   * Output height in pixels. Flowed layouts may ignore this value.
   * @member {Integer} height
   */
  exports.prototype['height'] = undefined;

  /**
   * Dashboard layout style: single_column or tiled
   * @member {String} dashboard_style
   */
  exports.prototype['dashboard_style'] = undefined;

  /**
   * Filter values to apply to the dashboard queries, in URL query format
   * @member {String} dashboard_filters
   */
  exports.prototype['dashboard_filters'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
