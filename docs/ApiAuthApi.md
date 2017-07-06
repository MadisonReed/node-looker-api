# LookerApi30Reference.ApiAuthApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](ApiAuthApi.md#login) | **POST** /login | Login
[**loginUser**](ApiAuthApi.md#loginUser) | **POST** /login/{user_id} | Login user
[**logout**](ApiAuthApi.md#logout) | **DELETE** /logout | Logout


<a name="login"></a>
# **login**
> AccessToken login(opts)

Login

### Present client credentials to obtain an authorization token\n\nLooker API implements the OAuth2 [Resource Owner Password Credentials Grant](https://looker.com/docs/r/api/outh2_resource_owner_pc) pattern.\nThe client credentials required for this login must be obtained by creating an API3 key on a user account\nin the Looker Admin console. The API3 key consists of a public `client_id` and a private `client_secret`.\n\nThe access token returned by `login` must be used in the HTTP Authorization header of subsequent\nAPI requests, like this:\n```\nAuthorization: token 4QDkCyCtZzYgj4C2p2cj3csJH7zqS5RzKs2kTnG4\n```\nReplace \&quot;4QDkCy...\&quot; with the `access_token` value returned by `login`.\nThe word &#39;token&#39; is a string literal and must be included exactly as shown.\n\nFor more information and detailed examples of Looker API authorization, see [How to Authenticate to Looker API3](https://github.com/looker/looker-sdk-ruby/blob/master/authentication.md).\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

var apiInstance = new LookerApi30Reference.ApiAuthApi()

var opts = { 
  'clientId': "clientId_example", // {String} client_id part of API3 Key.
  'clientSecret': "clientSecret_example" // {String} client_secret part of API3 Key.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.login(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| client_id part of API3 Key. | [optional] 
 **clientSecret** | **String**| client_secret part of API3 Key. | [optional] 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="loginUser"></a>
# **loginUser**
> AccessToken loginUser(userId)

Login user

### Create an access token for a given user.\n\nThis can only be called by an authenticated admin user. It allows that admin to generate a new\nauthentication token for the user with the given user id. That token can then be used for subsequent\nAPI calls - which are then performed *as* that target user.\n\nThe target user does *not* need to have a pre-existing API client_id/client_secret pair. And, no such\ncredentials are created by this call.\n\nThis allows for building systems where api user authentication for an arbitrary number of users is done\noutside of Looker and funneled through a single &#39;service account&#39; with admin permissions. Note that a\nnew access token is generated on each call. If target users are going to be making numerous API\ncalls in a short period then it is wise to cache this authentication token rather than call this before\neach of those API calls.\n\nSee &#39;login&#39; for more detail on the access token and how to use it.\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

var apiInstance = new LookerApi30Reference.ApiAuthApi()

var userId = 789; // {Integer} Id of user.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.loginUser(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| Id of user. | 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logout"></a>
# **logout**
> &#39;String&#39; logout

Logout

### Logout of the API and invalidate the current access token.\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

var apiInstance = new LookerApi30Reference.ApiAuthApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.logout(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

