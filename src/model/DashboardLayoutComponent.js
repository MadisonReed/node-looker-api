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
    root.LookerApi30Reference.DashboardLayoutComponent = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DashboardLayoutComponent model module.
   * @module model/DashboardLayoutComponent
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DashboardLayoutComponent</code>.
   * @alias module:model/DashboardLayoutComponent
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>DashboardLayoutComponent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DashboardLayoutComponent} obj Optional instance to populate.
   * @return {module:model/DashboardLayoutComponent} The populated <code>DashboardLayoutComponent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('dashboard_layout_id')) {
        obj['dashboard_layout_id'] = ApiClient.convertToType(data['dashboard_layout_id'], 'String');
      }
      if (data.hasOwnProperty('dashboard_element_id')) {
        obj['dashboard_element_id'] = ApiClient.convertToType(data['dashboard_element_id'], 'String');
      }
      if (data.hasOwnProperty('row')) {
        obj['row'] = ApiClient.convertToType(data['row'], 'Integer');
      }
      if (data.hasOwnProperty('column')) {
        obj['column'] = ApiClient.convertToType(data['column'], 'Integer');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Integer');
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Integer');
      }
      if (data.hasOwnProperty('deleted')) {
        obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
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
   * Id of Dashboard Layout
   * @member {String} dashboard_layout_id
   */
  exports.prototype['dashboard_layout_id'] = undefined;

  /**
   * Id Of Dashboard Element
   * @member {String} dashboard_element_id
   */
  exports.prototype['dashboard_element_id'] = undefined;

  /**
   * Row
   * @member {Integer} row
   */
  exports.prototype['row'] = undefined;

  /**
   * Column
   * @member {Integer} column
   */
  exports.prototype['column'] = undefined;

  /**
   * Width
   * @member {Integer} width
   */
  exports.prototype['width'] = undefined;

  /**
   * Height
   * @member {Integer} height
   */
  exports.prototype['height'] = undefined;

  /**
   * Whether or not the dashboard layout component is deleted
   * @member {Boolean} deleted
   */
  exports.prototype['deleted'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
