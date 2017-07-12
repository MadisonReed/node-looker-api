# LookerApi30Reference.UserApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allUserAccessFilters**](UserApi.md#allUserAccessFilters) | **GET** /users/{user_id}/access_filters | Get All Access Filters
[**allUserCredentialsApi3s**](UserApi.md#allUserCredentialsApi3s) | **GET** /users/{user_id}/credentials_api3 | Get All API 3 Credentials
[**allUserCredentialsEmbeds**](UserApi.md#allUserCredentialsEmbeds) | **GET** /users/{user_id}/credentials_embed | Get All Embedding Credentials
[**allUserSessions**](UserApi.md#allUserSessions) | **GET** /users/{user_id}/sessions | Get All Web Login Sessions
[**allUsers**](UserApi.md#allUsers) | **GET** /users | Get All Users
[**createUser**](UserApi.md#createUser) | **POST** /users | Create User
[**createUserAccessFilter**](UserApi.md#createUserAccessFilter) | **POST** /users/{user_id}/access_filters | Create Access Filter
[**createUserCredentialsApi**](UserApi.md#createUserCredentialsApi) | **POST** /users/{user_id}/credentials_api | Create API Credential
[**createUserCredentialsApi3**](UserApi.md#createUserCredentialsApi3) | **POST** /users/{user_id}/credentials_api3 | Create API 3 Credential
[**createUserCredentialsEmail**](UserApi.md#createUserCredentialsEmail) | **POST** /users/{user_id}/credentials_email | Create Email/Password Credential
[**createUserCredentialsEmailPasswordReset**](UserApi.md#createUserCredentialsEmailPasswordReset) | **POST** /users/{user_id}/credentials_email/password_reset | Create Password Reset Token
[**createUserCredentialsTotp**](UserApi.md#createUserCredentialsTotp) | **POST** /users/{user_id}/credentials_totp | Create Two-Factor Credential
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /users/{user_id} | Delete User
[**deleteUserAccessFilter**](UserApi.md#deleteUserAccessFilter) | **DELETE** /users/{user_id}/access_filters/{access_filter_id} | Delete Access Filter
[**deleteUserAttributeUserValue**](UserApi.md#deleteUserAttributeUserValue) | **DELETE** /users/{user_id}/attribute_values/{user_attribute_id} | Delete User Attribute User Value
[**deleteUserCredentialsApi**](UserApi.md#deleteUserCredentialsApi) | **DELETE** /users/{user_id}/credentials_api | Delete API Credential
[**deleteUserCredentialsApi3**](UserApi.md#deleteUserCredentialsApi3) | **DELETE** /users/{user_id}/credentials_api3/{credentials_api3_id} | Delete API 3 Credential
[**deleteUserCredentialsEmail**](UserApi.md#deleteUserCredentialsEmail) | **DELETE** /users/{user_id}/credentials_email | Delete Email/Password Credential
[**deleteUserCredentialsEmbed**](UserApi.md#deleteUserCredentialsEmbed) | **DELETE** /users/{user_id}/credentials_embed/{credentials_embed_id} | Delete Embedding Credential
[**deleteUserCredentialsGoogle**](UserApi.md#deleteUserCredentialsGoogle) | **DELETE** /users/{user_id}/credentials_google | Delete Google Auth Credential
[**deleteUserCredentialsLdap**](UserApi.md#deleteUserCredentialsLdap) | **DELETE** /users/{user_id}/credentials_ldap | Delete LDAP Credential
[**deleteUserCredentialsLookerOpenid**](UserApi.md#deleteUserCredentialsLookerOpenid) | **DELETE** /users/{user_id}/credentials_looker_openid | Delete Looker OpenId Credential
[**deleteUserCredentialsSaml**](UserApi.md#deleteUserCredentialsSaml) | **DELETE** /users/{user_id}/credentials_saml | Delete Saml Auth Credential
[**deleteUserCredentialsTotp**](UserApi.md#deleteUserCredentialsTotp) | **DELETE** /users/{user_id}/credentials_totp | Delete Two-Factor Credential
[**deleteUserSession**](UserApi.md#deleteUserSession) | **DELETE** /users/{user_id}/sessions/{session_id} | Delete Web Login Session
[**me**](UserApi.md#me) | **GET** /user | Get Current User
[**searchUsers**](UserApi.md#searchUsers) | **GET** /users/search | Search Users
[**searchUsersNames**](UserApi.md#searchUsersNames) | **GET** /users/search/names/{pattern} | Search User Names
[**setUserAttributeUserValue**](UserApi.md#setUserAttributeUserValue) | **PATCH** /users/{user_id}/attribute_values/{user_attribute_id} | Set User Attribute User Value
[**setUserRoles**](UserApi.md#setUserRoles) | **PUT** /users/{user_id}/roles | Set User Roles
[**updateUser**](UserApi.md#updateUser) | **PATCH** /users/{user_id} | Update User
[**updateUserAccessFilter**](UserApi.md#updateUserAccessFilter) | **PATCH** /users/{user_id}/access_filters/{access_filter_id} | Update Access Filter
[**updateUserCredentialsEmail**](UserApi.md#updateUserCredentialsEmail) | **PATCH** /users/{user_id}/credentials_email | Update Email/Password Credential
[**user**](UserApi.md#user) | **GET** /users/{user_id} | Get User by Id
[**userAccessFilter**](UserApi.md#userAccessFilter) | **GET** /users/{user_id}/access_filters/{access_filter_id} | Get Access Filter
[**userAttributeUserValues**](UserApi.md#userAttributeUserValues) | **GET** /users/{user_id}/attribute_values | Get User Attribute Values
[**userCredentialsApi**](UserApi.md#userCredentialsApi) | **GET** /users/{user_id}/credentials_api | Get API Credential
[**userCredentialsApi3**](UserApi.md#userCredentialsApi3) | **GET** /users/{user_id}/credentials_api3/{credentials_api3_id} | Get API 3 Credential
[**userCredentialsEmail**](UserApi.md#userCredentialsEmail) | **GET** /users/{user_id}/credentials_email | Get Email/Password Credential
[**userCredentialsEmbed**](UserApi.md#userCredentialsEmbed) | **GET** /users/{user_id}/credentials_embed/{credentials_embed_id} | Get Embedding Credential
[**userCredentialsGoogle**](UserApi.md#userCredentialsGoogle) | **GET** /users/{user_id}/credentials_google | Get Google Auth Credential
[**userCredentialsLdap**](UserApi.md#userCredentialsLdap) | **GET** /users/{user_id}/credentials_ldap | Get LDAP Credential
[**userCredentialsLookerOpenid**](UserApi.md#userCredentialsLookerOpenid) | **GET** /users/{user_id}/credentials_looker_openid | Get Looker OpenId Credential
[**userCredentialsSaml**](UserApi.md#userCredentialsSaml) | **GET** /users/{user_id}/credentials_saml | Get Saml Auth Credential
[**userCredentialsTotp**](UserApi.md#userCredentialsTotp) | **GET** /users/{user_id}/credentials_totp | Get Two-Factor Credential
[**userForCredential**](UserApi.md#userForCredential) | **GET** /users/credential/{credential_type}/{credential_id} | Get User by Credential Id
[**userRoles**](UserApi.md#userRoles) | **GET** /users/{user_id}/roles | Get User Roles
[**userSession**](UserApi.md#userSession) | **GET** /users/{user_id}/sessions/{session_id} | Get Web Login Session


<a name="allUserAccessFilters"></a>
# **allUserAccessFilters**
> [AccessFilter] allUserAccessFilters(userId, opts)

Get All Access Filters

### Access filter for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

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
api.allUserAccessFilters(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[AccessFilter]**](AccessFilter.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allUserCredentialsApi3s"></a>
# **allUserCredentialsApi3s**
> [CredentialsApi3] allUserCredentialsApi3s(userId, opts)

Get All API 3 Credentials

### API 3 login information for the specified user. This is for the newer API keys that can be added for any user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

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
api.allUserCredentialsApi3s(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[CredentialsApi3]**](CredentialsApi3.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allUserCredentialsEmbeds"></a>
# **allUserCredentialsEmbeds**
> [CredentialsEmbed] allUserCredentialsEmbeds(userId, opts)

Get All Embedding Credentials

### Embed login information for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

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
api.allUserCredentialsEmbeds(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[CredentialsEmbed]**](CredentialsEmbed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allUserSessions"></a>
# **allUserSessions**
> [Session] allUserSessions(userId, opts)

Get All Web Login Sessions

### Web login session for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

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
api.allUserSessions(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[Session]**](Session.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allUsers"></a>
# **allUsers**
> [User] allUsers(opts)

Get All Users

### Get information about all users.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var opts = { 
  'fields': "fields_example", // {String} Requested fields.
  'page': 789, // {Integer} Requested page.
  'perPage': 789, // {Integer} Results per page.
  'sorts': "sorts_example", // {String} Fields to sort by.
  'ids': [56] // {[Integer]} Optional list of ids to get specific users.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.allUsers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 
 **page** | **Integer**| Requested page. | [optional] 
 **perPage** | **Integer**| Results per page. | [optional] 
 **sorts** | **String**| Fields to sort by. | [optional] 
 **ids** | [**[Integer]**](Integer.md)| Optional list of ids to get specific users. | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUser"></a>
# **createUser**
> User createUser(opts)

Create User

### Create a user with the specified information.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var opts = { 
  'body': new LookerApi30Reference.User(), // {User} User
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createUser(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)| User | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUserAccessFilter"></a>
# **createUserAccessFilter**
> AccessFilter createUserAccessFilter(userId, opts)

Create Access Filter

### Access filter for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

var opts = { 
  'body': new LookerApi30Reference.AccessFilter(), // {AccessFilter} Access Filter
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createUserAccessFilter(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **body** | [**AccessFilter**](AccessFilter.md)| Access Filter | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**AccessFilter**](AccessFilter.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUserCredentialsApi"></a>
# **createUserCredentialsApi**
> CredentialsApi createUserCredentialsApi(userId, opts)

Create API Credential

### API login information for the specified user. This is for &#39;API Users&#39; used for the &#39;old&#39; query API.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

var opts = { 
  'body': new LookerApi30Reference.CredentialsApi(), // {CredentialsApi} API Credential
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createUserCredentialsApi(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **body** | [**CredentialsApi**](CredentialsApi.md)| API Credential | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsApi**](CredentialsApi.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUserCredentialsApi3"></a>
# **createUserCredentialsApi3**
> CredentialsApi3 createUserCredentialsApi3(userId, opts)

Create API 3 Credential

### API 3 login information for the specified user. This is for the newer API keys that can be added for any user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

var opts = { 
  'body': new LookerApi30Reference.CredentialsApi3(), // {CredentialsApi3} API 3 Credential
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createUserCredentialsApi3(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **body** | [**CredentialsApi3**](CredentialsApi3.md)| API 3 Credential | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsApi3**](CredentialsApi3.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUserCredentialsEmail"></a>
# **createUserCredentialsEmail**
> CredentialsEmail createUserCredentialsEmail(userId, opts)

Create Email/Password Credential

### Email/password login information for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

var opts = { 
  'body': new LookerApi30Reference.CredentialsEmail(), // {CredentialsEmail} Email/Password Credential
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createUserCredentialsEmail(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **body** | [**CredentialsEmail**](CredentialsEmail.md)| Email/Password Credential | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsEmail**](CredentialsEmail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUserCredentialsEmailPasswordReset"></a>
# **createUserCredentialsEmailPasswordReset**
> CredentialsEmail createUserCredentialsEmailPasswordReset(userId, opts)

Create Password Reset Token

### Create a password reset token.
This will create a cryptographically secure random password reset token for the user.
If the user already has a password reset token then this invalidates the old token and creates a new one.
The token is expressed as the &#39;password_reset_url&#39; of the user&#39;s email/password credential object.
This takes an optional &#39;expires&#39; param to indicate if the new token should be an expiring token.
Tokens that expire are typically used for self-service password resets for existing users.
Invitation emails for new users typically are not set to expire.
The expire period is always 60 minutes when expires is enabled.
This method can be called with an empty body.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} Id of user

var opts = { 
  'expires': true, // {Boolean} Expiring token.
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createUserCredentialsEmailPasswordReset(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| Id of user | 
 **expires** | **Boolean**| Expiring token. | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsEmail**](CredentialsEmail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUserCredentialsTotp"></a>
# **createUserCredentialsTotp**
> CredentialsTotp createUserCredentialsTotp(userId, opts)

Create Two-Factor Credential

### Two-factor login information for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

var opts = { 
  'body': new LookerApi30Reference.CredentialsTotp(), // {CredentialsTotp} Two-Factor Credential
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createUserCredentialsTotp(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **body** | [**CredentialsTotp**](CredentialsTotp.md)| Two-Factor Credential | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsTotp**](CredentialsTotp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUser"></a>
# **deleteUser**
> &#39;String&#39; deleteUser(userId)

Delete User

### Delete the user with a specific id.

**DANGER** this will delete the user and all looks and other information owned by the user.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} Id of user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteUser(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| Id of user | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserAccessFilter"></a>
# **deleteUserAccessFilter**
> &#39;String&#39; deleteUserAccessFilter(userId, accessFilterId)

Delete Access Filter

### Access filter for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

var accessFilterId = 789; // {Integer} id of Access Filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteUserAccessFilter(userId, accessFilterId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **accessFilterId** | **Integer**| id of Access Filter | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserAttributeUserValue"></a>
# **deleteUserAttributeUserValue**
> deleteUserAttributeUserValue(userId, userAttributeId)

Delete User Attribute User Value

### Delete a user attribute value from a user&#39;s account settings.

After the user attribute value is deleted from the user&#39;s account settings, subsequent requests
for the user attribute value for this user will draw from the user&#39;s groups or the default
value of the user attribute. See [Get User Attribute Values](#!/User/user_attribute_user_values) for more
information about how user attribute values are resolved.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} Id of user

var userAttributeId = 789; // {Integer} Id of user attribute


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteUserAttributeUserValue(userId, userAttributeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| Id of user | 
 **userAttributeId** | **Integer**| Id of user attribute | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserCredentialsApi"></a>
# **deleteUserCredentialsApi**
> &#39;String&#39; deleteUserCredentialsApi(userId)

Delete API Credential

### API login information for the specified user. This is for &#39;API Users&#39; used for the &#39;old&#39; query API.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteUserCredentialsApi(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserCredentialsApi3"></a>
# **deleteUserCredentialsApi3**
> &#39;String&#39; deleteUserCredentialsApi3(userId, credentialsApi3Id)

Delete API 3 Credential

### API 3 login information for the specified user. This is for the newer API keys that can be added for any user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

var credentialsApi3Id = 789; // {Integer} id of API 3 Credential


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteUserCredentialsApi3(userId, credentialsApi3Id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **credentialsApi3Id** | **Integer**| id of API 3 Credential | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserCredentialsEmail"></a>
# **deleteUserCredentialsEmail**
> &#39;String&#39; deleteUserCredentialsEmail(userId)

Delete Email/Password Credential

### Email/password login information for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteUserCredentialsEmail(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserCredentialsEmbed"></a>
# **deleteUserCredentialsEmbed**
> &#39;String&#39; deleteUserCredentialsEmbed(userId, credentialsEmbedId)

Delete Embedding Credential

### Embed login information for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

var credentialsEmbedId = 789; // {Integer} id of Embedding Credential


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteUserCredentialsEmbed(userId, credentialsEmbedId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **credentialsEmbedId** | **Integer**| id of Embedding Credential | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserCredentialsGoogle"></a>
# **deleteUserCredentialsGoogle**
> &#39;String&#39; deleteUserCredentialsGoogle(userId)

Delete Google Auth Credential

### Google authentication login information for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteUserCredentialsGoogle(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserCredentialsLdap"></a>
# **deleteUserCredentialsLdap**
> &#39;String&#39; deleteUserCredentialsLdap(userId)

Delete LDAP Credential

### LDAP login information for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteUserCredentialsLdap(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserCredentialsLookerOpenid"></a>
# **deleteUserCredentialsLookerOpenid**
> &#39;String&#39; deleteUserCredentialsLookerOpenid(userId)

Delete Looker OpenId Credential

### Looker Openid login information for the specified user. Used by Looker Analysts.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteUserCredentialsLookerOpenid(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserCredentialsSaml"></a>
# **deleteUserCredentialsSaml**
> &#39;String&#39; deleteUserCredentialsSaml(userId)

Delete Saml Auth Credential

### Saml authentication login information for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteUserCredentialsSaml(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserCredentialsTotp"></a>
# **deleteUserCredentialsTotp**
> &#39;String&#39; deleteUserCredentialsTotp(userId)

Delete Two-Factor Credential

### Two-factor login information for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteUserCredentialsTotp(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserSession"></a>
# **deleteUserSession**
> &#39;String&#39; deleteUserSession(userId, sessionId)

Delete Web Login Session

### Web login session for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

var sessionId = 789; // {Integer} id of Web Login Session


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteUserSession(userId, sessionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **sessionId** | **Integer**| id of Web Login Session | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="me"></a>
# **me**
> User me(opts)

Get Current User

### Get information about the current user; i.e. the user account currently calling the API.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

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
api.me(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchUsers"></a>
# **searchUsers**
> [User] searchUsers(opts)

Search Users

### Search users.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var opts = { 
  'fields': "fields_example", // {String} Requested fields.
  'page': 789, // {Integer} Requested page.
  'perPage': 789, // {Integer} Results per page.
  'sorts': "sorts_example", // {String} Fields to sort by.
  'id': 789, // {Integer} Match User Id.
  'firstName': "firstName_example", // {String} Match First name.
  'lastName': "lastName_example", // {String} Match Last name.
  'verifiedLookerEmployee': true, // {Boolean} Match Verified Looker employee.
  'email': "email_example", // {String} Match Email Address.
  'isDisabled': true, // {Boolean} Match Is disabled.
  'filterOr': true, // {Boolean} Do an OR search with parameters
  'contentMetadataId': 789, // {Integer} Id of content metadata to which users must have access
  'groupId': 789 // {Integer} Id of group of which users must be directly members
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.searchUsers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 
 **page** | **Integer**| Requested page. | [optional] 
 **perPage** | **Integer**| Results per page. | [optional] 
 **sorts** | **String**| Fields to sort by. | [optional] 
 **id** | **Integer**| Match User Id. | [optional] 
 **firstName** | **String**| Match First name. | [optional] 
 **lastName** | **String**| Match Last name. | [optional] 
 **verifiedLookerEmployee** | **Boolean**| Match Verified Looker employee. | [optional] 
 **email** | **String**| Match Email Address. | [optional] 
 **isDisabled** | **Boolean**| Match Is disabled. | [optional] 
 **filterOr** | **Boolean**| Do an OR search with parameters | [optional] 
 **contentMetadataId** | **Integer**| Id of content metadata to which users must have access | [optional] 
 **groupId** | **Integer**| Id of group of which users must be directly members | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchUsersNames"></a>
# **searchUsersNames**
> [User] searchUsersNames(pattern, opts)

Search User Names

### Search users where first_name OR last_name OR email matches a string.

The results will be AND&#39;d with any additional search parameters that are (optionally) included.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var pattern = "pattern_example"; // {String} Pattern to match.

var opts = { 
  'fields': "fields_example", // {String} Requested fields.
  'page': 789, // {Integer} Requested page.
  'perPage': 789, // {Integer} Results per page.
  'sorts': "sorts_example", // {String} Fields to sort by.
  'id': 789, // {Integer} Match User Id.
  'firstName': "firstName_example", // {String} Match First name.
  'lastName': "lastName_example", // {String} Match Last name.
  'verifiedLookerEmployee': true, // {Boolean} Match Verified Looker employee.
  'email': "email_example", // {String} Match Email Address.
  'isDisabled': true // {Boolean} Match Is disabled.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.searchUsersNames(pattern, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pattern** | **String**| Pattern to match. | 
 **fields** | **String**| Requested fields. | [optional] 
 **page** | **Integer**| Requested page. | [optional] 
 **perPage** | **Integer**| Results per page. | [optional] 
 **sorts** | **String**| Fields to sort by. | [optional] 
 **id** | **Integer**| Match User Id. | [optional] 
 **firstName** | **String**| Match First name. | [optional] 
 **lastName** | **String**| Match Last name. | [optional] 
 **verifiedLookerEmployee** | **Boolean**| Match Verified Looker employee. | [optional] 
 **email** | **String**| Match Email Address. | [optional] 
 **isDisabled** | **Boolean**| Match Is disabled. | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setUserAttributeUserValue"></a>
# **setUserAttributeUserValue**
> UserAttributeWithValue setUserAttributeUserValue(userId, userAttributeId, body)

Set User Attribute User Value

### Store a custom value for a user attribute in a user&#39;s account settings.

Per-user user attribute values take precedence over group or default values.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} Id of user

var userAttributeId = 789; // {Integer} Id of user attribute

var body = new LookerApi30Reference.UserAttributeWithValue(); // {UserAttributeWithValue} New attribute value for user.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.setUserAttributeUserValue(userId, userAttributeId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| Id of user | 
 **userAttributeId** | **Integer**| Id of user attribute | 
 **body** | [**UserAttributeWithValue**](UserAttributeWithValue.md)| New attribute value for user. | 

### Return type

[**UserAttributeWithValue**](UserAttributeWithValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setUserRoles"></a>
# **setUserRoles**
> [Role] setUserRoles(userId, body, opts)

Set User Roles

### Set roles of the user with a specific id.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

var body = [new LookerApi30Reference.[Integer]()]; // {[Integer]} array of roles ids for user

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
api.setUserRoles(userId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **body** | **[Integer]**| array of roles ids for user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[Role]**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> User updateUser(userId, body, opts)

Update User

### Update information about the user with a specific id.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} Id of user

var body = new LookerApi30Reference.User(); // {User} User

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
api.updateUser(userId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| Id of user | 
 **body** | [**User**](User.md)| User | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserAccessFilter"></a>
# **updateUserAccessFilter**
> AccessFilter updateUserAccessFilter(userId, accessFilterId, body, opts)

Update Access Filter

### Access filter for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

var accessFilterId = 789; // {Integer} id of Access Filter

var body = new LookerApi30Reference.AccessFilter(); // {AccessFilter} Access Filter

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
api.updateUserAccessFilter(userId, accessFilterId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **accessFilterId** | **Integer**| id of Access Filter | 
 **body** | [**AccessFilter**](AccessFilter.md)| Access Filter | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**AccessFilter**](AccessFilter.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserCredentialsEmail"></a>
# **updateUserCredentialsEmail**
> CredentialsEmail updateUserCredentialsEmail(userId, body, opts)

Update Email/Password Credential

### Email/password login information for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

var body = new LookerApi30Reference.CredentialsEmail(); // {CredentialsEmail} Email/Password Credential

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
api.updateUserCredentialsEmail(userId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **body** | [**CredentialsEmail**](CredentialsEmail.md)| Email/Password Credential | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsEmail**](CredentialsEmail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="user"></a>
# **user**
> User user(userId, opts)

Get User by Id

### Get information about the user with a specific id.

If the caller is an admin or the caller is the user being specified, then full user information will
be returned. Otherwise, a minimal &#39;public&#39; variant of the user information will be returned. This contains
The user name and avatar url, but no sensitive information.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} Id of user

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
api.user(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| Id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userAccessFilter"></a>
# **userAccessFilter**
> AccessFilter userAccessFilter(userId, accessFilterId, opts)

Get Access Filter

### Access filter for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} Id of user

var accessFilterId = 789; // {Integer} Id of Access Filter

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
api.userAccessFilter(userId, accessFilterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| Id of user | 
 **accessFilterId** | **Integer**| Id of Access Filter | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**AccessFilter**](AccessFilter.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userAttributeUserValues"></a>
# **userAttributeUserValues**
> [UserAttributeWithValue] userAttributeUserValues(userId, opts)

Get User Attribute Values

### Get user attribute values for a given user.

Returns the values of specified user attributes (or all user attributes) for a certain user.

A value for each user attribute is searched for in the following locations, in this order:
1. in the user&#39;s account information
1. in groups that the user is a member of
1. the default value of the user attribute

If more than one group has a value defined for a user attribute, the group with the lowest rank wins.

The response will only include user attributes for which values were found. Use `include_unset=true` to include
empty records for user attributes with no value.

The value of all hidden user attributes will be blank.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} Id of user

var opts = { 
  'fields': "fields_example", // {String} Requested fields.
  'userAttributeIds': [56], // {[Integer]} Specific user attributes to request. Omit or leave blank to request all user attributes.
  'allValues': true, // {Boolean} If true, returns all values in the search path instead of just the first value found. Useful for debugging group precedence.
  'includeUnset': true // {Boolean} If true, returns an empty record for each requested attribute that has no user, group, or default value.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.userAttributeUserValues(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| Id of user | 
 **fields** | **String**| Requested fields. | [optional] 
 **userAttributeIds** | [**[Integer]**](Integer.md)| Specific user attributes to request. Omit or leave blank to request all user attributes. | [optional] 
 **allValues** | **Boolean**| If true, returns all values in the search path instead of just the first value found. Useful for debugging group precedence. | [optional] 
 **includeUnset** | **Boolean**| If true, returns an empty record for each requested attribute that has no user, group, or default value. | [optional] 

### Return type

[**[UserAttributeWithValue]**](UserAttributeWithValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCredentialsApi"></a>
# **userCredentialsApi**
> CredentialsApi userCredentialsApi(userId, opts)

Get API Credential

### API login information for the specified user. This is for &#39;API Users&#39; used for the &#39;old&#39; query API.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

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
api.userCredentialsApi(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsApi**](CredentialsApi.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCredentialsApi3"></a>
# **userCredentialsApi3**
> CredentialsApi3 userCredentialsApi3(userId, credentialsApi3Id, opts)

Get API 3 Credential

### API 3 login information for the specified user. This is for the newer API keys that can be added for any user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} Id of user

var credentialsApi3Id = 789; // {Integer} Id of API 3 Credential

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
api.userCredentialsApi3(userId, credentialsApi3Id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| Id of user | 
 **credentialsApi3Id** | **Integer**| Id of API 3 Credential | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsApi3**](CredentialsApi3.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCredentialsEmail"></a>
# **userCredentialsEmail**
> CredentialsEmail userCredentialsEmail(userId, opts)

Get Email/Password Credential

### Email/password login information for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

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
api.userCredentialsEmail(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsEmail**](CredentialsEmail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCredentialsEmbed"></a>
# **userCredentialsEmbed**
> CredentialsEmbed userCredentialsEmbed(userId, credentialsEmbedId, opts)

Get Embedding Credential

### Embed login information for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} Id of user

var credentialsEmbedId = 789; // {Integer} Id of Embedding Credential

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
api.userCredentialsEmbed(userId, credentialsEmbedId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| Id of user | 
 **credentialsEmbedId** | **Integer**| Id of Embedding Credential | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsEmbed**](CredentialsEmbed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCredentialsGoogle"></a>
# **userCredentialsGoogle**
> CredentialsGoogle userCredentialsGoogle(userId, opts)

Get Google Auth Credential

### Google authentication login information for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

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
api.userCredentialsGoogle(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsGoogle**](CredentialsGoogle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCredentialsLdap"></a>
# **userCredentialsLdap**
> CredentialsLDAP userCredentialsLdap(userId, opts)

Get LDAP Credential

### LDAP login information for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

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
api.userCredentialsLdap(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsLDAP**](CredentialsLDAP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCredentialsLookerOpenid"></a>
# **userCredentialsLookerOpenid**
> CredentialsLookerOpenid userCredentialsLookerOpenid(userId, opts)

Get Looker OpenId Credential

### Looker Openid login information for the specified user. Used by Looker Analysts.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

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
api.userCredentialsLookerOpenid(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsLookerOpenid**](CredentialsLookerOpenid.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCredentialsSaml"></a>
# **userCredentialsSaml**
> CredentialsSaml userCredentialsSaml(userId, opts)

Get Saml Auth Credential

### Saml authentication login information for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

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
api.userCredentialsSaml(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsSaml**](CredentialsSaml.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCredentialsTotp"></a>
# **userCredentialsTotp**
> CredentialsTotp userCredentialsTotp(userId, opts)

Get Two-Factor Credential

### Two-factor login information for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

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
api.userCredentialsTotp(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsTotp**](CredentialsTotp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userForCredential"></a>
# **userForCredential**
> User userForCredential(credentialType, credentialId, opts)

Get User by Credential Id

### Get information about the user with a credential of given type with specific id.

This is used to do things like find users by their embed external_user_id. Or, find the user with
a given api3 client_id, etc. The &#39;credential_type&#39; matchs the &#39;type&#39; name of the various credential
types. It must be one of the values listed in the table below. The &#39;credential_id&#39; is your unique Id
for the user and is specific to each type of credential.

An example using the Ruby sdk might look like:

`sdk.user_for_credential(&#39;embed&#39;, &#39;customer-4959425&#39;)`

This table shows the supported &#39;Credential Type&#39; strings. The right column is for reference; it shows
which field in the given credential type is actually searched when finding a user with the supplied
&#39;credential_id&#39;.

| Credential Types | Id Field Matched |
| ---------------- | ---------------- |
| email            | email            |
| google           | google_user_id   |
| saml             | saml_user_id     |
| ldap             | ldap_id          |
| api              | token            |
| api3             | client_id        |
| embed            | external_user_id |
| looker_openid    | email            |

NOTE: &#39;api&#39; is the legacy Looker query API. The API you are currently looking at is &#39;api3&#39;.



### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var credentialType = "credentialType_example"; // {String} Type name of credential

var credentialId = "credentialId_example"; // {String} Id of credential

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
api.userForCredential(credentialType, credentialId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialType** | **String**| Type name of credential | 
 **credentialId** | **String**| Id of credential | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userRoles"></a>
# **userRoles**
> [Role] userRoles(userId, opts)

Get User Roles

### Get information about roles of the user with a specific id.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} id of user

var opts = { 
  'fields': "fields_example", // {String} Requested fields.
  'directAssociationOnly': true // {Boolean} Get only roles associated directly with the user: exclude those only associated through groups.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.userRoles(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 
 **directAssociationOnly** | **Boolean**| Get only roles associated directly with the user: exclude those only associated through groups. | [optional] 

### Return type

[**[Role]**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userSession"></a>
# **userSession**
> Session userSession(userId, sessionId, opts)

Get Web Login Session

### Web login session for the specified user.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.UserApi()

var userId = 789; // {Integer} Id of user

var sessionId = 789; // {Integer} Id of Web Login Session

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
api.userSession(userId, sessionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| Id of user | 
 **sessionId** | **Integer**| Id of Web Login Session | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**Session**](Session.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

