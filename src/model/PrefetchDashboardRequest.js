(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PrefetchAccessFilterValue', './PrefetchDashboardFilterValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PrefetchAccessFilterValue'), require('./PrefetchDashboardFilterValue'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.PrefetchDashboardRequest = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.PrefetchAccessFilterValue, root.LookerApi30Reference.PrefetchDashboardFilterValue);
  }
}(this, function(ApiClient, PrefetchAccessFilterValue, PrefetchDashboardFilterValue) {
  'use strict';

  /**
   * The PrefetchDashboardRequest model module.
   * @module model/PrefetchDashboardRequest
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PrefetchDashboardRequest</code>.
   * @alias module:model/PrefetchDashboardRequest
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>PrefetchDashboardRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrefetchDashboardRequest} obj Optional instance to populate.
   * @return {module:model/PrefetchDashboardRequest} The populated <code>PrefetchDashboardRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('ttl')) {
        obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Integer');
      }
      if (data.hasOwnProperty('access_filters')) {
        obj['access_filters'] = ApiClient.convertToType(data['access_filters'], [PrefetchAccessFilterValue]);
      }
      if (data.hasOwnProperty('dashboard_filters')) {
        obj['dashboard_filters'] = ApiClient.convertToType(data['dashboard_filters'], [PrefetchDashboardFilterValue]);
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('computation_time')) {
        obj['computation_time'] = ApiClient.convertToType(data['computation_time'], 'Number');
      }
      if (data.hasOwnProperty('result_size_bytes')) {
        obj['result_size_bytes'] = ApiClient.convertToType(data['result_size_bytes'], 'Integer');
      }
      if (data.hasOwnProperty('hit_count')) {
        obj['hit_count'] = ApiClient.convertToType(data['hit_count'], 'Integer');
      }
      if (data.hasOwnProperty('touched_at')) {
        obj['touched_at'] = ApiClient.convertToType(data['touched_at'], 'Date');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Number of seconds prefetch will live for.
   * @member {Integer} ttl
   */
  exports.prototype['ttl'] = undefined;

  /**
   * Access filters to apply when running queries for prefetch.
   * @member {Array.<module:model/PrefetchAccessFilterValue>} access_filters
   */
  exports.prototype['access_filters'] = undefined;

  /**
   * Dashboard filters to apply when running queries for prefetch.
   * @member {Array.<module:model/PrefetchDashboardFilterValue>} dashboard_filters
   */
  exports.prototype['dashboard_filters'] = undefined;

  /**
   * Time when prefetch was created.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;

  /**
   * Number of seconds it took to compute results for prefetch.
   * @member {Number} computation_time
   */
  exports.prototype['computation_time'] = undefined;

  /**
   * Size of result.
   * @member {Integer} result_size_bytes
   */
  exports.prototype['result_size_bytes'] = undefined;

  /**
   * Number of times prefetch has been accessed.
   * @member {Integer} hit_count
   */
  exports.prototype['hit_count'] = undefined;

  /**
   * Time when prefetch was last accessed.
   * @member {Date} touched_at
   */
  exports.prototype['touched_at'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
