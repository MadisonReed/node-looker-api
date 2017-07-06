# LookerApi30Reference.LookmlModelExplore

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Fully qualified name model plus explore name | [optional] 
**name** | **String** | Explore name | [optional] 
**description** | **String** | Description | [optional] 
**label** | **String** | Label | [optional] 
**scopes** | **[String]** | Scopes | [optional] 
**canTotal** | **Boolean** | Can Total | [optional] 
**canSave** | **Boolean** | Can Save | [optional] 
**canExplain** | **Boolean** | Can Explain | [optional] 
**canPivotInDb** | **Boolean** | Can pivot in the DB | [optional] 
**hasTimezoneSupport** | **Boolean** | Has timezone support | [optional] 
**supportsCostEstimate** | **Boolean** | Cost estimates supported | [optional] 
**connectionName** | **String** | Connection name | [optional] 
**nullSortTreatment** | **String** | How nulls are sorted, possible values are \&quot;low\&quot;, \&quot;high\&quot;, \&quot;first\&quot; and \&quot;last\&quot; | [optional] 
**files** | **[String]** | List of model source files | [optional] 
**sourceFile** | **String** | Primary source_file file | [optional] 
**projectName** | **String** | Name of project | [optional] 
**modelName** | **String** | Name of model | [optional] 
**viewName** | **String** | Name of view | [optional] 
**hidden** | **Boolean** | Is hidden | [optional] 
**sqlTableName** | **String** | A sql_table_name expression that defines what sql table the view/explore maps onto. Example: \&quot;prod_orders2 AS orders\&quot; in a view named orders. | [optional] 
**accessFilterFields** | **[String]** | (DEPRECATED) Array of access filter field names | [optional] 
**accessFilters** | [**[LookmlModelExploreAccessFilter]**](LookmlModelExploreAccessFilter.md) | Access filters | [optional] 
**aliases** | [**[LookmlModelExploreAlias]**](LookmlModelExploreAlias.md) | Aliases | [optional] 
**alwaysFilter** | [**[LookmlModelExploreAlwaysFilter]**](LookmlModelExploreAlwaysFilter.md) | Always filter | [optional] 
**conditionallyFilter** | [**[LookmlModelExploreConditionallyFilter]**](LookmlModelExploreConditionallyFilter.md) | Conditionally filter | [optional] 
**indexFields** | **[String]** | Array of index fields | [optional] 
**sets** | [**[LookmlModelExploreSet]**](LookmlModelExploreSet.md) | Sets | [optional] 
**errors** | [**[LookmlModelExploreError]**](LookmlModelExploreError.md) | Errors | [optional] 
**fields** | [**LookmlModelExploreFieldset**](LookmlModelExploreFieldset.md) | Fields | [optional] 
**joins** | [**[LookmlModelExploreJoins]**](LookmlModelExploreJoins.md) | Views joined into this explore | [optional] 
**groupLabel** | **String** | Label used to group explores in the navigation menus | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


