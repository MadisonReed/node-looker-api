(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DBConnectionBase', './UserPublic'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DBConnectionBase'), require('./UserPublic'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.SqlQuery = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.DBConnectionBase, root.LookerApi30Reference.UserPublic);
  }
}(this, function(ApiClient, DBConnectionBase, UserPublic) {
  'use strict';

  /**
   * The SqlQuery model module.
   * @module model/SqlQuery
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SqlQuery</code>.
   * @alias module:model/SqlQuery
   * @class
   */
  var exports = function() {












  };

  /**
   * Constructs a <code>SqlQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SqlQuery} obj Optional instance to populate.
   * @return {module:model/SqlQuery} The populated <code>SqlQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
      }
      if (data.hasOwnProperty('last_runtime')) {
        obj['last_runtime'] = ApiClient.convertToType(data['last_runtime'], 'Number');
      }
      if (data.hasOwnProperty('run_count')) {
        obj['run_count'] = ApiClient.convertToType(data['run_count'], 'Integer');
      }
      if (data.hasOwnProperty('browser_limit')) {
        obj['browser_limit'] = ApiClient.convertToType(data['browser_limit'], 'Integer');
      }
      if (data.hasOwnProperty('sql')) {
        obj['sql'] = ApiClient.convertToType(data['sql'], 'String');
      }
      if (data.hasOwnProperty('last_run_at')) {
        obj['last_run_at'] = ApiClient.convertToType(data['last_run_at'], 'String');
      }
      if (data.hasOwnProperty('connection')) {
        obj['connection'] = DBConnectionBase.constructFromObject(data['connection']);
      }
      if (data.hasOwnProperty('creator')) {
        obj['creator'] = UserPublic.constructFromObject(data['creator']);
      }
      if (data.hasOwnProperty('explore_url')) {
        obj['explore_url'] = ApiClient.convertToType(data['explore_url'], 'String');
      }
      if (data.hasOwnProperty('plaintext')) {
        obj['plaintext'] = ApiClient.convertToType(data['plaintext'], 'Boolean');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * The identifier of the SQL query
   * @member {String} slug
   */
  exports.prototype['slug'] = undefined;

  /**
   * Number of seconds this query took to run the most recent time it was run
   * @member {Number} last_runtime
   */
  exports.prototype['last_runtime'] = undefined;

  /**
   * Number of times this query has been run
   * @member {Integer} run_count
   */
  exports.prototype['run_count'] = undefined;

  /**
   * Maximum number of rows this query will display on the SQL Runner page
   * @member {Integer} browser_limit
   */
  exports.prototype['browser_limit'] = undefined;

  /**
   * SQL query text
   * @member {String} sql
   */
  exports.prototype['sql'] = undefined;

  /**
   * The most recent time this query was run
   * @member {String} last_run_at
   */
  exports.prototype['last_run_at'] = undefined;

  /**
   * Connection this query uses
   * @member {module:model/DBConnectionBase} connection
   */
  exports.prototype['connection'] = undefined;

  /**
   * User who created this SQL query
   * @member {module:model/UserPublic} creator
   */
  exports.prototype['creator'] = undefined;

  /**
   * Explore page URL for this SQL query
   * @member {String} explore_url
   */
  exports.prototype['explore_url'] = undefined;

  /**
   * Should this query be rendered as plain text
   * @member {Boolean} plaintext
   */
  exports.prototype['plaintext'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
