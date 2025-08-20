# EditAssignmentRequestAssignment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**position** | **int** |  | [optional] 
**submission_types** | **List[str]** | (Only applies if no student submissions) | [optional] 
**allowed_extensions** | **List[str]** |  | [optional] 
**turnitin_enabled** | **bool** |  | [optional] 
**vericite_enabled** | **bool** |  | [optional] 
**turnitin_settings** | [**TurnitinSettingsInput**](TurnitinSettingsInput.md) |  | [optional] 
**sis_assignment_id** | **str** | The sis id of the Assignment | [optional] 
**integration_data** | **Dict[str, object]** | Data used for SIS integrations (Requires admin permission &#39;Manage SIS&#39;). JSON string required. | [optional] 
**integration_id** | **str** |  | [optional] 
**peer_reviews** | **bool** |  | [optional] 
**automatic_peer_reviews** | **bool** |  | [optional] 
**notify_of_update** | **bool** |  | [optional] 
**group_category_id** | **int** |  | [optional] 
**grade_group_students_individually** | **bool** |  | [optional] 
**external_tool_tag_attributes** | [**ExternalToolTagAttributesInput**](ExternalToolTagAttributesInput.md) |  | [optional] 
**points_possible** | **float** |  | [optional] 
**grading_type** | **str** |  | [optional] 
**due_at** | **datetime** |  | [optional] 
**lock_at** | **datetime** |  | [optional] 
**unlock_at** | **datetime** |  | [optional] 
**description** | **str** |  | [optional] 
**assignment_group_id** | **int** |  | [optional] 
**assignment_overrides** | [**List[AssignmentOverrideInput]**](AssignmentOverrideInput.md) | Updates/deletes existing overrides to match list. Omit key to leave overrides untouched. | [optional] 
**only_visible_to_overrides** | **bool** |  | [optional] 
**published** | **bool** |  | [optional] 
**grading_standard_id** | **int** |  | [optional] 
**omit_from_final_grade** | **bool** |  | [optional] 
**hide_in_gradebook** | **bool** |  | [optional] 
**moderated_grading** | **bool** |  | [optional] 
**grader_count** | **int** |  | [optional] 
**final_grader_id** | **int** |  | [optional] 
**grader_comments_visible_to_graders** | **bool** |  | [optional] 
**graders_anonymous_to_graders** | **bool** |  | [optional] 
**graders_names_visible_to_final_grader** | **bool** |  | [optional] 
**anonymous_grading** | **bool** |  | [optional] 
**allowed_attempts** | **int** | Number of submission attempts (-1 or null for unlimited). | [optional] 
**annotatable_attachment_id** | **int** |  | [optional] 
**force_updated_at** | **bool** | Force updated_at even if no changes were made. | [optional] 

## Example

```python
from canvas_lms_sdk.models.edit_assignment_request_assignment import EditAssignmentRequestAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of EditAssignmentRequestAssignment from a JSON string
edit_assignment_request_assignment_instance = EditAssignmentRequestAssignment.from_json(json)
# print the JSON string representation of the object
print(EditAssignmentRequestAssignment.to_json())

# convert the object into a dict
edit_assignment_request_assignment_dict = edit_assignment_request_assignment_instance.to_dict()
# create an instance of EditAssignmentRequestAssignment from a dict
edit_assignment_request_assignment_from_dict = EditAssignmentRequestAssignment.from_dict(edit_assignment_request_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


