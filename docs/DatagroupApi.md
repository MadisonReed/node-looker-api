# LookerApi30Reference.DatagroupApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allDatagroups**](DatagroupApi.md#allDatagroups) | **GET** /datagroups | Get All Datagroups
[**datagroup**](DatagroupApi.md#datagroup) | **GET** /datagroups/{datagroup_id} | Get Datagroup
[**updateDatagroup**](DatagroupApi.md#updateDatagroup) | **PATCH** /datagroups/{datagroup_id} | Update Datagroup


<a name="allDatagroups"></a>
# **allDatagroups**
> [Datagroup] allDatagroups

Get All Datagroups

### Get information about all datagroups.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.DatagroupApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.allDatagroups(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Datagroup]**](Datagroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="datagroup"></a>
# **datagroup**
> Datagroup datagroup(datagroupId)

Get Datagroup

### Get information about a datagroup.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.DatagroupApi()

var datagroupId = "datagroupId_example"; // {String} ID of datagroup.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.datagroup(datagroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datagroupId** | **String**| ID of datagroup. | 

### Return type

[**Datagroup**](Datagroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDatagroup"></a>
# **updateDatagroup**
> Datagroup updateDatagroup(datagroupId, body)

Update Datagroup

### Update a datagroup using the specified params.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.DatagroupApi()

var datagroupId = "datagroupId_example"; // {String} ID of datagroup.

var body = new LookerApi30Reference.Datagroup(); // {Datagroup} Datagroup


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateDatagroup(datagroupId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datagroupId** | **String**| ID of datagroup. | 
 **body** | [**Datagroup**](Datagroup.md)| Datagroup | 

### Return type

[**Datagroup**](Datagroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

