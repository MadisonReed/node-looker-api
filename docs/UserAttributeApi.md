# LookerApi30Reference.UserAttributeApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allUserAttributeGroupValues**](UserAttributeApi.md#allUserAttributeGroupValues) | **GET** /user_attributes/{user_attribute_id}/group_values | Get User Attribute Group Values
[**allUserAttributes**](UserAttributeApi.md#allUserAttributes) | **GET** /user_attributes | Get All User Attributes
[**createUserAttribute**](UserAttributeApi.md#createUserAttribute) | **POST** /user_attributes | Create User Attribute
[**deleteUserAttribute**](UserAttributeApi.md#deleteUserAttribute) | **DELETE** /user_attributes/{user_attribute_id} | Delete User Attribute
[**setUserAttributeGroupValues**](UserAttributeApi.md#setUserAttributeGroupValues) | **POST** /user_attributes/{user_attribute_id}/group_values | Set User Attribute Group Values
[**updateUserAttribute**](UserAttributeApi.md#updateUserAttribute) | **PATCH** /user_attributes/{user_attribute_id} | Update User Attribute
[**userAttribute**](UserAttributeApi.md#userAttribute) | **GET** /user_attributes/{user_attribute_id} | Get User Attribute


<a name="allUserAttributeGroupValues"></a>
# **allUserAttributeGroupValues**
> [UserAttributeGroupValue] allUserAttributeGroupValues(userAttributeId, opts)

Get User Attribute Group Values

### Returns all values of a user attribute defined by user groups, in precedence order.

A user may be a member of multiple groups which define different values for a given user attribute.
The order of group-values in the response determines precedence for selecting which group-value applies
to a given user.  For more information, see [Set User Attribute Group Values](#!/UserAttribute/set_user_attribute_group_values).

Results will only include groups that the caller&#39;s user account has permission to see.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserAttributeApi()

var userAttributeId = 789; // {Integer} Id of user attribute

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
api.allUserAttributeGroupValues(userAttributeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAttributeId** | **Integer**| Id of user attribute | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[UserAttributeGroupValue]**](UserAttributeGroupValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allUserAttributes"></a>
# **allUserAttributes**
> [UserAttribute] allUserAttributes(opts)

Get All User Attributes

### Get information about all user attributes.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserAttributeApi()

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
api.allUserAttributes(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 
 **sorts** | **String**| Fields to sort by. | [optional] 

### Return type

[**[UserAttribute]**](UserAttribute.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUserAttribute"></a>
# **createUserAttribute**
> UserAttribute createUserAttribute(opts)

Create User Attribute

### Create a new user attribute.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserAttributeApi()

var opts = { 
  'body': new LookerApi30Reference.UserAttribute(), // {UserAttribute} User Attribute
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createUserAttribute(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserAttribute**](UserAttribute.md)| User Attribute | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**UserAttribute**](UserAttribute.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserAttribute"></a>
# **deleteUserAttribute**
> &#39;String&#39; deleteUserAttribute(userAttributeId)

Delete User Attribute

### Delete a user attribute (admin only).


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserAttributeApi()

var userAttributeId = 789; // {Integer} Id of user_attribute


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteUserAttribute(userAttributeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAttributeId** | **Integer**| Id of user_attribute | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setUserAttributeGroupValues"></a>
# **setUserAttributeGroupValues**
> [UserAttributeGroupValue] setUserAttributeGroupValues(userAttributeId, body)

Set User Attribute Group Values

### Define values for a user attribute across a set of groups, in priority order.

This function defines all values for a user attribute defined by user groups. This is a global setting, potentially affecting
all users in the system. This function replaces any existing group value definitions for the indicated user attribute.

The value of a user attribute for a given user is determined by searching the following locations, in this order:

1. the user&#39;s account settings
2. the groups that the user is a member of
3. the default value of the user attribute, if any

The user may be a member of multiple groups which define different values for that user attribute. The order of items in the group_values parameter
determines which group takes priority for that user. Lowest array index wins.

An alternate method to indicate the selection precedence of group-values is to assign numbers to the &#39;rank&#39; property of each
group-value object in the array. Lowest &#39;rank&#39; value wins. If you use this technique, you must assign a
rank value to every group-value object in the array.

To set a user attribute value for a single user, see [Set User Attribute Value](#!/User/set_user_attribute_user_value).
To set a user attribute value for all members of a group, see [Set User Attribute Group Value](#!/Group/update_user_attribute_group_value)


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserAttributeApi()

var userAttributeId = 789; // {Integer} Id of user attribute

var body = [new LookerApi30Reference.UserAttributeGroupValue()]; // {[UserAttributeGroupValue]} Array of group values.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.setUserAttributeGroupValues(userAttributeId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAttributeId** | **Integer**| Id of user attribute | 
 **body** | [**[UserAttributeGroupValue]**](UserAttributeGroupValue.md)| Array of group values. | 

### Return type

[**[UserAttributeGroupValue]**](UserAttributeGroupValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserAttribute"></a>
# **updateUserAttribute**
> UserAttribute updateUserAttribute(userAttributeId, body, opts)

Update User Attribute

### Update a user attribute definition.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserAttributeApi()

var userAttributeId = 789; // {Integer} Id of user attribute

var body = new LookerApi30Reference.UserAttribute(); // {UserAttribute} User Attribute

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
api.updateUserAttribute(userAttributeId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAttributeId** | **Integer**| Id of user attribute | 
 **body** | [**UserAttribute**](UserAttribute.md)| User Attribute | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**UserAttribute**](UserAttribute.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userAttribute"></a>
# **userAttribute**
> UserAttribute userAttribute(userAttributeId, opts)

Get User Attribute

### Get information about a user attribute.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserAttributeApi()

var userAttributeId = 789; // {Integer} Id of user attribute

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
api.userAttribute(userAttributeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAttributeId** | **Integer**| Id of user attribute | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**UserAttribute**](UserAttribute.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

