# LookerApi30Reference.SamlConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** | Enable/Disable Saml authentication for the server | [optional] 
**idpCert** | **String** | Identify Provider Certificate (provided by IdP) | [optional] 
**idpUrl** | **String** | Identify Provider Url (provided by IdP) | [optional] 
**idpIssuer** | **String** | Identify Provider Issuer (provided by IdP) | [optional] 
**idpAudience** | **String** | Identify Provider Audience (set in IdP config). Optional in Looker. Set this only if you want Looker to validate the audience value returned by the IdP. | [optional] 
**userAttributeMapEmail** | **String** | Name of user record attributes used to indicate email address field | [optional] 
**userAttributeMapFirstName** | **String** | Name of user record attributes used to indicate first name | [optional] 
**userAttributeMapLastName** | **String** | Name of user record attributes used to indicate last name | [optional] 
**newUserMigrationTypes** | **String** | Merge first-time saml login to existing user account by email addresses. When a user logs in for the first time via saml this option will connect this user into their existing account by finding the account with a matching email address by testing the given types of credentials for existing users. Otherwise a new user account will be created for the user. This list (if provided) must be a comma separated list of string like &#39;email,ldap,google&#39; | [optional] 
**alternateEmailLoginAllowed** | **Boolean** | Allow alternate email-based login via &#39;/login/email&#39; for admins and for specified users with the &#39;login_special_email&#39; permission. This option is useful as a fallback during ldap setup, if ldap config problems occur later, or if you need to support some users who are not in your ldap directory. Looker email/password logins are always disabled for regular users when ldap is enabled. | [optional] 
**testSlug** | **String** | Slug to identify configurations that are created in order to run a Saml config test | [optional] 
**modifiedAt** | **String** | When this config was last modified | [optional] 
**modifiedBy** | **String** | User id of user who last modified this config | [optional] 
**defaultNewUserRoles** | [**[Role]**](Role.md) | (Read-only) Roles that will be applied to new users the first time they login via Saml | [optional] 
**defaultNewUserGroups** | [**[Group]**](Group.md) | (Read-only) Groups that will be applied to new users the first time they login via Saml | [optional] 
**defaultNewUserRoleIds** | **[Integer]** | (Write-only) Array of ids of roles that will be applied to new users the first time they login via Saml | [optional] 
**defaultNewUserGroupIds** | **[Integer]** | (Write-only) Array of ids of groups that will be applied to new users the first time they login via Saml | [optional] 
**setRolesFromGroups** | **Boolean** | Set user roles in Looker based on groups from Saml | [optional] 
**groupsAttribute** | **String** | Name of user record attributes used to indicate groups. Used when &#39;groups_finder_type&#39; is set to &#39;grouped_attribute_values&#39; | [optional] 
**groups** | [**[SamlGroupRead]**](SamlGroupRead.md) | (Read-only) Array of mappings between Saml Groups and Looker Roles | [optional] 
**groupsWithRoleIds** | [**[SamlGroupWrite]**](SamlGroupWrite.md) | (Read/Write) Array of mappings between Saml Groups and arrays of Looker Role ids | [optional] 
**authRequiresRole** | **Boolean** | Users will not be allowed to login at all unless a role for them is found in Saml if set to true | [optional] 
**userAttributes** | [**[SamlUserAttributeRead]**](SamlUserAttributeRead.md) | (Read-only) Array of mappings between Saml User Attributes and Looker User Attributes | [optional] 
**userAttributesWithIds** | [**[SamlUserAttributeWrite]**](SamlUserAttributeWrite.md) | (Read/Write) Array of mappings between Saml User Attributes and arrays of Looker User Attribute ids | [optional] 
**groupsFinderType** | **String** | Identifier for a strategy for how Looker will find groups in the SAML response. One of [&#39;grouped_attribute_values&#39;, &#39;individual_attributes&#39;] | [optional] 
**groupsMemberValue** | **String** | Value for group attribute used to indicate membership. Used when &#39;groups_finder_type&#39; is set to &#39;individual_attributes&#39; | [optional] 
**url** | **String** | Link to get this item | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


