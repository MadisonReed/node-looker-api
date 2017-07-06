# LookerApi30Reference.PrefetchMapper

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ttl** | **Integer** | Number of seconds prefetch will live for. | [optional] 
**createdAt** | **Date** | Time when prefetch was created. | [optional] 
**computationTime** | **Number** | Number of seconds it took to compute results for prefetch. | [optional] 
**resultSizeBytes** | **Integer** | Size of result. | [optional] 
**hitCount** | **Integer** | Number of times prefetch has been accessed. | [optional] 
**touchedAt** | **Date** | Time when prefetch was last accessed. | [optional] 
**value** | **{String: String}** | Data associated with the queries stored by prefetching the data | [optional] 
**url** | **String** | Link to get this item | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


