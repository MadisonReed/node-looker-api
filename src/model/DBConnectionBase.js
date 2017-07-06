(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Dialect', './Snippet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Dialect'), require('./Snippet'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.DBConnectionBase = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.Dialect, root.LookerApi30Reference.Snippet);
  }
}(this, function(ApiClient, Dialect, Snippet) {
  'use strict';

  /**
   * The DBConnectionBase model module.
   * @module model/DBConnectionBase
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DBConnectionBase</code>.
   * @alias module:model/DBConnectionBase
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>DBConnectionBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DBConnectionBase} obj Optional instance to populate.
   * @return {module:model/DBConnectionBase} The populated <code>DBConnectionBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('dialect')) {
        obj['dialect'] = Dialect.constructFromObject(data['dialect']);
      }
      if (data.hasOwnProperty('snippets')) {
        obj['snippets'] = ApiClient.convertToType(data['snippets'], [Snippet]);
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Name of the connection. Also used as the unique identifier
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * (Read-only) SQL Dialect details
   * @member {module:model/Dialect} dialect
   */
  exports.prototype['dialect'] = undefined;

  /**
   * SQL Runner snippets for this connection
   * @member {Array.<module:model/Snippet>} snippets
   */
  exports.prototype['snippets'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
