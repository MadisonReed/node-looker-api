(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DashboardLayoutComponent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DashboardLayoutComponent'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.DashboardLayout = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.DashboardLayoutComponent);
  }
}(this, function(ApiClient, DashboardLayoutComponent) {
  'use strict';

  /**
   * The DashboardLayout model module.
   * @module model/DashboardLayout
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DashboardLayout</code>.
   * @alias module:model/DashboardLayout
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>DashboardLayout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DashboardLayout} obj Optional instance to populate.
   * @return {module:model/DashboardLayout} The populated <code>DashboardLayout</code> instance.
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
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('column_width')) {
        obj['column_width'] = ApiClient.convertToType(data['column_width'], 'Integer');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Integer');
      }
      if (data.hasOwnProperty('deleted')) {
        obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
      }
      if (data.hasOwnProperty('dashboard_layout_components')) {
        obj['dashboard_layout_components'] = ApiClient.convertToType(data['dashboard_layout_components'], [DashboardLayoutComponent]);
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
   * Type
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * Is Active
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;

  /**
   * Column Width
   * @member {Integer} column_width
   */
  exports.prototype['column_width'] = undefined;

  /**
   * Width
   * @member {Integer} width
   */
  exports.prototype['width'] = undefined;

  /**
   * Whether or not the dashboard layout is deleted.
   * @member {Boolean} deleted
   */
  exports.prototype['deleted'] = undefined;

  /**
   * Components
   * @member {Array.<module:model/DashboardLayoutComponent>} dashboard_layout_components
   */
  exports.prototype['dashboard_layout_components'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
