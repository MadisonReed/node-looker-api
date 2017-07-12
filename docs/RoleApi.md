# LookerApi30Reference.RoleApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allModelSets**](RoleApi.md#allModelSets) | **GET** /model_sets | Get All Model Sets
[**allPermissionSets**](RoleApi.md#allPermissionSets) | **GET** /permission_sets | Get All Permission Sets
[**allPermissions**](RoleApi.md#allPermissions) | **GET** /permissions | Get All Permissions
[**allRoles**](RoleApi.md#allRoles) | **GET** /roles | Get All Roles
[**createModelSet**](RoleApi.md#createModelSet) | **POST** /model_sets | Create Model Set
[**createPermissionSet**](RoleApi.md#createPermissionSet) | **POST** /permission_sets | Create Permission Set
[**createRole**](RoleApi.md#createRole) | **POST** /roles | Create Role
[**deleteModelSet**](RoleApi.md#deleteModelSet) | **DELETE** /model_sets/{model_set_id} | Delete Model Set
[**deletePermissionSet**](RoleApi.md#deletePermissionSet) | **DELETE** /permission_sets/{permission_set_id} | Delete Permission Set
[**deleteRole**](RoleApi.md#deleteRole) | **DELETE** /roles/{role_id} | Delete Role
[**modelSet**](RoleApi.md#modelSet) | **GET** /model_sets/{model_set_id} | Get Model Set
[**permissionSet**](RoleApi.md#permissionSet) | **GET** /permission_sets/{permission_set_id} | Get Permission Set
[**role**](RoleApi.md#role) | **GET** /roles/{role_id} | Get Role
[**roleGroups**](RoleApi.md#roleGroups) | **GET** /roles/{role_id}/groups | Get Role Groups
[**roleUsers**](RoleApi.md#roleUsers) | **GET** /roles/{role_id}/users | Get Role Users
[**setRoleGroups**](RoleApi.md#setRoleGroups) | **PUT** /roles/{role_id}/groups | Update Role Groups
[**setRoleUsers**](RoleApi.md#setRoleUsers) | **PUT** /roles/{role_id}/users | Update Role Users
[**updateModelSet**](RoleApi.md#updateModelSet) | **PATCH** /model_sets/{model_set_id} | Update Model Set
[**updatePermissionSet**](RoleApi.md#updatePermissionSet) | **PATCH** /permission_sets/{permission_set_id} | Update Permission Set
[**updateRole**](RoleApi.md#updateRole) | **PATCH** /roles/{role_id} | Update Role


<a name="allModelSets"></a>
# **allModelSets**
> [ModelSet] allModelSets(opts)

Get All Model Sets

### Get information about all model sets.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

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
api.allModelSets(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[ModelSet]**](ModelSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allPermissionSets"></a>
# **allPermissionSets**
> [PermissionSet] allPermissionSets(opts)

Get All Permission Sets

### Get information about all permission sets.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

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
api.allPermissionSets(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[PermissionSet]**](PermissionSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allPermissions"></a>
# **allPermissions**
> [Permission] allPermissions

Get All Permissions

### Get all supported permissions.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.allPermissions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Permission]**](Permission.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allRoles"></a>
# **allRoles**
> [Role] allRoles(opts)

Get All Roles

### Get information about all roles.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

var opts = { 
  'fields': "fields_example", // {String} Requested fields.
  'ids': [56] // {[Integer]} Optional list of ids to get specific roles.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.allRoles(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 
 **ids** | [**[Integer]**](Integer.md)| Optional list of ids to get specific roles. | [optional] 

### Return type

[**[Role]**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createModelSet"></a>
# **createModelSet**
> ModelSet createModelSet(opts)

Create Model Set

### Create a model set with the specified information. Model sets are used by Roles.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

var opts = { 
  'body': new LookerApi30Reference.ModelSet() // {ModelSet} ModelSet
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createModelSet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelSet**](ModelSet.md)| ModelSet | [optional] 

### Return type

[**ModelSet**](ModelSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPermissionSet"></a>
# **createPermissionSet**
> PermissionSet createPermissionSet(opts)

Create Permission Set

### Create a permission set with the specified information. Permission sets are used by Roles.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

var opts = { 
  'body': new LookerApi30Reference.PermissionSet() // {PermissionSet} Permission Set
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createPermissionSet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PermissionSet**](PermissionSet.md)| Permission Set | [optional] 

### Return type

[**PermissionSet**](PermissionSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRole"></a>
# **createRole**
> Role createRole(opts)

Create Role

### Create a role with the specified information.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

var opts = { 
  'body': new LookerApi30Reference.Role() // {Role} Role
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createRole(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Role**](Role.md)| Role | [optional] 

### Return type

[**Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteModelSet"></a>
# **deleteModelSet**
> &#39;String&#39; deleteModelSet(modelSetId)

Delete Model Set

### Delete the model set with a specific id.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

var modelSetId = 789; // {Integer} id of model set


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteModelSet(modelSetId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelSetId** | **Integer**| id of model set | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePermissionSet"></a>
# **deletePermissionSet**
> &#39;String&#39; deletePermissionSet(permissionSetId)

Delete Permission Set

### Delete the permission set with a specific id.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

var permissionSetId = 789; // {Integer} Id of permission set


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deletePermissionSet(permissionSetId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **permissionSetId** | **Integer**| Id of permission set | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRole"></a>
# **deleteRole**
> &#39;String&#39; deleteRole(roleId)

Delete Role

### Delete the role with a specific id.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

var roleId = 789; // {Integer} id of role


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteRole(roleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **Integer**| id of role | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modelSet"></a>
# **modelSet**
> ModelSet modelSet(modelSetId, opts)

Get Model Set

### Get information about the model set with a specific id.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

var modelSetId = 789; // {Integer} Id of model set

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
api.modelSet(modelSetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelSetId** | **Integer**| Id of model set | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**ModelSet**](ModelSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="permissionSet"></a>
# **permissionSet**
> PermissionSet permissionSet(permissionSetId, opts)

Get Permission Set

### Get information about the permission set with a specific id.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

var permissionSetId = 789; // {Integer} Id of permission set

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
api.permissionSet(permissionSetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **permissionSetId** | **Integer**| Id of permission set | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**PermissionSet**](PermissionSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="role"></a>
# **role**
> Role role(roleId)

Get Role

### Get information about the role with a specific id.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

var roleId = 789; // {Integer} id of role


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.role(roleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **Integer**| id of role | 

### Return type

[**Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="roleGroups"></a>
# **roleGroups**
> [Group] roleGroups(roleId, opts)

Get Role Groups

### Get information about all the groups with the role that has a specific id.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

var roleId = 789; // {Integer} id of role

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
api.roleGroups(roleId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **Integer**| id of role | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[Group]**](Group.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="roleUsers"></a>
# **roleUsers**
> [User] roleUsers(roleId, opts)

Get Role Users

### Get information about all the users with the role that has a specific id.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

var roleId = 789; // {Integer} id of user

var opts = { 
  'fields': "fields_example", // {String} Requested fields.
  'directAssociationOnly': true // {Boolean} Get only users associated directly with the role: exclude those only associated through groups.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.roleUsers(roleId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **Integer**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 
 **directAssociationOnly** | **Boolean**| Get only users associated directly with the role: exclude those only associated through groups. | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setRoleGroups"></a>
# **setRoleGroups**
> [Group] setRoleGroups(roleId, body)

Update Role Groups

### Set all groups for a role, removing all existing group associations from that role.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

var roleId = 789; // {Integer} Id of Role

var body = [new LookerApi30Reference.[Integer]()]; // {[Integer]} Array of Group Ids


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.setRoleGroups(roleId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **Integer**| Id of Role | 
 **body** | **[Integer]**| Array of Group Ids | 

### Return type

[**[Group]**](Group.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setRoleUsers"></a>
# **setRoleUsers**
> [User] setRoleUsers(roleId, body)

Update Role Users

### Set all the users of the role with a specific id.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

var roleId = 789; // {Integer} id of role

var body = [new LookerApi30Reference.[Integer]()]; // {[Integer]} array of user ids for role


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.setRoleUsers(roleId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **Integer**| id of role | 
 **body** | **[Integer]**| array of user ids for role | 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateModelSet"></a>
# **updateModelSet**
> ModelSet updateModelSet(modelSetId, body)

Update Model Set

### Update information about the model set with a specific id.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

var modelSetId = 789; // {Integer} id of model set

var body = new LookerApi30Reference.ModelSet(); // {ModelSet} ModelSet


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateModelSet(modelSetId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelSetId** | **Integer**| id of model set | 
 **body** | [**ModelSet**](ModelSet.md)| ModelSet | 

### Return type

[**ModelSet**](ModelSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePermissionSet"></a>
# **updatePermissionSet**
> PermissionSet updatePermissionSet(permissionSetId, body)

Update Permission Set

### Update information about the permission set with a specific id.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

var permissionSetId = 789; // {Integer} id of permission set

var body = new LookerApi30Reference.PermissionSet(); // {PermissionSet} Permission Set


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updatePermissionSet(permissionSetId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **permissionSetId** | **Integer**| id of permission set | 
 **body** | [**PermissionSet**](PermissionSet.md)| Permission Set | 

### Return type

[**PermissionSet**](PermissionSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRole"></a>
# **updateRole**
> Role updateRole(roleId, body)

Update Role

### Update information about the role with a specific id.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.RoleApi()

var roleId = 789; // {Integer} id of role

var body = new LookerApi30Reference.Role(); // {Role} Role


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateRole(roleId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **Integer**| id of role | 
 **body** | [**Role**](Role.md)| Role | 

### Return type

[**Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

