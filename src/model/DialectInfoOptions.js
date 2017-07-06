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
    root.LookerApi30Reference.DialectInfoOptions = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DialectInfoOptions model module.
   * @module model/DialectInfoOptions
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DialectInfoOptions</code>.
   * @alias module:model/DialectInfoOptions
   * @class
   */
  var exports = function() {












  };

  /**
   * Constructs a <code>DialectInfoOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DialectInfoOptions} obj Optional instance to populate.
   * @return {module:model/DialectInfoOptions} The populated <code>DialectInfoOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'Boolean');
      }
      if (data.hasOwnProperty('schema')) {
        obj['schema'] = ApiClient.convertToType(data['schema'], 'Boolean');
      }
      if (data.hasOwnProperty('ssl')) {
        obj['ssl'] = ApiClient.convertToType(data['ssl'], 'Boolean');
      }
      if (data.hasOwnProperty('auth')) {
        obj['auth'] = ApiClient.convertToType(data['auth'], 'Boolean');
      }
      if (data.hasOwnProperty('host')) {
        obj['host'] = ApiClient.convertToType(data['host'], 'Boolean');
      }
      if (data.hasOwnProperty('tmp_table')) {
        obj['tmp_table'] = ApiClient.convertToType(data['tmp_table'], 'Boolean');
      }
      if (data.hasOwnProperty('project_name')) {
        obj['project_name'] = ApiClient.convertToType(data['project_name'], 'Boolean');
      }
      if (data.hasOwnProperty('oauth_credentials')) {
        obj['oauth_credentials'] = ApiClient.convertToType(data['oauth_credentials'], 'Boolean');
      }
      if (data.hasOwnProperty('additional_params')) {
        obj['additional_params'] = ApiClient.convertToType(data['additional_params'], 'Boolean');
      }
      if (data.hasOwnProperty('username_required')) {
        obj['username_required'] = ApiClient.convertToType(data['username_required'], 'Boolean');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Has timezone support
   * @member {Boolean} timezone
   */
  exports.prototype['timezone'] = undefined;

  /**
   * Has schema support
   * @member {Boolean} schema
   */
  exports.prototype['schema'] = undefined;

  /**
   * Has SSL support
   * @member {Boolean} ssl
   */
  exports.prototype['ssl'] = undefined;

  /**
   * Has auth support
   * @member {Boolean} auth
   */
  exports.prototype['auth'] = undefined;

  /**
   * Has host support
   * @member {Boolean} host
   */
  exports.prototype['host'] = undefined;

  /**
   * Has tmp table support
   * @member {Boolean} tmp_table
   */
  exports.prototype['tmp_table'] = undefined;

  /**
   * Has project name support
   * @member {Boolean} project_name
   */
  exports.prototype['project_name'] = undefined;

  /**
   * Has OAuth support
   * @member {Boolean} oauth_credentials
   */
  exports.prototype['oauth_credentials'] = undefined;

  /**
   * Has additional params support
   * @member {Boolean} additional_params
   */
  exports.prototype['additional_params'] = undefined;

  /**
   * Username is required
   * @member {Boolean} username_required
   */
  exports.prototype['username_required'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
