# LookerApi30Reference.HomepageApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allHomepageItems**](HomepageApi.md#allHomepageItems) | **GET** /homepage_items | Get All Homepage Items
[**allHomepageSections**](HomepageApi.md#allHomepageSections) | **GET** /homepage_sections | Get All Homepage sections
[**createHomepageItem**](HomepageApi.md#createHomepageItem) | **POST** /homepage_items | Create Homepage Item
[**createHomepageSection**](HomepageApi.md#createHomepageSection) | **POST** /homepage_sections | Create Homepage section
[**deleteHomepageItem**](HomepageApi.md#deleteHomepageItem) | **DELETE** /homepage_items/{homepage_item_id} | Delete Homepage Item
[**deleteHomepageSection**](HomepageApi.md#deleteHomepageSection) | **DELETE** /homepage_sections/{homepage_section_id} | Delete Homepage section
[**homepageItem**](HomepageApi.md#homepageItem) | **GET** /homepage_items/{homepage_item_id} | Get Homepage Item
[**homepageSection**](HomepageApi.md#homepageSection) | **GET** /homepage_sections/{homepage_section_id} | Get Homepage section
[**updateHomepageItem**](HomepageApi.md#updateHomepageItem) | **PATCH** /homepage_items/{homepage_item_id} | Update Homepage Item
[**updateHomepageSection**](HomepageApi.md#updateHomepageSection) | **PATCH** /homepage_sections/{homepage_section_id} | Update Homepage section


<a name="allHomepageItems"></a>
# **allHomepageItems**
> [HomepageItem] allHomepageItems(opts)

Get All Homepage Items

### Get information about all homepage items.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.HomepageApi()

var opts = { 
  'fields': "fields_example", // {String} Requested fields.
  'sorts': "sorts_example", // {String} Fields to sort by.
  'homepageSectionId': "homepageSectionId_example" // {String} Filter to a specific homepage section
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.allHomepageItems(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 
 **sorts** | **String**| Fields to sort by. | [optional] 
 **homepageSectionId** | **String**| Filter to a specific homepage section | [optional] 

### Return type

[**[HomepageItem]**](HomepageItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allHomepageSections"></a>
# **allHomepageSections**
> [HomepageSection] allHomepageSections(opts)

Get All Homepage sections

### Get information about all homepage sections.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.HomepageApi()

var opts = { 
  'fields': "fields_example", // {String} Requested fields.
  'sorts': "sorts_example" // {String} Fields to sort by.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.allHomepageSections(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 
 **sorts** | **String**| Fields to sort by. | [optional] 

### Return type

[**[HomepageSection]**](HomepageSection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createHomepageItem"></a>
# **createHomepageItem**
> HomepageItem createHomepageItem(opts)

Create Homepage Item

### Create a new homepage item.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.HomepageApi()

var opts = { 
  'body': new LookerApi30Reference.HomepageItem(), // {HomepageItem} Homepage Item
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createHomepageItem(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**HomepageItem**](HomepageItem.md)| Homepage Item | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**HomepageItem**](HomepageItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createHomepageSection"></a>
# **createHomepageSection**
> HomepageSection createHomepageSection(opts)

Create Homepage section

### Create a new homepage section.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.HomepageApi()

var opts = { 
  'body': new LookerApi30Reference.HomepageSection(), // {HomepageSection} Homepage section
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createHomepageSection(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**HomepageSection**](HomepageSection.md)| Homepage section | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**HomepageSection**](HomepageSection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteHomepageItem"></a>
# **deleteHomepageItem**
> &#39;String&#39; deleteHomepageItem(homepageItemId)

Delete Homepage Item

### Delete a homepage item.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.HomepageApi()

var homepageItemId = 789; // {Integer} Id of homepage_item


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteHomepageItem(homepageItemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **homepageItemId** | **Integer**| Id of homepage_item | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteHomepageSection"></a>
# **deleteHomepageSection**
> &#39;String&#39; deleteHomepageSection(homepageSectionId)

Delete Homepage section

### Delete a homepage section.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.HomepageApi()

var homepageSectionId = 789; // {Integer} Id of homepage_section


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteHomepageSection(homepageSectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **homepageSectionId** | **Integer**| Id of homepage_section | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="homepageItem"></a>
# **homepageItem**
> HomepageItem homepageItem(homepageItemId, opts)

Get Homepage Item

### Get information about a homepage item.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.HomepageApi()

var homepageItemId = 789; // {Integer} Id of homepage item

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
api.homepageItem(homepageItemId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **homepageItemId** | **Integer**| Id of homepage item | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**HomepageItem**](HomepageItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="homepageSection"></a>
# **homepageSection**
> HomepageSection homepageSection(homepageSectionId, opts)

Get Homepage section

### Get information about a homepage section.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.HomepageApi()

var homepageSectionId = 789; // {Integer} Id of homepage section

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
api.homepageSection(homepageSectionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **homepageSectionId** | **Integer**| Id of homepage section | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**HomepageSection**](HomepageSection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateHomepageItem"></a>
# **updateHomepageItem**
> HomepageItem updateHomepageItem(homepageItemId, body, opts)

Update Homepage Item

### Update a homepage item definition.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.HomepageApi()

var homepageItemId = 789; // {Integer} Id of homepage item

var body = new LookerApi30Reference.HomepageItem(); // {HomepageItem} Homepage Item

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
api.updateHomepageItem(homepageItemId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **homepageItemId** | **Integer**| Id of homepage item | 
 **body** | [**HomepageItem**](HomepageItem.md)| Homepage Item | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**HomepageItem**](HomepageItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateHomepageSection"></a>
# **updateHomepageSection**
> HomepageSection updateHomepageSection(homepageSectionId, body, opts)

Update Homepage section

### Update a homepage section definition.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.HomepageApi()

var homepageSectionId = 789; // {Integer} Id of homepage section

var body = new LookerApi30Reference.HomepageSection(); // {HomepageSection} Homepage section

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
api.updateHomepageSection(homepageSectionId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **homepageSectionId** | **Integer**| Id of homepage section | 
 **body** | [**HomepageSection**](HomepageSection.md)| Homepage section | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**HomepageSection**](HomepageSection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

