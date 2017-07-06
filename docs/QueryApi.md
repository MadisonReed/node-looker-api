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

### Create a query.\n\nThis allows you to create a new query that you can later run. Looker queries are immutable once created\nand are not deleted. If you create a query that is exactly like an existing query then the existing query\nwill be returned and no new query will be created. Whether a new query is created or not, you can use\nthe &#39;id&#39; in the returned query with the &#39;run&#39; method.\n\nThe query parameters are passed as json in the body of the request.\n\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

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

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createQueryTask"></a>
# **createQueryTask**
> QueryTask createQueryTask(body, opts)

Run Query Async

### Run a saved query asynchronously.\n\nRuns a previously created query asynchronously. Returns a Query Task ID\nwhich can be used to fetch the results from the Query Tasks results endpoint.\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

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

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="query"></a>
# **query**
> Query query(queryId, opts)

Get Query

### Get a previously created query by id.\n\nA Looker query object includes the various parameters that define a database query that has been run or\ncould be run in the future. These parameters include: model, view, fields, filters, pivots, etc.\nQuery *results* are not part of the query object.\n\nQuery objects are unique and immutable. Query objects are created automatically in Looker as users explore data.\nLooker does not delete them; they become part of the query history. When asked to create a query for\nany given set of parameters, Looker will first try to find an existing query object with matching\nparameters and will only create a new object when an appropriate object can not be found.\n\nThis &#39;get&#39; method is used to get the details about a query for a given id. See the other methods here\nto &#39;create&#39; and &#39;run&#39; queries.\n\nNote that some fields like &#39;filter_config&#39; and &#39;vis_config&#39; etc are specific to how the Looker UI\nbuilds queries and visualizations and are not generally useful for API use. They are not required when\ncreating new queries and can usually just be ignored.\n\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

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

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryForSlug"></a>
# **queryForSlug**
> Query queryForSlug(slug, opts)

Get Query for Slug

### Get the query for a given query slug.\n\nThis returns the query for the &#39;slug&#39; in a query share URL.\n\nThe &#39;slug&#39; is a randomly chosen short string that is used as an alternative to the query&#39;s id value\nfor use in URLs etc. This method exists as a convenience to help you use the API to &#39;find&#39; queries that\nhave been created using the Looker UI.\n\nYou can use the Looker explore page to build a query and then choose the &#39;Share&#39; option to\nshow the share url for the query. Share urls generally look something like &#39;https://looker.yourcompany/x/vwGSbfc&#39;.\nThe trailing &#39;vwGSbfc&#39; is the share slug. You can pass that string to this api method to get details about the query.\nThose details include the &#39;id&#39; that you can use to run the query. Or, you can copy the query body\n(perhaps with your own modification) and use that as the basis to make/run new queries.\n\nThis will also work with slugs from Looker explore urls like\n&#39;https://looker.yourcompany/explore/ecommerce/orders?qid=aogBgL6o3cKK1jN3RoZl5s&#39;. In this case\n&#39;aogBgL6o3cKK1jN3RoZl5s&#39; is the slug.\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

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

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryTask"></a>
# **queryTask**
> QueryTask queryTask(queryTaskId, opts)

Get Async Query Info

