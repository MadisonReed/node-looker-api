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
    root.LookerApi30Reference.CreateQueryTask = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreateQueryTask model module.
   * @module model/CreateQueryTask
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>CreateQueryTask</code>.
   * @alias module:model/CreateQueryTask
   * @class
   * @param queryId
   * @param resultFormat
   */
  var exports = function(queryId, resultFormat) {

    this['query_id'] = queryId;
    this['result_format'] = resultFormat;





  };

  /**
   * Constructs a <code>CreateQueryTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateQueryTask} obj Optional instance to populate.
   * @return {module:model/CreateQueryTask} The populated <code>CreateQueryTask</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('query_id')) {
        obj['query_id'] = ApiClient.convertToType(data['query_id'], 'Integer');
      }
      if (data.hasOwnProperty('result_format')) {
        obj['result_format'] = ApiClient.convertToType(data['result_format'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('deferred')) {
        obj['deferred'] = ApiClient.convertToType(data['deferred'], 'Boolean');
      }
      if (data.hasOwnProperty('look_id')) {
        obj['look_id'] = ApiClient.convertToType(data['look_id'], 'Integer');
      }
      if (data.hasOwnProperty('dashboard_id')) {
        obj['dashboard_id'] = ApiClient.convertToType(data['dashboard_id'], 'String');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Id of query to run
   * @member {Integer} query_id
   */
  exports.prototype['query_id'] = undefined;

  /**
   * Desired result format
   * @member {String} result_format
   */
  exports.prototype['result_format'] = undefined;

  /**
   * Source of query task
   * @member {String} source
   */
  exports.prototype['source'] = undefined;

  /**
   * Create the task but defer execution
   * @member {Boolean} deferred
   */
  exports.prototype['deferred'] = undefined;

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
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
