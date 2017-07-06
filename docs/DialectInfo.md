# LookerApi30Reference.DialectInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the dialect | [optional] 
**label** | **String** | The human-readable label of the connection | [optional] 
**labelForDatabaseEquivalent** | **String** | What the dialect calls the equivalent of a normal SQL table | [optional] 
**defaultPort** | **String** | Default port number | [optional] 
**defaultMaxConnections** | **String** | Default number max connections | [optional] 
**supportedOptions** | [**DialectInfoOptions**](DialectInfoOptions.md) | Option support details | [optional] 
**installed** | **Boolean** | Is the supporting driver installed | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


