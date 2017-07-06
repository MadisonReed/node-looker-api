# LookerApi30Reference.AuthApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSamlTestConfig**](AuthApi.md#createSamlTestConfig) | **POST** /saml_test_configs | Create SAML Test Configuration
[**deleteSamlTestConfig**](AuthApi.md#deleteSamlTestConfig) | **DELETE** /saml_test_configs/{test_slug} | Delete SAML Test Configuration
[**fetchAndParseSamlIdpMetadata**](AuthApi.md#fetchAndParseSamlIdpMetadata) | **POST** /fetch_and_parse_saml_idp_metadata | Parse SAML IdP Url
[**ldapConfig**](AuthApi.md#ldapConfig) | **GET** /ldap_config | Get LDAP Configuration
[**parseSamlIdpMetadata**](AuthApi.md#parseSamlIdpMetadata) | **POST** /parse_saml_idp_metadata | Parse SAML IdP XML
[**samlConfig**](AuthApi.md#samlConfig) | **GET** /saml_config | Get SAML Configuration
[**samlTestConfig**](AuthApi.md#samlTestConfig) | **GET** /saml_test_configs/{test_slug} | Get SAML Test Configuration
[**testLdapConfigAuth**](AuthApi.md#testLdapConfigAuth) | **PUT** /ldap_config/test_auth | Test LDAP Auth
[**testLdapConfigConnection**](AuthApi.md#testLdapConfigConnection) | **PUT** /ldap_config/test_connection | Test LDAP Connection
[**testLdapConfigUserAuth**](AuthApi.md#testLdapConfigUserAuth) | **PUT** /ldap_config/test_user_auth | Test LDAP User Auth
[**testLdapConfigUserInfo**](AuthApi.md#testLdapConfigUserInfo) | **PUT** /ldap_config/test_user_info | Test LDAP User Info
[**updateLdapConfig**](AuthApi.md#updateLdapConfig) | **PATCH** /ldap_config | Update LDAP Configuration
[**updateSamlConfig**](AuthApi.md#updateSamlConfig) | **PATCH** /saml_config | Update SAML Configuration


<a name="createSamlTestConfig"></a>
# **createSamlTestConfig**
> SamlConfig createSamlTestConfig(body)

Create SAML Test Configuration

### Create a SAML test configuration.\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

var apiInstance = new LookerApi30Reference.AuthApi()

var body = new LookerApi30Reference.SamlConfig(); // {SamlConfig} SAML test config


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createSamlTestConfig(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SamlConfig**](SamlConfig.md)| SAML test config | 

### Return type

[**SamlConfig**](SamlConfig.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSamlTestConfig"></a>
# **deleteSamlTestConfig**
> &#39;String&#39; deleteSamlTestConfig(testSlug)

Delete SAML Test Configuration

### Delete a SAML test configuration.\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

var apiInstance = new LookerApi30Reference.AuthApi()

var testSlug = "testSlug_example"; // {String} Slug of test config


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteSamlTestConfig(testSlug, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testSlug** | **String**| Slug of test config | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fetchAndParseSamlIdpMetadata"></a>
# **fetchAndParseSamlIdpMetadata**
> SamlMetadataParseResult fetchAndParseSamlIdpMetadata(body)

Parse SAML IdP Url

### Fetch the given url and parse it as a SAML IdP metadata document and return the result.\nNote that this requires that the url be public or at least at a location where the Looker instance\ncan fetch it without requiring any special authentication.\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

var apiInstance = new LookerApi30Reference.AuthApi()

var body = "body_example"; // {String} SAML IdP metadata public url


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.fetchAndParseSamlIdpMetadata(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**| SAML IdP metadata public url | 

### Return type

[**SamlMetadataParseResult**](SamlMetadataParseResult.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="ldapConfig"></a>
# **ldapConfig**
> LDAPConfig ldapConfig

Get LDAP Configuration

### Get the LDAP configuration.\n\nLooker can be optionally configured to authenticate users against an Active Directory or other LDAP directory server.\nLDAP setup requires coordination with an administrator of that directory server.\n\nOnly Looker administrators can read and update the LDAP configuration.\n\nConfiguring LDAP impacts authentication for all users. This configuration should be done carefully.\n\nLooker maintains a single LDAP configuration. It can be read and updated.       Updates only succeed if the new state will be valid (in the sense that all required fields are populated);       it is up to you to ensure that the configuration is appropriate and correct).\n\nLDAP is enabled or disabled for Looker using the **enabled** field.\n\nLooker will never return an **auth_password** field. That value can be set, but never retrieved.\n\nSee the [Looker LDAP docs](https://www.looker.com/docs/r/api/ldap_setup) for additional information.\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

var apiInstance = new LookerApi30Reference.AuthApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.ldapConfig(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**LDAPConfig**](LDAPConfig.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="parseSamlIdpMetadata"></a>
# **parseSamlIdpMetadata**
> SamlMetadataParseResult parseSamlIdpMetadata(body)

Parse SAML IdP XML

### Parse the given xml as a SAML IdP metadata document and return the result.\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

var apiInstance = new LookerApi30Reference.AuthApi()

var body = "body_example"; // {String} SAML IdP metadata xml


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.parseSamlIdpMetadata(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**| SAML IdP metadata xml | 

### Return type

[**SamlMetadataParseResult**](SamlMetadataParseResult.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="samlConfig"></a>
# **samlConfig**
> SamlConfig samlConfig

Get SAML Configuration

### Get the SAML configuration.\n\nLooker can be optionally configured to authenticate users against a SAML authentication server.\nSAML setup requires coordination with an administrator of that server.\n\nOnly Looker administrators can read and update the SAML configuration.\n\nConfiguring SAML impacts authentication for all users. This configuration should be done carefully.\n\nLooker maintains a single SAML configuation. It can be read and updated.       Updates only succeed if the new state will be valid (in the sense that all required fields are populated);       it is up to you to ensure that the configuration is appropriate and correct).\n\nSAML is enabled or disabled for Looker using the **enabled** field.\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

var apiInstance = new LookerApi30Reference.AuthApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.samlConfig(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SamlConfig**](SamlConfig.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="samlTestConfig"></a>
# **samlTestConfig**
> SamlConfig samlTestConfig(testSlug)

Get SAML Test Configuration

### Get a SAML test configuration by test_slug.\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

var apiInstance = new LookerApi30Reference.AuthApi()

var testSlug = "testSlug_example"; // {String} Slug of test config


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.samlTestConfig(testSlug, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testSlug** | **String**| Slug of test config | 

### Return type

[**SamlConfig**](SamlConfig.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testLdapConfigAuth"></a>
# **testLdapConfigAuth**
> LDAPConfigTestResult testLdapConfigAuth(body)

Test LDAP Auth

### Test the connection authentication settings for an LDAP configuration.\n\nThis tests that the connection is possible and that a &#39;server&#39; account to be used by Looker can       authenticate to the LDAP server given connection and authentication information.\n\n**connection_host**, **connection_port**, and **auth_username**, are required.       **connection_tls** and **auth_password** are optional.\n\nExample:\n```json\n{\n  \&quot;connection_host\&quot;: \&quot;ldap.example.com\&quot;,\n  \&quot;connection_port\&quot;: \&quot;636\&quot;,\n  \&quot;connection_tls\&quot;: true,\n  \&quot;auth_username\&quot;: \&quot;cn=looker,dc=example,dc=com\&quot;,\n  \&quot;auth_password\&quot;: \&quot;secret\&quot;\n}\n```\n\nLooker will never return an **auth_password**. If this request omits the **auth_password** field, then       the **auth_password** value from the active config (if present) will be used for the test.\n\nThe active LDAP settings are not modified.\n\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

var apiInstance = new LookerApi30Reference.AuthApi()

var body = new LookerApi30Reference.LDAPConfig(); // {LDAPConfig} LDAP Config


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.testLdapConfigAuth(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LDAPConfig**](LDAPConfig.md)| LDAP Config | 

### Return type

[**LDAPConfigTestResult**](LDAPConfigTestResult.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testLdapConfigConnection"></a>
# **testLdapConfigConnection**
> LDAPConfigTestResult testLdapConfigConnection(body)

Test LDAP Connection

### Test the connection settings for an LDAP configuration.\n\nThis tests that the connection is possible given a connection_host and connection_port.\n\n**connection_host** and **connection_port** are required. **connection_tls** is optional.\n\nExample:\n```json\n{\n  \&quot;connection_host\&quot;: \&quot;ldap.example.com\&quot;,\n  \&quot;connection_port\&quot;: \&quot;636\&quot;,\n  \&quot;connection_tls\&quot;: true\n}\n```\n\nNo authentication to the LDAP server is attempted.\n\nThe active LDAP settings are not modified.\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

var apiInstance = new LookerApi30Reference.AuthApi()

var body = new LookerApi30Reference.LDAPConfig(); // {LDAPConfig} LDAP Config


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.testLdapConfigConnection(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LDAPConfig**](LDAPConfig.md)| LDAP Config | 

### Return type

[**LDAPConfigTestResult**](LDAPConfigTestResult.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testLdapConfigUserAuth"></a>
# **testLdapConfigUserAuth**
> LDAPConfigTestResult testLdapConfigUserAuth(body)

Test LDAP User Auth

### Test the user authentication settings for an LDAP configuration.\n\nThis test accepts a full LDAP configuration along with a username/password pair and attempts to       authenticate the user with the LDAP server. The configuration is validated before attempting the       authentication.\n\nLooker will never return an **auth_password**. If this request omits the **auth_password** field, then       the **auth_password** value from the active config (if present) will be used for the test.\n\n**test_ldap_user** and **test_ldap_password** are required.\n\nThe active LDAP settings are not modified.\n\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

var apiInstance = new LookerApi30Reference.AuthApi()

var body = new LookerApi30Reference.LDAPConfig(); // {LDAPConfig} LDAP Config


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.testLdapConfigUserAuth(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LDAPConfig**](LDAPConfig.md)| LDAP Config | 

### Return type

[**LDAPConfigTestResult**](LDAPConfigTestResult.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testLdapConfigUserInfo"></a>
# **testLdapConfigUserInfo**
> LDAPConfigTestResult testLdapConfigUserInfo(body)

Test LDAP User Info

### Test the user authentication settings for an LDAP configuration without authenticating the user.\n\nThis test will let you easily test the mapping for user properties and roles for any user without      needing to authenticate as that user.\n\nThis test accepts a full LDAP configuration along with a username and attempts to find the full info      for the user from the LDAP server without actually authenticating the user. So, user password is not      required.The configuration is validated before attempting to contact the server.\n\n**test_ldap_user** is required.\n\nThe active LDAP settings are not modified.\n\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

var apiInstance = new LookerApi30Reference.AuthApi()

var body = new LookerApi30Reference.LDAPConfig(); // {LDAPConfig} LDAP Config


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.testLdapConfigUserInfo(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LDAPConfig**](LDAPConfig.md)| LDAP Config | 

### Return type

[**LDAPConfigTestResult**](LDAPConfigTestResult.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateLdapConfig"></a>
# **updateLdapConfig**
> LDAPConfig updateLdapConfig(body)

Update LDAP Configuration

### Update the LDAP configuration.\n\nConfiguring LDAP impacts authentication for all users. This configuration should be done carefully.\n\nOnly Looker administrators can read and update the LDAP configuration.\n\nLDAP is enabled or disabled for Looker using the **enabled** field.\n\nIt is **highly** recommended that any LDAP setting changes be tested using the APIs below before being set globally.\n\nSee the [Looker LDAP docs](https://www.looker.com/docs/r/api/ldap_setup) for additional information.\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

var apiInstance = new LookerApi30Reference.AuthApi()

var body = new LookerApi30Reference.LDAPConfig(); // {LDAPConfig} LDAP Config


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateLdapConfig(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LDAPConfig**](LDAPConfig.md)| LDAP Config | 

### Return type

[**LDAPConfig**](LDAPConfig.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSamlConfig"></a>
# **updateSamlConfig**
> SamlConfig updateSamlConfig(body)

Update SAML Configuration

### Update the SAML configuration.\n\nConfiguring SAML impacts authentication for all users. This configuration should be done carefully.\n\nOnly Looker administrators can read and update the SAML configuration.\n\nSAML is enabled or disabled for Looker using the **enabled** field.\n\nIt is **highly** recommended that any SAML setting changes be tested using the APIs below before being set globally.\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

var apiInstance = new LookerApi30Reference.AuthApi()

var body = new LookerApi30Reference.SamlConfig(); // {SamlConfig} SAML Config


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateSamlConfig(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SamlConfig**](SamlConfig.md)| SAML Config | 

### Return type

[**SamlConfig**](SamlConfig.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

