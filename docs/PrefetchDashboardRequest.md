# LookerApi30Reference.PrefetchDashboardRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ttl** | **Integer** | Number of seconds prefetch will live for. | [optional] 
**accessFilters** | [**[PrefetchAccessFilterValue]**](PrefetchAccessFilterValue.md) | Access filters to apply when running queries for prefetch. | [optional] 
**dashboardFilters** | [**[PrefetchDashboardFilterValue]**](PrefetchDashboardFilterValue.md) | Dashboard filters to apply when running queries for prefetch. | [optional] 
**createdAt** | **Date** | Time when prefetch was created. | [optional] 
**computationTime** | **Number** | Number of seconds it took to compute results for prefetch. | [optional] 
**resultSizeBytes** | **Integer** | Size of result. | [optional] 
**hitCount** | **Integer** | Number of times prefetch has been accessed. | [optional] 
**touchedAt** | **Date** | Time when prefetch was last accessed. | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


