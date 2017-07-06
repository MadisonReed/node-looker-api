(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './LookmlModelExploreField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LookmlModelExploreField'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.LookmlModelExploreFieldset = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.LookmlModelExploreField);
  }
}(this, function(ApiClient, LookmlModelExploreField) {
  'use strict';

  /**
   * The LookmlModelExploreFieldset model module.
   * @module model/LookmlModelExploreFieldset
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LookmlModelExploreFieldset</code>.
   * @alias module:model/LookmlModelExploreFieldset
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>LookmlModelExploreFieldset</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LookmlModelExploreFieldset} obj Optional instance to populate.
   * @return {module:model/LookmlModelExploreFieldset} The populated <code>LookmlModelExploreFieldset</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('dimensions')) {
        obj['dimensions'] = ApiClient.convertToType(data['dimensions'], [LookmlModelExploreField]);
      }
      if (data.hasOwnProperty('measures')) {
        obj['measures'] = ApiClient.convertToType(data['measures'], [LookmlModelExploreField]);
      }
      if (data.hasOwnProperty('filters')) {
        obj['filters'] = ApiClient.convertToType(data['filters'], [LookmlModelExploreField]);
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Array of dimensions
   * @member {Array.<module:model/LookmlModelExploreField>} dimensions
   */
  exports.prototype['dimensions'] = undefined;

  /**
   * Array of measures
   * @member {Array.<module:model/LookmlModelExploreField>} measures
   */
  exports.prototype['measures'] = undefined;

  /**
   * Array of filters
   * @member {Array.<module:model/LookmlModelExploreField>} filters
   */
  exports.prototype['filters'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
