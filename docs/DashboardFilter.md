# LookerApi30Reference.DashboardFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique Id | [optional] 
**dashboardId** | **String** | Id of Dashboard | [optional] 
**name** | **String** | Name of filter | [optional] 
**title** | **String** | Name of title | [optional] 
**type** | **String** | Type of filter: one of date, number, string, or field | [optional] 
**defaultValue** | **String** | Default value of filter | [optional] 
**model** | **String** | Model of filter (required if type = field) | [optional] 
**explore** | **String** | Explore of filter (required if type = field) | [optional] 
**dimension** | **String** | Dimension of filter (required if type = field) | [optional] 
**field** | **{String: String}** | Field information | [optional] 
**row** | **Integer** | Position of filter when displaying | [optional] 
**listensToFilters** | **[String]** | Array of listeners for faceted filters | [optional] 
**allowMultipleValues** | **Boolean** | Whether the filter allows multiple filter values | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


