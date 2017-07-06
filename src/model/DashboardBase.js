(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './LookModel', './ScheduledPlan', './SpaceBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LookModel'), require('./ScheduledPlan'), require('./SpaceBase'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.DashboardBase = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.LookModel, root.LookerApi30Reference.ScheduledPlan, root.LookerApi30Reference.SpaceBase);
  }
}(this, function(ApiClient, LookModel, ScheduledPlan, SpaceBase) {
  'use strict';

  /**
   * The DashboardBase model module.
   * @module model/DashboardBase
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DashboardBase</code>.
   * @alias module:model/DashboardBase
   * @class
   */
  var exports = function() {
















  };

  /**
   * Constructs a <code>DashboardBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DashboardBase} obj Optional instance to populate.
   * @return {module:model/DashboardBase} The populated <code>DashboardBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Integer');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('readonly')) {
        obj['readonly'] = ApiClient.convertToType(data['readonly'], 'Boolean');
      }
      if (data.hasOwnProperty('hidden')) {
        obj['hidden'] = ApiClient.convertToType(data['hidden'], 'Boolean');
      }
      if (data.hasOwnProperty('refresh_interval')) {
        obj['refresh_interval'] = ApiClient.convertToType(data['refresh_interval'], 'String');
      }
      if (data.hasOwnProperty('refresh_interval_to_i')) {
        obj['refresh_interval_to_i'] = ApiClient.convertToType(data['refresh_interval_to_i'], 'Integer');
      }
      if (data.hasOwnProperty('space')) {
        obj['space'] = SpaceBase.constructFromObject(data['space']);
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = LookModel.constructFromObject(data['model']);
      }
      if (data.hasOwnProperty('content_favorite_id')) {
        obj['content_favorite_id'] = ApiClient.convertToType(data['content_favorite_id'], 'Integer');
      }
      if (data.hasOwnProperty('scheduled_plan')) {
        obj['scheduled_plan'] = ScheduledPlan.constructFromObject(data['scheduled_plan']);
      }
      if (data.hasOwnProperty('content_metadata_id')) {
        obj['content_metadata_id'] = ApiClient.convertToType(data['content_metadata_id'], 'Integer');
      }
      if (data.hasOwnProperty('query_timezone')) {
        obj['query_timezone'] = ApiClient.convertToType(data['query_timezone'], 'String');
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
   * Id of User
   * @member {Integer} user_id
   */
  exports.prototype['user_id'] = undefined;

  /**
   * Look Title
   * @member {String} title
   */
  exports.prototype['title'] = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * Is Read-only
   * @member {Boolean} readonly
   */
  exports.prototype['readonly'] = undefined;

  /**
   * Is Hidden
   * @member {Boolean} hidden
   */
  exports.prototype['hidden'] = undefined;

  /**
   * Refresh Interval
   * @member {String} refresh_interval
   */
  exports.prototype['refresh_interval'] = undefined;

  /**
   * Refresh Interval as Integer
   * @member {Integer} refresh_interval_to_i
   */
  exports.prototype['refresh_interval_to_i'] = undefined;

  /**
   * Space
   * @member {module:model/SpaceBase} space
   */
  exports.prototype['space'] = undefined;

  /**
   * Model
   * @member {module:model/LookModel} model
   */
  exports.prototype['model'] = undefined;

  /**
   * Content Favorite Id
   * @member {Integer} content_favorite_id
   */
  exports.prototype['content_favorite_id'] = undefined;

  /**
   * ScheduledPlan
   * @member {module:model/ScheduledPlan} scheduled_plan
   */
  exports.prototype['scheduled_plan'] = undefined;

  /**
   * Id of content metadata
   * @member {Integer} content_metadata_id
   */
  exports.prototype['content_metadata_id'] = undefined;

  /**
   * Timezone in which the Dashboard will run by default.
   * @member {String} query_timezone
   */
  exports.prototype['query_timezone'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
