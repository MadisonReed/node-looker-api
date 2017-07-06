(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ModelSet', './PermissionSet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelSet'), require('./PermissionSet'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.Role = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.ModelSet, root.LookerApi30Reference.PermissionSet);
  }
}(this, function(ApiClient, ModelSet, PermissionSet) {
  'use strict';

  /**
   * The Role model module.
   * @module model/Role
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Role</code>.
   * @alias module:model/Role
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>Role</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Role} obj Optional instance to populate.
   * @return {module:model/Role} The populated <code>Role</code> instance.
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
      if (data.hasOwnProperty('permission_set')) {
        obj['permission_set'] = PermissionSet.constructFromObject(data['permission_set']);
      }
      if (data.hasOwnProperty('permission_set_id')) {
        obj['permission_set_id'] = ApiClient.convertToType(data['permission_set_id'], 'Integer');
      }
      if (data.hasOwnProperty('model_set')) {
        obj['model_set'] = ModelSet.constructFromObject(data['model_set']);
      }
      if (data.hasOwnProperty('model_set_id')) {
        obj['model_set_id'] = ApiClient.convertToType(data['model_set_id'], 'Integer');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('users_url')) {
        obj['users_url'] = ApiClient.convertToType(data['users_url'], 'String');
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
   * Name of Role
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * (Read only) Permission set
   * @member {module:model/PermissionSet} permission_set
   */
  exports.prototype['permission_set'] = undefined;

  /**
   * (Write only) Id of permission set
   * @member {Integer} permission_set_id
   */
  exports.prototype['permission_set_id'] = undefined;

  /**
   * (Read only) Model set
   * @member {module:model/ModelSet} model_set
   */
  exports.prototype['model_set'] = undefined;

  /**
   * (Write only) Id of model set
   * @member {Integer} model_set_id
   */
  exports.prototype['model_set_id'] = undefined;

  /**
   * Link to get this item
   * @member {String} url
   */
  exports.prototype['url'] = undefined;

  /**
   * Link to get list of users with this role
   * @member {String} users_url
   */
  exports.prototype['users_url'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
