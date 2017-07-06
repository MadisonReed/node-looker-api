# LookerApi30Reference.DBConnection

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the connection. Also used as the unique identifier | [optional] 
**host** | **String** | Host name/address of server | [optional] 
**port** | **String** | Port number on server | [optional] 
**username** | **String** | Username for server authentication | [optional] 
**password** | **String** | (Write-only) Password for server authentication | [optional] 
**certificate** | **String** | (Write-only) Base64 encoded Certificate body for server authentication (when appropriate for dialect). | [optional] 
**database** | **String** | Database name | [optional] 
**dbTimezone** | **String** | Time zone of database | [optional] 
**queryTimezone** | **String** | Timezone to use in queries | [optional] 
**schema** | **String** | Scheme name | [optional] 
**maxConnections** | **Integer** | Maximum number of concurrent connection to use | [optional] 
**maxBillingGigabytes** | **String** | Maximum size of query in GBs (BigQuery only, can be a user_attribute name) | [optional] 
**ssl** | **Boolean** | Use SSL/TLS when connecting to server | [optional] 
**verifySsl** | **Boolean** | Verify the SSL | [optional] 
**tmpDbName** | **String** | Name of temporary database (if used) | [optional] 
**jdbcAdditionalParams** | **String** | Additional params to add to JDBC connection string | [optional] 
**poolTimeout** | **Integer** | Pool Timeout | [optional] 
**dialect** | [**Dialect**](Dialect.md) | (Read-only) SQL Dialect details | [optional] 
**dialectName** | **String** | (Read/Write) SQL Dialect name | [optional] 
**snippets** | [**[Snippet]**](Snippet.md) | SQL Runner snippets for this connection | [optional] 
**createdAt** | **String** | Creation date for this connection | [optional] 
**userId** | **String** | Id of user who last modified this connection configuration | [optional] 
**example** | **Boolean** | Is this an example connection | [optional] 
**userDbCredentials** | **Boolean** | (Limited access feature) Are per user db credentials enabled | [optional] 
**userAttributeFields** | **[String]** | Fields whose values map to user attribute names | [optional] 
**maintenanceCron** | **String** | Cron string specifying when maintenance such as PDT trigger checks and drops should be performed | [optional] 
**lastRegenAt** | **String** | Unix timestamp at start of last completed PDT trigger check process | [optional] 
**lastReapAt** | **String** | Unix timestamp at start of last completed PDT reap process | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


