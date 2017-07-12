# LookerApi30Reference.RunningQueriesApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allRunningQueries**](RunningQueriesApi.md#allRunningQueries) | **GET** /running_queries | Get All Running Queries
[**killQuery**](RunningQueriesApi.md#killQuery) | **DELETE** /running_queries/{query_task_id} | Kill Running Query


<a name="allRunningQueries"></a>
# **allRunningQueries**
> [RunningQueries] allRunningQueries

Get All Running Queries

Get information about all running queries.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RunningQueriesApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.allRunningQueries(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[RunningQueries]**](RunningQueries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="killQuery"></a>
# **killQuery**
> &#39;String&#39; killQuery(queryTaskId)

Kill Running Query

Kill a query with a specific query_task_id.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RunningQueriesApi()

var queryTaskId = "queryTaskId_example"; // {String} Query task id.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.killQuery(queryTaskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryTaskId** | **String**| Query task id. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

