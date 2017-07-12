# LookerApi30Reference.ContentApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allContentMetadataAccesss**](ContentApi.md#allContentMetadataAccesss) | **GET** /content_metadata_access | Get All Content Metadata Accesss
[**allContentMetadatas**](ContentApi.md#allContentMetadatas) | **GET** /content_metadata | Get All Content Metadatas
[**contentFavorite**](ContentApi.md#contentFavorite) | **GET** /content_favorite/{content_favorite_id} | Get Favorite Content
[**contentMetadata**](ContentApi.md#contentMetadata) | **GET** /content_metadata/{content_metadata_id} | Get Content Metadata
[**createContentFavorite**](ContentApi.md#createContentFavorite) | **POST** /content_favorite | Create Favorite Content
[**createContentMetadataAccess**](ContentApi.md#createContentMetadataAccess) | **POST** /content_metadata_access | Create Content Metadata Access
[**deleteContentFavorite**](ContentApi.md#deleteContentFavorite) | **DELETE** /content_favorite/{content_favorite_id} | Delete Favorite Content
[**deleteContentMetadataAccess**](ContentApi.md#deleteContentMetadataAccess) | **DELETE** /content_metadata_access/{content_metadata_access_id} | Delete Content Metadata Access
[**searchContentFavorites**](ContentApi.md#searchContentFavorites) | **GET** /content_favorite/search | Search Favorite Contents
[**searchContentViews**](ContentApi.md#searchContentViews) | **GET** /content_view/search | Search Content Views
[**updateContentMetadata**](ContentApi.md#updateContentMetadata) | **PATCH** /content_metadata/{content_metadata_id} | Update Content Metadata
[**updateContentMetadataAccess**](ContentApi.md#updateContentMetadataAccess) | **PUT** /content_metadata_access/{content_metadata_access_id} | Update Content Metadata Access


<a name="allContentMetadataAccesss"></a>
# **allContentMetadataAccesss**
> [ContentMetaGroupUser] allContentMetadataAccesss(opts)

Get All Content Metadata Accesss

### All content metadata access records for a content metadata item.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ContentApi()

var opts = { 
  'contentMetadataId': 789, // {Integer} Id of content metadata
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.allContentMetadataAccesss(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentMetadataId** | **Integer**| Id of content metadata | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[ContentMetaGroupUser]**](ContentMetaGroupUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allContentMetadatas"></a>
# **allContentMetadatas**
> [ContentMeta] allContentMetadatas(parentId, opts)

Get All Content Metadatas

### Get information about all content metadata in a space.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ContentApi()

var parentId = 789; // {Integer} Parent space of content.

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
api.allContentMetadatas(parentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **Integer**| Parent space of content. | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[ContentMeta]**](ContentMeta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contentFavorite"></a>
# **contentFavorite**
> ContentFavorite contentFavorite(contentFavoriteId, opts)

Get Favorite Content

### Get favorite content by its id

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ContentApi()

var contentFavoriteId = 789; // {Integer} Id of favorite content

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
api.contentFavorite(contentFavoriteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentFavoriteId** | **Integer**| Id of favorite content | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**ContentFavorite**](ContentFavorite.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contentMetadata"></a>
# **contentMetadata**
> ContentMeta contentMetadata(contentMetadataId, opts)

Get Content Metadata

### Get information about an individual content metadata record.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ContentApi()

var contentMetadataId = 789; // {Integer} Id of content metadata

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
api.contentMetadata(contentMetadataId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentMetadataId** | **Integer**| Id of content metadata | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**ContentMeta**](ContentMeta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createContentFavorite"></a>
# **createContentFavorite**
> ContentFavorite createContentFavorite(opts)

Create Favorite Content

### Create favorite content

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ContentApi()

var opts = { 
  'body': new LookerApi30Reference.ContentFavorite() // {ContentFavorite} Favorite Content
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createContentFavorite(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ContentFavorite**](ContentFavorite.md)| Favorite Content | [optional] 

### Return type

[**ContentFavorite**](ContentFavorite.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createContentMetadataAccess"></a>
# **createContentMetadataAccess**
> ContentMetaGroupUser createContentMetadataAccess(opts)

Create Content Metadata Access

### Create content metadata access.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ContentApi()

var opts = { 
  'body': new LookerApi30Reference.ContentMetaGroupUser() // {ContentMetaGroupUser} Content Metadata Access
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createContentMetadataAccess(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ContentMetaGroupUser**](ContentMetaGroupUser.md)| Content Metadata Access | [optional] 

### Return type

[**ContentMetaGroupUser**](ContentMetaGroupUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContentFavorite"></a>
# **deleteContentFavorite**
> &#39;String&#39; deleteContentFavorite(contentFavoriteId)

Delete Favorite Content

### Delete favorite content

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ContentApi()

var contentFavoriteId = 789; // {Integer} Id of favorite content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteContentFavorite(contentFavoriteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentFavoriteId** | **Integer**| Id of favorite content | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContentMetadataAccess"></a>
# **deleteContentMetadataAccess**
> &#39;String&#39; deleteContentMetadataAccess(contentMetadataAccessId)

Delete Content Metadata Access

### Remove content metadata access.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ContentApi()

var contentMetadataAccessId = 789; // {Integer} Id of content metadata access


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteContentMetadataAccess(contentMetadataAccessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentMetadataAccessId** | **Integer**| Id of content metadata access | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchContentFavorites"></a>
# **searchContentFavorites**
> [ContentFavorite] searchContentFavorites(opts)

Search Favorite Contents

### Search Favorite Content


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ContentApi()

var opts = { 
  'userId': 789, // {Integer} Match User Id
  'limit': 789, // {Integer} Number of results to return. (used with offset)
  'offset': 789, // {Integer} Number of results to skip before returning any. (used with limit)
  'sorts': "sorts_example", // {String} Fields to sort by.
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.searchContentFavorites(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| Match User Id | [optional] 
 **limit** | **Integer**| Number of results to return. (used with offset) | [optional] 
 **offset** | **Integer**| Number of results to skip before returning any. (used with limit) | [optional] 
 **sorts** | **String**| Fields to sort by. | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[ContentFavorite]**](ContentFavorite.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchContentViews"></a>
# **searchContentViews**
> [ContentView] searchContentViews(opts)

Search Content Views

### Search Content View


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ContentApi()

var opts = { 
  'viewCount': 789, // {Integer} Match view count
  'groupId': 789, // {Integer} Match Group Id
  'contentType': "contentType_example", // {String} Type of content to report on
  'limit': 789, // {Integer} Number of results to return. Use with `offset` to manage pagination of results
  'offset': 789, // {Integer} Number of results to skip before returning data
  'userId': 789, // {Integer} Match user id
  'sorts': "sorts_example", // {String} Fields to sort by
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.searchContentViews(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewCount** | **Integer**| Match view count | [optional] 
 **groupId** | **Integer**| Match Group Id | [optional] 
 **contentType** | **String**| Type of content to report on | [optional] 
 **limit** | **Integer**| Number of results to return. Use with `offset` to manage pagination of results | [optional] 
 **offset** | **Integer**| Number of results to skip before returning data | [optional] 
 **userId** | **Integer**| Match user id | [optional] 
 **sorts** | **String**| Fields to sort by | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[ContentView]**](ContentView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateContentMetadata"></a>
# **updateContentMetadata**
> ContentMeta updateContentMetadata(contentMetadataId, body)

Update Content Metadata

### Move a piece of content.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ContentApi()

var contentMetadataId = 789; // {Integer} Id of content metadata

var body = new LookerApi30Reference.ContentMeta(); // {ContentMeta} Content Metadata


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateContentMetadata(contentMetadataId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentMetadataId** | **Integer**| Id of content metadata | 
 **body** | [**ContentMeta**](ContentMeta.md)| Content Metadata | 

### Return type

[**ContentMeta**](ContentMeta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateContentMetadataAccess"></a>
# **updateContentMetadataAccess**
> ContentMetaGroupUser updateContentMetadataAccess(contentMetadataAccessId, body)

Update Content Metadata Access

### Update type of access for content metadata.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ContentApi()

var contentMetadataAccessId = 789; // {Integer} Id of content metadata access

var body = new LookerApi30Reference.ContentMetaGroupUser(); // {ContentMetaGroupUser} Content Metadata Access


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateContentMetadataAccess(contentMetadataAccessId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentMetadataAccessId** | **Integer**| Id of content metadata access | 
 **body** | [**ContentMetaGroupUser**](ContentMetaGroupUser.md)| Content Metadata Access | 

### Return type

[**ContentMetaGroupUser**](ContentMetaGroupUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

