# LookerApi30Reference.SpaceApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allSpaces**](SpaceApi.md#allSpaces) | **GET** /spaces | Get All Spaces
[**createSpace**](SpaceApi.md#createSpace) | **POST** /spaces | Create Space
[**deleteSpace**](SpaceApi.md#deleteSpace) | **DELETE** /spaces/{space_id} | Delete Space
[**searchSpaces**](SpaceApi.md#searchSpaces) | **GET** /spaces/search | Search Spaces
[**space**](SpaceApi.md#space) | **GET** /spaces/{space_id} | Get Space
[**spaceAncestors**](SpaceApi.md#spaceAncestors) | **GET** /spaces/{space_id}/ancestors | Get Space Ancestors
[**spaceChildren**](SpaceApi.md#spaceChildren) | **GET** /spaces/{space_id}/children | Get Space Children
[**spaceChildrenSearch**](SpaceApi.md#spaceChildrenSearch) | **GET** /spaces/{space_id}/children/search | Search Space Children
[**spaceDashboards**](SpaceApi.md#spaceDashboards) | **GET** /spaces/{space_id}/dashboards | Get Space Dashboards
[**spaceLooks**](SpaceApi.md#spaceLooks) | **GET** /spaces/{space_id}/looks | Get Space Looks
[**spaceParent**](SpaceApi.md#spaceParent) | **GET** /spaces/{space_id}/parent | Get Space Parent
[**updateSpace**](SpaceApi.md#updateSpace) | **PATCH** /spaces/{space_id} | Update Space


<a name="allSpaces"></a>
# **allSpaces**
> [SpaceBase] allSpaces(opts)

Get All Spaces

### Get information about all spaces.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.SpaceApi()

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
api.allSpaces(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[SpaceBase]**](SpaceBase.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSpace"></a>
# **createSpace**
> Space createSpace(opts)

Create Space

### Create a space with specified information.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.SpaceApi()

var opts = { 
  'body': new LookerApi30Reference.Space() // {Space} Space
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createSpace(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Space**](Space.md)| Space | [optional] 

### Return type

[**Space**](Space.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSpace"></a>
# **deleteSpace**
> &#39;String&#39; deleteSpace(spaceId)

Delete Space

### Delete the space with a specific id including any children spaces.
**DANGER** this will delete all looks and dashboards in the space.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.SpaceApi()

var spaceId = "spaceId_example"; // {String} Id of space


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteSpace(spaceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **String**| Id of space | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchSpaces"></a>
# **searchSpaces**
> [Space] searchSpaces(opts)

Search Spaces

Search for spaces by creator id, parent id, name, etc

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.SpaceApi()

var opts = { 
  'fields': "fields_example", // {String} Requested fields.
  'page': 789, // {Integer} Requested page.
  'perPage': 789, // {Integer} Results per page.
  'limit': 789, // {Integer} Number of results to return. (used with offset and takes priority over page and per_page)
  'offset': 789, // {Integer} Number of results to skip before returning any. (used with limit and takes priority over page and per_page)
  'sorts': "sorts_example", // {String} Fields to sort by.
  'name': "name_example", // {String} Match Space title.
  'id': 789, // {Integer} Match Space id
  'parentId': "parentId_example", // {String} Filter on a children of a particular space.
  'creatorId': "creatorId_example" // {String} Filter on dashboards created by a particular user.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.searchSpaces(opts, callback);
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
 **name** | **String**| Match Space title. | [optional] 
 **id** | **Integer**| Match Space id | [optional] 
 **parentId** | **String**| Filter on a children of a particular space. | [optional] 
 **creatorId** | **String**| Filter on dashboards created by a particular user. | [optional] 

### Return type

[**[Space]**](Space.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="space"></a>
# **space**
> Space space(spaceId, opts)

Get Space

### Get information about the space with a specific id.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.SpaceApi()

var spaceId = "spaceId_example"; // {String} Id of space

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
api.space(spaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **String**| Id of space | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**Space**](Space.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="spaceAncestors"></a>
# **spaceAncestors**
> [Space] spaceAncestors(spaceId, opts)

Get Space Ancestors

### Get the ancestors of a space

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.SpaceApi()

var spaceId = "spaceId_example"; // {String} Id of space

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
api.spaceAncestors(spaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **String**| Id of space | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[Space]**](Space.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="spaceChildren"></a>
# **spaceChildren**
> [Space] spaceChildren(spaceId, opts)

Get Space Children

### Get the children of a space.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.SpaceApi()

var spaceId = "spaceId_example"; // {String} Id of space

var opts = { 
  'fields': "fields_example", // {String} Requested fields.
  'page': 789, // {Integer} Requested page.
  'perPage': 789, // {Integer} Results per page.
  'sorts': "sorts_example" // {String} Fields to sort by.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.spaceChildren(spaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **String**| Id of space | 
 **fields** | **String**| Requested fields. | [optional] 
 **page** | **Integer**| Requested page. | [optional] 
 **perPage** | **Integer**| Results per page. | [optional] 
 **sorts** | **String**| Fields to sort by. | [optional] 

### Return type

[**[Space]**](Space.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="spaceChildrenSearch"></a>
# **spaceChildrenSearch**
> [Space] spaceChildrenSearch(spaceId, opts)

Search Space Children

### Search the children of a space

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.SpaceApi()

var spaceId = "spaceId_example"; // {String} Id of space

var opts = { 
  'fields': "fields_example", // {String} Requested fields.
  'sorts': "sorts_example", // {String} Fields to sort by.
  'name': "name_example" // {String} Match Space name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.spaceChildrenSearch(spaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **String**| Id of space | 
 **fields** | **String**| Requested fields. | [optional] 
 **sorts** | **String**| Fields to sort by. | [optional] 
 **name** | **String**| Match Space name. | [optional] 

### Return type

[**[Space]**](Space.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="spaceDashboards"></a>
# **spaceDashboards**
> [Dashboard] spaceDashboards(spaceId, opts)

Get Space Dashboards

### Get the dashboards in a space

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.SpaceApi()

var spaceId = "spaceId_example"; // {String} Id of space

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
api.spaceDashboards(spaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **String**| Id of space | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[Dashboard]**](Dashboard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="spaceLooks"></a>
# **spaceLooks**
> [LookWithQuery] spaceLooks(spaceId, opts)

Get Space Looks

### Get the looks in a space

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.SpaceApi()

var spaceId = "spaceId_example"; // {String} Id of space

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
api.spaceLooks(spaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **String**| Id of space | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[LookWithQuery]**](LookWithQuery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="spaceParent"></a>
# **spaceParent**
> Space spaceParent(spaceId, opts)

Get Space Parent

### Get the parent of a space

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.SpaceApi()

var spaceId = "spaceId_example"; // {String} Id of space

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
api.spaceParent(spaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **String**| Id of space | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**Space**](Space.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSpace"></a>
# **updateSpace**
> Space updateSpace(spaceId, body)

Update Space

### Update the space with a specific id.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.SpaceApi()

var spaceId = "spaceId_example"; // {String} Id of space

var body = new LookerApi30Reference.Space(); // {Space} Space


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateSpace(spaceId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **String**| Id of space | 
 **body** | [**Space**](Space.md)| Space | 

### Return type

[**Space**](Space.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

