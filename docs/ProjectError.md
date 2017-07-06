# LookerApi30Reference.ProjectError

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | A stable token that uniquely identifies this class of error, ignoring parameter values. Error message text may vary due to parameters or localization, but error codes do not. For example, a \&quot;File not found\&quot; error will have the same error code regardless of the filename in question or the user&#39;s display language | [optional] 
**severity** | **String** | Severity: fatal, error, warning, info, success | [optional] 
**kind** | **String** | Error classification: syntax, deprecation, model_configuration, etc | [optional] 
**message** | **String** | Error message which may contain information such as dashboard or model names that may be considered sensitive in some use cases. Avoid storing or sending this message outside of Looker | [optional] 
**fieldName** | **String** | The field associated with this error | [optional] 
**filePath** | **String** | Name of the file containing this error | [optional] 
**lineNumber** | **Integer** | Line number in the file of this error | [optional] 
**modelId** | **String** | The model associated with this error | [optional] 
**explore** | **String** | The explore associated with this error | [optional] 
**helpUrl** | **String** | A link to Looker documentation about this error | [optional] 
**params** | **{String: String}** | Error parameters | [optional] 
**sanitizedMessage** | **String** | A version of the error message that does not contain potentially sensitive information. Suitable for situations in which messages are stored or sent to consumers outside of Looker, such as external logs. Sanitized messages will display \&quot;(?)\&quot; where sensitive information would appear in the corresponding non-sanitized message | [optional] 


