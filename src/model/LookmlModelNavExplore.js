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
    root.LookerApi30Reference.LookmlModelNavExplore = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LookmlModelNavExplore model module.
   * @module model/LookmlModelNavExplore
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LookmlModelNavExplore</code>.
   * @alias module:model/LookmlModelNavExplore
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>LookmlModelNavExplore</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LookmlModelNavExplore} obj Optional instance to populate.
   * @return {module:model/LookmlModelNavExplore} The populated <code>LookmlModelNavExplore</code> instance.
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
      if (data.hasOwnProperty('hidden')) {
        obj['hidden'] = ApiClient.convertToType(data['hidden'], 'Boolean');
      }
      if (data.hasOwnProperty('group_label')) {
        obj['group_label'] = ApiClient.convertToType(data['group_label'], 'String');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Name of the explore
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Label for the explore
   * @member {String} label
   */
  exports.prototype['label'] = undefined;

  /**
   * Is this explore marked as hidden
   * @member {Boolean} hidden
   */
  exports.prototype['hidden'] = undefined;

  /**
   * Label used to group explores in the navigation menus
   * @member {String} group_label
   */
  exports.prototype['group_label'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
