# LookerApi30Reference.ScheduledPlanDestination

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Unique Id | [optional] 
**scheduledPlanId** | **Integer** | Id of a scheduled plan you own | [optional] 
**format** | **String** | Format requested by the given destination (i.e. PDF, etc.) | [optional] 
**applyFormatting** | **Boolean** | Are values formatted? (containing currency symbols, digit separators, etc. | [optional] 
**applyVis** | **Boolean** | Whether visualization options are applied to the results. | [optional] 
**address** | **String** | Address for recipient. For email e.g. &#39;user@example.com&#39;. For webhooks e.g. &#39;https://domain/path&#39;. For Amazon S3 e.g. &#39;s3://bucket-name/path/&#39;. For SFTP e.g. &#39;sftp://host-name/path/&#39;.  | [optional] 
**lookerRecipient** | **Boolean** | Whether the recipient is a Looker user on the current instance (only applicable for email recipients) | [optional] 
**type** | **String** | Type of the address (&#39;email&#39;, &#39;webhook&#39;, &#39;s3&#39;, or &#39;sftp&#39;) | [optional] 
**parameters** | **String** | JSON object containing parameters for external scheduling. For Amazon S3, this requires keys and values for access_key_id and region. For SFTP, this requires a key and value for username. | [optional] 
**secretParameters** | **String** | (Write-only) JSON object containing secret parameters for external scheduling. For Amazon S3, this requires a key and value for secret_access_key. For SFTP, this requires a key and value for password. | [optional] 
**message** | **String** | Optional message to be included in scheduled emails | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


