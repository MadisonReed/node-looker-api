(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Query'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Query'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.QueryTask = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.Query);
  }
}(this, function(ApiClient, Query) {
  'use strict';

  /**
   * The QueryTask model module.
   * @module model/QueryTask
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>QueryTask</code>.
   * @alias module:model/QueryTask
   * @class
   */
  var exports = function() {




















  };

  /**
   * Constructs a <code>QueryTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QueryTask} obj Optional instance to populate.
   * @return {module:model/QueryTask} The populated <code>QueryTask</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('query_id')) {
        obj['query_id'] = ApiClient.convertToType(data['query_id'], 'Integer');
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = Query.constructFromObject(data['query']);
      }
      if (data.hasOwnProperty('generate_links')) {
        obj['generate_links'] = ApiClient.convertToType(data['generate_links'], 'Boolean');
      }
      if (data.hasOwnProperty('force_production')) {
        obj['force_production'] = ApiClient.convertToType(data['force_production'], 'Boolean');
      }
      if (data.hasOwnProperty('path_prefix')) {
        obj['path_prefix'] = ApiClient.convertToType(data['path_prefix'], 'String');
      }
      if (data.hasOwnProperty('cache')) {
        obj['cache'] = ApiClient.convertToType(data['cache'], 'Boolean');
      }
      if (data.hasOwnProperty('server_table_calcs')) {
        obj['server_table_calcs'] = ApiClient.convertToType(data['server_table_calcs'], 'Boolean');
      }
      if (data.hasOwnProperty('cache_only')) {
        obj['cache_only'] = ApiClient.convertToType(data['cache_only'], 'Boolean');
      }
      if (data.hasOwnProperty('cache_key')) {
        obj['cache_key'] = ApiClient.convertToType(data['cache_key'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('runtime')) {
        obj['runtime'] = ApiClient.convertToType(data['runtime'], 'Number');
      }
      if (data.hasOwnProperty('rebuild_pdts')) {
        obj['rebuild_pdts'] = ApiClient.convertToType(data['rebuild_pdts'], 'Boolean');
      }
      if (data.hasOwnProperty('result_source')) {
        obj['result_source'] = ApiClient.convertToType(data['result_source'], 'String');
      }
      if (data.hasOwnProperty('look_id')) {
        obj['look_id'] = ApiClient.convertToType(data['look_id'], 'Integer');
      }
      if (data.hasOwnProperty('dashboard_id')) {
        obj['dashboard_id'] = ApiClient.convertToType(data['dashboard_id'], 'String');
      }
      if (data.hasOwnProperty('result_format')) {
        obj['result_format'] = ApiClient.convertToType(data['result_format'], 'String');
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
   * Id of query
   * @member {Integer} query_id
   */
  exports.prototype['query_id'] = undefined;

  /**
   * Query
   * @member {module:model/Query} query
   */
  exports.prototype['query'] = undefined;

  /**
   * whether or not to generate links in the query response.
   * @member {Boolean} generate_links
   */
  exports.prototype['generate_links'] = undefined;

  /**
   * Use production models to run query (even is user is in dev mode).
   * @member {Boolean} force_production
   */
  exports.prototype['force_production'] = undefined;

  /**
   * Prefix to use for drill links.
   * @member {String} path_prefix
   */
  exports.prototype['path_prefix'] = undefined;

  /**
   * Whether or not to use the cache
   * @member {Boolean} cache
   */
  exports.prototype['cache'] = undefined;

  /**
   * Whether or not to run table calculations on the server
   * @member {Boolean} server_table_calcs
   */
  exports.prototype['server_table_calcs'] = undefined;

  /**
   * Retrieve any results from cache even if the results have expired.
   * @member {Boolean} cache_only
   */
  exports.prototype['cache_only'] = undefined;

  /**
   * cache key used to cache query.
   * @member {String} cache_key
   */
  exports.prototype['cache_key'] = undefined;

  /**
   * Status of query task.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Source of query task.
   * @member {String} source
   */
  exports.prototype['source'] = undefined;

  /**
   * Runtime of prior queries.
   * @member {Number} runtime
   */
  exports.prototype['runtime'] = undefined;

  /**
   * Rebuild PDTS used in query.
   * @member {Boolean} rebuild_pdts
   */
  exports.prototype['rebuild_pdts'] = undefined;

  /**
   * Source of the results of the query.
   * @member {String} result_source
   */
  exports.prototype['result_source'] = undefined;

  /**
   * Id of look associated with query.
   * @member {Integer} look_id
   */
  exports.prototype['look_id'] = undefined;

  /**
   * Id of dashboard associated with query.
   * @member {String} dashboard_id
   */
  exports.prototype['dashboard_id'] = undefined;

  /**
   * The data format of the query results.
   * @member {String} result_format
   */
  exports.prototype['result_format'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
