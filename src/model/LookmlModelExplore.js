(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './LookmlModelExploreAccessFilter', './LookmlModelExploreAlias', './LookmlModelExploreAlwaysFilter', './LookmlModelExploreConditionallyFilter', './LookmlModelExploreError', './LookmlModelExploreFieldset', './LookmlModelExploreJoins', './LookmlModelExploreSet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LookmlModelExploreAccessFilter'), require('./LookmlModelExploreAlias'), require('./LookmlModelExploreAlwaysFilter'), require('./LookmlModelExploreConditionallyFilter'), require('./LookmlModelExploreError'), require('./LookmlModelExploreFieldset'), require('./LookmlModelExploreJoins'), require('./LookmlModelExploreSet'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.LookmlModelExplore = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.LookmlModelExploreAccessFilter, root.LookerApi30Reference.LookmlModelExploreAlias, root.LookerApi30Reference.LookmlModelExploreAlwaysFilter, root.LookerApi30Reference.LookmlModelExploreConditionallyFilter, root.LookerApi30Reference.LookmlModelExploreError, root.LookerApi30Reference.LookmlModelExploreFieldset, root.LookerApi30Reference.LookmlModelExploreJoins, root.LookerApi30Reference.LookmlModelExploreSet);
  }
}(this, function(ApiClient, LookmlModelExploreAccessFilter, LookmlModelExploreAlias, LookmlModelExploreAlwaysFilter, LookmlModelExploreConditionallyFilter, LookmlModelExploreError, LookmlModelExploreFieldset, LookmlModelExploreJoins, LookmlModelExploreSet) {
  'use strict';

  /**
   * The LookmlModelExplore model module.
   * @module model/LookmlModelExplore
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LookmlModelExplore</code>.
   * @alias module:model/LookmlModelExplore
   * @class
   */
  var exports = function() {

































  };

  /**
   * Constructs a <code>LookmlModelExplore</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LookmlModelExplore} obj Optional instance to populate.
   * @return {module:model/LookmlModelExplore} The populated <code>LookmlModelExplore</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('scopes')) {
        obj['scopes'] = ApiClient.convertToType(data['scopes'], ['String']);
      }
      if (data.hasOwnProperty('can_total')) {
        obj['can_total'] = ApiClient.convertToType(data['can_total'], 'Boolean');
      }
      if (data.hasOwnProperty('can_save')) {
        obj['can_save'] = ApiClient.convertToType(data['can_save'], 'Boolean');
      }
      if (data.hasOwnProperty('can_explain')) {
        obj['can_explain'] = ApiClient.convertToType(data['can_explain'], 'Boolean');
      }
      if (data.hasOwnProperty('can_pivot_in_db')) {
        obj['can_pivot_in_db'] = ApiClient.convertToType(data['can_pivot_in_db'], 'Boolean');
      }
      if (data.hasOwnProperty('has_timezone_support')) {
        obj['has_timezone_support'] = ApiClient.convertToType(data['has_timezone_support'], 'Boolean');
      }
      if (data.hasOwnProperty('supports_cost_estimate')) {
        obj['supports_cost_estimate'] = ApiClient.convertToType(data['supports_cost_estimate'], 'Boolean');
      }
      if (data.hasOwnProperty('connection_name')) {
        obj['connection_name'] = ApiClient.convertToType(data['connection_name'], 'String');
      }
      if (data.hasOwnProperty('null_sort_treatment')) {
        obj['null_sort_treatment'] = ApiClient.convertToType(data['null_sort_treatment'], 'String');
      }
      if (data.hasOwnProperty('files')) {
        obj['files'] = ApiClient.convertToType(data['files'], ['String']);
      }
      if (data.hasOwnProperty('source_file')) {
        obj['source_file'] = ApiClient.convertToType(data['source_file'], 'String');
      }
      if (data.hasOwnProperty('project_name')) {
        obj['project_name'] = ApiClient.convertToType(data['project_name'], 'String');
      }
      if (data.hasOwnProperty('model_name')) {
        obj['model_name'] = ApiClient.convertToType(data['model_name'], 'String');
      }
      if (data.hasOwnProperty('view_name')) {
        obj['view_name'] = ApiClient.convertToType(data['view_name'], 'String');
      }
      if (data.hasOwnProperty('hidden')) {
        obj['hidden'] = ApiClient.convertToType(data['hidden'], 'Boolean');
      }
      if (data.hasOwnProperty('sql_table_name')) {
        obj['sql_table_name'] = ApiClient.convertToType(data['sql_table_name'], 'String');
      }
      if (data.hasOwnProperty('access_filter_fields')) {
        obj['access_filter_fields'] = ApiClient.convertToType(data['access_filter_fields'], ['String']);
      }
      if (data.hasOwnProperty('access_filters')) {
        obj['access_filters'] = ApiClient.convertToType(data['access_filters'], [LookmlModelExploreAccessFilter]);
      }
      if (data.hasOwnProperty('aliases')) {
        obj['aliases'] = ApiClient.convertToType(data['aliases'], [LookmlModelExploreAlias]);
      }
      if (data.hasOwnProperty('always_filter')) {
        obj['always_filter'] = ApiClient.convertToType(data['always_filter'], [LookmlModelExploreAlwaysFilter]);
      }
      if (data.hasOwnProperty('conditionally_filter')) {
        obj['conditionally_filter'] = ApiClient.convertToType(data['conditionally_filter'], [LookmlModelExploreConditionallyFilter]);
      }
      if (data.hasOwnProperty('index_fields')) {
        obj['index_fields'] = ApiClient.convertToType(data['index_fields'], ['String']);
      }
      if (data.hasOwnProperty('sets')) {
        obj['sets'] = ApiClient.convertToType(data['sets'], [LookmlModelExploreSet]);
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [LookmlModelExploreError]);
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = LookmlModelExploreFieldset.constructFromObject(data['fields']);
      }
      if (data.hasOwnProperty('joins')) {
        obj['joins'] = ApiClient.convertToType(data['joins'], [LookmlModelExploreJoins]);
      }
      if (data.hasOwnProperty('group_label')) {
        obj['group_label'] = ApiClient.convertToType(data['group_label'], 'String');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Fully qualified name model plus explore name
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Explore name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * Label
   * @member {String} label
   */
  exports.prototype['label'] = undefined;

  /**
   * Scopes
   * @member {Array.<String>} scopes
   */
  exports.prototype['scopes'] = undefined;

  /**
   * Can Total
   * @member {Boolean} can_total
   */
  exports.prototype['can_total'] = undefined;

  /**
   * Can Save
   * @member {Boolean} can_save
   */
  exports.prototype['can_save'] = undefined;

  /**
   * Can Explain
   * @member {Boolean} can_explain
   */
  exports.prototype['can_explain'] = undefined;

  /**
   * Can pivot in the DB
   * @member {Boolean} can_pivot_in_db
   */
  exports.prototype['can_pivot_in_db'] = undefined;

  /**
   * Has timezone support
   * @member {Boolean} has_timezone_support
   */
  exports.prototype['has_timezone_support'] = undefined;

  /**
   * Cost estimates supported
   * @member {Boolean} supports_cost_estimate
   */
  exports.prototype['supports_cost_estimate'] = undefined;

  /**
   * Connection name
   * @member {String} connection_name
   */
  exports.prototype['connection_name'] = undefined;

  /**
   * How nulls are sorted, possible values are \"low\", \"high\", \"first\" and \"last\"
   * @member {String} null_sort_treatment
   */
  exports.prototype['null_sort_treatment'] = undefined;

  /**
   * List of model source files
   * @member {Array.<String>} files
   */
  exports.prototype['files'] = undefined;

  /**
   * Primary source_file file
   * @member {String} source_file
   */
  exports.prototype['source_file'] = undefined;

  /**
   * Name of project
   * @member {String} project_name
   */
  exports.prototype['project_name'] = undefined;

  /**
   * Name of model
   * @member {String} model_name
   */
  exports.prototype['model_name'] = undefined;

  /**
   * Name of view
   * @member {String} view_name
   */
  exports.prototype['view_name'] = undefined;

  /**
   * Is hidden
   * @member {Boolean} hidden
   */
  exports.prototype['hidden'] = undefined;

  /**
   * A sql_table_name expression that defines what sql table the view/explore maps onto. Example: \"prod_orders2 AS orders\" in a view named orders.
   * @member {String} sql_table_name
   */
  exports.prototype['sql_table_name'] = undefined;

  /**
   * (DEPRECATED) Array of access filter field names
   * @member {Array.<String>} access_filter_fields
   */
  exports.prototype['access_filter_fields'] = undefined;

  /**
   * Access filters
   * @member {Array.<module:model/LookmlModelExploreAccessFilter>} access_filters
   */
  exports.prototype['access_filters'] = undefined;

  /**
   * Aliases
   * @member {Array.<module:model/LookmlModelExploreAlias>} aliases
   */
  exports.prototype['aliases'] = undefined;

  /**
   * Always filter
   * @member {Array.<module:model/LookmlModelExploreAlwaysFilter>} always_filter
   */
  exports.prototype['always_filter'] = undefined;

  /**
   * Conditionally filter
   * @member {Array.<module:model/LookmlModelExploreConditionallyFilter>} conditionally_filter
   */
  exports.prototype['conditionally_filter'] = undefined;

  /**
   * Array of index fields
   * @member {Array.<String>} index_fields
   */
  exports.prototype['index_fields'] = undefined;

  /**
   * Sets
   * @member {Array.<module:model/LookmlModelExploreSet>} sets
   */
  exports.prototype['sets'] = undefined;

  /**
   * Errors
   * @member {Array.<module:model/LookmlModelExploreError>} errors
   */
  exports.prototype['errors'] = undefined;

  /**
   * Fields
   * @member {module:model/LookmlModelExploreFieldset} fields
   */
  exports.prototype['fields'] = undefined;

  /**
   * Views joined into this explore
   * @member {Array.<module:model/LookmlModelExploreJoins>} joins
   */
  exports.prototype['joins'] = undefined;

  /**
   * Label used to group explores in the navigation menus
   * @member {String} group_label
   */
  exports.prototype['group_label'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
