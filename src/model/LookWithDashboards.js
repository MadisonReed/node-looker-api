(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DashboardBase', './LookModel', './SpaceBase', './UserIdOnly'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DashboardBase'), require('./LookModel'), require('./SpaceBase'), require('./UserIdOnly'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.LookWithDashboards = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.DashboardBase, root.LookerApi30Reference.LookModel, root.LookerApi30Reference.SpaceBase, root.LookerApi30Reference.UserIdOnly);
  }
}(this, function(ApiClient, DashboardBase, LookModel, SpaceBase, UserIdOnly) {
  'use strict';

  /**
   * The LookWithDashboards model module.
   * @module model/LookWithDashboards
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LookWithDashboards</code>.
   * @alias module:model/LookWithDashboards
   * @class
   */
  var exports = function() {
































  };

  /**
   * Constructs a <code>LookWithDashboards</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LookWithDashboards} obj Optional instance to populate.
   * @return {module:model/LookWithDashboards} The populated <code>LookWithDashboards</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('content_metadata_id')) {
        obj['content_metadata_id'] = ApiClient.convertToType(data['content_metadata_id'], 'Integer');
      }
      if (data.hasOwnProperty('view_count')) {
        obj['view_count'] = ApiClient.convertToType(data['view_count'], 'Integer');
      }
      if (data.hasOwnProperty('favorite_count')) {
        obj['favorite_count'] = ApiClient.convertToType(data['favorite_count'], 'Integer');
      }
      if (data.hasOwnProperty('content_favorite_id')) {
        obj['content_favorite_id'] = ApiClient.convertToType(data['content_favorite_id'], 'Integer');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = UserIdOnly.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('query_id')) {
        obj['query_id'] = ApiClient.convertToType(data['query_id'], 'Integer');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('short_url')) {
        obj['short_url'] = ApiClient.convertToType(data['short_url'], 'String');
      }
      if (data.hasOwnProperty('space')) {
        obj['space'] = SpaceBase.constructFromObject(data['space']);
      }
      if (data.hasOwnProperty('public')) {
        obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
      }
      if (data.hasOwnProperty('public_slug')) {
        obj['public_slug'] = ApiClient.convertToType(data['public_slug'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Integer');
      }
      if (data.hasOwnProperty('space_id')) {
        obj['space_id'] = ApiClient.convertToType(data['space_id'], 'String');
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = LookModel.constructFromObject(data['model']);
      }
      if (data.hasOwnProperty('public_url')) {
        obj['public_url'] = ApiClient.convertToType(data['public_url'], 'String');
      }
      if (data.hasOwnProperty('embed_url')) {
        obj['embed_url'] = ApiClient.convertToType(data['embed_url'], 'String');
      }
      if (data.hasOwnProperty('google_spreadsheet_formula')) {
        obj['google_spreadsheet_formula'] = ApiClient.convertToType(data['google_spreadsheet_formula'], 'String');
      }
      if (data.hasOwnProperty('excel_file_url')) {
        obj['excel_file_url'] = ApiClient.convertToType(data['excel_file_url'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('last_updater_id')) {
        obj['last_updater_id'] = ApiClient.convertToType(data['last_updater_id'], 'Integer');
      }
      if (data.hasOwnProperty('last_viewed_at')) {
        obj['last_viewed_at'] = ApiClient.convertToType(data['last_viewed_at'], 'Date');
      }
      if (data.hasOwnProperty('last_accessed_at')) {
        obj['last_accessed_at'] = ApiClient.convertToType(data['last_accessed_at'], 'Date');
      }
      if (data.hasOwnProperty('deleter_id')) {
        obj['deleter_id'] = ApiClient.convertToType(data['deleter_id'], 'Integer');
      }
      if (data.hasOwnProperty('deleted')) {
        obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
      }
      if (data.hasOwnProperty('deleted_at')) {
        obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
      }
      if (data.hasOwnProperty('is_run_on_load')) {
        obj['is_run_on_load'] = ApiClient.convertToType(data['is_run_on_load'], 'Boolean');
      }
      if (data.hasOwnProperty('dashboards')) {
        obj['dashboards'] = ApiClient.convertToType(data['dashboards'], [DashboardBase]);
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
   * Id of content metadata
   * @member {Integer} content_metadata_id
   */
  exports.prototype['content_metadata_id'] = undefined;

  /**
   * Number of times viewed in the Looker web UI
   * @member {Integer} view_count
   */
  exports.prototype['view_count'] = undefined;

  /**
   * Number of times favorited
   * @member {Integer} favorite_count
   */
  exports.prototype['favorite_count'] = undefined;

  /**
   * Content Favorite Id
   * @member {Integer} content_favorite_id
   */
  exports.prototype['content_favorite_id'] = undefined;

  /**
   * Look Title
   * @member {String} title
   */
  exports.prototype['title'] = undefined;

  /**
   * User
   * @member {module:model/UserIdOnly} user
   */
  exports.prototype['user'] = undefined;

  /**
   * Query Id
   * @member {Integer} query_id
   */
  exports.prototype['query_id'] = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * Short Url
   * @member {String} short_url
   */
  exports.prototype['short_url'] = undefined;

  /**
   * Space of this Look
   * @member {module:model/SpaceBase} space
   */
  exports.prototype['space'] = undefined;

  /**
   * Is Public
   * @member {Boolean} public
   */
  exports.prototype['public'] = undefined;

  /**
   * Public Slug
   * @member {String} public_slug
   */
  exports.prototype['public_slug'] = undefined;

  /**
   * (Write-only) User Id
   * @member {Integer} user_id
   */
  exports.prototype['user_id'] = undefined;

  /**
   * (Write-only) Space Id
   * @member {String} space_id
   */
  exports.prototype['space_id'] = undefined;

  /**
   * Model
   * @member {module:model/LookModel} model
   */
  exports.prototype['model'] = undefined;

  /**
   * Public Url
   * @member {String} public_url
   */
  exports.prototype['public_url'] = undefined;

  /**
   * Embed Url
   * @member {String} embed_url
   */
  exports.prototype['embed_url'] = undefined;

  /**
   * Google Spreadsheet Formula
   * @member {String} google_spreadsheet_formula
   */
  exports.prototype['google_spreadsheet_formula'] = undefined;

  /**
   * Excel File Url
   * @member {String} excel_file_url
   */
  exports.prototype['excel_file_url'] = undefined;

  /**
   * Time that the Look was created.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;

  /**
   * Time that the Look was updated.
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;

  /**
   * (Write-only) Id of User that last updated the look.
   * @member {Integer} last_updater_id
   */
  exports.prototype['last_updater_id'] = undefined;

  /**
   * Time last viewed in the Looker web UI
   * @member {Date} last_viewed_at
   */
  exports.prototype['last_viewed_at'] = undefined;

  /**
   * Time that the Look was last accessed by any user
   * @member {Date} last_accessed_at
   */
  exports.prototype['last_accessed_at'] = undefined;

  /**
   * Id of User that deleted the look.
   * @member {Integer} deleter_id
   */
  exports.prototype['deleter_id'] = undefined;

  /**
   * Whether or not the look is deleted
   * @member {Boolean} deleted
   */
  exports.prototype['deleted'] = undefined;

  /**
   * Time that the Look was deleted.
   * @member {Date} deleted_at
   */
  exports.prototype['deleted_at'] = undefined;

  /**
   * auto-run query when Look viewed
   * @member {Boolean} is_run_on_load
   */
  exports.prototype['is_run_on_load'] = undefined;

  /**
   * Dashboards
   * @member {Array.<module:model/DashboardBase>} dashboards
   */
  exports.prototype['dashboards'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
