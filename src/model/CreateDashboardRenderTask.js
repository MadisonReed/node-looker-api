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
    root.LookerApi30Reference.CreateDashboardRenderTask = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreateDashboardRenderTask model module.
   * @module model/CreateDashboardRenderTask
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>CreateDashboardRenderTask</code>.
   * @alias module:model/CreateDashboardRenderTask
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>CreateDashboardRenderTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateDashboardRenderTask} obj Optional instance to populate.
   * @return {module:model/CreateDashboardRenderTask} The populated <code>CreateDashboardRenderTask</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

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
