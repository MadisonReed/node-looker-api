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
    root.LookerApi30Reference.PrefetchMapper = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PrefetchMapper model module.
   * @module model/PrefetchMapper
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PrefetchMapper</code>.
   * @alias module:model/PrefetchMapper
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>PrefetchMapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrefetchMapper} obj Optional instance to populate.
   * @return {module:model/PrefetchMapper} The populated <code>PrefetchMapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('ttl')) {
        obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Integer');
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
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], {'String': 'String'});
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
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
   * Data associated with the queries stored by prefetching the data
   * @member {Object.<String, String>} value
   */
  exports.prototype['value'] = undefined;

  /**
   * Link to get this item
   * @member {String} url
   */
  exports.prototype['url'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
