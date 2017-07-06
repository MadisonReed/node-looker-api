# LookerApi30Reference.QueryTask

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique Id | [optional] 
**queryId** | **Integer** | Id of query | [optional] 
**query** | [**Query**](Query.md) | Query | [optional] 
**generateLinks** | **Boolean** | whether or not to generate links in the query response. | [optional] 
**forceProduction** | **Boolean** | Use production models to run query (even is user is in dev mode). | [optional] 
**pathPrefix** | **String** | Prefix to use for drill links. | [optional] 
**cache** | **Boolean** | Whether or not to use the cache | [optional] 
**serverTableCalcs** | **Boolean** | Whether or not to run table calculations on the server | [optional] 
**cacheOnly** | **Boolean** | Retrieve any results from cache even if the results have expired. | [optional] 
**cacheKey** | **String** | cache key used to cache query. | [optional] 
**status** | **String** | Status of query task. | [optional] 
**source** | **String** | Source of query task. | [optional] 
**runtime** | **Number** | Runtime of prior queries. | [optional] 
**rebuildPdts** | **Boolean** | Rebuild PDTS used in query. | [optional] 
**resultSource** | **String** | Source of the results of the query. | [optional] 
**lookId** | **Integer** | Id of look associated with query. | [optional] 
**dashboardId** | **String** | Id of dashboard associated with query. | [optional] 
**resultFormat** | **String** | The data format of the query results. | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


