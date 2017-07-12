# LookerApi30Reference.ScheduledPlanApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allScheduledPlans**](ScheduledPlanApi.md#allScheduledPlans) | **GET** /scheduled_plans | Get All Scheduled Plans
[**createScheduledPlan**](ScheduledPlanApi.md#createScheduledPlan) | **POST** /scheduled_plans | Create Scheduled Plan
[**deleteScheduledPlan**](ScheduledPlanApi.md#deleteScheduledPlan) | **DELETE** /scheduled_plans/{scheduled_plan_id} | Delete Scheduled Plan
[**scheduledPlan**](ScheduledPlanApi.md#scheduledPlan) | **GET** /scheduled_plans/{scheduled_plan_id} | Get Scheduled Plan
[**scheduledPlanRunOnce**](ScheduledPlanApi.md#scheduledPlanRunOnce) | **POST** /scheduled_plans/run_once | Run Scheduled Plan Once
[**scheduledPlansForDashboard**](ScheduledPlanApi.md#scheduledPlansForDashboard) | **GET** /scheduled_plans/dashboard/{dashboard_id} | Scheduled Plans for Dashboard
[**scheduledPlansForLook**](ScheduledPlanApi.md#scheduledPlansForLook) | **GET** /scheduled_plans/look/{look_id} | Scheduled Plans for Look
[**scheduledPlansForLookmlDashboard**](ScheduledPlanApi.md#scheduledPlansForLookmlDashboard) | **GET** /scheduled_plans/lookml_dashboard/{lookml_dashboard_id} | Scheduled Plans for LookML Dashboard
[**scheduledPlansForSpace**](ScheduledPlanApi.md#scheduledPlansForSpace) | **GET** /scheduled_plans/space/{space_id} | Scheduled Plans for Space
[**updateScheduledPlan**](ScheduledPlanApi.md#updateScheduledPlan) | **PATCH** /scheduled_plans/{scheduled_plan_id} | Update Scheduled Plan


<a name="allScheduledPlans"></a>
# **allScheduledPlans**
> [ScheduledPlan] allScheduledPlans(opts)

Get All Scheduled Plans

### List all scheduled plans which belong to the requesting user


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ScheduledPlanApi()

var opts = { 
  'userId': 789, // {Integer} User Id (default is requesting user if not specified)
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.allScheduledPlans(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| User Id (default is requesting user if not specified) | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[ScheduledPlan]**](ScheduledPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createScheduledPlan"></a>
# **createScheduledPlan**
> ScheduledPlan createScheduledPlan(opts)

Create Scheduled Plan

### Schedule a Look or Dashboard by creating a scheduled plan.

Admins can create scheduled plans on behalf of other users by specifying a user id.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ScheduledPlanApi()

var opts = { 
  'body': new LookerApi30Reference.ScheduledPlan() // {ScheduledPlan} Scheduled Plan
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createScheduledPlan(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ScheduledPlan**](ScheduledPlan.md)| Scheduled Plan | [optional] 

### Return type

[**ScheduledPlan**](ScheduledPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteScheduledPlan"></a>
# **deleteScheduledPlan**
> &#39;String&#39; deleteScheduledPlan(scheduledPlanId)

Delete Scheduled Plan

### Delete the scheduled plan with the specified id.

Admins can delete other users&#39; Scheduled Plans.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ScheduledPlanApi()

var scheduledPlanId = 789; // {Integer} Scheduled Plan Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteScheduledPlan(scheduledPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduledPlanId** | **Integer**| Scheduled Plan Id | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="scheduledPlan"></a>
# **scheduledPlan**
> ScheduledPlan scheduledPlan(scheduledPlanId, opts)

Get Scheduled Plan

### Get information about a scheduled plan.

Admins can fetch information about other users&#39; Scheduled Plans.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ScheduledPlanApi()

var scheduledPlanId = 789; // {Integer} Scheduled Plan Id

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
api.scheduledPlan(scheduledPlanId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduledPlanId** | **Integer**| Scheduled Plan Id | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**ScheduledPlan**](ScheduledPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="scheduledPlanRunOnce"></a>
# **scheduledPlanRunOnce**
> ScheduledPlan scheduledPlanRunOnce(opts)

Run Scheduled Plan Once

### Schedule a Look or Dashboard to run once _now_ with a scheduled plan.

This can be useful for testing a Scheduled Plan before committing to a production schedule.

Admins can create scheduled plans on behalf of other users by specifying a user id.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ScheduledPlanApi()

var opts = { 
  'body': new LookerApi30Reference.ScheduledPlan() // {ScheduledPlan} Scheduled Plan
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.scheduledPlanRunOnce(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ScheduledPlan**](ScheduledPlan.md)| Scheduled Plan | [optional] 

### Return type

[**ScheduledPlan**](ScheduledPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="scheduledPlansForDashboard"></a>
# **scheduledPlansForDashboard**
> [ScheduledPlan] scheduledPlansForDashboard(dashboardId, opts)

Scheduled Plans for Dashboard

### Get scheduled plans by using a dashboard id for the requesting user or a specified user id (with :see_schedules permission)


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ScheduledPlanApi()

var dashboardId = 789; // {Integer} Dashboard Id

var opts = { 
  'userId': 789, // {Integer} User Id (default is requesting user if not specified)
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.scheduledPlansForDashboard(dashboardId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | **Integer**| Dashboard Id | 
 **userId** | **Integer**| User Id (default is requesting user if not specified) | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[ScheduledPlan]**](ScheduledPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="scheduledPlansForLook"></a>
# **scheduledPlansForLook**
> [ScheduledPlan] scheduledPlansForLook(lookId, opts)

Scheduled Plans for Look

### Get scheduled plans by using a look id for the requesting user or a specified user id (with :see_schedules permission)


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ScheduledPlanApi()

var lookId = 789; // {Integer} Look Id

var opts = { 
  'userId': 789, // {Integer} User Id (default is requesting user if not specified)
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.scheduledPlansForLook(lookId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookId** | **Integer**| Look Id | 
 **userId** | **Integer**| User Id (default is requesting user if not specified) | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[ScheduledPlan]**](ScheduledPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="scheduledPlansForLookmlDashboard"></a>
# **scheduledPlansForLookmlDashboard**
> [ScheduledPlan] scheduledPlansForLookmlDashboard(lookmlDashboardId, opts)

Scheduled Plans for LookML Dashboard

### Get scheduled plans by using a LookML dashboard id for the requesting user or a specified user id (with :see_schedules permission)


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ScheduledPlanApi()

var lookmlDashboardId = 789; // {Integer} LookML Dashboard Id

var opts = { 
  'userId': 789, // {Integer} User Id (default is requesting user if not specified)
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.scheduledPlansForLookmlDashboard(lookmlDashboardId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookmlDashboardId** | **Integer**| LookML Dashboard Id | 
 **userId** | **Integer**| User Id (default is requesting user if not specified) | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[ScheduledPlan]**](ScheduledPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="scheduledPlansForSpace"></a>
# **scheduledPlansForSpace**
> [ScheduledPlan] scheduledPlansForSpace(spaceId, opts)

Scheduled Plans for Space

### Get scheduled plans by using a space id for the requesting user.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ScheduledPlanApi()

var spaceId = 789; // {Integer} Space Id

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
api.scheduledPlansForSpace(spaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **Integer**| Space Id | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[ScheduledPlan]**](ScheduledPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateScheduledPlan"></a>
# **updateScheduledPlan**
> ScheduledPlan updateScheduledPlan(scheduledPlanId, body)

Update Scheduled Plan

### Update the scheduled plan with the specified id.

Admins can update other users&#39; Scheduled Plans.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ScheduledPlanApi()

var scheduledPlanId = 789; // {Integer} Scheduled Plan Id

var body = new LookerApi30Reference.ScheduledPlan(); // {ScheduledPlan} Scheduled Plan


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateScheduledPlan(scheduledPlanId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduledPlanId** | **Integer**| Scheduled Plan Id | 
 **body** | [**ScheduledPlan**](ScheduledPlan.md)| Scheduled Plan | 

### Return type

[**ScheduledPlan**](ScheduledPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

