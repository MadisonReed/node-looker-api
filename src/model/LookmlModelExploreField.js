(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './LookmlModelExploreFieldEnumeration', './LookmlModelExploreFieldSqlCase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LookmlModelExploreFieldEnumeration'), require('./LookmlModelExploreFieldSqlCase'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.LookmlModelExploreField = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.LookmlModelExploreFieldEnumeration, root.LookerApi30Reference.LookmlModelExploreFieldSqlCase);
  }
}(this, function(ApiClient, LookmlModelExploreFieldEnumeration, LookmlModelExploreFieldSqlCase) {
  'use strict';

  /**
   * The LookmlModelExploreField model module.
   * @module model/LookmlModelExploreField
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LookmlModelExploreField</code>.
   * @alias module:model/LookmlModelExploreField
   * @class
   */
  var exports = function() {






























  };

  /**
   * Constructs a <code>LookmlModelExploreField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LookmlModelExploreField} obj Optional instance to populate.
   * @return {module:model/LookmlModelExploreField} The populated <code>LookmlModelExploreField</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('label_short')) {
        obj['label_short'] = ApiClient.convertToType(data['label_short'], 'String');
      }
      if (data.hasOwnProperty('view_label')) {
        obj['view_label'] = ApiClient.convertToType(data['view_label'], 'String');
      }
      if (data.hasOwnProperty('align')) {
        obj['align'] = ApiClient.convertToType(data['align'], 'String');
      }
      if (data.hasOwnProperty('default_filter_value')) {
        obj['default_filter_value'] = ApiClient.convertToType(data['default_filter_value'], 'String');
      }
      if (data.hasOwnProperty('hidden')) {
        obj['hidden'] = ApiClient.convertToType(data['hidden'], 'Boolean');
      }
      if (data.hasOwnProperty('view')) {
        obj['view'] = ApiClient.convertToType(data['view'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('is_numeric')) {
        obj['is_numeric'] = ApiClient.convertToType(data['is_numeric'], 'Boolean');
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
      }
      if (data.hasOwnProperty('project_name')) {
        obj['project_name'] = ApiClient.convertToType(data['project_name'], 'String');
      }
      if (data.hasOwnProperty('source_file')) {
        obj['source_file'] = ApiClient.convertToType(data['source_file'], 'String');
      }
      if (data.hasOwnProperty('can_filter')) {
        obj['can_filter'] = ApiClient.convertToType(data['can_filter'], 'Boolean');
      }
      if (data.hasOwnProperty('requires_refresh_on_sort')) {
        obj['requires_refresh_on_sort'] = ApiClient.convertToType(data['requires_refresh_on_sort'], 'Boolean');
      }
      if (data.hasOwnProperty('sortable')) {
        obj['sortable'] = ApiClient.convertToType(data['sortable'], 'Boolean');
      }
      if (data.hasOwnProperty('value_format')) {
        obj['value_format'] = ApiClient.convertToType(data['value_format'], 'String');
      }
      if (data.hasOwnProperty('field_group_label')) {
        obj['field_group_label'] = ApiClient.convertToType(data['field_group_label'], 'String');
      }
      if (data.hasOwnProperty('field_group_variant')) {
        obj['field_group_variant'] = ApiClient.convertToType(data['field_group_variant'], 'String');
      }
      if (data.hasOwnProperty('suggest_explore')) {
        obj['suggest_explore'] = ApiClient.convertToType(data['suggest_explore'], 'String');
      }
      if (data.hasOwnProperty('suggest_dimension')) {
        obj['suggest_dimension'] = ApiClient.convertToType(data['suggest_dimension'], 'String');
      }
      if (data.hasOwnProperty('enumerations')) {
        obj['enumerations'] = ApiClient.convertToType(data['enumerations'], [LookmlModelExploreFieldEnumeration]);
      }
      if (data.hasOwnProperty('suggestable')) {
        obj['suggestable'] = ApiClient.convertToType(data['suggestable'], 'Boolean');
      }
      if (data.hasOwnProperty('sql')) {
        obj['sql'] = ApiClient.convertToType(data['sql'], 'String');
      }
      if (data.hasOwnProperty('sql_case')) {
        obj['sql_case'] = ApiClient.convertToType(data['sql_case'], [LookmlModelExploreFieldSqlCase]);
      }
      if (data.hasOwnProperty('user_attribute_filter_types')) {
        obj['user_attribute_filter_types'] = ApiClient.convertToType(data['user_attribute_filter_types'], ['String']);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * Label
   * @member {String} label
   */
  exports.prototype['label'] = undefined;

  /**
   * Short version of label
   * @member {String} label_short
   */
  exports.prototype['label_short'] = undefined;

  /**
   * Label of view
   * @member {String} view_label
   */
  exports.prototype['view_label'] = undefined;

  /**
   * Alignment type
   * @member {String} align
   */
  exports.prototype['align'] = undefined;

  /**
   * Default filter value
   * @member {String} default_filter_value
   */
  exports.prototype['default_filter_value'] = undefined;

  /**
   * Is hidden
   * @member {Boolean} hidden
   */
  exports.prototype['hidden'] = undefined;

  /**
   * View name
   * @member {String} view
   */
  exports.prototype['view'] = undefined;

  /**
   * Type of field
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * Is numeric
   * @member {Boolean} is_numeric
   */
  exports.prototype['is_numeric'] = undefined;

  /**
   * Scope
   * @member {String} scope
   */
  exports.prototype['scope'] = undefined;

  /**
   * Project name
   * @member {String} project_name
   */
  exports.prototype['project_name'] = undefined;

  /**
   * Source file
   * @member {String} source_file
   */
  exports.prototype['source_file'] = undefined;

  /**
   * Can filter
   * @member {Boolean} can_filter
   */
  exports.prototype['can_filter'] = undefined;

  /**
   * Requires refres on sort
   * @member {Boolean} requires_refresh_on_sort
   */
  exports.prototype['requires_refresh_on_sort'] = undefined;

  /**
   * Is sortable
   * @member {Boolean} sortable
   */
  exports.prototype['sortable'] = undefined;

  /**
   * Value format
   * @member {String} value_format
   */
  exports.prototype['value_format'] = undefined;

  /**
   * Field group label
   * @member {String} field_group_label
   */
  exports.prototype['field_group_label'] = undefined;

  /**
   * Field Group variant
   * @member {String} field_group_variant
   */
  exports.prototype['field_group_variant'] = undefined;

  /**
   * Explore for suggest
   * @member {String} suggest_explore
   */
  exports.prototype['suggest_explore'] = undefined;

  /**
   * Dimension for suggest
   * @member {String} suggest_dimension
   */
  exports.prototype['suggest_dimension'] = undefined;

  /**
   * Array of enumerations
   * @member {Array.<module:model/LookmlModelExploreFieldEnumeration>} enumerations
   */
  exports.prototype['enumerations'] = undefined;

  /**
   * Is suggestable
   * @member {Boolean} suggestable
   */
  exports.prototype['suggestable'] = undefined;

  /**
   * SQL expression
   * @member {String} sql
   */
  exports.prototype['sql'] = undefined;

  /**
   * An array of conditions and values that make up a SQL Case expression
   * @member {Array.<module:model/LookmlModelExploreFieldSqlCase>} sql_case
   */
  exports.prototype['sql_case'] = undefined;

  /**
   * Valid user attributes types for filtering
   * @member {Array.<String>} user_attribute_filter_types
   */
  exports.prototype['user_attribute_filter_types'] = undefined;

  /**
   * Array of string tags specified for the field
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
