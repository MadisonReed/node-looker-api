# LookerApi30Reference.LookApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allLooks**](LookApi.md#allLooks) | **GET** /looks | Get All Looks
[**createLook**](LookApi.md#createLook) | **POST** /looks | Create Look
[**deleteLook**](LookApi.md#deleteLook) | **DELETE** /looks/{look_id} | Delete Look
[**look**](LookApi.md#look) | **GET** /looks/{look_id} | Get Look
[**runLook**](LookApi.md#runLook) | **GET** /looks/{look_id}/run/{result_format} | Run Look
[**searchLooks**](LookApi.md#searchLooks) | **GET** /looks/search | Search Looks
[**updateLook**](LookApi.md#updateLook) | **PATCH** /looks/{look_id} | Update Look


<a name="allLooks"></a>
# **allLooks**
> [Look] allLooks(opts)

Get All Looks

### Get all the looks.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.LookApi()

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
api.allLooks(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[Look]**](Look.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createLook"></a>
# **createLook**
> LookWithQuery createLook(opts)

Create Look

### Create a Look with specified information.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.LookApi()

var opts = { 
  'body': new LookerApi30Reference.LookWithQuery(), // {LookWithQuery} Look
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createLook(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LookWithQuery**](LookWithQuery.md)| Look | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**LookWithQuery**](LookWithQuery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLook"></a>
# **deleteLook**
> &#39;String&#39; deleteLook(lookId)

Delete Look

### Delete the look with a specific id.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.LookApi()

var lookId = 789; // {Integer} Id of look


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteLook(lookId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookId** | **Integer**| Id of look | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="look"></a>
# **look**
> LookWithQuery look(lookId, opts)

Get Look

### Get a Look.

Return detailed information about the Look and its associated Query.



### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.LookApi()

var lookId = 789; // {Integer} Id of look

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
api.look(lookId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookId** | **Integer**| Id of look | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**LookWithQuery**](LookWithQuery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="runLook"></a>
# **runLook**
> &#39;String&#39; runLook(lookId, resultFormat, opts)

Run Look

### Run a Look.

Runs a given look&#39;s query and returns the results in the requested format.

Suported formats:

| result_format | Description
| :-----------: | :--- |
| json | Plain json
| json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query
| csv | Comma separated values with a header
| txt | Tab separated values with a header
| html | Simple html
| md | Simple markdown
| xlsx | MS Excel spreadsheet
| sql | Returns the generated SQL rather than running the query
| png | A PNG image of the visualization of the query
| jpg | A JPG image of the visualization of the query




### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.LookApi()

var lookId = 789; // {Integer} Id of look

var resultFormat = "resultFormat_example"; // {String} Format of result

var opts = { 
  'limit': 789, // {Integer} Row limit (may override the limit in the saved query).
  'applyFormatting': true, // {Boolean} Apply model-specified formatting to each result.
  'applyVis': true, // {Boolean} Apply visualization options to results.
  'cache': true, // {Boolean} Get results from cache if available.
  'imageWidth': 789, // {Integer} Render width for image formats.
  'imageHeight': 789, // {Integer} Render height for image formats.
  'generateDrillLinks': true, // {Boolean} Generate drill links (only applicable to 'json_detail' format.
  'forceProduction': true, // {Boolean} Force use of production models even if the user is in development mode.
  'cacheOnly': true, // {Boolean} Retrieve any results from cache even if the results have expired.
  'pathPrefix': "pathPrefix_example", // {String} Prefix to use for drill links (url encoded).
  'rebuildPdts': true, // {Boolean} Rebuild PDTS used in query.
  'serverTableCalcs': true // {Boolean} Perform table calculations on query results
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.runLook(lookId, resultFormat, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookId** | **Integer**| Id of look | 
 **resultFormat** | **String**| Format of result | 
 **limit** | **Integer**| Row limit (may override the limit in the saved query). | [optional] 
 **applyFormatting** | **Boolean**| Apply model-specified formatting to each result. | [optional] 
 **applyVis** | **Boolean**| Apply visualization options to results. | [optional] 
 **cache** | **Boolean**| Get results from cache if available. | [optional] 
 **imageWidth** | **Integer**| Render width for image formats. | [optional] 
 **imageHeight** | **Integer**| Render height for image formats. | [optional] 
 **generateDrillLinks** | **Boolean**| Generate drill links (only applicable to &#39;json_detail&#39; format. | [optional] 
 **forceProduction** | **Boolean**| Force use of production models even if the user is in development mode. | [optional] 
 **cacheOnly** | **Boolean**| Retrieve any results from cache even if the results have expired. | [optional] 
 **pathPrefix** | **String**| Prefix to use for drill links (url encoded). | [optional] 
 **rebuildPdts** | **Boolean**| Rebuild PDTS used in query. | [optional] 
 **serverTableCalcs** | **Boolean**| Perform table calculations on query results | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text, application/json, image/png, image/jpg

<a name="searchLooks"></a>
# **searchLooks**
> [Look] searchLooks(opts)

Search Looks

Search looks.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.LookApi()

var opts = { 
  'fields': "fields_example", // {String} Requested fields.
  'page': 789, // {Integer} Requested page.
  'perPage': 789, // {Integer} Results per page.
  'limit': 789, // {Integer} Number of results to return. (used with offset and takes priority over page and per_page)
  'offset': 789, // {Integer} Number of results to skip before returning any. (used with limit and takes priority over page and per_page)
  'sorts': "sorts_example", // {String} Fields to sort by.
  'title': "title_example", // {String} Match Look title.
  'description': "description_example", // {String} Match Look description.
  'contentFavoriteId': 789, // {Integer} Match content favorite id
  'spaceId': "spaceId_example", // {String} Filter on a particular space.
  'userId': "userId_example", // {String} Filter on dashboards created by a particular user.
  'viewCount': "viewCount_example" // {String} Filter on a particular value of view_count
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.searchLooks(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 
 **page** | **Integer**| Requested page. | [optional] 
 **perPage** | **Integer**| Results per page. | [optional] 
 **limit** | **Integer**| Number of results to return. (used with offset and takes priority over page and per_page) | [optional] 
 **offset** | **Integer**| Number of results to skip before returning any. (used with limit and takes priority over page and per_page) | [optional] 
 **sorts** | **String**| Fields to sort by. | [optional] 
 **title** | **String**| Match Look title. | [optional] 
 **description** | **String**| Match Look description. | [optional] 
 **contentFavoriteId** | **Integer**| Match content favorite id | [optional] 
 **spaceId** | **String**| Filter on a particular space. | [optional] 
 **userId** | **String**| Filter on dashboards created by a particular user. | [optional] 
 **viewCount** | **String**| Filter on a particular value of view_count | [optional] 

### Return type

[**[Look]**](Look.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateLook"></a>
# **updateLook**
> LookWithQuery updateLook(lookId, body, opts)

Update Look

### Update the Look with a specific id.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.LookApi()

var lookId = 789; // {Integer} Id of look

var body = new LookerApi30Reference.LookWithQuery(); // {LookWithQuery} Look

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
api.updateLook(lookId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookId** | **Integer**| Id of look | 
 **body** | [**LookWithQuery**](LookWithQuery.md)| Look | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**LookWithQuery**](LookWithQuery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

