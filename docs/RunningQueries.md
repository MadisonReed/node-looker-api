# LookerApi30Reference.RunningQueries

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Unique Id | [optional] 
**user** | [**UserPublic**](UserPublic.md) | User who initiated the query | [optional] 
**query** | [**Query**](Query.md) | Query that was run | [optional] 
**sqlQuery** | [**SqlQuery**](SqlQuery.md) | SQL Query that was run | [optional] 
**look** | [**LookBasic**](LookBasic.md) | Look of query that was run | [optional] 
**createdAt** | **String** | Date/Time Query was initiated | [optional] 
**completedAt** | **String** | Date/Time Query was completed | [optional] 
**queryId** | **String** | Query Id | [optional] 
**source** | **String** | Source (look, dashboard, queryrunner, explore, etc.) | [optional] 
**nodeId** | **String** | Node Id | [optional] 
**slug** | **String** | Slug | [optional] 
**queryTaskId** | **String** | ID of a Query Task | [optional] 
**cacheKey** | **String** | Cache Key | [optional] 
**connectionName** | **String** | Connection | [optional] 
**dialect** | **String** | Dialect | [optional] 
**connectionId** | **String** | Connection ID | [optional] 
**message** | **String** | Additional Information(Error message or verbose status) | [optional] 
**status** | **String** | Status description | [optional] 
**runtime** | **Number** | Number of seconds elapsed running the Query | [optional] 
**sql** | **String** | SQL text of the query as run | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


