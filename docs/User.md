# LookerApi30Reference.User

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Unique Id | [optional] 
**firstName** | **String** | First name | [optional] 
**lastName** | **String** | Last name | [optional] 
**displayName** | **String** | Full name for display (available only if both first_name and last_name are set) | [optional] 
**email** | **String** | EMail address | [optional] 
**isDisabled** | **Boolean** | Account has been disabled | [optional] 
**avatarUrl** | **String** | URL for the avatar image (may be generic) | [optional] 
**homeSpaceId** | **String** | ID string for user&#39;s home space | [optional] 
**personalSpaceId** | **Integer** | ID of user&#39;s personal space | [optional] 
**embedGroupSpaceId** | **Integer** | (Embed only) ID of user&#39;s group space based on the external_group_id optionally specified during embed user login | [optional] 
**accessFilters** | [**[AccessFilter]**](AccessFilter.md) | Model access filters. | [optional] 
**credentialsEmail** | [**CredentialsEmail**](CredentialsEmail.md) | Email/Password login credentials | [optional] 
**credentialsTotp** | [**CredentialsTotp**](CredentialsTotp.md) | Two-factor credentials | [optional] 
**credentialsLdap** | [**CredentialsLDAP**](CredentialsLDAP.md) | LDAP credentials | [optional] 
**credentialsGoogle** | [**CredentialsGoogle**](CredentialsGoogle.md) | Google auth credentials | [optional] 
**credentialsSaml** | [**CredentialsSaml**](CredentialsSaml.md) | Saml auth credentials | [optional] 
**credentialsApi** | [**CredentialsApi**](CredentialsApi.md) | API user credentials | [optional] 
**credentialsApi3** | [**[CredentialsApi3]**](CredentialsApi3.md) | API 3 credentials | [optional] 
**credentialsEmbed** | [**[CredentialsEmbed]**](CredentialsEmbed.md) | Embed credentials | [optional] 
**credentialsLookerOpenid** | [**CredentialsLookerOpenid**](CredentialsLookerOpenid.md) | LookerOpenID credentials. Used for login by Looker Analysts | [optional] 
**sessions** | [**[Session]**](Session.md) | Active sessions | [optional] 
**roleIds** | **[Integer]** | Array of ids of the roles for this user | [optional] 
**groupIds** | **[Integer]** | Array of ids of the groups for this user | [optional] 
**presumedLookerEmployee** | **Boolean** | User is identified as an employee of Looker | [optional] 
**verifiedLookerEmployee** | **Boolean** | User is identified as an employee of Looker who has been verified via Looker corporate authentication | [optional] 
**lookerVersions** | **[String]** | Array of strings representing the Looker versions that this user has used (this only goes back as far as &#39;3.54.0&#39;) | [optional] 
**uiState** | **{String: String}** | Per user dictionary of undocumented state information owned by the Looker UI. | [optional] 
**url** | **String** | Link to get this item | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


