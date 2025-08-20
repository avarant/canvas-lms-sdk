# AssignmentOverrideInput

Input fields for creating or updating an AssignmentOverride. One of student_ids, group_id, or course_section_id required on create.

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

## Example

```python
from canvas_lms_sdk.models.assignment_override_input import AssignmentOverrideInput

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentOverrideInput from a JSON string
assignment_override_input_instance = AssignmentOverrideInput.from_json(json)
# print the JSON string representation of the object
print(AssignmentOverrideInput.to_json())

# convert the object into a dict
assignment_override_input_dict = assignment_override_input_instance.to_dict()
# create an instance of AssignmentOverrideInput from a dict
assignment_override_input_from_dict = AssignmentOverrideInput.from_dict(assignment_override_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


