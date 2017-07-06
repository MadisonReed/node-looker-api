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
    root.LookerApi30Reference.HomepageItem = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The HomepageItem model module.
   * @module model/HomepageItem
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>HomepageItem</code>.
   * @alias module:model/HomepageItem
   * @class
   */
  var exports = function() {


























  };

  /**
   * Constructs a <code>HomepageItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HomepageItem} obj Optional instance to populate.
   * @return {module:model/HomepageItem} The populated <code>HomepageItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('homepage_section_id')) {
        obj['homepage_section_id'] = ApiClient.convertToType(data['homepage_section_id'], 'String');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'Integer');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('show_title')) {
        obj['show_title'] = ApiClient.convertToType(data['show_title'], 'Boolean');
      }
      if (data.hasOwnProperty('custom_title')) {
        obj['custom_title'] = ApiClient.convertToType(data['custom_title'], 'String');
      }
      if (data.hasOwnProperty('use_custom_title')) {
        obj['use_custom_title'] = ApiClient.convertToType(data['use_custom_title'], 'Boolean');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('show_description')) {
        obj['show_description'] = ApiClient.convertToType(data['show_description'], 'Boolean');
      }
      if (data.hasOwnProperty('custom_description')) {
        obj['custom_description'] = ApiClient.convertToType(data['custom_description'], 'String');
      }
      if (data.hasOwnProperty('use_custom_description')) {
        obj['use_custom_description'] = ApiClient.convertToType(data['use_custom_description'], 'Boolean');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('show_url')) {
        obj['show_url'] = ApiClient.convertToType(data['show_url'], 'Boolean');
      }
      if (data.hasOwnProperty('custom_url')) {
        obj['custom_url'] = ApiClient.convertToType(data['custom_url'], 'String');
      }
      if (data.hasOwnProperty('use_custom_url')) {
        obj['use_custom_url'] = ApiClient.convertToType(data['use_custom_url'], 'Boolean');
      }
      if (data.hasOwnProperty('image_url')) {
        obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
      }
      if (data.hasOwnProperty('show_image')) {
        obj['show_image'] = ApiClient.convertToType(data['show_image'], 'Boolean');
      }
      if (data.hasOwnProperty('custom_image_url')) {
        obj['custom_image_url'] = ApiClient.convertToType(data['custom_image_url'], 'String');
      }
      if (data.hasOwnProperty('custom_image_data_base64')) {
        obj['custom_image_data_base64'] = ApiClient.convertToType(data['custom_image_data_base64'], 'String');
      }
      if (data.hasOwnProperty('use_custom_image')) {
        obj['use_custom_image'] = ApiClient.convertToType(data['use_custom_image'], 'Boolean');
      }
      if (data.hasOwnProperty('look_id')) {
        obj['look_id'] = ApiClient.convertToType(data['look_id'], 'Integer');
      }
      if (data.hasOwnProperty('dashboard_id')) {
        obj['dashboard_id'] = ApiClient.convertToType(data['dashboard_id'], 'Integer');
      }
      if (data.hasOwnProperty('lookml_dashboard_id')) {
        obj['lookml_dashboard_id'] = ApiClient.convertToType(data['lookml_dashboard_id'], 'String');
      }
      if (data.hasOwnProperty('section_fetch_time')) {
        obj['section_fetch_time'] = ApiClient.convertToType(data['section_fetch_time'], 'Number');
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
   * Associated Homepage Section
   * @member {String} homepage_section_id
   */
  exports.prototype['homepage_section_id'] = undefined;

  /**
   * An arbitrary integer representing the sort order within the section
   * @member {Integer} order
   */
  exports.prototype['order'] = undefined;

  /**
   * The actual title for display
   * @member {String} title
   */
  exports.prototype['title'] = undefined;

  /**
   * Whether the title should be shown
   * @member {Boolean} show_title
   */
  exports.prototype['show_title'] = undefined;

  /**
   * Custom title entered by the user, if present
   * @member {String} custom_title
   */
  exports.prototype['custom_title'] = undefined;

  /**
   * Whether the custom title should be used instead of the content title, if the item is associated with content
   * @member {Boolean} use_custom_title
   */
  exports.prototype['use_custom_title'] = undefined;

  /**
   * The actual description for display
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * Whether the description should be shown
   * @member {Boolean} show_description
   */
  exports.prototype['show_description'] = undefined;

  /**
   * Custom description entered by the user, if present
   * @member {String} custom_description
   */
  exports.prototype['custom_description'] = undefined;

  /**
   * Whether the custom description should be used instead of the content description, if the item is associated with content
   * @member {Boolean} use_custom_description
   */
  exports.prototype['use_custom_description'] = undefined;

  /**
   * The actual url for display
   * @member {String} url
   */
  exports.prototype['url'] = undefined;

  /**
   * Whether the url should be shown
   * @member {Boolean} show_url
   */
  exports.prototype['show_url'] = undefined;

  /**
   * Custom url entered by the user, if present
   * @member {String} custom_url
   */
  exports.prototype['custom_url'] = undefined;

  /**
   * Whether the custom url should be used instead of the content url, if the item is associated with content
   * @member {Boolean} use_custom_url
   */
  exports.prototype['use_custom_url'] = undefined;

  /**
   * The actual image_url for display
   * @member {String} image_url
   */
  exports.prototype['image_url'] = undefined;

  /**
   * Whether the image_url should be shown
   * @member {Boolean} show_image
   */
  exports.prototype['show_image'] = undefined;

  /**
   * Custom image_url entered by the user, if present
   * @member {String} custom_image_url
   */
  exports.prototype['custom_image_url'] = undefined;

  /**
   * (Write-only) base64 encoded image data
   * @member {String} custom_image_data_base64
   */
  exports.prototype['custom_image_data_base64'] = undefined;

  /**
   * Whether the custom image should be used instead of the content image, if the item is associated with content
   * @member {Boolean} use_custom_image
   */
  exports.prototype['use_custom_image'] = undefined;

  /**
   * Look to base this item on
   * @member {Integer} look_id
   */
  exports.prototype['look_id'] = undefined;

  /**
   * Dashboard to base this item on
   * @member {Integer} dashboard_id
   */
  exports.prototype['dashboard_id'] = undefined;

  /**
   * LookML Dashboard to base this item on
   * @member {String} lookml_dashboard_id
   */
  exports.prototype['lookml_dashboard_id'] = undefined;

  /**
   * Number of seconds it took to fetch the section this item is in
   * @member {Number} section_fetch_time
   */
  exports.prototype['section_fetch_time'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
