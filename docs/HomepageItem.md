# LookerApi30Reference.HomepageItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique Id | [optional] 
**homepageSectionId** | **String** | Associated Homepage Section | [optional] 
**order** | **Integer** | An arbitrary integer representing the sort order within the section | [optional] 
**title** | **String** | The actual title for display | [optional] 
**showTitle** | **Boolean** | Whether the title should be shown | [optional] 
**customTitle** | **String** | Custom title entered by the user, if present | [optional] 
**useCustomTitle** | **Boolean** | Whether the custom title should be used instead of the content title, if the item is associated with content | [optional] 
**description** | **String** | The actual description for display | [optional] 
**showDescription** | **Boolean** | Whether the description should be shown | [optional] 
**customDescription** | **String** | Custom description entered by the user, if present | [optional] 
**useCustomDescription** | **Boolean** | Whether the custom description should be used instead of the content description, if the item is associated with content | [optional] 
**url** | **String** | The actual url for display | [optional] 
**showUrl** | **Boolean** | Whether the url should be shown | [optional] 
**customUrl** | **String** | Custom url entered by the user, if present | [optional] 
**useCustomUrl** | **Boolean** | Whether the custom url should be used instead of the content url, if the item is associated with content | [optional] 
**imageUrl** | **String** | The actual image_url for display | [optional] 
**showImage** | **Boolean** | Whether the image_url should be shown | [optional] 
**customImageUrl** | **String** | Custom image_url entered by the user, if present | [optional] 
**customImageDataBase64** | **String** | (Write-only) base64 encoded image data | [optional] 
**useCustomImage** | **Boolean** | Whether the custom image should be used instead of the content image, if the item is associated with content | [optional] 
**lookId** | **Integer** | Look to base this item on | [optional] 
**dashboardId** | **Integer** | Dashboard to base this item on | [optional] 
**lookmlDashboardId** | **String** | LookML Dashboard to base this item on | [optional] 
**sectionFetchTime** | **Number** | Number of seconds it took to fetch the section this item is in | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


