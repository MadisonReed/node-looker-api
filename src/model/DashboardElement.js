(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './LookWithQuery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LookWithQuery'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.DashboardElement = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.LookWithQuery);
  }
}(this, function(ApiClient, LookWithQuery) {
  'use strict';

  /**
   * The DashboardElement model module.
   * @module model/DashboardElement
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DashboardElement</code>.
   * @alias module:model/DashboardElement
   * @class
   */
  var exports = function() {



















  };

  /**
   * Constructs a <code>DashboardElement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DashboardElement} obj Optional instance to populate.
   * @return {module:model/DashboardElement} The populated <code>DashboardElement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('dashboard_id')) {
        obj['dashboard_id'] = ApiClient.convertToType(data['dashboard_id'], 'String');
      }
      if (data.hasOwnProperty('look_id')) {
        obj['look_id'] = ApiClient.convertToType(data['look_id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('listen')) {
        obj['listen'] = ApiClient.convertToType(data['listen'], {'String': 'String'});
      }
      if (data.hasOwnProperty('refresh_interval')) {
        obj['refresh_interval'] = ApiClient.convertToType(data['refresh_interval'], 'String');
      }
      if (data.hasOwnProperty('refresh_interval_to_i')) {
        obj['refresh_interval_to_i'] = ApiClient.convertToType(data['refresh_interval_to_i'], 'Integer');
      }
      if (data.hasOwnProperty('note_text')) {
        obj['note_text'] = ApiClient.convertToType(data['note_text'], 'String');
      }
      if (data.hasOwnProperty('note_text_as_html')) {
        obj['note_text_as_html'] = ApiClient.convertToType(data['note_text_as_html'], 'String');
      }
      if (data.hasOwnProperty('note_display')) {
        obj['note_display'] = ApiClient.convertToType(data['note_display'], 'String');
      }
      if (data.hasOwnProperty('note_state')) {
        obj['note_state'] = ApiClient.convertToType(data['note_state'], 'String');
      }
      if (data.hasOwnProperty('title_text')) {
        obj['title_text'] = ApiClient.convertToType(data['title_text'], 'String');
      }
      if (data.hasOwnProperty('subtitle_text')) {
        obj['subtitle_text'] = ApiClient.convertToType(data['subtitle_text'], 'String');
      }
      if (data.hasOwnProperty('body_text')) {
        obj['body_text'] = ApiClient.convertToType(data['body_text'], 'String');
      }
      if (data.hasOwnProperty('body_text_as_html')) {
        obj['body_text_as_html'] = ApiClient.convertToType(data['body_text_as_html'], 'String');
      }
      if (data.hasOwnProperty('look')) {
        obj['look'] = LookWithQuery.constructFromObject(data['look']);
      }
      if (data.hasOwnProperty('edit_uri')) {
        obj['edit_uri'] = ApiClient.convertToType(data['edit_uri'], 'String');
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
   * Id of Dashboard
   * @member {String} dashboard_id
   */
  exports.prototype['dashboard_id'] = undefined;

  /**
   * Id Of Look
   * @member {String} look_id
   */
  exports.prototype['look_id'] = undefined;

  /**
   * Type
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * Listen
   * @member {Object.<String, String>} listen
   */
  exports.prototype['listen'] = undefined;

  /**
   * Refresh Interval
   * @member {String} refresh_interval
   */
  exports.prototype['refresh_interval'] = undefined;

  /**
   * Refresh Interval as integer
   * @member {Integer} refresh_interval_to_i
   */
  exports.prototype['refresh_interval_to_i'] = undefined;

  /**
   * Note Text
   * @member {String} note_text
   */
  exports.prototype['note_text'] = undefined;

  /**
   * Note Text as Html
   * @member {String} note_text_as_html
   */
  exports.prototype['note_text_as_html'] = undefined;

  /**
   * Note Display
   * @member {String} note_display
   */
  exports.prototype['note_display'] = undefined;

  /**
   * Note State
   * @member {String} note_state
   */
  exports.prototype['note_state'] = undefined;

  /**
   * Text tile title text
   * @member {String} title_text
   */
  exports.prototype['title_text'] = undefined;

  /**
   * Text tile subtitle text
   * @member {String} subtitle_text
   */
  exports.prototype['subtitle_text'] = undefined;

  /**
   * Text tile body text
   * @member {String} body_text
   */
  exports.prototype['body_text'] = undefined;

  /**
   * Text tile body text as Html
   * @member {String} body_text_as_html
   */
  exports.prototype['body_text_as_html'] = undefined;

  /**
   * Look
   * @member {module:model/LookWithQuery} look
   */
  exports.prototype['look'] = undefined;

  /**
   * Relative path of URI of LookML file to edit the dashboard element (LookML dashboard only).
   * @member {String} edit_uri
   */
  exports.prototype['edit_uri'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
