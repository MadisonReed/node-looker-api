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
    root.LookerApi30Reference.PermissionSet = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PermissionSet model module.
   * @module model/PermissionSet
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PermissionSet</code>.
   * @alias module:model/PermissionSet
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>PermissionSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PermissionSet} obj Optional instance to populate.
   * @return {module:model/PermissionSet} The populated <code>PermissionSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('permissions')) {
        obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
      }
      if (data.hasOwnProperty('built_in')) {
        obj['built_in'] = ApiClient.convertToType(data['built_in'], 'Boolean');
      }
      if (data.hasOwnProperty('all_access')) {
        obj['all_access'] = ApiClient.convertToType(data['all_access'], 'Boolean');
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
   * Unique Id
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Name of PermissionSet
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {Array.<String>} permissions
   */
  exports.prototype['permissions'] = undefined;

  /**
   * @member {Boolean} built_in
   */
  exports.prototype['built_in'] = undefined;

  /**
   * @member {Boolean} all_access
   */
  exports.prototype['all_access'] = undefined;

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
