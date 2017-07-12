# LookerApi30Reference.LookmlModelApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allLookmlModels**](LookmlModelApi.md#allLookmlModels) | **GET** /lookml_models | Get All LookML Models
[**createLookmlModel**](LookmlModelApi.md#createLookmlModel) | **POST** /lookml_models | Create LookML Model
[**deleteLookmlModel**](LookmlModelApi.md#deleteLookmlModel) | **DELETE** /lookml_models/{lookml_model_name} | Delete LookML Model
[**lookmlModel**](LookmlModelApi.md#lookmlModel) | **GET** /lookml_models/{lookml_model_name} | Get LookML Model
[**lookmlModelExplore**](LookmlModelApi.md#lookmlModelExplore) | **GET** /lookml_models/{lookml_model_name}/explores/{explore_name} | Get LookML Model Explore
[**updateLookmlModel**](LookmlModelApi.md#updateLookmlModel) | **PATCH** /lookml_models/{lookml_model_name} | Update LookML Model


<a name="allLookmlModels"></a>
# **allLookmlModels**
> [LookmlModel] allLookmlModels(opts)

Get All LookML Models

### Get information about all lookml models.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.LookmlModelApi()

var opts = { 
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.allLookmlModels(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[LookmlModel]**](LookmlModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createLookmlModel"></a>
# **createLookmlModel**
> LookmlModel createLookmlModel(opts)

Create LookML Model

### Create a lookml model using the specified configuration.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.LookmlModelApi()

var opts = { 
  'body': new LookerApi30Reference.LookmlModel() // {LookmlModel} LookML Model
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createLookmlModel(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LookmlModel**](LookmlModel.md)| LookML Model | [optional] 

### Return type

[**LookmlModel**](LookmlModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLookmlModel"></a>
# **deleteLookmlModel**
> &#39;String&#39; deleteLookmlModel(lookmlModelName)

Delete LookML Model

### Delete a lookml model.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.LookmlModelApi()

var lookmlModelName = "lookmlModelName_example"; // {String} Name of lookml model.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteLookmlModel(lookmlModelName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookmlModelName** | **String**| Name of lookml model. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lookmlModel"></a>
# **lookmlModel**
> LookmlModel lookmlModel(lookmlModelName, opts)

Get LookML Model

### Get information about a lookml model.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.LookmlModelApi()

var lookmlModelName = "lookmlModelName_example"; // {String} Name of lookml model.

var opts = { 
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.lookmlModel(lookmlModelName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookmlModelName** | **String**| Name of lookml model. | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**LookmlModel**](LookmlModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lookmlModelExplore"></a>
# **lookmlModelExplore**
> LookmlModelExplore lookmlModelExplore(lookmlModelName, exploreName, opts)

Get LookML Model Explore

### Get information about a lookml model explore.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.LookmlModelApi()

var lookmlModelName = "lookmlModelName_example"; // {String} Name of lookml model.

var exploreName = "exploreName_example"; // {String} Name of explore.

var opts = { 
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.lookmlModelExplore(lookmlModelName, exploreName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookmlModelName** | **String**| Name of lookml model. | 
 **exploreName** | **String**| Name of explore. | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**LookmlModelExplore**](LookmlModelExplore.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateLookmlModel"></a>
# **updateLookmlModel**
> LookmlModel updateLookmlModel(lookmlModelName, body)

Update LookML Model

### Update a lookml model using the specified configuration.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.LookmlModelApi()

var lookmlModelName = "lookmlModelName_example"; // {String} Name of lookml model.

var body = new LookerApi30Reference.LookmlModel(); // {LookmlModel} LookML Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateLookmlModel(lookmlModelName, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookmlModelName** | **String**| Name of lookml model. | 
 **body** | [**LookmlModel**](LookmlModel.md)| LookML Model | 

### Return type

[**LookmlModel**](LookmlModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

