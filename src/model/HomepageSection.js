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
    root.LookerApi30Reference.HomepageSection = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The HomepageSection model module.
   * @module model/HomepageSection
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>HomepageSection</code>.
   * @alias module:model/HomepageSection
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>HomepageSection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HomepageSection} obj Optional instance to populate.
   * @return {module:model/HomepageSection} The populated <code>HomepageSection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('is_header')) {
        obj['is_header'] = ApiClient.convertToType(data['is_header'], 'Boolean');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'Number');
      }
      if (data.hasOwnProperty('detail_url')) {
        obj['detail_url'] = ApiClient.convertToType(data['detail_url'], 'String');
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
   * Name of row
   * @member {String} title
   */
  exports.prototype['title'] = undefined;

  /**
   * Is this a header section (has no items)
   * @member {Boolean} is_header
   */
  exports.prototype['is_header'] = undefined;

  /**
   * An arbitrary float representing the sort order of sections.
   * @member {Number} order
   */
  exports.prototype['order'] = undefined;

  /**
   * A URL pointing to a page showing further information about the content in the section.
   * @member {String} detail_url
   */
  exports.prototype['detail_url'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
