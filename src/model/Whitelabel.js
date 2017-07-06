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
    root.LookerApi30Reference.Whitelabel = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Whitelabel model module.
   * @module model/Whitelabel
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Whitelabel</code>.
   * @alias module:model/Whitelabel
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>Whitelabel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Whitelabel} obj Optional instance to populate.
   * @return {module:model/Whitelabel} The populated <code>Whitelabel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('logo_file')) {
        obj['logo_file'] = ApiClient.convertToType(data['logo_file'], 'String');
      }
      if (data.hasOwnProperty('logo_url')) {
        obj['logo_url'] = ApiClient.convertToType(data['logo_url'], 'String');
      }
      if (data.hasOwnProperty('favicon_file')) {
        obj['favicon_file'] = ApiClient.convertToType(data['favicon_file'], 'String');
      }
      if (data.hasOwnProperty('favicon_url')) {
        obj['favicon_url'] = ApiClient.convertToType(data['favicon_url'], 'String');
      }
      if (data.hasOwnProperty('default_title')) {
        obj['default_title'] = ApiClient.convertToType(data['default_title'], 'String');
      }
      if (data.hasOwnProperty('show_help_menu')) {
        obj['show_help_menu'] = ApiClient.convertToType(data['show_help_menu'], 'Boolean');
      }
      if (data.hasOwnProperty('show_docs')) {
        obj['show_docs'] = ApiClient.convertToType(data['show_docs'], 'Boolean');
      }
      if (data.hasOwnProperty('show_email_sub_options')) {
        obj['show_email_sub_options'] = ApiClient.convertToType(data['show_email_sub_options'], 'Boolean');
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
   * Customer logo image. Expected base64 encoded data (write-only)
   * @member {String} logo_file
   */
  exports.prototype['logo_file'] = undefined;

  /**
   * Logo image url (read-only)
   * @member {String} logo_url
   */
  exports.prototype['logo_url'] = undefined;

  /**
   * Custom favicon image. Expected base64 encoded data (write-only)
   * @member {String} favicon_file
   */
  exports.prototype['favicon_file'] = undefined;

  /**
   * Favicon image url (read-only)
   * @member {String} favicon_url
   */
  exports.prototype['favicon_url'] = undefined;

  /**
   * Default page title
   * @member {String} default_title
   */
  exports.prototype['default_title'] = undefined;

  /**
   * Boolean to toggle showing help menus
   * @member {Boolean} show_help_menu
   */
  exports.prototype['show_help_menu'] = undefined;

  /**
   * Boolean to toggle showing docs
   * @member {Boolean} show_docs
   */
  exports.prototype['show_docs'] = undefined;

  /**
   * Boolean to toggle showing email subscription options.
   * @member {Boolean} show_email_sub_options
   */
  exports.prototype['show_email_sub_options'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
