(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Dialect', './Snippet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Dialect'), require('./Snippet'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.DBConnection = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.Dialect, root.LookerApi30Reference.Snippet);
  }
}(this, function(ApiClient, Dialect, Snippet) {
  'use strict';

  /**
   * The DBConnection model module.
   * @module model/DBConnection
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DBConnection</code>.
   * @alias module:model/DBConnection
   * @class
   */
  var exports = function() {






























  };

  /**
   * Constructs a <code>DBConnection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DBConnection} obj Optional instance to populate.
   * @return {module:model/DBConnection} The populated <code>DBConnection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('host')) {
        obj['host'] = ApiClient.convertToType(data['host'], 'String');
      }
      if (data.hasOwnProperty('port')) {
        obj['port'] = ApiClient.convertToType(data['port'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('certificate')) {
        obj['certificate'] = ApiClient.convertToType(data['certificate'], 'String');
      }
      if (data.hasOwnProperty('database')) {
        obj['database'] = ApiClient.convertToType(data['database'], 'String');
      }
      if (data.hasOwnProperty('db_timezone')) {
        obj['db_timezone'] = ApiClient.convertToType(data['db_timezone'], 'String');
      }
      if (data.hasOwnProperty('query_timezone')) {
        obj['query_timezone'] = ApiClient.convertToType(data['query_timezone'], 'String');
      }
      if (data.hasOwnProperty('schema')) {
        obj['schema'] = ApiClient.convertToType(data['schema'], 'String');
      }
      if (data.hasOwnProperty('max_connections')) {
        obj['max_connections'] = ApiClient.convertToType(data['max_connections'], 'Integer');
      }
      if (data.hasOwnProperty('max_billing_gigabytes')) {
        obj['max_billing_gigabytes'] = ApiClient.convertToType(data['max_billing_gigabytes'], 'String');
      }
      if (data.hasOwnProperty('ssl')) {
        obj['ssl'] = ApiClient.convertToType(data['ssl'], 'Boolean');
      }
      if (data.hasOwnProperty('verify_ssl')) {
        obj['verify_ssl'] = ApiClient.convertToType(data['verify_ssl'], 'Boolean');
      }
      if (data.hasOwnProperty('tmp_db_name')) {
        obj['tmp_db_name'] = ApiClient.convertToType(data['tmp_db_name'], 'String');
      }
      if (data.hasOwnProperty('jdbc_additional_params')) {
        obj['jdbc_additional_params'] = ApiClient.convertToType(data['jdbc_additional_params'], 'String');
      }
      if (data.hasOwnProperty('pool_timeout')) {
        obj['pool_timeout'] = ApiClient.convertToType(data['pool_timeout'], 'Integer');
      }
      if (data.hasOwnProperty('dialect')) {
        obj['dialect'] = Dialect.constructFromObject(data['dialect']);
      }
      if (data.hasOwnProperty('dialect_name')) {
        obj['dialect_name'] = ApiClient.convertToType(data['dialect_name'], 'String');
      }
      if (data.hasOwnProperty('snippets')) {
        obj['snippets'] = ApiClient.convertToType(data['snippets'], [Snippet]);
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
      }
      if (data.hasOwnProperty('example')) {
        obj['example'] = ApiClient.convertToType(data['example'], 'Boolean');
      }
      if (data.hasOwnProperty('user_db_credentials')) {
        obj['user_db_credentials'] = ApiClient.convertToType(data['user_db_credentials'], 'Boolean');
      }
      if (data.hasOwnProperty('user_attribute_fields')) {
        obj['user_attribute_fields'] = ApiClient.convertToType(data['user_attribute_fields'], ['String']);
      }
      if (data.hasOwnProperty('maintenance_cron')) {
        obj['maintenance_cron'] = ApiClient.convertToType(data['maintenance_cron'], 'String');
      }
      if (data.hasOwnProperty('last_regen_at')) {
        obj['last_regen_at'] = ApiClient.convertToType(data['last_regen_at'], 'String');
      }
      if (data.hasOwnProperty('last_reap_at')) {
        obj['last_reap_at'] = ApiClient.convertToType(data['last_reap_at'], 'String');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Name of the connection. Also used as the unique identifier
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Host name/address of server
   * @member {String} host
   */
  exports.prototype['host'] = undefined;

  /**
   * Port number on server
   * @member {String} port
   */
  exports.prototype['port'] = undefined;

  /**
   * Username for server authentication
   * @member {String} username
   */
  exports.prototype['username'] = undefined;

  /**
   * (Write-only) Password for server authentication
   * @member {String} password
   */
  exports.prototype['password'] = undefined;

  /**
   * (Write-only) Base64 encoded Certificate body for server authentication (when appropriate for dialect).
   * @member {String} certificate
   */
  exports.prototype['certificate'] = undefined;

  /**
   * Database name
   * @member {String} database
   */
  exports.prototype['database'] = undefined;

  /**
   * Time zone of database
   * @member {String} db_timezone
   */
  exports.prototype['db_timezone'] = undefined;

  /**
   * Timezone to use in queries
   * @member {String} query_timezone
   */
  exports.prototype['query_timezone'] = undefined;

  /**
   * Scheme name
   * @member {String} schema
   */
  exports.prototype['schema'] = undefined;

  /**
   * Maximum number of concurrent connection to use
   * @member {Integer} max_connections
   */
  exports.prototype['max_connections'] = undefined;

  /**
   * Maximum size of query in GBs (BigQuery only, can be a user_attribute name)
   * @member {String} max_billing_gigabytes
   */
  exports.prototype['max_billing_gigabytes'] = undefined;

  /**
   * Use SSL/TLS when connecting to server
   * @member {Boolean} ssl
   */
  exports.prototype['ssl'] = undefined;

  /**
   * Verify the SSL
   * @member {Boolean} verify_ssl
   */
  exports.prototype['verify_ssl'] = undefined;

  /**
   * Name of temporary database (if used)
   * @member {String} tmp_db_name
   */
  exports.prototype['tmp_db_name'] = undefined;

  /**
   * Additional params to add to JDBC connection string
   * @member {String} jdbc_additional_params
   */
  exports.prototype['jdbc_additional_params'] = undefined;

  /**
   * Pool Timeout
   * @member {Integer} pool_timeout
   */
  exports.prototype['pool_timeout'] = undefined;

  /**
   * (Read-only) SQL Dialect details
   * @member {module:model/Dialect} dialect
   */
  exports.prototype['dialect'] = undefined;

  /**
   * (Read/Write) SQL Dialect name
   * @member {String} dialect_name
   */
  exports.prototype['dialect_name'] = undefined;

  /**
   * SQL Runner snippets for this connection
   * @member {Array.<module:model/Snippet>} snippets
   */
  exports.prototype['snippets'] = undefined;

  /**
   * Creation date for this connection
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;

  /**
   * Id of user who last modified this connection configuration
   * @member {String} user_id
   */
  exports.prototype['user_id'] = undefined;

  /**
   * Is this an example connection
   * @member {Boolean} example
   */
  exports.prototype['example'] = undefined;

  /**
   * (Limited access feature) Are per user db credentials enabled
   * @member {Boolean} user_db_credentials
   */
  exports.prototype['user_db_credentials'] = undefined;

  /**
   * Fields whose values map to user attribute names
   * @member {Array.<String>} user_attribute_fields
   */
  exports.prototype['user_attribute_fields'] = undefined;

  /**
   * Cron string specifying when maintenance such as PDT trigger checks and drops should be performed
   * @member {String} maintenance_cron
   */
  exports.prototype['maintenance_cron'] = undefined;

  /**
   * Unix timestamp at start of last completed PDT trigger check process
   * @member {String} last_regen_at
   */
  exports.prototype['last_regen_at'] = undefined;

  /**
   * Unix timestamp at start of last completed PDT reap process
   * @member {String} last_reap_at
   */
  exports.prototype['last_reap_at'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
