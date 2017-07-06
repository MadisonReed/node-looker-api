# LookerApi30Reference.DataActionResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhookId** | **String** | ID of the webhook event that sent this data action. In some error conditions, this may be null. | [optional] 
**success** | **Boolean** | Whether the data action was successful. | [optional] 
**refreshQuery** | **Boolean** | When true, indicates that the client should refresh (rerun) the source query because the data may have been changed by the action. | [optional] 
**validationErrors** | [**ValidationError**](ValidationError.md) | Validation errors returned by the data action server. | [optional] 
**message** | **String** | Optional message returned by the data action server describing the state of the action that took place. This can be used to implement custom failure messages. If a failure is related to a particular form field, the server should send back a validation error instead. The Looker web UI does not currently display any message if the action indicates &#39;success&#39;, but may do so in the future. | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


