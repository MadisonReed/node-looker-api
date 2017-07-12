# LookerApi30Reference.SqlQueryApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSqlQuery**](SqlQueryApi.md#createSqlQuery) | **POST** /sql_queries | Create SQL Runner Query
[**sqlQuery**](SqlQueryApi.md#sqlQuery) | **GET** /sql_queries/{slug} | Get SQL Runner Query


<a name="createSqlQuery"></a>
# **createSqlQuery**
> SqlQuery createSqlQuery(body)

Create SQL Runner Query

Create a SQL Runner query.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.SqlQueryApi()

var body = new LookerApi30Reference.SqlQueryCreate(); // {SqlQueryCreate} SQL Runner Query


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createSqlQuery(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SqlQueryCreate**](SqlQueryCreate.md)| SQL Runner Query | 

### Return type

[**SqlQuery**](SqlQuery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sqlQuery"></a>
# **sqlQuery**
> SqlQuery sqlQuery(slug)

Get SQL Runner Query

Get a SQL Runner query.

### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.SqlQueryApi()

var slug = "slug_example"; // {String} slug of query


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.sqlQuery(slug, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| slug of query | 

### Return type

[**SqlQuery**](SqlQuery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

