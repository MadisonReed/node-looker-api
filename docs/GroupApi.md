# LookerApi30Reference.GroupApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGroupGroup**](GroupApi.md#addGroupGroup) | **POST** /groups/{group_id}/groups | Add a Group to Group
[**addGroupUser**](GroupApi.md#addGroupUser) | **POST** /groups/{group_id}/users | Add a User to Group
[**allGroupGroups**](GroupApi.md#allGroupGroups) | **GET** /groups/{group_id}/groups | Get All Groups in Group
[**allGroupUsers**](GroupApi.md#allGroupUsers) | **GET** /groups/{group_id}/users | Get All Users in Group
[**allGroups**](GroupApi.md#allGroups) | **GET** /groups | Get All Groups
[**createGroup**](GroupApi.md#createGroup) | **POST** /groups | Create Group
[**deleteGroup**](GroupApi.md#deleteGroup) | **DELETE** /groups/{group_id} | Delete Group
[**deleteGroupFromGroup**](GroupApi.md#deleteGroupFromGroup) | **DELETE** /groups/{group_id}/groups/{deleting_group_id} | Deletes a Group from Group
[**deleteGroupUser**](GroupApi.md#deleteGroupUser) | **DELETE** /groups/{group_id}/users/{user_id} | Remove a User from Group
[**deleteUserAttributeGroupValue**](GroupApi.md#deleteUserAttributeGroupValue) | **DELETE** /groups/{group_id}/attribute_values/{user_attribute_id} | Delete User Attribute Group Value
[**group**](GroupApi.md#group) | **GET** /groups/{group_id} | Get Group
[**updateGroup**](GroupApi.md#updateGroup) | **PATCH** /groups/{group_id} | Update Group
[**updateUserAttributeGroupValue**](GroupApi.md#updateUserAttributeGroupValue) | **PATCH** /groups/{group_id}/attribute_values/{user_attribute_id} | Set User Attribute Group Value


<a name="addGroupGroup"></a>
# **addGroupGroup**
> Group addGroupGroup(groupId, opts)

Add a Group to Group

### Adds a new group to a group.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.GroupApi()

var groupId = 789; // {Integer} Id of group

var opts = { 
  'body': new LookerApi30Reference.GroupIdForGroupInclusion() // {GroupIdForGroupInclusion} Group id to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addGroupGroup(groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| Id of group | 
 **body** | [**GroupIdForGroupInclusion**](GroupIdForGroupInclusion.md)| Group id to add | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addGroupUser"></a>
# **addGroupUser**
> User addGroupUser(groupId, opts)

Add a User to Group

### Adds a new user to a group.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.GroupApi()

var groupId = 789; // {Integer} Id of group

var opts = { 
  'body': new LookerApi30Reference.GroupIdForGroupUserInclusion() // {GroupIdForGroupUserInclusion} User id to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addGroupUser(groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| Id of group | 
 **body** | [**GroupIdForGroupUserInclusion**](GroupIdForGroupUserInclusion.md)| User id to add | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allGroupGroups"></a>
# **allGroupGroups**
> [Group] allGroupGroups(groupId, opts)

Get All Groups in Group

### Get information about all the groups in a group


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.GroupApi()

var groupId = 789; // {Integer} Id of group

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
api.allGroupGroups(groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| Id of group | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[Group]**](Group.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allGroupUsers"></a>
# **allGroupUsers**
> [User] allGroupUsers(groupId, opts)

Get All Users in Group

### Get information about all the users directly included in a group.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.GroupApi()

var groupId = 789; // {Integer} Id of group

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
api.allGroupUsers(groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| Id of group | 
 **fields** | **String**| Requested fields. | [optional] 
 **page** | **Integer**| Requested page. | [optional] 
 **perPage** | **Integer**| Results per page. | [optional] 
 **sorts** | **String**| Fields to sort by. | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allGroups"></a>
# **allGroups**
> [Group] allGroups(opts)

Get All Groups

### Get information about all groups.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.GroupApi()

var opts = { 
  'fields': "fields_example", // {String} Requested fields.
  'page': 789, // {Integer} Requested page.
  'perPage': 789, // {Integer} Results per page.
  'sorts': "sorts_example", // {String} Fields to sort by.
  'ids': [56], // {[Integer]} Optional of ids to get specific groups.
  'contentMetadataId': 789, // {Integer} Id of content metadata to which groups must have access.
  'canAddToContentMetadata': true // {Boolean} Select only groups that either can/cannot be given access to content.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.allGroups(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 
 **page** | **Integer**| Requested page. | [optional] 
 **perPage** | **Integer**| Results per page. | [optional] 
 **sorts** | **String**| Fields to sort by. | [optional] 
 **ids** | [**[Integer]**](Integer.md)| Optional of ids to get specific groups. | [optional] 
 **contentMetadataId** | **Integer**| Id of content metadata to which groups must have access. | [optional] 
 **canAddToContentMetadata** | **Boolean**| Select only groups that either can/cannot be given access to content. | [optional] 

### Return type

[**[Group]**](Group.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createGroup"></a>
# **createGroup**
> Group createGroup(opts)

Create Group

### Creates a new group (admin only).


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.GroupApi()

var opts = { 
  'body': new LookerApi30Reference.Group(), // {Group} Group
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createGroup(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Group**](Group.md)| Group | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGroup"></a>
# **deleteGroup**
> &#39;String&#39; deleteGroup(groupId)

Delete Group

### Deletes a group (admin only).


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.GroupApi()

var groupId = 789; // {Integer} Id of group


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteGroup(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| Id of group | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGroupFromGroup"></a>
# **deleteGroupFromGroup**
> deleteGroupFromGroup(groupId, deletingGroupId)

Deletes a Group from Group

### Removes a group from a group.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.GroupApi()

var groupId = 789; // {Integer} Id of group

var deletingGroupId = 789; // {Integer} Id of group to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteGroupFromGroup(groupId, deletingGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| Id of group | 
 **deletingGroupId** | **Integer**| Id of group to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGroupUser"></a>
# **deleteGroupUser**
> deleteGroupUser(groupId, userId)

Remove a User from Group

### Removes a user from a group.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.GroupApi()

var groupId = 789; // {Integer} Id of group

var userId = 789; // {Integer} Id of user to remove from group


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteGroupUser(groupId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| Id of group | 
 **userId** | **Integer**| Id of user to remove from group | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserAttributeGroupValue"></a>
# **deleteUserAttributeGroupValue**
> deleteUserAttributeGroupValue(groupId, userAttributeId)

Delete User Attribute Group Value

### Remove a user attribute value from a group.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.GroupApi()

var groupId = 789; // {Integer} Id of group

var userAttributeId = 789; // {Integer} Id of user attribute


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteUserAttributeGroupValue(groupId, userAttributeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| Id of group | 
 **userAttributeId** | **Integer**| Id of user attribute | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="group"></a>
# **group**
> Group group(groupId, opts)

Get Group

### Get information about a group.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.GroupApi()

var groupId = 789; // {Integer} Id of group

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
api.group(groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| Id of group | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateGroup"></a>
# **updateGroup**
> Group updateGroup(groupId, body, opts)

Update Group

### Updates the a group (admin only).

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.GroupApi()

var groupId = 789; // {Integer} Id of group

var body = new LookerApi30Reference.Group(); // {Group} Group

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
api.updateGroup(groupId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| Id of group | 
 **body** | [**Group**](Group.md)| Group | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserAttributeGroupValue"></a>
# **updateUserAttributeGroupValue**
> UserAttributeGroupValue updateUserAttributeGroupValue(groupId, userAttributeId, body)

Set User Attribute Group Value

### Set the value of a user attribute for a group.

For information about how user attribute values are calculated, see [Set User Attribute Group Values](#!/UserAttribute/set_user_attribute_group_values).


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.GroupApi()

var groupId = 789; // {Integer} Id of group

var userAttributeId = 789; // {Integer} Id of user attribute

var body = new LookerApi30Reference.UserAttributeGroupValue(); // {UserAttributeGroupValue} New value for group.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateUserAttributeGroupValue(groupId, userAttributeId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| Id of group | 
 **userAttributeId** | **Integer**| Id of user attribute | 
 **body** | [**UserAttributeGroupValue**](UserAttributeGroupValue.md)| New value for group. | 

### Return type

[**UserAttributeGroupValue**](UserAttributeGroupValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

