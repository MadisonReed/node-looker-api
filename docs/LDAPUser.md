# LookerApi30Reference.LDAPUser

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Primary email address | [optional] 
**firstName** | **String** | First name | [optional] 
**lastName** | **String** | Last Name | [optional] 
**ldapId** | **String** | LDAP&#39;s Unique ID for the user | [optional] 
**allEmails** | **[String]** | Array of user&#39;s email addresses and aliases for use in migration | [optional] 
**ldapDn** | **String** | LDAP&#39;s distinguished name for the user record | [optional] 
**roles** | **[String]** | Array of user&#39;s roles (role names only) | [optional] 
**groups** | **[String]** | Array of user&#39;s groups (group names only) | [optional] 
**url** | **String** | Link to ldap config | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


