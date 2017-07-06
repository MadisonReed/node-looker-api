(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DashboardBase', './LookBasic'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DashboardBase'), require('./LookBasic'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.ContentFavorite = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.DashboardBase, root.LookerApi30Reference.LookBasic);
  }
}(this, function(ApiClient, DashboardBase, LookBasic) {
  'use strict';

  /**
   * The ContentFavorite model module.
   * @module model/ContentFavorite
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ContentFavorite</code>.
   * @alias module:model/ContentFavorite
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>ContentFavorite</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentFavorite} obj Optional instance to populate.
   * @return {module:model/ContentFavorite} The populated <code>ContentFavorite</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Integer');
      }
      if (data.hasOwnProperty('look_id')) {
        obj['look_id'] = ApiClient.convertToType(data['look_id'], 'Integer');
      }
      if (data.hasOwnProperty('dashboard_id')) {
        obj['dashboard_id'] = ApiClient.convertToType(data['dashboard_id'], 'Integer');
      }
      if (data.hasOwnProperty('look')) {
        obj['look'] = LookBasic.constructFromObject(data['look']);
      }
      if (data.hasOwnProperty('dashboard')) {
        obj['dashboard'] = DashboardBase.constructFromObject(data['dashboard']);
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
   * User Id which owns this ContentFavorite
   * @member {Integer} user_id
   */
  exports.prototype['user_id'] = undefined;

  /**
   * Id of a look
   * @member {Integer} look_id
   */
  exports.prototype['look_id'] = undefined;

  /**
   * Id of a dashboard
   * @member {Integer} dashboard_id
   */
  exports.prototype['dashboard_id'] = undefined;

  /**
   * Associated Look
   * @member {module:model/LookBasic} look
   */
  exports.prototype['look'] = undefined;

  /**
   * Associated Dashboard
   * @member {module:model/DashboardBase} dashboard
   */
  exports.prototype['dashboard'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
