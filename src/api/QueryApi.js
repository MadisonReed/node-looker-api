(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Query', '../model/Error', '../model/ValidationError', '../model/QueryTask', '../model/CreateQueryTask'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Query'), require('../model/Error'), require('../model/ValidationError'), require('../model/QueryTask'), require('../model/CreateQueryTask'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.QueryApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.Query, root.LookerApi30Reference.Error, root.LookerApi30Reference.ValidationError, root.LookerApi30Reference.QueryTask, root.LookerApi30Reference.CreateQueryTask);
  }
}(this, function(ApiClient, Query, Error, ValidationError, QueryTask, CreateQueryTask) {
  'use strict';

  /**
   * Query service.
   * @module api/QueryApi
   * @version 3.0.0
   */

  /**
   * Constructs a new QueryApi. 
   * @alias module:api/QueryApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createQuery operation.
     * @callback module:api/QueryApi~createQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Query} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Query
     * ### Create a query.\n\nThis allows you to create a new query that you can later run. Looker queries are immutable once created\nand are not deleted. If you create a query that is exactly like an existing query then the existing query\nwill be returned and no new query will be created. Whether a new query is created or not, you can use\nthe &#39;id&#39; in the returned query with the &#39;run&#39; method.\n\nThe query parameters are passed as json in the body of the request.\n\n
     * @param {Object} opts Optional parameters
     * @param {module:model/Query} opts.body Query
     * @param {String} opts.fields Requested fields.
     * @param {module:api/QueryApi~createQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Query}
     */
    this.createQuery = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Query;

      return this.apiClient.callApi(
        '/queries', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createQueryTask operation.
     * @callback module:api/QueryApi~createQueryTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QueryTask} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run Query Async
     * ### Run a saved query asynchronously.\n\nRuns a previously created query asynchronously. Returns a Query Task ID\nwhich can be used to fetch the results from the Query Tasks results endpoint.\n
     * @param {module:model/CreateQueryTask} body Query parameters
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit Row limit (may override the limit in the saved query).
     * @param {Boolean} opts.applyFormatting Apply model-specified formatting to each result.
     * @param {Boolean} opts.applyVis Apply visualization options to results.
     * @param {Boolean} opts.cache Get results from cache if available.
     * @param {Integer} opts.imageWidth Render width for image formats.
     * @param {Integer} opts.imageHeight Render height for image formats.
     * @param {Boolean} opts.generateDrillLinks Generate drill links (only applicable to &#39;json_detail&#39; format.
     * @param {Boolean} opts.forceProduction Force use of production models even if the user is in development mode.
     * @param {Boolean} opts.cacheOnly Retrieve any results from cache even if the results have expired.
     * @param {String} opts.pathPrefix Prefix to use for drill links (url encoded).
     * @param {Boolean} opts.rebuildPdts Rebuild PDTS used in query.
     * @param {Boolean} opts.serverTableCalcs Perform table calculations on query results
     * @param {String} opts.fields Requested fields
     * @param {module:api/QueryApi~createQueryTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/QueryTask}
     */
    this.createQueryTask = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createQueryTask";
      }


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'apply_formatting': opts['applyFormatting'],
        'apply_vis': opts['applyVis'],
        'cache': opts['cache'],
        'image_width': opts['imageWidth'],
        'image_height': opts['imageHeight'],
        'generate_drill_links': opts['generateDrillLinks'],
        'force_production': opts['forceProduction'],
        'cache_only': opts['cacheOnly'],
        'path_prefix': opts['pathPrefix'],
        'rebuild_pdts': opts['rebuildPdts'],
        'server_table_calcs': opts['serverTableCalcs'],
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = QueryTask;

      return this.apiClient.callApi(
        '/query_tasks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the query operation.
     * @callback module:api/QueryApi~queryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Query} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Query
     * ### Get a previously created query by id.\n\nA Looker query object includes the various parameters that define a database query that has been run or\ncould be run in the future. These parameters include: model, view, fields, filters, pivots, etc.\nQuery *results* are not part of the query object.\n\nQuery objects are unique and immutable. Query objects are created automatically in Looker as users explore data.\nLooker does not delete them; they become part of the query history. When asked to create a query for\nany given set of parameters, Looker will first try to find an existing query object with matching\nparameters and will only create a new object when an appropriate object can not be found.\n\nThis &#39;get&#39; method is used to get the details about a query for a given id. See the other methods here\nto &#39;create&#39; and &#39;run&#39; queries.\n\nNote that some fields like &#39;filter_config&#39; and &#39;vis_config&#39; etc are specific to how the Looker UI\nbuilds queries and visualizations and are not generally useful for API use. They are not required when\ncreating new queries and can usually just be ignored.\n\n
     * @param {Integer} queryId Id of query
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/QueryApi~queryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Query}
     */
    this.query = function(queryId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'queryId' is set
      if (queryId == undefined || queryId == null) {
        throw "Missing the required parameter 'queryId' when calling query";
      }


      var pathParams = {
        'query_id': queryId
      };
      var queryParams = {
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Query;

      return this.apiClient.callApi(
        '/queries/{query_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the queryForSlug operation.
     * @callback module:api/QueryApi~queryForSlugCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Query} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Query for Slug
     * ### Get the query for a given query slug.\n\nThis returns the query for the &#39;slug&#39; in a query share URL.\n\nThe &#39;slug&#39; is a randomly chosen short string that is used as an alternative to the query&#39;s id value\nfor use in URLs etc. This method exists as a convenience to help you use the API to &#39;find&#39; queries that\nhave been created using the Looker UI.\n\nYou can use the Looker explore page to build a query and then choose the &#39;Share&#39; option to\nshow the share url for the query. Share urls generally look something like &#39;https://looker.yourcompany/x/vwGSbfc&#39;.\nThe trailing &#39;vwGSbfc&#39; is the share slug. You can pass that string to this api method to get details about the query.\nThose details include the &#39;id&#39; that you can use to run the query. Or, you can copy the query body\n(perhaps with your own modification) and use that as the basis to make/run new queries.\n\nThis will also work with slugs from Looker explore urls like\n&#39;https://looker.yourcompany/explore/ecommerce/orders?qid=aogBgL6o3cKK1jN3RoZl5s&#39;. In this case\n&#39;aogBgL6o3cKK1jN3RoZl5s&#39; is the slug.\n
     * @param {String} slug Slug of query
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/QueryApi~queryForSlugCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Query}
     */
    this.queryForSlug = function(slug, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'slug' is set
      if (slug == undefined || slug == null) {
        throw "Missing the required parameter 'slug' when calling queryForSlug";
      }


      var pathParams = {
        'slug': slug
      };
      var queryParams = {
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Query;

      return this.apiClient.callApi(
        '/queries/slug/{slug}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the queryTask operation.
     * @callback module:api/QueryApi~queryTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QueryTask} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Async Query Info
     * Returns information about a Query Task.\n\nQuery Tasks are generated by running queries asynchronously. They are represented by a GUID returned\nfrom one of the async query endpoints.\n
     * @param {String} queryTaskId ID of the Query Task
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/QueryApi~queryTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/QueryTask}
     */
    this.queryTask = function(queryTaskId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'queryTaskId' is set
      if (queryTaskId == undefined || queryTaskId == null) {
        throw "Missing the required parameter 'queryTaskId' when calling queryTask";
      }


      var pathParams = {
        'query_task_id': queryTaskId
      };
      var queryParams = {
        'fields': opts['fields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = QueryTask;

      return this.apiClient.callApi(
        '/query_tasks/{query_task_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the queryTaskMultiResults operation.
     * @callback module:api/QueryApi~queryTaskMultiResultsCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {'String': 'String'}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Multiple Async Query Results
     * Fetch the results of multiple async Query Tasks in one response.\n\nQuery Tasks that are not ready will be skipped and will not appear in the response.\nQuery Tasks whose results have expired will have a status of &#39;expired&#39;.\nIf the user making the API request does not have sufficient privileges to view a Query Task result, the result will have a status of &#39;missing&#39;\n
     * @param {Array.<String>} queryTaskIds List of Query Task IDs
     * @param {module:api/QueryApi~queryTaskMultiResultsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object.<String, {'String': 'String'}>}
     */
    this.queryTaskMultiResults = function(queryTaskIds, callback) {
      var postBody = null;

      // verify the required parameter 'queryTaskIds' is set
      if (queryTaskIds == undefined || queryTaskIds == null) {
        throw "Missing the required parameter 'queryTaskIds' when calling queryTaskMultiResults";
      }


      var pathParams = {
      };
      var queryParams = {
        'query_task_ids': this.apiClient.buildCollectionParam(queryTaskIds, 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = {'String': 'String'};

      return this.apiClient.callApi(
        '/query_tasks/multi_results', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the queryTaskResults operation.
     * @callback module:api/QueryApi~queryTaskResultsCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {'String': 'String'}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Async Query Results
     * Returns the results of an async Query Task if the query has completed.\n
     * @param {String} queryTaskId ID of the Query Task
     * @param {module:api/QueryApi~queryTaskResultsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object.<String, {'String': 'String'}>}
     */
    this.queryTaskResults = function(queryTaskId, callback) {
      var postBody = null;

      // verify the required parameter 'queryTaskId' is set
      if (queryTaskId == undefined || queryTaskId == null) {
        throw "Missing the required parameter 'queryTaskId' when calling queryTaskResults";
      }


      var pathParams = {
        'query_task_id': queryTaskId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['text', 'application/json'];
      var returnType = {'String': 'String'};

      return this.apiClient.callApi(
        '/query_tasks/{query_task_id}/results', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the runInlineQuery operation.
     * @callback module:api/QueryApi~runInlineQueryCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run Inline Query
     * ### Run the query that is specified inline in the posted body.\n\nThis allows running a query as defined in json in the posted body. This combines\nthe two actions of posting &amp; running a query into one step.\n\nHere is an example body in json:\n```\n{\n  \&quot;model\&quot;:\&quot;thelook\&quot;,\n  \&quot;view\&quot;:\&quot;inventory_items\&quot;,\n  \&quot;fields\&quot;:[\&quot;category.name\&quot;,\&quot;inventory_items.days_in_inventory_tier\&quot;,\&quot;products.count\&quot;],\n  \&quot;filters\&quot;:{\&quot;category.name\&quot;:\&quot;socks\&quot;},\n  \&quot;sorts\&quot;:[\&quot;products.count desc 0\&quot;],\n  \&quot;limit\&quot;:\&quot;500\&quot;,\n  \&quot;query_timezone\&quot;:\&quot;America/Los_Angeles\&quot;\n}\n```\n\nWhen using the Ruby SDK this would be passed as a Ruby hash like:\n```\n{\n :model=&gt;\&quot;thelook\&quot;,\n :view=&gt;\&quot;inventory_items\&quot;,\n :fields=&gt;\n  [\&quot;category.name\&quot;,\n   \&quot;inventory_items.days_in_inventory_tier\&quot;,\n   \&quot;products.count\&quot;],\n :filters=&gt;{:\&quot;category.name\&quot;=&gt;\&quot;socks\&quot;},\n :sorts=&gt;[\&quot;products.count desc 0\&quot;],\n :limit=&gt;\&quot;500\&quot;,\n :query_timezone=&gt;\&quot;America/Los_Angeles\&quot;,\n}\n```\n\nThis will return the result of running the query in the format specified by the &#39;result_format&#39; parameter.\n\nSuported formats:\n\n| result_format | Description\n| :-----------: | :--- |\n| json | Plain json\n| json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query\n| csv | Comma separated values with a header\n| txt | Tab separated values with a header\n| html | Simple html\n| md | Simple markdown\n| xlsx | MS Excel spreadsheet\n| sql | Returns the generated SQL rather than running the query\n| png | A PNG image of the visualization of the query\n| jpg | A JPG image of the visualization of the query\n\n\n
     * @param {String} resultFormat Format of result
     * @param {module:model/Query} body inline query
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit Row limit (may override the limit in the saved query).
     * @param {Boolean} opts.applyFormatting Apply model-specified formatting to each result.
     * @param {Boolean} opts.applyVis Apply visualization options to results.
     * @param {Boolean} opts.cache Get results from cache if available.
     * @param {Integer} opts.imageWidth Render width for image formats.
     * @param {Integer} opts.imageHeight Render height for image formats.
     * @param {Boolean} opts.generateDrillLinks Generate drill links (only applicable to &#39;json_detail&#39; format.
     * @param {Boolean} opts.forceProduction Force use of production models even if the user is in development mode.
     * @param {Boolean} opts.cacheOnly Retrieve any results from cache even if the results have expired.
     * @param {String} opts.pathPrefix Prefix to use for drill links (url encoded).
     * @param {Boolean} opts.rebuildPdts Rebuild PDTS used in query.
     * @param {Boolean} opts.serverTableCalcs Perform table calculations on query results
     * @param {module:api/QueryApi~runInlineQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.runInlineQuery = function(resultFormat, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'resultFormat' is set
      if (resultFormat == undefined || resultFormat == null) {
        throw "Missing the required parameter 'resultFormat' when calling runInlineQuery";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling runInlineQuery";
      }


      var pathParams = {
        'result_format': resultFormat
      };
      var queryParams = {
        'limit': opts['limit'],
        'apply_formatting': opts['applyFormatting'],
        'apply_vis': opts['applyVis'],
        'cache': opts['cache'],
        'image_width': opts['imageWidth'],
        'image_height': opts['imageHeight'],
        'generate_drill_links': opts['generateDrillLinks'],
        'force_production': opts['forceProduction'],
        'cache_only': opts['cacheOnly'],
        'path_prefix': opts['pathPrefix'],
        'rebuild_pdts': opts['rebuildPdts'],
        'server_table_calcs': opts['serverTableCalcs']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['text', 'application/json', 'image/png', 'image/jpg'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/queries/run/{result_format}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the runQuery operation.
     * @callback module:api/QueryApi~runQueryCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run Query
     * ### Run a saved query.\n\nThis runs a previously saved query. You can use this on a query that was generated in the Looker UI\nor one that you have explicitly created using the API. You can also use a query &#39;id&#39; from a saved &#39;Look&#39;.\n\nThe &#39;result_format&#39; parameter specifies the desired structure and format of the response.\n\nSuported formats:\n\n| result_format | Description\n| :-----------: | :--- |\n| json | Plain json\n| json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query\n| csv | Comma separated values with a header\n| txt | Tab separated values with a header\n| html | Simple html\n| md | Simple markdown\n| xlsx | MS Excel spreadsheet\n| sql | Returns the generated SQL rather than running the query\n| png | A PNG image of the visualization of the query\n| jpg | A JPG image of the visualization of the query\n\n\n
     * @param {Integer} queryId Id of query
     * @param {String} resultFormat Format of result
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit Row limit (may override the limit in the saved query).
     * @param {Boolean} opts.applyFormatting Apply model-specified formatting to each result.
     * @param {Boolean} opts.applyVis Apply visualization options to results.
     * @param {Boolean} opts.cache Get results from cache if available.
     * @param {Integer} opts.imageWidth Render width for image formats.
     * @param {Integer} opts.imageHeight Render height for image formats.
     * @param {Boolean} opts.generateDrillLinks Generate drill links (only applicable to &#39;json_detail&#39; format.
     * @param {Boolean} opts.forceProduction Force use of production models even if the user is in development mode.
     * @param {Boolean} opts.cacheOnly Retrieve any results from cache even if the results have expired.
     * @param {String} opts.pathPrefix Prefix to use for drill links (url encoded).
     * @param {Boolean} opts.rebuildPdts Rebuild PDTS used in query.
     * @param {Boolean} opts.serverTableCalcs Perform table calculations on query results
     * @param {module:api/QueryApi~runQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.runQuery = function(queryId, resultFormat, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'queryId' is set
      if (queryId == undefined || queryId == null) {
        throw "Missing the required parameter 'queryId' when calling runQuery";
      }

      // verify the required parameter 'resultFormat' is set
      if (resultFormat == undefined || resultFormat == null) {
        throw "Missing the required parameter 'resultFormat' when calling runQuery";
      }


      var pathParams = {
        'query_id': queryId,
        'result_format': resultFormat
      };
      var queryParams = {
        'limit': opts['limit'],
        'apply_formatting': opts['applyFormatting'],
        'apply_vis': opts['applyVis'],
        'cache': opts['cache'],
        'image_width': opts['imageWidth'],
        'image_height': opts['imageHeight'],
        'generate_drill_links': opts['generateDrillLinks'],
        'force_production': opts['forceProduction'],
        'cache_only': opts['cacheOnly'],
        'path_prefix': opts['pathPrefix'],
        'rebuild_pdts': opts['rebuildPdts'],
        'server_table_calcs': opts['serverTableCalcs']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['text', 'application/json', 'image/png', 'image/jpg'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/queries/{query_id}/run/{result_format}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the runUrlEncodedQuery operation.
     * @callback module:api/QueryApi~runUrlEncodedQueryCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run Url Encoded Query
     * ### Run an URL encoded query.\n\nThis requires the caller to encode the specifiers for the query into the URL query part using\nLooker-specific syntax as explained below.\n\nGenerally, you would want to use one of the methods that takes the parameters as json in the POST body\nfor creating and/or running queries. This method exists for cases where one really needs to encode the\nparameters into the URL of a single &#39;GET&#39; request. This matches the way that the Looker UI formats\n&#39;explore&#39; URLs etc.\n\nThe parameters here are very similar to the json body formatting except that the filter syntax is\ntricky. Unfortunately, this format makes this method not currently callible via the &#39;Try it out!&#39; button\nin this documentation page. But, this is callable  when creating URLs manually or when using the Looker SDK.\n\nHere is an example inline query URL:\n\n```\nhttps://looker.mycompany.com:19999/api/3.0/queries/models/thelook/views/inventory_items/run/json?fields=category.name,inventory_items.days_in_inventory_tier,products.count&amp;f[category.name]=socks&amp;sorts=products.count+desc+0&amp;limit=500&amp;query_timezone=America/Los_Angeles\n```\n\nWhen invoking this endpoint with the Ruby SDK, pass the query parameter parts as a hash. The hash to match the above would look like:\n\n```ruby\nquery_params =\n{\n  :fields =&gt; \&quot;category.name,inventory_items.days_in_inventory_tier,products.count\&quot;,\n  :\&quot;f[category.name]\&quot; =&gt; \&quot;socks\&quot;,\n  :sorts =&gt; \&quot;products.count desc 0\&quot;,\n  :limit =&gt; \&quot;500\&quot;,\n  :query_timezone =&gt; \&quot;America/Los_Angeles\&quot;\n}\nresponse = ruby_sdk.run_url_encoded_query(&#39;thelook&#39;,&#39;inventory_items&#39;,&#39;json&#39;, query_params)\n\n```\n\nAgain, it is generally easier to use the variant of this method that passes the full query in the POST body.\nThis method is available for cases where other alternatives won&#39;t fit the need.\n\nSuported formats:\n\n| result_format | Description\n| :-----------: | :--- |\n| json | Plain json\n| json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query\n| csv | Comma separated values with a header\n| txt | Tab separated values with a header\n| html | Simple html\n| md | Simple markdown\n| xlsx | MS Excel spreadsheet\n| sql | Returns the generated SQL rather than running the query\n| png | A PNG image of the visualization of the query\n| jpg | A JPG image of the visualization of the query\n\n\n
     * @param {String} modelName Model name
     * @param {String} viewName View name
     * @param {String} resultFormat Format of result
     * @param {module:api/QueryApi~runUrlEncodedQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.runUrlEncodedQuery = function(modelName, viewName, resultFormat, callback) {
      var postBody = null;

      // verify the required parameter 'modelName' is set
      if (modelName == undefined || modelName == null) {
        throw "Missing the required parameter 'modelName' when calling runUrlEncodedQuery";
      }

      // verify the required parameter 'viewName' is set
      if (viewName == undefined || viewName == null) {
        throw "Missing the required parameter 'viewName' when calling runUrlEncodedQuery";
      }

      // verify the required parameter 'resultFormat' is set
      if (resultFormat == undefined || resultFormat == null) {
        throw "Missing the required parameter 'resultFormat' when calling runUrlEncodedQuery";
      }


      var pathParams = {
        'model_name': modelName,
        'view_name': viewName,
        'result_format': resultFormat
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['text', 'application/json', 'image/png', 'image/jpg'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/queries/models/{model_name}/views/{view_name}/run/{result_format}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
