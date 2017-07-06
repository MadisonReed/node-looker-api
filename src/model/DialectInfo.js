(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DialectInfoOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DialectInfoOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.DialectInfo = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.DialectInfoOptions);
  }
}(this, function(ApiClient, DialectInfoOptions) {
  'use strict';

  /**
   * The DialectInfo model module.
   * @module model/DialectInfo
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DialectInfo</code>.
   * @alias module:model/DialectInfo
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>DialectInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DialectInfo} obj Optional instance to populate.
   * @return {module:model/DialectInfo} The populated <code>DialectInfo</code> instance.
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
      if (data.hasOwnProperty('label_for_database_equivalent')) {
        obj['label_for_database_equivalent'] = ApiClient.convertToType(data['label_for_database_equivalent'], 'String');
      }
      if (data.hasOwnProperty('default_port')) {
        obj['default_port'] = ApiClient.convertToType(data['default_port'], 'String');
      }
      if (data.hasOwnProperty('default_max_connections')) {
        obj['default_max_connections'] = ApiClient.convertToType(data['default_max_connections'], 'String');
      }
      if (data.hasOwnProperty('supported_options')) {
        obj['supported_options'] = DialectInfoOptions.constructFromObject(data['supported_options']);
      }
      if (data.hasOwnProperty('installed')) {
        obj['installed'] = ApiClient.convertToType(data['installed'], 'Boolean');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * The name of the dialect
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * The human-readable label of the connection
   * @member {String} label
   */
  exports.prototype['label'] = undefined;

  /**
   * What the dialect calls the equivalent of a normal SQL table
   * @member {String} label_for_database_equivalent
   */
  exports.prototype['label_for_database_equivalent'] = undefined;

  /**
   * Default port number
   * @member {String} default_port
   */
  exports.prototype['default_port'] = undefined;

  /**
   * Default number max connections
   * @member {String} default_max_connections
   */
  exports.prototype['default_max_connections'] = undefined;

  /**
   * Option support details
   * @member {module:model/DialectInfoOptions} supported_options
   */
  exports.prototype['supported_options'] = undefined;

  /**
   * Is the supporting driver installed
   * @member {Boolean} installed
   */
  exports.prototype['installed'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
