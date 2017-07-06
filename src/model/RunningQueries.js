(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './LookBasic', './Query', './SqlQuery', './UserPublic'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LookBasic'), require('./Query'), require('./SqlQuery'), require('./UserPublic'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.RunningQueries = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.LookBasic, root.LookerApi30Reference.Query, root.LookerApi30Reference.SqlQuery, root.LookerApi30Reference.UserPublic);
  }
}(this, function(ApiClient, LookBasic, Query, SqlQuery, UserPublic) {
  'use strict';

  /**
   * The RunningQueries model module.
   * @module model/RunningQueries
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>RunningQueries</code>.
   * @alias module:model/RunningQueries
   * @class
   */
  var exports = function() {






















  };

  /**
   * Constructs a <code>RunningQueries</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RunningQueries} obj Optional instance to populate.
   * @return {module:model/RunningQueries} The populated <code>RunningQueries</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = UserPublic.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = Query.constructFromObject(data['query']);
      }
      if (data.hasOwnProperty('sql_query')) {
        obj['sql_query'] = SqlQuery.constructFromObject(data['sql_query']);
      }
      if (data.hasOwnProperty('look')) {
        obj['look'] = LookBasic.constructFromObject(data['look']);
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
      if (data.hasOwnProperty('completed_at')) {
        obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'String');
      }
      if (data.hasOwnProperty('query_id')) {
        obj['query_id'] = ApiClient.convertToType(data['query_id'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('node_id')) {
        obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
      }
      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
      }
      if (data.hasOwnProperty('query_task_id')) {
        obj['query_task_id'] = ApiClient.convertToType(data['query_task_id'], 'String');
      }
      if (data.hasOwnProperty('cache_key')) {
        obj['cache_key'] = ApiClient.convertToType(data['cache_key'], 'String');
      }
      if (data.hasOwnProperty('connection_name')) {
        obj['connection_name'] = ApiClient.convertToType(data['connection_name'], 'String');
      }
      if (data.hasOwnProperty('dialect')) {
        obj['dialect'] = ApiClient.convertToType(data['dialect'], 'String');
      }
      if (data.hasOwnProperty('connection_id')) {
        obj['connection_id'] = ApiClient.convertToType(data['connection_id'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('runtime')) {
        obj['runtime'] = ApiClient.convertToType(data['runtime'], 'Number');
      }
      if (data.hasOwnProperty('sql')) {
        obj['sql'] = ApiClient.convertToType(data['sql'], 'String');
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
   * User who initiated the query
   * @member {module:model/UserPublic} user
   */
  exports.prototype['user'] = undefined;

  /**
   * Query that was run
   * @member {module:model/Query} query
   */
  exports.prototype['query'] = undefined;

  /**
   * SQL Query that was run
   * @member {module:model/SqlQuery} sql_query
   */
  exports.prototype['sql_query'] = undefined;

  /**
   * Look of query that was run
   * @member {module:model/LookBasic} look
   */
  exports.prototype['look'] = undefined;

  /**
   * Date/Time Query was initiated
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;

  /**
   * Date/Time Query was completed
   * @member {String} completed_at
   */
  exports.prototype['completed_at'] = undefined;

  /**
   * Query Id
   * @member {String} query_id
   */
  exports.prototype['query_id'] = undefined;

  /**
   * Source (look, dashboard, queryrunner, explore, etc.)
   * @member {String} source
   */
  exports.prototype['source'] = undefined;

  /**
   * Node Id
   * @member {String} node_id
   */
  exports.prototype['node_id'] = undefined;

  /**
   * Slug
   * @member {String} slug
   */
  exports.prototype['slug'] = undefined;

  /**
   * ID of a Query Task
   * @member {String} query_task_id
   */
  exports.prototype['query_task_id'] = undefined;

  /**
   * Cache Key
   * @member {String} cache_key
   */
  exports.prototype['cache_key'] = undefined;

  /**
   * Connection
   * @member {String} connection_name
   */
  exports.prototype['connection_name'] = undefined;

  /**
   * Dialect
   * @member {String} dialect
   */
  exports.prototype['dialect'] = undefined;

  /**
   * Connection ID
   * @member {String} connection_id
   */
  exports.prototype['connection_id'] = undefined;

  /**
   * Additional Information(Error message or verbose status)
   * @member {String} message
   */
  exports.prototype['message'] = undefined;

  /**
   * Status description
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Number of seconds elapsed running the Query
   * @member {Number} runtime
   */
  exports.prototype['runtime'] = undefined;

  /**
   * SQL text of the query as run
   * @member {String} sql
   */
  exports.prototype['sql'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
