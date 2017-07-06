# LookerApi30Reference.CredentialsEmbed

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Unique Id | [optional] 
**externalUserId** | **String** | Embedder&#39;s unique id for the user | [optional] 
**externalGroupId** | **String** | Embedder&#39;s id for a group to which this user was added during the most recent login | [optional] 
**createdAt** | **String** | Timestamp for the creation of this credential | [optional] 
**loggedInAt** | **String** | Timestamp for most recent login using credential | [optional] 
**isDisabled** | **Boolean** | Has this credential been disabled? | [optional] 
**type** | **String** | Short name for the type of this kind of credential | [optional] 
**url** | **String** | Link to get this item | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


