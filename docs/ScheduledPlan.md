# LookerApi30Reference.ScheduledPlan

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Unique Id | [optional] 
**name** | **String** | Name | [optional] 
**createdAt** | **Date** | Date and time when ScheduledPlan was created | [optional] 
**updatedAt** | **Date** | Date and time when ScheduledPlan was last updated | [optional] 
**title** | **String** | Title | [optional] 
**userId** | **Integer** | User Id which owns this ScheduledPlan | [optional] 
**user** | [**UserPublic**](UserPublic.md) | User who owns this ScheduledPlan | [optional] 
**runAsRecipient** | **Boolean** | Whether schedule is ran as recipient (only applicable for email recipients) | [optional] 
**enabled** | **Boolean** | Whether the ScheduledPlan is enabled | [optional] 
**nextRunAt** | **Date** | When the ScheduledPlan will next run (null if running once) | [optional] 
**lastRunAt** | **Date** | When the ScheduledPlan was last run | [optional] 
**lookId** | **Integer** | Id of a look | [optional] 
**dashboardId** | **Integer** | Id of a dashboard | [optional] 
**lookmlDashboardId** | **String** | Id of a LookML dashboard | [optional] 
**filtersString** | **String** | Query string to run look or dashboard with | [optional] 
**dashboardFilters** | **String** | Alias for filters_string field | [optional] 
**requireResults** | **Boolean** | Delivery should occur if running the dashboard or look returns results | [optional] 
**requireNoResults** | **Boolean** | Delivery should occur if the dashboard look does not return results | [optional] 
**requireChange** | **Boolean** | Delivery should occur if data have changed since the last run | [optional] 
**sendAllResults** | **Boolean** | Will run an unlimited query and send all results. | [optional] 
**crontab** | **String** | Vixie-Style crontab specification when to run | [optional] 
**timezone** | **String** | Timezone for interpreting the specified crontab (default is Looker instance timezone) | [optional] 
**scheduledPlanDestination** | [**[ScheduledPlanDestination]**](ScheduledPlanDestination.md) | Scheduled plan destinations | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


