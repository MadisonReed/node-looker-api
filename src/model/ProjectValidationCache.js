(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ModelsNotValidated', './ProjectError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsNotValidated'), require('./ProjectError'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.ProjectValidationCache = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.ModelsNotValidated, root.LookerApi30Reference.ProjectError);
  }
}(this, function(ApiClient, ModelsNotValidated, ProjectError) {
  'use strict';

  /**
   * The ProjectValidationCache model module.
   * @module model/ProjectValidationCache
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ProjectValidationCache</code>.
   * @alias module:model/ProjectValidationCache
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>ProjectValidationCache</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectValidationCache} obj Optional instance to populate.
   * @return {module:model/ProjectValidationCache} The populated <code>ProjectValidationCache</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [ProjectError]);
      }
      if (data.hasOwnProperty('project_digest')) {
        obj['project_digest'] = ApiClient.convertToType(data['project_digest'], 'String');
      }
      if (data.hasOwnProperty('models_not_validated')) {
        obj['models_not_validated'] = ApiClient.convertToType(data['models_not_validated'], [ModelsNotValidated]);
      }
      if (data.hasOwnProperty('stale')) {
        obj['stale'] = ApiClient.convertToType(data['stale'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * A list of project errors
   * @member {Array.<module:model/ProjectError>} errors
   */
  exports.prototype['errors'] = undefined;

  /**
   * A hash value computed from the project's current state
   * @member {String} project_digest
   */
  exports.prototype['project_digest'] = undefined;

  /**
   * A list of models which were not fully validated
   * @member {Array.<module:model/ModelsNotValidated>} models_not_validated
   */
  exports.prototype['models_not_validated'] = undefined;

  /**
   * If true, the cached project validation results are no longer accurate because the project has changed since the cached results were calculated
   * @member {Boolean} stale
   */
  exports.prototype['stale'] = undefined;




  return exports;
}));
