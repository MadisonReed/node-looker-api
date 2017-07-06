# LookerApi30Reference.LDAPConfigTestResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Test status code: always &#39;success&#39; or &#39;error&#39; | [optional] 
**message** | **String** | Short human readable test about the result | [optional] 
**details** | **String** | Additional details for error cases | [optional] 
**user** | [**LDAPUser**](LDAPUser.md) | User details from LDAP server for auth tests | [optional] 
**trace** | **String** | A more detailed trace incremental results during auth tests | [optional] 
**url** | **String** | Link to ldap config | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


