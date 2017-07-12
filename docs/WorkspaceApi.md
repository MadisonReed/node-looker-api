# LookerApi30Reference.WorkspaceApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allWorkspaces**](WorkspaceApi.md#allWorkspaces) | **GET** /workspaces | Get All Workspaces
[**workspace**](WorkspaceApi.md#workspace) | **GET** /workspaces/{workspace_id} | Get Workspace


<a name="allWorkspaces"></a>
# **allWorkspaces**
> [Workspace] allWorkspaces

Get All Workspaces

### Get All Workspaces 

Returns all workspaces available to the calling user.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.WorkspaceApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.allWorkspaces(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Workspace]**](Workspace.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="workspace"></a>
# **workspace**
> Workspace workspace(workspaceId)

Get Workspace

### Get A Workspace 

Returns information about a workspace such as the git status and selected branches
of all projects available to the caller&#39;s user account.

A workspace defines which versions of project files will be used to evaluate expressions
and operations that use model definitions - operations such as running queries or rendering dashboards. 
Each project has its own git repository, and each project in a workspace may be configured to reference 
particular branch or revision within their respective repositories. 

There are two predefined workspaces available: \&quot;production\&quot; and \&quot;dev\&quot;. 

The production workspace is shared across all Looker users. Models in the production workspace are read-only.
Changing files in production is accomplished by modifying files in a git branch and using Pull Requests
to merge the changes from the dev branch into the production branch, and then telling
Looker to sync with production.

The dev workspace is local to each Looker user. Changes made to project/model files in the dev workspace only affect
that user, and only when the dev workspace is selected as the active workspace for the API session.  
(See set_session_workspace()). 

The dev workspace is NOT unique to an API session. Two applications accessing the Looker API using
the same user account will see the same files in the dev workspace. To avoid collisions between
API clients it&#39;s best to have each client login with API3 credentials for a different user account.

Changes made to files in a dev workspace are persistent across API sessions. It&#39;s a good
idea to commit any changes you&#39;ve made to the git repository, but not strictly required. Your modified files
reside in a special user-specific directory on the Looker server and will still be there when you login in again
later and use update_session(workspace_id: \&quot;dev\&quot;) to select the dev workspace for the new API session.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.WorkspaceApi()

var workspaceId = "workspaceId_example"; // {String} Id of the workspace 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.workspace(workspaceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| Id of the workspace  | 

### Return type

[**Workspace**](Workspace.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

