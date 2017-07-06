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
    root.LookerApi30Reference.GitStatus = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GitStatus model module.
   * @module model/GitStatus
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>GitStatus</code>.
   * @alias module:model/GitStatus
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>GitStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GitStatus} obj Optional instance to populate.
   * @return {module:model/GitStatus} The populated <code>GitStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('revertable')) {
        obj['revertable'] = ApiClient.convertToType(data['revertable'], 'Boolean');
      }
      if (data.hasOwnProperty('conflict')) {
        obj['conflict'] = ApiClient.convertToType(data['conflict'], 'Boolean');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Git action: add, delete, etc
   * @member {String} action
   */
  exports.prototype['action'] = undefined;

  /**
   * Git description of the action
   * @member {String} text
   */
  exports.prototype['text'] = undefined;

  /**
   * When true, the file can be reverted to an earlier state
   * @member {Boolean} revertable
   */
  exports.prototype['revertable'] = undefined;

  /**
   * When true, changes to the local file conflict with the remote repository
   * @member {Boolean} conflict
   */
  exports.prototype['conflict'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
