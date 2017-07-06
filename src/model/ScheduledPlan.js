(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ScheduledPlanDestination', './UserPublic'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScheduledPlanDestination'), require('./UserPublic'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.ScheduledPlan = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.ScheduledPlanDestination, root.LookerApi30Reference.UserPublic);
  }
}(this, function(ApiClient, ScheduledPlanDestination, UserPublic) {
  'use strict';

  /**
   * The ScheduledPlan model module.
   * @module model/ScheduledPlan
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ScheduledPlan</code>.
   * @alias module:model/ScheduledPlan
   * @class
   */
  var exports = function() {

























  };

  /**
   * Constructs a <code>ScheduledPlan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScheduledPlan} obj Optional instance to populate.
   * @return {module:model/ScheduledPlan} The populated <code>ScheduledPlan</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Integer');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = UserPublic.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('run_as_recipient')) {
        obj['run_as_recipient'] = ApiClient.convertToType(data['run_as_recipient'], 'Boolean');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('next_run_at')) {
        obj['next_run_at'] = ApiClient.convertToType(data['next_run_at'], 'Date');
      }
      if (data.hasOwnProperty('last_run_at')) {
        obj['last_run_at'] = ApiClient.convertToType(data['last_run_at'], 'Date');
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
      if (data.hasOwnProperty('filters_string')) {
        obj['filters_string'] = ApiClient.convertToType(data['filters_string'], 'String');
      }
      if (data.hasOwnProperty('dashboard_filters')) {
        obj['dashboard_filters'] = ApiClient.convertToType(data['dashboard_filters'], 'String');
      }
      if (data.hasOwnProperty('require_results')) {
        obj['require_results'] = ApiClient.convertToType(data['require_results'], 'Boolean');
      }
      if (data.hasOwnProperty('require_no_results')) {
        obj['require_no_results'] = ApiClient.convertToType(data['require_no_results'], 'Boolean');
      }
      if (data.hasOwnProperty('require_change')) {
        obj['require_change'] = ApiClient.convertToType(data['require_change'], 'Boolean');
      }
      if (data.hasOwnProperty('send_all_results')) {
        obj['send_all_results'] = ApiClient.convertToType(data['send_all_results'], 'Boolean');
      }
      if (data.hasOwnProperty('crontab')) {
        obj['crontab'] = ApiClient.convertToType(data['crontab'], 'String');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
      if (data.hasOwnProperty('scheduled_plan_destination')) {
        obj['scheduled_plan_destination'] = ApiClient.convertToType(data['scheduled_plan_destination'], [ScheduledPlanDestination]);
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
   * Name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Date and time when ScheduledPlan was created
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;

  /**
   * Date and time when ScheduledPlan was last updated
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;

  /**
   * Title
   * @member {String} title
   */
  exports.prototype['title'] = undefined;

  /**
   * User Id which owns this ScheduledPlan
   * @member {Integer} user_id
   */
  exports.prototype['user_id'] = undefined;

  /**
   * User who owns this ScheduledPlan
   * @member {module:model/UserPublic} user
   */
  exports.prototype['user'] = undefined;

  /**
   * Whether schedule is ran as recipient (only applicable for email recipients)
   * @member {Boolean} run_as_recipient
   */
  exports.prototype['run_as_recipient'] = undefined;

  /**
   * Whether the ScheduledPlan is enabled
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;

  /**
   * When the ScheduledPlan will next run (null if running once)
   * @member {Date} next_run_at
   */
  exports.prototype['next_run_at'] = undefined;

  /**
   * When the ScheduledPlan was last run
   * @member {Date} last_run_at
   */
  exports.prototype['last_run_at'] = undefined;

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
   * Id of a LookML dashboard
   * @member {String} lookml_dashboard_id
   */
  exports.prototype['lookml_dashboard_id'] = undefined;

  /**
   * Query string to run look or dashboard with
   * @member {String} filters_string
   */
  exports.prototype['filters_string'] = undefined;

  /**
   * Alias for filters_string field
   * @member {String} dashboard_filters
   */
  exports.prototype['dashboard_filters'] = undefined;

  /**
   * Delivery should occur if running the dashboard or look returns results
   * @member {Boolean} require_results
   */
  exports.prototype['require_results'] = undefined;

  /**
   * Delivery should occur if the dashboard look does not return results
   * @member {Boolean} require_no_results
   */
  exports.prototype['require_no_results'] = undefined;

  /**
   * Delivery should occur if data have changed since the last run
   * @member {Boolean} require_change
   */
  exports.prototype['require_change'] = undefined;

  /**
   * Will run an unlimited query and send all results.
   * @member {Boolean} send_all_results
   */
  exports.prototype['send_all_results'] = undefined;

  /**
   * Vixie-Style crontab specification when to run
   * @member {String} crontab
   */
  exports.prototype['crontab'] = undefined;

  /**
   * Timezone for interpreting the specified crontab (default is Looker instance timezone)
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;

  /**
   * Scheduled plan destinations
   * @member {Array.<module:model/ScheduledPlanDestination>} scheduled_plan_destination
   */
  exports.prototype['scheduled_plan_destination'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
