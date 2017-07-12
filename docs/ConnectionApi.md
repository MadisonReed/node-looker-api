# LookerApi30Reference.ConnectionApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allConnections**](ConnectionApi.md#allConnections) | **GET** /connections | Get All Connections
[**allDialectInfos**](ConnectionApi.md#allDialectInfos) | **GET** /dialect_info | Get All Dialect Infos
[**connection**](ConnectionApi.md#connection) | **GET** /connections/{connection_name} | Get Connection
[**createConnection**](ConnectionApi.md#createConnection) | **POST** /connections | Create Connection
[**deleteConnection**](ConnectionApi.md#deleteConnection) | **DELETE** /connections/{connection_name} | Delete Connection
[**testConnection**](ConnectionApi.md#testConnection) | **PUT** /connections/{connection_name}/test | Test Connection
[**testConnectionConfig**](ConnectionApi.md#testConnectionConfig) | **PUT** /connections/test | Test Connection Configuration
[**updateConnection**](ConnectionApi.md#updateConnection) | **PATCH** /connections/{connection_name} | Update Connection


<a name="allConnections"></a>
# **allConnections**
> [DBConnection] allConnections(opts)

Get All Connections

### Get information about all connections.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ConnectionApi()

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
api.allConnections(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[DBConnection]**](DBConnection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allDialectInfos"></a>
# **allDialectInfos**
> [DialectInfo] allDialectInfos(opts)

Get All Dialect Infos

### Get information about all dialects.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ConnectionApi()

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
api.allDialectInfos(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[DialectInfo]**](DialectInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="connection"></a>
# **connection**
> DBConnection connection(connectionName, opts)

Get Connection

### Get information about a connection.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ConnectionApi()

var connectionName = "connectionName_example"; // {String} Name of connection

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
api.connection(connectionName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionName** | **String**| Name of connection | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**DBConnection**](DBConnection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createConnection"></a>
# **createConnection**
> DBConnection createConnection(opts)

Create Connection

### Create a connection using the specified configuration.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ConnectionApi()

var opts = { 
  'body': new LookerApi30Reference.DBConnection() // {DBConnection} Connection
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createConnection(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DBConnection**](DBConnection.md)| Connection | [optional] 

### Return type

[**DBConnection**](DBConnection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteConnection"></a>
# **deleteConnection**
> &#39;String&#39; deleteConnection(connectionName)

Delete Connection

### Delete a connection.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ConnectionApi()

var connectionName = "connectionName_example"; // {String} Name of connection


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteConnection(connectionName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionName** | **String**| Name of connection | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testConnection"></a>
# **testConnection**
> [DBConnectionTestResult] testConnection(connectionName, opts)

Test Connection

### Test an existing connection.

Note that a connection&#39;s &#39;dialect&#39; property has a &#39;connection_tests&#39; property that lists the
specific types of tests that the connection supports.

Unsupported tests in the request will be ignored.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ConnectionApi()

var connectionName = "connectionName_example"; // {String} Name of connection

var opts = { 
  'tests': ["tests_example"] // {[String]} Array of names of tests to run
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.testConnection(connectionName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionName** | **String**| Name of connection | 
 **tests** | [**[String]**](String.md)| Array of names of tests to run | [optional] 

### Return type

[**[DBConnectionTestResult]**](DBConnectionTestResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testConnectionConfig"></a>
# **testConnectionConfig**
> [DBConnectionTestResult] testConnectionConfig(opts)

Test Connection Configuration

### Test a connection configuration.

Note that a connection&#39;s &#39;dialect&#39; property has a &#39;connection_tests&#39; property that lists the
specific types of tests that the connection supports.

Unsupported tests in the request will be ignored.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ConnectionApi()

var opts = { 
  'body': new LookerApi30Reference.DBConnection(), // {DBConnection} Connection
  'tests': ["tests_example"] // {[String]} Array of names of tests to run
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.testConnectionConfig(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DBConnection**](DBConnection.md)| Connection | [optional] 
 **tests** | [**[String]**](String.md)| Array of names of tests to run | [optional] 

### Return type

[**[DBConnectionTestResult]**](DBConnectionTestResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateConnection"></a>
# **updateConnection**
> DBConnection updateConnection(connectionName, body)

Update Connection

### Update a connection using the specified configuration.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.ConnectionApi()

var connectionName = "connectionName_example"; // {String} Name of connection

var body = new LookerApi30Reference.DBConnection(); // {DBConnection} Connection


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateConnection(connectionName, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionName** | **String**| Name of connection | 
 **body** | [**DBConnection**](DBConnection.md)| Connection | 

### Return type

[**DBConnection**](DBConnection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

