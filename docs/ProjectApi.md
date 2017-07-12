# LookerApi30Reference.ProjectApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allProjectFiles**](ProjectApi.md#allProjectFiles) | **GET** /projects/{project_id}/files | Get All Project Files
[**allProjects**](ProjectApi.md#allProjects) | **GET** /projects | Get All Projects
[**project**](ProjectApi.md#project) | **GET** /projects/{project_id} | Get Project
[**projectFile**](ProjectApi.md#projectFile) | **GET** /projects/{project_id}/files/file | Get Project File
[**projectValidationResults**](ProjectApi.md#projectValidationResults) | **GET** /projects/{project_id}/validate | Cached Project Validation Results
[**resetProjectToProduction**](ProjectApi.md#resetProjectToProduction) | **POST** /projects/{project_id}/reset_to_production | Reset To Production
[**validateProject**](ProjectApi.md#validateProject) | **POST** /projects/{project_id}/validate | Validate Project


<a name="allProjectFiles"></a>
# **allProjectFiles**
> [ProjectFile] allProjectFiles(projectId, opts)

Get All Project Files

### Get All Project Files

Returns a list of the files in the project


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ProjectApi()

var projectId = "projectId_example"; // {String} Project Id

var opts = { 
  'fields': "fields_example" // {String} Requested fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.allProjectFiles(projectId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id | 
 **fields** | **String**| Requested fields | [optional] 

### Return type

[**[ProjectFile]**](ProjectFile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allProjects"></a>
# **allProjects**
> [Project] allProjects(opts)

Get All Projects

### Get All Projects

Returns all projects visible to the current user


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ProjectApi()

var opts = { 
  'fields': "fields_example" // {String} Requested fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.allProjects(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields | [optional] 

### Return type

[**[Project]**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="project"></a>
# **project**
> Project project(projectId, opts)

Get Project

### Get A Project

Returns the project with the given project id


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ProjectApi()

var projectId = "projectId_example"; // {String} Project Id

var opts = { 
  'fields': "fields_example" // {String} Requested fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.project(projectId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id | 
 **fields** | **String**| Requested fields | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectFile"></a>
# **projectFile**
> ProjectFile projectFile(projectId, fileId, opts)

Get Project File

### Get Project File Info

Returns information about a file in the project


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ProjectApi()

var projectId = "projectId_example"; // {String} Project Id

var fileId = "fileId_example"; // {String} File Id

var opts = { 
  'fields': "fields_example" // {String} Requested fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.projectFile(projectId, fileId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id | 
 **fileId** | **String**| File Id | 
 **fields** | **String**| Requested fields | [optional] 

### Return type

[**ProjectFile**](ProjectFile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectValidationResults"></a>
# **projectValidationResults**
> ProjectValidationCache projectValidationResults(projectId, opts)

Cached Project Validation Results

### Get Cached Project Validation Results

Returns the cached results of a previous project validation calculation, if any.
Returns http status 204 No Content if no validation results exist.

Validating the content of all the files in a project can be computationally intensive
for large projects. Use this API to simply fetch the results of the most recent
project validation rather than revalidating the entire project from scratch.

A value of `\&quot;stale\&quot;: true` in the response indicates that the project has changed since
the cached validation results were computed. The cached validation results may no longer
reflect the current state of the project.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ProjectApi()

var projectId = "projectId_example"; // {String} Project Id

var opts = { 
  'fields': "fields_example" // {String} Requested fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.projectValidationResults(projectId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id | 
 **fields** | **String**| Requested fields | [optional] 

### Return type

[**ProjectValidationCache**](ProjectValidationCache.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resetProjectToProduction"></a>
# **resetProjectToProduction**
> &#39;String&#39; resetProjectToProduction(projectId)

Reset To Production

### Reset a project to the revision of the project that is in production.

**DANGER** this will delete any changes that have not been pushed to a remote repository.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ProjectApi()

var projectId = "projectId_example"; // {String} Id of project


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.resetProjectToProduction(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Id of project | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validateProject"></a>
# **validateProject**
> ProjectValidation validateProject(projectId, opts)

Validate Project

### Validate Project

Performs lint validation of all lookml files in the project.
Returns a list of errors found, if any.

Validating the content of all the files in a project can be computationally intensive
for large projects. For best performance, call `validate_project(project_id)` only
when you really want to recompute project validation. To quickly display the results of 
the most recent project validation (without recomputing), use `project_validation_results(project_id)`


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ProjectApi()

var projectId = "projectId_example"; // {String} Project Id

var opts = { 
  'fields': "fields_example" // {String} Requested fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validateProject(projectId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id | 
 **fields** | **String**| Requested fields | [optional] 

### Return type

[**ProjectValidation**](ProjectValidation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

