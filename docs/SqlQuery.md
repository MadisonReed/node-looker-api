# LookerApi30Reference.SqlQuery

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **String** | The identifier of the SQL query | [optional] 
**lastRuntime** | **Number** | Number of seconds this query took to run the most recent time it was run | [optional] 
**runCount** | **Integer** | Number of times this query has been run | [optional] 
**browserLimit** | **Integer** | Maximum number of rows this query will display on the SQL Runner page | [optional] 
**sql** | **String** | SQL query text | [optional] 
**lastRunAt** | **String** | The most recent time this query was run | [optional] 
**connection** | [**DBConnectionBase**](DBConnectionBase.md) | Connection this query uses | [optional] 
**creator** | [**UserPublic**](UserPublic.md) | User who created this SQL query | [optional] 
**exploreUrl** | **String** | Explore page URL for this SQL query | [optional] 
**plaintext** | **Boolean** | Should this query be rendered as plain text | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


