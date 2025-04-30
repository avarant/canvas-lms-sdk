# MigrationIssue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The unique identifier for the issue | 
**content_migration_url** | **str** | API URL to the content migration | 
**description** | **str** | Description of the issue for the end-user | 
**workflow_state** | **str** | Current state of the issue | 
**fix_issue_html_url** | **str** | HTML URL to the Canvas page to investigate the issue | [optional] 
**issue_type** | **str** | Severity of the issue | 
**error_report_html_url** | **str** | Link to a Canvas error report if present | [optional] 
**error_message** | **str** | Site administrator error message | [optional] 
**created_at** | **datetime** | Timestamp when the issue was created | [optional] 
**updated_at** | **datetime** | Timestamp when the issue was last updated | [optional] 

## Example

```python
from canvas_lms_sdk.models.migration_issue import MigrationIssue

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationIssue from a JSON string
migration_issue_instance = MigrationIssue.from_json(json)
# print the JSON string representation of the object
print(MigrationIssue.to_json())

# convert the object into a dict
migration_issue_dict = migration_issue_instance.to_dict()
# create an instance of MigrationIssue from a dict
migration_issue_from_dict = MigrationIssue.from_dict(migration_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


