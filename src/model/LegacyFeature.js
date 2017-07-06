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
    root.LookerApi30Reference.LegacyFeature = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LegacyFeature model module.
   * @module model/LegacyFeature
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LegacyFeature</code>.
   * @alias module:model/LegacyFeature
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>LegacyFeature</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LegacyFeature} obj Optional instance to populate.
   * @return {module:model/LegacyFeature} The populated <code>LegacyFeature</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('enabled_locally')) {
        obj['enabled_locally'] = ApiClient.convertToType(data['enabled_locally'], 'Boolean');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('disallowed_as_of_version')) {
        obj['disallowed_as_of_version'] = ApiClient.convertToType(data['disallowed_as_of_version'], 'String');
      }
      if (data.hasOwnProperty('end_of_life_version')) {
        obj['end_of_life_version'] = ApiClient.convertToType(data['end_of_life_version'], 'String');
      }
      if (data.hasOwnProperty('documentation_url')) {
        obj['documentation_url'] = ApiClient.convertToType(data['documentation_url'], 'String');
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
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * Whether this feature has been enabled by a user
   * @member {Boolean} enabled_locally
   */
  exports.prototype['enabled_locally'] = undefined;

  /**
   * Whether this feature is currently enabled
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;

  /**
   * Looker version where this feature became a legacy feature
   * @member {String} disallowed_as_of_version
   */
  exports.prototype['disallowed_as_of_version'] = undefined;

  /**
   * Future Looker version where this feature will be removed
   * @member {String} end_of_life_version
   */
  exports.prototype['end_of_life_version'] = undefined;

  /**
   * URL for documentation about this feature
   * @member {String} documentation_url
   */
  exports.prototype['documentation_url'] = undefined;

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
