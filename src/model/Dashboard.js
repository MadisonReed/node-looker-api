(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DashboardElement', './DashboardFilter', './DashboardLayout', './LookModel', './SpaceBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DashboardElement'), require('./DashboardFilter'), require('./DashboardLayout'), require('./LookModel'), require('./SpaceBase'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.Dashboard = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.DashboardElement, root.LookerApi30Reference.DashboardFilter, root.LookerApi30Reference.DashboardLayout, root.LookerApi30Reference.LookModel, root.LookerApi30Reference.SpaceBase);
  }
}(this, function(ApiClient, DashboardElement, DashboardFilter, DashboardLayout, LookModel, SpaceBase) {
  'use strict';

  /**
   * The Dashboard model module.
   * @module model/Dashboard
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Dashboard</code>.
   * @alias module:model/Dashboard
   * @class
   */
  var exports = function() {





































  };

  /**
   * Constructs a <code>Dashboard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Dashboard} obj Optional instance to populate.
   * @return {module:model/Dashboard} The populated <code>Dashboard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('content_metadata_id')) {
        obj['content_metadata_id'] = ApiClient.convertToType(data['content_metadata_id'], 'Integer');
      }
      if (data.hasOwnProperty('content_favorite_id')) {
        obj['content_favorite_id'] = ApiClient.convertToType(data['content_favorite_id'], 'Integer');
      }
      if (data.hasOwnProperty('view_count')) {
        obj['view_count'] = ApiClient.convertToType(data['view_count'], 'Integer');
      }
      if (data.hasOwnProperty('last_accessed_at')) {
        obj['last_accessed_at'] = ApiClient.convertToType(data['last_accessed_at'], 'Date');
      }
      if (data.hasOwnProperty('favorite_count')) {
        obj['favorite_count'] = ApiClient.convertToType(data['favorite_count'], 'Integer');
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
      if (data.hasOwnProperty('load_configuration')) {
        obj['load_configuration'] = ApiClient.convertToType(data['load_configuration'], 'String');
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = LookModel.constructFromObject(data['model']);
      }
      if (data.hasOwnProperty('space_id')) {
        obj['space_id'] = ApiClient.convertToType(data['space_id'], 'String');
      }
      if (data.hasOwnProperty('dashboard_elements')) {
        obj['dashboard_elements'] = ApiClient.convertToType(data['dashboard_elements'], [DashboardElement]);
      }
      if (data.hasOwnProperty('dashboard_layouts')) {
        obj['dashboard_layouts'] = ApiClient.convertToType(data['dashboard_layouts'], [DashboardLayout]);
      }
      if (data.hasOwnProperty('dashboard_filters')) {
        obj['dashboard_filters'] = ApiClient.convertToType(data['dashboard_filters'], [DashboardFilter]);
      }
      if (data.hasOwnProperty('last_viewed_at')) {
        obj['last_viewed_at'] = ApiClient.convertToType(data['last_viewed_at'], 'Date');
      }
      if (data.hasOwnProperty('background_color')) {
        obj['background_color'] = ApiClient.convertToType(data['background_color'], 'String');
      }
      if (data.hasOwnProperty('show_title')) {
        obj['show_title'] = ApiClient.convertToType(data['show_title'], 'Boolean');
      }
      if (data.hasOwnProperty('title_color')) {
        obj['title_color'] = ApiClient.convertToType(data['title_color'], 'String');
      }
      if (data.hasOwnProperty('show_filters_bar')) {
        obj['show_filters_bar'] = ApiClient.convertToType(data['show_filters_bar'], 'Boolean');
      }
      if (data.hasOwnProperty('tile_background_color')) {
        obj['tile_background_color'] = ApiClient.convertToType(data['tile_background_color'], 'String');
      }
      if (data.hasOwnProperty('tile_text_color')) {
        obj['tile_text_color'] = ApiClient.convertToType(data['tile_text_color'], 'String');
      }
      if (data.hasOwnProperty('text_tile_text_color')) {
        obj['text_tile_text_color'] = ApiClient.convertToType(data['text_tile_text_color'], 'String');
      }
      if (data.hasOwnProperty('last_updater_id')) {
        obj['last_updater_id'] = ApiClient.convertToType(data['last_updater_id'], 'Integer');
      }
      if (data.hasOwnProperty('deleter_id')) {
        obj['deleter_id'] = ApiClient.convertToType(data['deleter_id'], 'Integer');
      }
      if (data.hasOwnProperty('deleted')) {
        obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('deleted_at')) {
        obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
      }
      if (data.hasOwnProperty('query_timezone')) {
        obj['query_timezone'] = ApiClient.convertToType(data['query_timezone'], 'String');
      }
      if (data.hasOwnProperty('edit_uri')) {
        obj['edit_uri'] = ApiClient.convertToType(data['edit_uri'], 'String');
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
   * Id of content metadata
   * @member {Integer} content_metadata_id
   */
  exports.prototype['content_metadata_id'] = undefined;

  /**
   * Content Favorite Id
   * @member {Integer} content_favorite_id
   */
  exports.prototype['content_favorite_id'] = undefined;

  /**
   * Number of times viewed in the Looker web UI
   * @member {Integer} view_count
   */
  exports.prototype['view_count'] = undefined;

  /**
   * Time the dashboard was last accessed
   * @member {Date} last_accessed_at
   */
  exports.prototype['last_accessed_at'] = undefined;

  /**
   * Number of times favorited
   * @member {Integer} favorite_count
   */
  exports.prototype['favorite_count'] = undefined;

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
   * configuration option that governs how dashboard loading will happen.
   * @member {String} load_configuration
   */
  exports.prototype['load_configuration'] = undefined;

  /**
   * Model
   * @member {module:model/LookModel} model
   */
  exports.prototype['model'] = undefined;

  /**
   * Id of Space
   * @member {String} space_id
   */
  exports.prototype['space_id'] = undefined;

  /**
   * Elements
   * @member {Array.<module:model/DashboardElement>} dashboard_elements
   */
  exports.prototype['dashboard_elements'] = undefined;

  /**
   * Layouts
   * @member {Array.<module:model/DashboardLayout>} dashboard_layouts
   */
  exports.prototype['dashboard_layouts'] = undefined;

  /**
   * Filters
   * @member {Array.<module:model/DashboardFilter>} dashboard_filters
   */
  exports.prototype['dashboard_filters'] = undefined;

  /**
   * Time last viewed in the Looker web UI
   * @member {Date} last_viewed_at
   */
  exports.prototype['last_viewed_at'] = undefined;

  /**
   * Background color
   * @member {String} background_color
   */
  exports.prototype['background_color'] = undefined;

  /**
   * Show title
   * @member {Boolean} show_title
   */
  exports.prototype['show_title'] = undefined;

  /**
   * Title color
   * @member {String} title_color
   */
  exports.prototype['title_color'] = undefined;

  /**
   * Show filters bar
   * @member {Boolean} show_filters_bar
   */
  exports.prototype['show_filters_bar'] = undefined;

  /**
   * Tile background color
   * @member {String} tile_background_color
   */
  exports.prototype['tile_background_color'] = undefined;

  /**
   * Tile text color
   * @member {String} tile_text_color
   */
  exports.prototype['tile_text_color'] = undefined;

  /**
   * Color of text on text tiles
   * @member {String} text_tile_text_color
   */
  exports.prototype['text_tile_text_color'] = undefined;

  /**
   * Id of User that last updated the dashboard.
   * @member {Integer} last_updater_id
   */
  exports.prototype['last_updater_id'] = undefined;

  /**
   * Id of User that deleted the dashboard.
   * @member {Integer} deleter_id
   */
  exports.prototype['deleter_id'] = undefined;

  /**
   * Whether or not a dashboard is deleted.
   * @member {Boolean} deleted
   */
  exports.prototype['deleted'] = undefined;

  /**
   * Time that the Dashboard was created.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;

  /**
   * Time that the Dashboard was deleted.
   * @member {Date} deleted_at
   */
  exports.prototype['deleted_at'] = undefined;

  /**
   * Timezone in which the Dashboard will run by default.
   * @member {String} query_timezone
   */
  exports.prototype['query_timezone'] = undefined;

  /**
   * Relative path of URI of LookML file to edit the dashboard (LookML dashboard only).
   * @member {String} edit_uri
   */
  exports.prototype['edit_uri'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
