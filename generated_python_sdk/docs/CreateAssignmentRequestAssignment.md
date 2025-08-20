# CreateAssignmentRequestAssignment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**position** | **int** |  | [optional] 
**submission_types** | **List[str]** | List of supported submission types. | [optional] 
**allowed_extensions** | **List[str]** | Allowed extensions for online_upload. | [optional] 
**turnitin_enabled** | **bool** | Enable Turnitin submissions (Requires plugin and online_upload type). | [optional] 
**vericite_enabled** | **bool** | Enable VeriCite submissions (Requires plugin and online_upload type). | [optional] 
**turnitin_settings** | [**TurnitinSettingsInput**](TurnitinSettingsInput.md) |  | [optional] 
**integration_data** | **Dict[str, object]** | Data used for SIS integrations (Requires admin permission &#39;Manage SIS&#39;). JSON string required. | [optional] 
**integration_id** | **str** | Unique ID from third party integrations. | [optional] 
**peer_reviews** | **bool** | Enable peer reviews (Not applicable for external_tool, discussion_topic, online_quiz, or on_paper). | [optional] 
**automatic_peer_reviews** | **bool** | Assign peer reviews automatically (Requires peer_reviews&#x3D;true). | [optional] 
**notify_of_update** | **bool** | Notify students of content change. | [optional] 
**group_category_id** | **int** | If present, makes it a group assignment assigned to this group set ID. | [optional] 
**grade_group_students_individually** | **bool** | Grade group members individually (Requires group_category_id). | [optional] 
**external_tool_tag_attributes** | [**ExternalToolTagAttributesInput**](ExternalToolTagAttributesInput.md) |  | [optional] 
**points_possible** | **float** | Maximum points possible. | [optional] 
**grading_type** | **str** | Grading strategy. Defaults to &#39;points&#39;. | [optional] 
**due_at** | **datetime** | Due date/time in ISO 8601 format. | [optional] 
**lock_at** | **datetime** | Lock date/time in ISO 8601 format. | [optional] 
**unlock_at** | **datetime** | Unlock date/time in ISO 8601 format. | [optional] 
**description** | **str** | Assignment description (supports HTML). | [optional] 
**assignment_group_id** | **int** | Assignment group ID. Defaults to the top group. | [optional] 
**assignment_overrides** | [**List[AssignmentOverrideInput]**](AssignmentOverrideInput.md) | List of overrides for the assignment. | [optional] 
**only_visible_to_overrides** | **bool** | Only visible to overrides (Requires &#39;differentiated assignments&#39; setting). | [optional] 
**published** | **bool** | Whether the assignment is published (Requires &#39;draft state&#39; setting). | [optional] 
**grading_standard_id** | **int** | Grading standard ID. Updates grading_type to &#39;letter_grade&#39; or &#39;gpa_scale&#39;. Null removes standard. | [optional] 
**omit_from_final_grade** | **bool** | Omit from final grade calculation. | [optional] 
**hide_in_gradebook** | **bool** | Hide assignment in gradebook. | [optional] 
**quiz_lti** | **bool** | Use Quizzes 2 LTI tool (Sets submission_types and external_tool_tag_attributes). | [optional] 
**moderated_grading** | **bool** | Enable moderated grading. | [optional] 
**grader_count** | **int** | Max number of provisional graders (If moderated). See docs for constraints. | [optional] 
**final_grader_id** | **int** | User ID of the final grader (If moderated). | [optional] 
**grader_comments_visible_to_graders** | **bool** | Provisional grader comments visibility (If moderated). | [optional] 
**graders_anonymous_to_graders** | **bool** | Hide provisional grader identities from others (If moderated). | [optional] 
**graders_names_visible_to_final_grader** | **bool** | Provisional grader identities visibility to final grader (If moderated). | [optional] 
**anonymous_grading** | **bool** | Enable anonymous grading. | [optional] 
**allowed_attempts** | **int** | Number of submission attempts (-1 or null for unlimited). | [optional] 
**annotatable_attachment_id** | **int** | Attachment ID for student annotation (If submission_types includes &#39;student_annotation&#39;). | [optional] 

## Example

```python
from canvas_lms_sdk.models.create_assignment_request_assignment import CreateAssignmentRequestAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAssignmentRequestAssignment from a JSON string
create_assignment_request_assignment_instance = CreateAssignmentRequestAssignment.from_json(json)
# print the JSON string representation of the object
print(CreateAssignmentRequestAssignment.to_json())

# convert the object into a dict
create_assignment_request_assignment_dict = create_assignment_request_assignment_instance.to_dict()
# create an instance of CreateAssignmentRequestAssignment from a dict
create_assignment_request_assignment_from_dict = CreateAssignmentRequestAssignment.from_dict(create_assignment_request_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


