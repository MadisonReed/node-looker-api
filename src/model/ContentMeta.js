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
    root.LookerApi30Reference.ContentMeta = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ContentMeta model module.
   * @module model/ContentMeta
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ContentMeta</code>.
   * @alias module:model/ContentMeta
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>ContentMeta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentMeta} obj Optional instance to populate.
   * @return {module:model/ContentMeta} The populated <code>ContentMeta</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('parent_id')) {
        obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Integer');
      }
      if (data.hasOwnProperty('space_id')) {
        obj['space_id'] = ApiClient.convertToType(data['space_id'], 'String');
      }
      if (data.hasOwnProperty('dashboard_id')) {
        obj['dashboard_id'] = ApiClient.convertToType(data['dashboard_id'], 'String');
      }
      if (data.hasOwnProperty('look_id')) {
        obj['look_id'] = ApiClient.convertToType(data['look_id'], 'Integer');
      }
      if (data.hasOwnProperty('content_type')) {
        obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
      }
      if (data.hasOwnProperty('inherits')) {
        obj['inherits'] = ApiClient.convertToType(data['inherits'], 'Boolean');
      }
      if (data.hasOwnProperty('inheriting_id')) {
        obj['inheriting_id'] = ApiClient.convertToType(data['inheriting_id'], 'Integer');
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
   * Name or title of underlying content
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Id of Parent Content
   * @member {Integer} parent_id
   */
  exports.prototype['parent_id'] = undefined;

  /**
   * Id of associated space when content_type is \"space\"
   * @member {String} space_id
   */
  exports.prototype['space_id'] = undefined;

  /**
   * Id of associated dashboard when content_type is \"dashboard\"
   * @member {String} dashboard_id
   */
  exports.prototype['dashboard_id'] = undefined;

  /**
   * Id of associated look when content_type is \"look\"
   * @member {Integer} look_id
   */
  exports.prototype['look_id'] = undefined;

  /**
   * Content Type (\"dashboard\", \"look\", or \"space\")
   * @member {String} content_type
   */
  exports.prototype['content_type'] = undefined;

  /**
   * Whether content inherits its access levels from parent
   * @member {Boolean} inherits
   */
  exports.prototype['inherits'] = undefined;

  /**
   * Id of Inherited Content
   * @member {Integer} inheriting_id
   */
  exports.prototype['inheriting_id'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
