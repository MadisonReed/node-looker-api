# LookerApi30Reference.UserAttribute

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Unique Id | [optional] 
**name** | **String** | Name of user attribute | [optional] 
**label** | **String** | Human-friendly label for user attribute | [optional] 
**type** | **String** | Type of user attribute (\&quot;string\&quot;, \&quot;number\&quot;, \&quot;datetime\&quot;, \&quot;yesno\&quot;, \&quot;zipcode\&quot;) | [optional] 
**defaultValue** | **String** | Default value for when no value is set on the user | [optional] 
**isSystem** | **Boolean** | Attribute is a system default | [optional] 
**valueIsHidden** | **Boolean** | If true, users will not be able to view values of this attribute | [optional] 
**userCanView** | **Boolean** | Non-admin users can see the values of their attributes and use them in filters | [optional] 
**userCanEdit** | **Boolean** | Users can change the value of this attribute for themselves | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


