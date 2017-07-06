# LookerApi30Reference.ProjectFile

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | An opaque token uniquely identifying a file within a project. Avoid parsing or decomposing the text of this token. This token is stable within a Looker release but may change between Looker releases | [optional] 
**path** | **String** | Path, file name, and extension of the file relative to the project root directory | [optional] 
**title** | **String** | Display name | [optional] 
**type** | **String** | File type: model, view, etc | [optional] 
**mimeType** | **String** | File mime type | [optional] 
**gitStatus** | [**GitStatus**](GitStatus.md) | Status of the file according to git | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


