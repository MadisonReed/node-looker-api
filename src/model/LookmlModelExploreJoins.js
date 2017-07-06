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
    root.LookerApi30Reference.LookmlModelExploreJoins = factory(root.LookerApi30Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LookmlModelExploreJoins model module.
   * @module model/LookmlModelExploreJoins
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LookmlModelExploreJoins</code>.
   * @alias module:model/LookmlModelExploreJoins
   * @class
   */
  var exports = function() {















  };

  /**
   * Constructs a <code>LookmlModelExploreJoins</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LookmlModelExploreJoins} obj Optional instance to populate.
   * @return {module:model/LookmlModelExploreJoins} The populated <code>LookmlModelExploreJoins</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('dependent_fields')) {
        obj['dependent_fields'] = ApiClient.convertToType(data['dependent_fields'], ['String']);
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], ['String']);
      }
      if (data.hasOwnProperty('foreign_key')) {
        obj['foreign_key'] = ApiClient.convertToType(data['foreign_key'], 'String');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'String');
      }
      if (data.hasOwnProperty('outer_only')) {
        obj['outer_only'] = ApiClient.convertToType(data['outer_only'], 'Boolean');
      }
      if (data.hasOwnProperty('relationship')) {
        obj['relationship'] = ApiClient.convertToType(data['relationship'], 'String');
      }
      if (data.hasOwnProperty('required_joins')) {
        obj['required_joins'] = ApiClient.convertToType(data['required_joins'], ['String']);
      }
      if (data.hasOwnProperty('sql_foreign_key')) {
        obj['sql_foreign_key'] = ApiClient.convertToType(data['sql_foreign_key'], 'String');
      }
      if (data.hasOwnProperty('sql_on')) {
        obj['sql_on'] = ApiClient.convertToType(data['sql_on'], 'String');
      }
      if (data.hasOwnProperty('sql_table_name')) {
        obj['sql_table_name'] = ApiClient.convertToType(data['sql_table_name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('view_label')) {
        obj['view_label'] = ApiClient.convertToType(data['view_label'], 'String');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }


  /**
   * Name of this join (and name of the view to join)
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Fields referenced by the join
   * @member {Array.<String>} dependent_fields
   */
  exports.prototype['dependent_fields'] = undefined;

  /**
   * Fields of the joined view to pull into this explore
   * @member {Array.<String>} fields
   */
  exports.prototype['fields'] = undefined;

  /**
   * Name of the dimension in this explore whose value is in the primary key of the joined view
   * @member {String} foreign_key
   */
  exports.prototype['foreign_key'] = undefined;

  /**
   * Name of view to join
   * @member {String} from
   */
  exports.prototype['from'] = undefined;

  /**
   * Specifies whether all queries must use an outer join
   * @member {Boolean} outer_only
   */
  exports.prototype['outer_only'] = undefined;

  /**
   * many_to_one, one_to_one, one_to_many, many_to_many
   * @member {String} relationship
   */
  exports.prototype['relationship'] = undefined;

  /**
   * Names of joins that must always be included in SQL queries
   * @member {Array.<String>} required_joins
   */
  exports.prototype['required_joins'] = undefined;

  /**
   * SQL expression that produces a foreign key
   * @member {String} sql_foreign_key
   */
  exports.prototype['sql_foreign_key'] = undefined;

  /**
   * SQL ON expression describing the join condition
   * @member {String} sql_on
   */
  exports.prototype['sql_on'] = undefined;

  /**
   * SQL table name to join
   * @member {String} sql_table_name
   */
  exports.prototype['sql_table_name'] = undefined;

  /**
   * The join type: left_outer, full_outer, inner, or cross
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * Label to display in UI selectors
   * @member {String} view_label
   */
  exports.prototype['view_label'] = undefined;

  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;




  return exports;
}));
