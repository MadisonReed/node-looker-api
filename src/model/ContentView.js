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
    root.LookerApi30Reference.ContentView = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ContentView model module.
   * @module model/ContentView
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ContentView</code>.
   * @alias module:model/ContentView
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>ContentView</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentView} obj Optional instance to populate.
   * @return {module:model/ContentView} The populated <code>ContentView</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('content_type')) {
        obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
      }
      if (data.hasOwnProperty('content_id')) {
        obj['content_id'] = ApiClient.convertToType(data['content_id'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Integer');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Integer');
      }
      if (data.hasOwnProperty('view_count')) {
        obj['view_count'] = ApiClient.convertToType(data['view_count'], 'Integer');
      }
      if (data.hasOwnProperty('last_viewed_at')) {
        obj['last_viewed_at'] = ApiClient.convertToType(data['last_viewed_at'], 'String');
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
   * Content Type (\"dashboard\" or \"look\")
   * @member {String} content_type
   */
  exports.prototype['content_type'] = undefined;

  /**
   * Id of dashboard or look specified by content type
   * @member {String} content_id
   */
  exports.prototype['content_id'] = undefined;

  /**
   * Id of user content was viewed by
   * @member {Integer} user_id
   */
  exports.prototype['user_id'] = undefined;

  /**
   * Id of group content was viewed by
   * @member {Integer} group_id
   */
  exports.prototype['group_id'] = undefined;

  /**
   * Number of times piece of content was viewed
   * @member {Integer} view_count
   */
  exports.prototype['view_count'] = undefined;

  /**
   * Date the piece of content was last viewed
   * @member {String} last_viewed_at
   */
  exports.prototype['last_viewed_at'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