Returns information about a Query Task.\n\nQuery Tasks are generated by running queries asynchronously. They are represented by a GUID returned\nfrom one of the async query endpoints.\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

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

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryTaskMultiResults"></a>
# **queryTaskMultiResults**
> {&#39;String&#39;: &#39;String&#39;} queryTaskMultiResults(queryTaskIds)

Get Multiple Async Query Results

Fetch the results of multiple async Query Tasks in one response.\n\nQuery Tasks that are not ready will be skipped and will not appear in the response.\nQuery Tasks whose results have expired will have a status of &#39;expired&#39;.\nIf the user making the API request does not have sufficient privileges to view a Query Task result, the result will have a status of &#39;missing&#39;\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

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

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryTaskResults"></a>
# **queryTaskResults**
> {&#39;String&#39;: &#39;String&#39;} queryTaskResults(queryTaskId)

Get Async Query Results

Returns the results of an async Query Task if the query has completed.\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

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

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: text, application/json

<a name="runInlineQuery"></a>
# **runInlineQuery**
> &#39;String&#39; runInlineQuery(resultFormat, body, opts)

Run Inline Query

### Run the query that is specified inline in the posted body.\n\nThis allows running a query as defined in json in the posted body. This combines\nthe two actions of posting &amp; running a query into one step.\n\nHere is an example body in json:\n```\n{\n  \&quot;model\&quot;:\&quot;thelook\&quot;,\n  \&quot;view\&quot;:\&quot;inventory_items\&quot;,\n  \&quot;fields\&quot;:[\&quot;category.name\&quot;,\&quot;inventory_items.days_in_inventory_tier\&quot;,\&quot;products.count\&quot;],\n  \&quot;filters\&quot;:{\&quot;category.name\&quot;:\&quot;socks\&quot;},\n  \&quot;sorts\&quot;:[\&quot;products.count desc 0\&quot;],\n  \&quot;limit\&quot;:\&quot;500\&quot;,\n  \&quot;query_timezone\&quot;:\&quot;America/Los_Angeles\&quot;\n}\n```\n\nWhen using the Ruby SDK this would be passed as a Ruby hash like:\n```\n{\n :model=&gt;\&quot;thelook\&quot;,\n :view=&gt;\&quot;inventory_items\&quot;,\n :fields=&gt;\n  [\&quot;category.name\&quot;,\n   \&quot;inventory_items.days_in_inventory_tier\&quot;,\n   \&quot;products.count\&quot;],\n :filters=&gt;{:\&quot;category.name\&quot;=&gt;\&quot;socks\&quot;},\n :sorts=&gt;[\&quot;products.count desc 0\&quot;],\n :limit=&gt;\&quot;500\&quot;,\n :query_timezone=&gt;\&quot;America/Los_Angeles\&quot;,\n}\n```\n\nThis will return the result of running the query in the format specified by the &#39;result_format&#39; parameter.\n\nSuported formats:\n\n| result_format | Description\n| :-----------: | :--- |\n| json | Plain json\n| json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query\n| csv | Comma separated values with a header\n| txt | Tab separated values with a header\n| html | Simple html\n| md | Simple markdown\n| xlsx | MS Excel spreadsheet\n| sql | Returns the generated SQL rather than running the query\n| png | A PNG image of the visualization of the query\n| jpg | A JPG image of the visualization of the query\n\n\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

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

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: text, application/json, image/png, image/jpg

<a name="runQuery"></a>
# **runQuery**
> &#39;String&#39; runQuery(queryId, resultFormat, opts)

Run Query

### Run a saved query.\n\nThis runs a previously saved query. You can use this on a query that was generated in the Looker UI\nor one that you have explicitly created using the API. You can also use a query &#39;id&#39; from a saved &#39;Look&#39;.\n\nThe &#39;result_format&#39; parameter specifies the desired structure and format of the response.\n\nSuported formats:\n\n| result_format | Description\n| :-----------: | :--- |\n| json | Plain json\n| json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query\n| csv | Comma separated values with a header\n| txt | Tab separated values with a header\n| html | Simple html\n| md | Simple markdown\n| xlsx | MS Excel spreadsheet\n| sql | Returns the generated SQL rather than running the query\n| png | A PNG image of the visualization of the query\n| jpg | A JPG image of the visualization of the query\n\n\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

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

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: text, application/json, image/png, image/jpg

<a name="runUrlEncodedQuery"></a>
# **runUrlEncodedQuery**
> &#39;String&#39; runUrlEncodedQuery(modelName, viewName, resultFormat)

Run Url Encoded Query

### Run an URL encoded query.\n\nThis requires the caller to encode the specifiers for the query into the URL query part using\nLooker-specific syntax as explained below.\n\nGenerally, you would want to use one of the methods that takes the parameters as json in the POST body\nfor creating and/or running queries. This method exists for cases where one really needs to encode the\nparameters into the URL of a single &#39;GET&#39; request. This matches the way that the Looker UI formats\n&#39;explore&#39; URLs etc.\n\nThe parameters here are very similar to the json body formatting except that the filter syntax is\ntricky. Unfortunately, this format makes this method not currently callible via the &#39;Try it out!&#39; button\nin this documentation page. But, this is callable  when creating URLs manually or when using the Looker SDK.\n\nHere is an example inline query URL:\n\n```\nhttps://looker.mycompany.com:19999/api/3.0/queries/models/thelook/views/inventory_items/run/json?fields=category.name,inventory_items.days_in_inventory_tier,products.count&amp;f[category.name]=socks&amp;sorts=products.count+desc+0&amp;limit=500&amp;query_timezone=America/Los_Angeles\n```\n\nWhen invoking this endpoint with the Ruby SDK, pass the query parameter parts as a hash. The hash to match the above would look like:\n\n```ruby\nquery_params =\n{\n  :fields =&gt; \&quot;category.name,inventory_items.days_in_inventory_tier,products.count\&quot;,\n  :\&quot;f[category.name]\&quot; =&gt; \&quot;socks\&quot;,\n  :sorts =&gt; \&quot;products.count desc 0\&quot;,\n  :limit =&gt; \&quot;500\&quot;,\n  :query_timezone =&gt; \&quot;America/Los_Angeles\&quot;\n}\nresponse = ruby_sdk.run_url_encoded_query(&#39;thelook&#39;,&#39;inventory_items&#39;,&#39;json&#39;, query_params)\n\n```\n\nAgain, it is generally easier to use the variant of this method that passes the full query in the POST body.\nThis method is available for cases where other alternatives won&#39;t fit the need.\n\nSuported formats:\n\n| result_format | Description\n| :-----------: | :--- |\n| json | Plain json\n| json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query\n| csv | Comma separated values with a header\n| txt | Tab separated values with a header\n| html | Simple html\n| md | Simple markdown\n| xlsx | MS Excel spreadsheet\n| sql | Returns the generated SQL rather than running the query\n| png | A PNG image of the visualization of the query\n| jpg | A JPG image of the visualization of the query\n\n\n

### Example
```javascript
var LookerApi30Reference = require('looker-api-3/0-reference');

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

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: text, application/json, image/png, image/jpg

