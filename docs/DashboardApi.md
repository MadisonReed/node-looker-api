# LookerApi30Reference.DashboardApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allDashboards**](DashboardApi.md#allDashboards) | **GET** /dashboards | Get All Dashboards
[**createDashboard**](DashboardApi.md#createDashboard) | **POST** /dashboards | Create Dashboard
[**createDashboardPrefetch**](DashboardApi.md#createDashboardPrefetch) | **POST** /dashboards/{dashboard_id}/prefetch | Create Dashboard Prefetch
[**dashboard**](DashboardApi.md#dashboard) | **GET** /dashboards/{dashboard_id} | Get Dashboard
[**dashboardPrefetch**](DashboardApi.md#dashboardPrefetch) | **GET** /dashboards/{dashboard_id}/prefetch | Get Dashboard Prefetch
[**deleteDashboard**](DashboardApi.md#deleteDashboard) | **DELETE** /dashboards/{dashboard_id} | Delete Dashboard
[**searchDashboards**](DashboardApi.md#searchDashboards) | **GET** /dashboards/search | Search Dashboards
[**updateDashboard**](DashboardApi.md#updateDashboard) | **PATCH** /dashboards/{dashboard_id} | Update Dashboard


<a name="allDashboards"></a>
# **allDashboards**
> [DashboardBase] allDashboards(opts)

Get All Dashboards

Get information about all dashboards.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.DashboardApi()

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
api.allDashboards(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[DashboardBase]**](DashboardBase.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDashboard"></a>
# **createDashboard**
> Dashboard createDashboard(opts)

Create Dashboard

### Create a dashboard with specified information.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.DashboardApi()

var opts = { 
  'body': new LookerApi30Reference.Dashboard() // {Dashboard} Dashboard
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createDashboard(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Dashboard**](Dashboard.md)| Dashboard | [optional] 

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDashboardPrefetch"></a>
# **createDashboardPrefetch**
> PrefetchDashboardRequest createDashboardPrefetch(dashboardId, opts)

Create Dashboard Prefetch

### Create a prefetch for a dashboard with the specified information.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.DashboardApi()

var dashboardId = "dashboardId_example"; // {String} Id of dashboard

var opts = { 
  'body': new LookerApi30Reference.PrefetchDashboardRequest() // {PrefetchDashboardRequest} Parameters for prefetch request
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createDashboardPrefetch(dashboardId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | **String**| Id of dashboard | 
 **body** | [**PrefetchDashboardRequest**](PrefetchDashboardRequest.md)| Parameters for prefetch request | [optional] 

### Return type

[**PrefetchDashboardRequest**](PrefetchDashboardRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dashboard"></a>
# **dashboard**
> Dashboard dashboard(dashboardId, opts)

Get Dashboard

### Get information about the dashboard with a specific id.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.DashboardApi()

var dashboardId = "dashboardId_example"; // {String} Id of dashboard

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
api.dashboard(dashboardId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | **String**| Id of dashboard | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dashboardPrefetch"></a>
# **dashboardPrefetch**
> PrefetchMapper dashboardPrefetch(dashboardId, opts)

Get Dashboard Prefetch

### Get a prefetch for a dashboard with the specified information.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.DashboardApi()

var dashboardId = "dashboardId_example"; // {String} Id of dashboard

var opts = { 
  'dashboardFilters': [new LookerApi30Reference.PrefetchDashboardFilterValue()] // {[PrefetchDashboardFilterValue]} JSON encoded string of Dashboard filters that were applied to prefetch
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.dashboardPrefetch(dashboardId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | **String**| Id of dashboard | 
 **dashboardFilters** | [**[PrefetchDashboardFilterValue]**](PrefetchDashboardFilterValue.md)| JSON encoded string of Dashboard filters that were applied to prefetch | [optional] 

### Return type

[**PrefetchMapper**](PrefetchMapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDashboard"></a>
# **deleteDashboard**
> &#39;String&#39; deleteDashboard(dashboardId)

Delete Dashboard

### Delete the dashboard with a specific id.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.DashboardApi()

var dashboardId = "dashboardId_example"; // {String} Id of dashboard


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteDashboard(dashboardId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | **String**| Id of dashboard | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchDashboards"></a>
# **searchDashboards**
> [Dashboard] searchDashboards(opts)

Search Dashboards

Get information about all dashboards.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.DashboardApi()

var opts = { 
  'fields': "fields_example", // {String} Requested fields.
  'page': 789, // {Integer} Requested page.
  'perPage': 789, // {Integer} Results per page.
  'limit': 789, // {Integer} Number of results to return. (used with offset and takes priority over page and per_page)
  'offset': 789, // {Integer} Number of results to skip before returning any. (used with limit and takes priority over page and per_page)
  'sorts': "sorts_example", // {String} Fields to sort by.
  'title': "title_example", // {String} Match Dashboard title.
  'description': "description_example", // {String} Match Dashboard description.
  'contentFavoriteId': 789, // {Integer} Filter on a content favorite id.
  'spaceId': "spaceId_example", // {String} Filter on a particular space.
  'deleted': "deleted_example", // {String} Filter on dashboards deleted status.
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
api.searchDashboards(opts, callback);
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
 **title** | **String**| Match Dashboard title. | [optional] 
 **description** | **String**| Match Dashboard description. | [optional] 
 **contentFavoriteId** | **Integer**| Filter on a content favorite id. | [optional] 
 **spaceId** | **String**| Filter on a particular space. | [optional] 
 **deleted** | **String**| Filter on dashboards deleted status. | [optional] 
 **userId** | **String**| Filter on dashboards created by a particular user. | [optional] 
 **viewCount** | **String**| Filter on a particular value of view_count | [optional] 

### Return type

[**[Dashboard]**](Dashboard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDashboard"></a>
# **updateDashboard**
> Dashboard updateDashboard(dashboardId, body)

Update Dashboard

### Update the dashboard with a specific id.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.DashboardApi()

var dashboardId = "dashboardId_example"; // {String} Id of dashboard

var body = new LookerApi30Reference.Dashboard(); // {Dashboard} Dashboard


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateDashboard(dashboardId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | **String**| Id of dashboard | 
 **body** | [**Dashboard**](Dashboard.md)| Dashboard | 

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

