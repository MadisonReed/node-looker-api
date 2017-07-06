# LookerApi30Reference.LookWithDashboards

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Unique Id | [optional] 
**contentMetadataId** | **Integer** | Id of content metadata | [optional] 
**viewCount** | **Integer** | Number of times viewed in the Looker web UI | [optional] 
**favoriteCount** | **Integer** | Number of times favorited | [optional] 
**contentFavoriteId** | **Integer** | Content Favorite Id | [optional] 
**title** | **String** | Look Title | [optional] 
**user** | [**UserIdOnly**](UserIdOnly.md) | User | [optional] 
**queryId** | **Integer** | Query Id | [optional] 
**description** | **String** | Description | [optional] 
**shortUrl** | **String** | Short Url | [optional] 
**space** | [**SpaceBase**](SpaceBase.md) | Space of this Look | [optional] 
**_public** | **Boolean** | Is Public | [optional] 
**publicSlug** | **String** | Public Slug | [optional] 
**userId** | **Integer** | (Write-only) User Id | [optional] 
**spaceId** | **String** | (Write-only) Space Id | [optional] 
**model** | [**LookModel**](LookModel.md) | Model | [optional] 
**publicUrl** | **String** | Public Url | [optional] 
**embedUrl** | **String** | Embed Url | [optional] 
**googleSpreadsheetFormula** | **String** | Google Spreadsheet Formula | [optional] 
**excelFileUrl** | **String** | Excel File Url | [optional] 
**createdAt** | **Date** | Time that the Look was created. | [optional] 
**updatedAt** | **Date** | Time that the Look was updated. | [optional] 
**lastUpdaterId** | **Integer** | (Write-only) Id of User that last updated the look. | [optional] 
**lastViewedAt** | **Date** | Time last viewed in the Looker web UI | [optional] 
**lastAccessedAt** | **Date** | Time that the Look was last accessed by any user | [optional] 
**deleterId** | **Integer** | Id of User that deleted the look. | [optional] 
**deleted** | **Boolean** | Whether or not the look is deleted | [optional] 
**deletedAt** | **Date** | Time that the Look was deleted. | [optional] 
**isRunOnLoad** | **Boolean** | auto-run query when Look viewed | [optional] 
**dashboards** | [**[DashboardBase]**](DashboardBase.md) | Dashboards | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


