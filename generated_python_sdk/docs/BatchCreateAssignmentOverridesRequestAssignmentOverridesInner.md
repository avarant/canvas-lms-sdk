# BatchCreateAssignmentOverridesRequestAssignmentOverridesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignment_id** | **int** | The ID of the assignment to create the override for. | 
**student_ids** | **List[int]** | Target student IDs (for ad-hoc overrides). | [optional] 
**title** | **str** | Title (required for ad-hoc overrides). | [optional] 
**group_id** | **int** | Target group ID (for group overrides). | [optional] 
**course_section_id** | **int** | Target course section ID (for section overrides). | [optional] 
**due_at** | **datetime** | Overridden due date/time (ISO 8601). Omit/null to remove override. | [optional] 
**unlock_at** | **datetime** | Overridden unlock date/time (ISO 8601). Omit/null to remove override. | [optional] 
**lock_at** | **datetime** | Overridden lock date/time (ISO 8601). Omit/null to remove override. | [optional] 

## Example

```python
from canvas_lms_sdk.models.batch_create_assignment_overrides_request_assignment_overrides_inner import BatchCreateAssignmentOverridesRequestAssignmentOverridesInner

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateAssignmentOverridesRequestAssignmentOverridesInner from a JSON string
batch_create_assignment_overrides_request_assignment_overrides_inner_instance = BatchCreateAssignmentOverridesRequestAssignmentOverridesInner.from_json(json)
# print the JSON string representation of the object
print(BatchCreateAssignmentOverridesRequestAssignmentOverridesInner.to_json())

# convert the object into a dict
batch_create_assignment_overrides_request_assignment_overrides_inner_dict = batch_create_assignment_overrides_request_assignment_overrides_inner_instance.to_dict()
# create an instance of BatchCreateAssignmentOverridesRequestAssignmentOverridesInner from a dict
batch_create_assignment_overrides_request_assignment_overrides_inner_from_dict = BatchCreateAssignmentOverridesRequestAssignmentOverridesInner.from_dict(batch_create_assignment_overrides_request_assignment_overrides_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


