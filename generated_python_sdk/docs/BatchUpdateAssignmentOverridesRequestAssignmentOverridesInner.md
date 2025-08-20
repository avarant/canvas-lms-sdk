# BatchUpdateAssignmentOverridesRequestAssignmentOverridesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**student_ids** | **List[int]** | Target student IDs (for ad-hoc overrides). Provide on create/update. | [optional] 
**title** | **str** | Title (required for ad-hoc overrides on create/update). Ignored for section/group overrides. | [optional] 
**group_id** | **int** | Target group ID (for group overrides). Provide on create. Cannot be changed on update. | [optional] 
**course_section_id** | **int** | Target course section ID (for section overrides). Provide on create. Cannot be changed on update. | [optional] 
**due_at** | **datetime** | Overridden due date/time (ISO 8601). Omit/null to remove override. | [optional] 
**unlock_at** | **datetime** | Overridden unlock date/time (ISO 8601). Omit/null to remove override. | [optional] 
**lock_at** | **datetime** | Overridden lock date/time (ISO 8601). Omit/null to remove override. | [optional] 
**id** | **int** | ID of the override to update. | 
**assignment_id** | **int** | ID of the assignment the override belongs to. | 

## Example

```python
from canvas_lms_sdk.models.batch_update_assignment_overrides_request_assignment_overrides_inner import BatchUpdateAssignmentOverridesRequestAssignmentOverridesInner

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateAssignmentOverridesRequestAssignmentOverridesInner from a JSON string
batch_update_assignment_overrides_request_assignment_overrides_inner_instance = BatchUpdateAssignmentOverridesRequestAssignmentOverridesInner.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateAssignmentOverridesRequestAssignmentOverridesInner.to_json())

# convert the object into a dict
batch_update_assignment_overrides_request_assignment_overrides_inner_dict = batch_update_assignment_overrides_request_assignment_overrides_inner_instance.to_dict()
# create an instance of BatchUpdateAssignmentOverridesRequestAssignmentOverridesInner from a dict
batch_update_assignment_overrides_request_assignment_overrides_inner_from_dict = BatchUpdateAssignmentOverridesRequestAssignmentOverridesInner.from_dict(batch_update_assignment_overrides_request_assignment_overrides_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


