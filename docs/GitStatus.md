# LookerApi30Reference.GitStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | Git action: add, delete, etc | [optional] 
**text** | **String** | Git description of the action | [optional] 
**revertable** | **Boolean** | When true, the file can be reverted to an earlier state | [optional] 
**conflict** | **Boolean** | When true, changes to the local file conflict with the remote repository | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


