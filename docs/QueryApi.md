# LookerApi30Reference.QueryApi

All URIs are relative to *https://madisonreed.looker.com:19999/api/3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createQuery**](QueryApi.md#createQuery) | **POST** /queries | Create Query
[**createQueryTask**](QueryApi.md#createQueryTask) | **POST** /query_tasks | Run Query Async
[**query**](QueryApi.md#query) | **GET** /queries/{query_id} | Get Query
[**queryForSlug**](QueryApi.md#queryForSlug) | **GET** /queries/slug/{slug} | Get Query for Slug
[**queryTask**](QueryApi.md#queryTask) | **GET** /query_tasks/{query_task_id} | Get Async Query Info
[**queryTaskMultiResults**](QueryApi.md#queryTaskMultiResults) | **GET** /query_tasks/multi_results | Get Multiple Async Query Results
[**queryTaskResults**](QueryApi.md#queryTaskResults) | **GET** /query_tasks/{query_task_id}/results | Get Async Query Results
[**runInlineQuery**](QueryApi.md#runInlineQuery) | **POST** /queries/run/{result_format} | Run Inline Query
[**runQuery**](QueryApi.md#runQuery) | **GET** /queries/{query_id}/run/{result_format} | Run Query
[**runUrlEncodedQuery**](QueryApi.md#runUrlEncodedQuery) | **GET** /queries/models/{model_name}/views/{view_name}/run/{result_format} | Run Url Encoded Query


<a name="createQuery"></a>
# **createQuery**
> Query createQuery(opts)

Create Query

### Create a query.

This allows you to create a new query that you can later run. Looker queries are immutable once created
and are not deleted. If you create a query that is exactly like an existing query then the existing query
will be returned and no new query will be created. Whether a new query is created or not, you can use
the &#39;id&#39; in the returned query with the &#39;run&#39; method.

The query parameters are passed as json in the body of the request.



### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.QueryApi()

var opts = { 
  'body': new LookerApi30Reference.Query(), // {Query} Query
  'fields': "fields_example" // {String} Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createQuery(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Query**](Query.md)| Query | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**Query**](Query.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createQueryTask"></a>
# **createQueryTask**
> QueryTask createQueryTask(body, opts)

Run Query Async

### Run a saved query asynchronously.

Runs a previously created query asynchronously. Returns a Query Task ID
which can be used to fetch the results from the Query Tasks results endpoint.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.QueryApi()

var body = new LookerApi30Reference.CreateQueryTask(); // {CreateQueryTask} Query parameters

var opts = { 
  'limit': 789, // {Integer} Row limit (may override the limit in the saved query).
  'applyFormatting': true, // {Boolean} Apply model-specified formatting to each result.
  'applyVis': true, // {Boolean} Apply visualization options to results.
  'cache': true, // {Boolean} Get results from cache if available.
  'imageWidth': 789, // {Integer} Render width for image formats.
  'imageHeight': 789, // {Integer} Render height for image formats.
  'generateDrillLinks': true, // {Boolean} Generate drill links (only applicable to 'json_detail' format.
  'forceProduction': true, // {Boolean} Force use of production models even if the user is in development mode.
  'cacheOnly': true, // {Boolean} Retrieve any results from cache even if the results have expired.
  'pathPrefix': "pathPrefix_example", // {String} Prefix to use for drill links (url encoded).
  'rebuildPdts': true, // {Boolean} Rebuild PDTS used in query.
  'serverTableCalcs': true, // {Boolean} Perform table calculations on query results
  'fields': "fields_example" // {String} Requested fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createQueryTask(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateQueryTask**](CreateQueryTask.md)| Query parameters | 
 **limit** | **Integer**| Row limit (may override the limit in the saved query). | [optional] 
 **applyFormatting** | **Boolean**| Apply model-specified formatting to each result. | [optional] 
 **applyVis** | **Boolean**| Apply visualization options to results. | [optional] 
 **cache** | **Boolean**| Get results from cache if available. | [optional] 
 **imageWidth** | **Integer**| Render width for image formats. | [optional] 
 **imageHeight** | **Integer**| Render height for image formats. | [optional] 
 **generateDrillLinks** | **Boolean**| Generate drill links (only applicable to &#39;json_detail&#39; format. | [optional] 
 **forceProduction** | **Boolean**| Force use of production models even if the user is in development mode. | [optional] 
 **cacheOnly** | **Boolean**| Retrieve any results from cache even if the results have expired. | [optional] 
 **pathPrefix** | **String**| Prefix to use for drill links (url encoded). | [optional] 
 **rebuildPdts** | **Boolean**| Rebuild PDTS used in query. | [optional] 
 **serverTableCalcs** | **Boolean**| Perform table calculations on query results | [optional] 
 **fields** | **String**| Requested fields | [optional] 

### Return type

[**QueryTask**](QueryTask.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="query"></a>
# **query**
> Query query(queryId, opts)

Get Query

### Get a previously created query by id.

A Looker query object includes the various parameters that define a database query that has been run or
could be run in the future. These parameters include: model, view, fields, filters, pivots, etc.
Query *results* are not part of the query object.

Query objects are unique and immutable. Query objects are created automatically in Looker as users explore data.
Looker does not delete them; they become part of the query history. When asked to create a query for
any given set of parameters, Looker will first try to find an existing query object with matching
parameters and will only create a new object when an appropriate object can not be found.

This &#39;get&#39; method is used to get the details about a query for a given id. See the other methods here
to &#39;create&#39; and &#39;run&#39; queries.

Note that some fields like &#39;filter_config&#39; and &#39;vis_config&#39; etc are specific to how the Looker UI
builds queries and visualizations and are not generally useful for API use. They are not required when
creating new queries and can usually just be ignored.



### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.QueryApi()

var queryId = 789; // {Integer} Id of query

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
api.query(queryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryId** | **Integer**| Id of query | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**Query**](Query.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryForSlug"></a>
# **queryForSlug**
> Query queryForSlug(slug, opts)

Get Query for Slug

### Get the query for a given query slug.

This returns the query for the &#39;slug&#39; in a query share URL.

The &#39;slug&#39; is a randomly chosen short string that is used as an alternative to the query&#39;s id value
for use in URLs etc. This method exists as a convenience to help you use the API to &#39;find&#39; queries that
have been created using the Looker UI.

You can use the Looker explore page to build a query and then choose the &#39;Share&#39; option to
show the share url for the query. Share urls generally look something like &#39;https://looker.yourcompany/x/vwGSbfc&#39;.
The trailing &#39;vwGSbfc&#39; is the share slug. You can pass that string to this api method to get details about the query.
Those details include the &#39;id&#39; that you can use to run the query. Or, you can copy the query body
(perhaps with your own modification) and use that as the basis to make/run new queries.

This will also work with slugs from Looker explore urls like
&#39;https://looker.yourcompany/explore/ecommerce/orders?qid=aogBgL6o3cKK1jN3RoZl5s&#39;. In this case
&#39;aogBgL6o3cKK1jN3RoZl5s&#39; is the slug.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.QueryApi()

var slug = "slug_example"; // {String} Slug of query

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
api.queryForSlug(slug, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| Slug of query | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**Query**](Query.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryTask"></a>
# **queryTask**
> QueryTask queryTask(queryTaskId, opts)

Get Async Query Info

Returns information about a Query Task.

Query Tasks are generated by running queries asynchronously. They are represented by a GUID returned
from one of the async query endpoints.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.QueryApi()

var queryTaskId = "queryTaskId_example"; // {String} ID of the Query Task

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
api.queryTask(queryTaskId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryTaskId** | **String**| ID of the Query Task | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**QueryTask**](QueryTask.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryTaskMultiResults"></a>
# **queryTaskMultiResults**
> {&#39;String&#39;: &#39;String&#39;} queryTaskMultiResults(queryTaskIds)

Get Multiple Async Query Results

Fetch the results of multiple async Query Tasks in one response.

Query Tasks that are not ready will be skipped and will not appear in the response.
Query Tasks whose results have expired will have a status of &#39;expired&#39;.
If the user making the API request does not have sufficient privileges to view a Query Task result, the result will have a status of &#39;missing&#39;


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.QueryApi()

var queryTaskIds = ["queryTaskIds_example"]; // {[String]} List of Query Task IDs


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.queryTaskMultiResults(queryTaskIds, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryTaskIds** | [**[String]**](String.md)| List of Query Task IDs | 

### Return type

**{&#39;String&#39;: &#39;String&#39;}**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryTaskResults"></a>
# **queryTaskResults**
> {&#39;String&#39;: &#39;String&#39;} queryTaskResults(queryTaskId)

Get Async Query Results

Returns the results of an async Query Task if the query has completed.


### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.QueryApi()

var queryTaskId = "queryTaskId_example"; // {String} ID of the Query Task


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.queryTaskResults(queryTaskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryTaskId** | **String**| ID of the Query Task | 

### Return type

**{&#39;String&#39;: &#39;String&#39;}**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text, application/json

<a name="runInlineQuery"></a>
# **runInlineQuery**
> &#39;String&#39; runInlineQuery(resultFormat, body, opts)

Run Inline Query

### Run the query that is specified inline in the posted body.

This allows running a query as defined in json in the posted body. This combines
the two actions of posting &amp; running a query into one step.

Here is an example body in json:
```
{
  \&quot;model\&quot;:\&quot;thelook\&quot;,
  \&quot;view\&quot;:\&quot;inventory_items\&quot;,
  \&quot;fields\&quot;:[\&quot;category.name\&quot;,\&quot;inventory_items.days_in_inventory_tier\&quot;,\&quot;products.count\&quot;],
  \&quot;filters\&quot;:{\&quot;category.name\&quot;:\&quot;socks\&quot;},
  \&quot;sorts\&quot;:[\&quot;products.count desc 0\&quot;],
  \&quot;limit\&quot;:\&quot;500\&quot;,
  \&quot;query_timezone\&quot;:\&quot;America/Los_Angeles\&quot;
}
```

When using the Ruby SDK this would be passed as a Ruby hash like:
```
{
 :model=&gt;\&quot;thelook\&quot;,
 :view=&gt;\&quot;inventory_items\&quot;,
 :fields=&gt;
  [\&quot;category.name\&quot;,
   \&quot;inventory_items.days_in_inventory_tier\&quot;,
   \&quot;products.count\&quot;],
 :filters=&gt;{:\&quot;category.name\&quot;=&gt;\&quot;socks\&quot;},
 :sorts=&gt;[\&quot;products.count desc 0\&quot;],
 :limit=&gt;\&quot;500\&quot;,
 :query_timezone=&gt;\&quot;America/Los_Angeles\&quot;,
}
```

This will return the result of running the query in the format specified by the &#39;result_format&#39; parameter.

Suported formats:

| result_format | Description
| :-----------: | :--- |
| json | Plain json
| json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query
| csv | Comma separated values with a header
| txt | Tab separated values with a header
| html | Simple html
| md | Simple markdown
| xlsx | MS Excel spreadsheet
| sql | Returns the generated SQL rather than running the query
| png | A PNG image of the visualization of the query
| jpg | A JPG image of the visualization of the query




### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.QueryApi()

var resultFormat = "resultFormat_example"; // {String} Format of result

var body = new LookerApi30Reference.Query(); // {Query} inline query

var opts = { 
  'limit': 789, // {Integer} Row limit (may override the limit in the saved query).
  'applyFormatting': true, // {Boolean} Apply model-specified formatting to each result.
  'applyVis': true, // {Boolean} Apply visualization options to results.
  'cache': true, // {Boolean} Get results from cache if available.
  'imageWidth': 789, // {Integer} Render width for image formats.
  'imageHeight': 789, // {Integer} Render height for image formats.
  'generateDrillLinks': true, // {Boolean} Generate drill links (only applicable to 'json_detail' format.
  'forceProduction': true, // {Boolean} Force use of production models even if the user is in development mode.
  'cacheOnly': true, // {Boolean} Retrieve any results from cache even if the results have expired.
  'pathPrefix': "pathPrefix_example", // {String} Prefix to use for drill links (url encoded).
  'rebuildPdts': true, // {Boolean} Rebuild PDTS used in query.
  'serverTableCalcs': true // {Boolean} Perform table calculations on query results
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.runInlineQuery(resultFormat, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resultFormat** | **String**| Format of result | 
 **body** | [**Query**](Query.md)| inline query | 
 **limit** | **Integer**| Row limit (may override the limit in the saved query). | [optional] 
 **applyFormatting** | **Boolean**| Apply model-specified formatting to each result. | [optional] 
 **applyVis** | **Boolean**| Apply visualization options to results. | [optional] 
 **cache** | **Boolean**| Get results from cache if available. | [optional] 
 **imageWidth** | **Integer**| Render width for image formats. | [optional] 
 **imageHeight** | **Integer**| Render height for image formats. | [optional] 
 **generateDrillLinks** | **Boolean**| Generate drill links (only applicable to &#39;json_detail&#39; format. | [optional] 
 **forceProduction** | **Boolean**| Force use of production models even if the user is in development mode. | [optional] 
 **cacheOnly** | **Boolean**| Retrieve any results from cache even if the results have expired. | [optional] 
 **pathPrefix** | **String**| Prefix to use for drill links (url encoded). | [optional] 
 **rebuildPdts** | **Boolean**| Rebuild PDTS used in query. | [optional] 
 **serverTableCalcs** | **Boolean**| Perform table calculations on query results | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text, application/json, image/png, image/jpg

<a name="runQuery"></a>
# **runQuery**
> &#39;String&#39; runQuery(queryId, resultFormat, opts)

Run Query

### Run a saved query.

This runs a previously saved query. You can use this on a query that was generated in the Looker UI
or one that you have explicitly created using the API. You can also use a query &#39;id&#39; from a saved &#39;Look&#39;.

The &#39;result_format&#39; parameter specifies the desired structure and format of the response.

Suported formats:

| result_format | Description
| :-----------: | :--- |
| json | Plain json
| json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query
| csv | Comma separated values with a header
| txt | Tab separated values with a header
| html | Simple html
| md | Simple markdown
| xlsx | MS Excel spreadsheet
| sql | Returns the generated SQL rather than running the query
| png | A PNG image of the visualization of the query
| jpg | A JPG image of the visualization of the query




### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.QueryApi()

var queryId = 789; // {Integer} Id of query

var resultFormat = "resultFormat_example"; // {String} Format of result

var opts = { 
  'limit': 789, // {Integer} Row limit (may override the limit in the saved query).
  'applyFormatting': true, // {Boolean} Apply model-specified formatting to each result.
  'applyVis': true, // {Boolean} Apply visualization options to results.
  'cache': true, // {Boolean} Get results from cache if available.
  'imageWidth': 789, // {Integer} Render width for image formats.
  'imageHeight': 789, // {Integer} Render height for image formats.
  'generateDrillLinks': true, // {Boolean} Generate drill links (only applicable to 'json_detail' format.
  'forceProduction': true, // {Boolean} Force use of production models even if the user is in development mode.
  'cacheOnly': true, // {Boolean} Retrieve any results from cache even if the results have expired.
  'pathPrefix': "pathPrefix_example", // {String} Prefix to use for drill links (url encoded).
  'rebuildPdts': true, // {Boolean} Rebuild PDTS used in query.
  'serverTableCalcs': true // {Boolean} Perform table calculations on query results
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.runQuery(queryId, resultFormat, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryId** | **Integer**| Id of query | 
 **resultFormat** | **String**| Format of result | 
 **limit** | **Integer**| Row limit (may override the limit in the saved query). | [optional] 
 **applyFormatting** | **Boolean**| Apply model-specified formatting to each result. | [optional] 
 **applyVis** | **Boolean**| Apply visualization options to results. | [optional] 
 **cache** | **Boolean**| Get results from cache if available. | [optional] 
 **imageWidth** | **Integer**| Render width for image formats. | [optional] 
 **imageHeight** | **Integer**| Render height for image formats. | [optional] 
 **generateDrillLinks** | **Boolean**| Generate drill links (only applicable to &#39;json_detail&#39; format. | [optional] 
 **forceProduction** | **Boolean**| Force use of production models even if the user is in development mode. | [optional] 
 **cacheOnly** | **Boolean**| Retrieve any results from cache even if the results have expired. | [optional] 
 **pathPrefix** | **String**| Prefix to use for drill links (url encoded). | [optional] 
 **rebuildPdts** | **Boolean**| Rebuild PDTS used in query. | [optional] 
 **serverTableCalcs** | **Boolean**| Perform table calculations on query results | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text, application/json, image/png, image/jpg

<a name="runUrlEncodedQuery"></a>
# **runUrlEncodedQuery**
> &#39;String&#39; runUrlEncodedQuery(modelName, viewName, resultFormat)

Run Url Encoded Query

### Run an URL encoded query.

This requires the caller to encode the specifiers for the query into the URL query part using
Looker-specific syntax as explained below.

Generally, you would want to use one of the methods that takes the parameters as json in the POST body
for creating and/or running queries. This method exists for cases where one really needs to encode the
parameters into the URL of a single &#39;GET&#39; request. This matches the way that the Looker UI formats
&#39;explore&#39; URLs etc.

The parameters here are very similar to the json body formatting except that the filter syntax is
tricky. Unfortunately, this format makes this method not currently callible via the &#39;Try it out!&#39; button
in this documentation page. But, this is callable  when creating URLs manually or when using the Looker SDK.

Here is an example inline query URL:

```
https://looker.mycompany.com:19999/api/3.0/queries/models/thelook/views/inventory_items/run/json?fields=category.name,inventory_items.days_in_inventory_tier,products.count&amp;f[category.name]=socks&amp;sorts=products.count+desc+0&amp;limit=500&amp;query_timezone=America/Los_Angeles
```

When invoking this endpoint with the Ruby SDK, pass the query parameter parts as a hash. The hash to match the above would look like:

```ruby
query_params =
{
  :fields =&gt; \&quot;category.name,inventory_items.days_in_inventory_tier,products.count\&quot;,
  :\&quot;f[category.name]\&quot; =&gt; \&quot;socks\&quot;,
  :sorts =&gt; \&quot;products.count desc 0\&quot;,
  :limit =&gt; \&quot;500\&quot;,
  :query_timezone =&gt; \&quot;America/Los_Angeles\&quot;
}
response = ruby_sdk.run_url_encoded_query(&#39;thelook&#39;,&#39;inventory_items&#39;,&#39;json&#39;, query_params)

```

Again, it is generally easier to use the variant of this method that passes the full query in the POST body.
This method is available for cases where other alternatives won&#39;t fit the need.

Suported formats:

| result_format | Description
| :-----------: | :--- |
| json | Plain json
| json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query
| csv | Comma separated values with a header
| txt | Tab separated values with a header
| html | Simple html
| md | Simple markdown
| xlsx | MS Excel spreadsheet
| sql | Returns the generated SQL rather than running the query
| png | A PNG image of the visualization of the query
| jpg | A JPG image of the visualization of the query




### Example
```javascript
var LookerApi30Reference = require('looker-api-3');

var apiInstance = new LookerApi30Reference.QueryApi()

var modelName = "modelName_example"; // {String} Model name

var viewName = "viewName_example"; // {String} View name

var resultFormat = "resultFormat_example"; // {String} Format of result


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.runUrlEncodedQuery(modelName, viewName, resultFormat, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelName** | **String**| Model name | 
 **viewName** | **String**| View name | 
 **resultFormat** | **String**| Format of result | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text, application/json, image/png, image/jpg

