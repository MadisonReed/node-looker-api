(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.Dialect = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Dialect model module.
   * @module model/Dialect
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Dialect</code>.
   * @alias module:model/Dialect
   * @class
   */
  var exports = function() {












  };

  /**
   * Constructs a <code>Dialect</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Dialect} obj Optional instance to populate.
   * @return {module:model/Dialect} The populated <code>Dialect</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('supports_cost_estimate')) {
        obj['supports_cost_estimate'] = ApiClient.convertToType(data['supports_cost_estimate'], 'Boolean');
      }
      if (data.hasOwnProperty('supports_upload_tables')) {
        obj['supports_upload_tables'] = ApiClient.convertToType(data['supports_upload_tables'], 'Boolean');
      }
      if (data.hasOwnProperty('persistent_table_indexes')) {
        obj['persistent_table_indexes'] = ApiClient.convertToType(data['persistent_table_indexes'], 'String');
      }
      if (data.hasOwnProperty('persistent_table_sortkeys')) {
        obj['persistent_table_sortkeys'] = ApiClient.convertToType(data['persistent_table_sortkeys'], 'String');
      }
      if (data.hasOwnProperty('persistent_table_distkey')) {
        obj['persistent_table_distkey'] = ApiClient.convertToType(data['persistent_table_distkey'], 'String');
      }
      if (data.hasOwnProperty('supports_streaming')) {
        obj['supports_streaming'] = ApiClient.convertToType(data['supports_streaming'], 'Boolean');
      }
      if (data.hasOwnProperty('automatically_run_sql_runner_snippets')) {
        obj['automatically_run_sql_runner_snippets'] = ApiClient.convertToType(data['automatically_run_sql_runner_snippets'], 'Boolean');
      }
      if (data.hasOwnProperty('connection_tests')) {
        obj['connection_tests'] = ApiClient.convertToType(data['connection_tests'], ['String']);
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * The name of the dialect
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * The human-readable label of the connection
   * @member {String} label
   */
  exports.prototype['label'] = undefined;

  /**
   * Whether the dialect supports query cost estimates
   * @member {Boolean} supports_cost_estimate
   */
  exports.prototype['supports_cost_estimate'] = undefined;

  /**
   * Whether the dialect supports uploading tables
   * @member {Boolean} supports_upload_tables
   */
  exports.prototype['supports_upload_tables'] = undefined;

  /**
   * PDT index columns
   * @member {String} persistent_table_indexes
   */
  exports.prototype['persistent_table_indexes'] = undefined;

  /**
   * PDT sortkey columns
   * @member {String} persistent_table_sortkeys
   */
  exports.prototype['persistent_table_sortkeys'] = undefined;

  /**
   * PDT distkey column
   * @member {String} persistent_table_distkey
   */
  exports.prototype['persistent_table_distkey'] = undefined;

  /**
   * Suports streaming results
   * @member {Boolean} supports_streaming
   */
  exports.prototype['supports_streaming'] = undefined;

  /**
   * Should SQL Runner snippets automatically be run
   * @member {Boolean} automatically_run_sql_runner_snippets
   */
  exports.prototype['automatically_run_sql_runner_snippets'] = undefined;

  /**
   * Array of names of the tests that can be run on a connection using this dialect
   * @member {Array.<String>} connection_tests
   */
  exports.prototype['connection_tests'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
