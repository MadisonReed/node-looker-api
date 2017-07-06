(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ApiVersionElement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApiVersionElement'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.ApiVersion = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.ApiVersionElement);
  }
}(this, function(ApiClient, ApiVersionElement) {
  'use strict';

  /**
   * The ApiVersion model module.
   * @module model/ApiVersion
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ApiVersion</code>.
   * @alias module:model/ApiVersion
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>ApiVersion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiVersion} obj Optional instance to populate.
   * @return {module:model/ApiVersion} The populated <code>ApiVersion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('looker_release_version')) {
        obj['looker_release_version'] = ApiClient.convertToType(data['looker_release_version'], 'String');
      }
      if (data.hasOwnProperty('current_version')) {
        obj['current_version'] = ApiVersionElement.constructFromObject(data['current_version']);
      }
      if (data.hasOwnProperty('supported_versions')) {
        obj['supported_versions'] = ApiClient.convertToType(data['supported_versions'], [ApiVersionElement]);
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Current Looker release version number
   * @member {String} looker_release_version
   */
  exports.prototype['looker_release_version'] = undefined;

  /**
   * Current version for this Looker instance
   * @member {module:model/ApiVersionElement} current_version
   */
  exports.prototype['current_version'] = undefined;

  /**
   * Array of versions supported by this Looker instance
   * @member {Array.<module:model/ApiVersionElement>} supported_versions
   */
  exports.prototype['supported_versions'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
