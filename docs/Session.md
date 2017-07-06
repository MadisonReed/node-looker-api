# LookerApi30Reference.Session

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Unique Id | [optional] 
**ipAddress** | **String** | IP address of user when this session was initiated | [optional] 
**browser** | **String** | User&#39;s browser type | [optional] 
**operatingSystem** | **String** | User&#39;s Operating System | [optional] 
**city** | **String** | City component of user location (derived from IP address) | [optional] 
**state** | **String** | State component of user location (derived from IP address) | [optional] 
**country** | **String** | Country component of user location (derived from IP address) | [optional] 
**credentialsType** | **String** | Type of credentials used for logging in this session | [optional] 
**extendedAt** | **String** | Time when this session was last extended by the user | [optional] 
**extendedCount** | **Integer** | Number of times this session was extended | [optional] 
**sudoUserId** | **Integer** | Actual user in the case when this session represents one user sudo&#39;ing as another | [optional] 
**createdAt** | **String** | Time when this session was initiated | [optional] 
**expiresAt** | **String** | Time when this session will expire | [optional] 
**url** | **String** | Link to get this item | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


