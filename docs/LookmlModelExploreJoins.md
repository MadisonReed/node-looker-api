# LookerApi30Reference.LookmlModelExploreJoins

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of this join (and name of the view to join) | [optional] 
**dependentFields** | **[String]** | Fields referenced by the join | [optional] 
**fields** | **[String]** | Fields of the joined view to pull into this explore | [optional] 
**foreignKey** | **String** | Name of the dimension in this explore whose value is in the primary key of the joined view | [optional] 
**from** | **String** | Name of view to join | [optional] 
**outerOnly** | **Boolean** | Specifies whether all queries must use an outer join | [optional] 
**relationship** | **String** | many_to_one, one_to_one, one_to_many, many_to_many | [optional] 
**requiredJoins** | **[String]** | Names of joins that must always be included in SQL queries | [optional] 
**sqlForeignKey** | **String** | SQL expression that produces a foreign key | [optional] 
**sqlOn** | **String** | SQL ON expression describing the join condition | [optional] 
**sqlTableName** | **String** | SQL table name to join | [optional] 
**type** | **String** | The join type: left_outer, full_outer, inner, or cross | [optional] 
**viewLabel** | **String** | Label to display in UI selectors | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


