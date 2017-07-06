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
    root.LookerApi30Reference.GroupIdForGroupUserInclusion = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GroupIdForGroupUserInclusion model module.
   * @module model/GroupIdForGroupUserInclusion
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>GroupIdForGroupUserInclusion</code>.
   * @alias module:model/GroupIdForGroupUserInclusion
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>GroupIdForGroupUserInclusion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupIdForGroupUserInclusion} obj Optional instance to populate.
   * @return {module:model/GroupIdForGroupUserInclusion} The populated <code>GroupIdForGroupUserInclusion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Integer');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Id of user
   * @member {Integer} user_id
   */
  exports.prototype['user_id'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
