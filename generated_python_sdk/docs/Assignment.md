# Assignment

Represents a Canvas Assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of the assignment. | [readonly] 
**name** | **str** | The name of the assignment. | 
**description** | **str** | The assignment description, in an HTML fragment. | [optional] 
**created_at** | **datetime** | The time at which this assignment was originally created. | [readonly] 
**updated_at** | **datetime** | The time at which this assignment was last modified. | [readonly] 
**due_at** | **datetime** | The due date for the assignment. Responds to overrides unless overridden. | [optional] 
**lock_at** | **datetime** | The lock date. Responds to overrides unless overridden. | [optional] 
**unlock_at** | **datetime** | The unlock date. Responds to overrides unless overridden. | [optional] 
**has_overrides** | **bool** | Whether this assignment has overrides. | [readonly] 
**all_dates** | [**List[AssignmentDate]**](AssignmentDate.md) | (Optional) All dates associated with the assignment (requires &#39;include[]&#x3D;all_dates&#39;). Base dates and override dates. | [optional] [readonly] 
**course_id** | **int** | The ID of the course the assignment belongs to. | [readonly] 
**html_url** | **str** | The URL to the assignment&#39;s web page. | [readonly] 
**submissions_download_url** | **str** | The URL to download all submissions as a zip. May be null if not available. | [optional] [readonly] 
**assignment_group_id** | **int** | The ID of the assignment&#39;s group. | 
**due_date_required** | **bool** | If the assignment requires a due date based on account setting. | [readonly] 
**allowed_extensions** | **List[str]** | Allowed file extensions for &#39;online_upload&#39;. Null if not applicable. | [optional] 
**max_name_length** | **int** | Maximum length allowed for the assignment&#39;s name. | [readonly] 
**turnitin_enabled** | **bool** | If Turnitin is enabled (requires plugin). | 
**vericite_enabled** | **bool** | If VeriCite is enabled (requires plugin). | 
**turnitin_settings** | [**TurnitinSettings**](TurnitinSettings.md) |  | [optional] 
**grade_group_students_individually** | **bool** | If students in a group assignment will be graded individually. Null if not a group assignment. | [optional] 
**external_tool_tag_attributes** | [**ExternalToolTagAttributes**](ExternalToolTagAttributes.md) |  | [optional] 
**peer_reviews** | **bool** | If peer reviews are required. | 
**automatic_peer_reviews** | **bool** | If peer reviews are assigned automatically. | 
**peer_review_count** | **int** | Number of reviews each user is assigned (if automatic_peer_reviews). | [optional] 
**peer_reviews_assign_at** | **datetime** | Date peer reviews are assigned (if automatic_peer_reviews). Uses assignment due date if null/invalid. | [optional] 
**intra_group_peer_reviews** | **bool** | If members of the same group can review their own group&#39;s work. | [optional] 
**group_category_id** | **int** | The ID of the assignment group set (if group assignment). | [optional] 
**needs_grading_count** | **int** | Number of submissions needing grading (if grader). 0 if not a grader. | [optional] [readonly] 
**needs_grading_count_by_section** | [**List[NeedsGradingCount]**](NeedsGradingCount.md) | Needs grading count breakdown by section (requires &#39;needs_grading_count_by_section&#39; flag and grader role). | [optional] [readonly] 
**position** | **int** | The sorting order of the assignment in the group. | 
**post_to_sis** | **bool** | (Optional) If Sync Grades to SIS feature is enabled and this assignment is marked for sync. | [optional] 
**integration_id** | **str** | (Optional) Third party unique identifier for Assignment. | [optional] 
**integration_data** | **Dict[str, object]** | (Optional) Third party integration data. | [optional] 
**points_possible** | **float** | The maximum points possible. | [optional] 
**submission_types** | **List[str]** | Allowed submission types. | 
**has_submitted_submissions** | **bool** | If at least one student has submitted. | [readonly] 
**grading_type** | **str** | Grading strategy. | 
**grading_standard_id** | **int** | ID of the grading standard (if letter_grade or gpa_scale). | [optional] 
**published** | **bool** | Whether the assignment is published. | 
**unpublishable** | **bool** | If the published state can be changed to false (false if submissions exist). | [readonly] 
**only_visible_to_overrides** | **bool** | Whether the assignment is only visible to overrides. | 
**locked_for_user** | **bool** | Whether the assignment is locked for the current user based on dates or module prerequisites. | [readonly] 
**lock_info** | [**LockInfo**](LockInfo.md) |  | [optional] 
**lock_explanation** | **str** | (Optional) Explanation of why this is locked for the user. Present when locked_for_user is true. | [optional] [readonly] 
**quiz_id** | **int** | (Optional) ID of the associated quiz (if submission_types is [&#39;online_quiz&#39;]). | [optional] [readonly] 
**anonymous_submissions** | **bool** | (Optional) Allow anonymous submissions (quiz only). Usually a quiz setting, may be read-only here. | [optional] [readonly] 
**discussion_topic** | **object** | (Optional) Associated DiscussionTopic object (if submission_types is [&#39;discussion_topic&#39;]). | [optional] [readonly] 
**freeze_on_copy** | **bool** | (Optional) Freeze assignment when copied (requires AssignmentFreezer plugin). | [optional] 
**frozen** | **bool** | (Optional) If assignment is frozen for the user (requires AssignmentFreezer plugin). | [optional] [readonly] 
**frozen_attributes** | **List[str]** | (Optional) List of frozen attributes (requires AssignmentFreezer plugin). Empty if none frozen. | [optional] [readonly] 
**submission** | **object** | (Optional) Current user&#39;s submission (requires &#39;include[]&#x3D;submission&#39;). Absent if no submission. | [optional] [readonly] 
**use_rubric_for_grading** | **bool** | (Optional) If the rubric is used for grading (if rubric exists). | [optional] 
**rubric_settings** | [**AssignmentRubricSettings**](AssignmentRubricSettings.md) |  | [optional] 
**rubric** | [**List[RubricCriteria]**](RubricCriteria.md) | (Optional) List of rubric criteria (if rubric exists). | [optional] 
**assignment_visibility** | **List[int]** | (Optional) Student IDs who can see this assignment (requires &#39;include[]&#x3D;assignment_visibility&#39;). | [optional] [readonly] 
**overrides** | [**List[AssignmentOverride]**](AssignmentOverride.md) | (Optional) List of override objects (requires &#39;include[]&#x3D;overrides&#39;). | [optional] [readonly] 
**omit_from_final_grade** | **bool** | (Optional) Omit assignment from the student&#39;s final grade. | 
**hide_in_gradebook** | **bool** | (Optional) Hide assignment in gradebooks. | 
**moderated_grading** | **bool** | If the assignment is moderated. | 
**grader_count** | **int** | Number of provisional graders (if moderated). | [optional] 
**final_grader_id** | **int** | User ID of the final grader (if moderated). | [optional] 
**grader_comments_visible_to_graders** | **bool** | If provisional grader comments are visible to others (if moderated). | [optional] 
**graders_anonymous_to_graders** | **bool** | If provisional grader identities are hidden from others (if moderated). | [optional] 
**grader_names_visible_to_final_grader** | **bool** | If provisional grader names are visible to the final grader (if moderated). | [optional] 
**anonymous_grading** | **bool** | If the assignment is graded anonymously. | 
**allowed_attempts** | **int** | Number of submission attempts allowed (-1 for unlimited). | 
**post_manually** | **bool** | If manual posting is enabled (New Gradebook). | 
**score_statistics** | [**ScoreStatistic**](ScoreStatistic.md) |  | [optional] 
**can_submit** | **bool** | (Optional) If the current user can submit (requires &#39;include[]&#x3D;can_submit&#39;). Checks dates, status, attempts etc. Not available with observed_users. | [optional] [readonly] 
**ab_guid** | **List[str]** | (Optional) Academic benchmark GUIDs associated with the assignment or rubric (requires &#39;include[]&#x3D;ab_guid&#39;). | [optional] [readonly] 
**annotatable_attachment_id** | **int** | Attachment ID for student annotation submissions (if submission_types includes &#39;student_annotation&#39;). | [optional] 
**anonymize_students** | **bool** | (Optional) Anonymize student names in submissions. | [optional] 
**require_lockdown_browser** | **bool** | (Optional) Require Respondus LockDown Browser®. | [optional] 
**important_dates** | **bool** | (Optional) If the assignment has important dates (e.g., due, lock, unlock). | [optional] [readonly] 
**muted** | **bool** | (Deprecated - use post_manually) If notifications are muted. | [optional] 
**anonymous_peer_reviews** | **bool** | If peer reviews are anonymous. | 
**anonymous_instructor_annotations** | **bool** | If instructor annotations are anonymous. | 
**graded_submissions_exist** | **bool** | If graded submissions exist. | [readonly] 
**is_quiz_assignment** | **bool** | If this is a quiz LTI assignment. | [readonly] 
**in_closed_grading_period** | **bool** | If the assignment is in a closed grading period. | [readonly] 
**can_duplicate** | **bool** | If the assignment can be duplicated by the current user. | [readonly] 
**original_course_id** | **int** | Original course ID if duplicated. | [optional] [readonly] 
**original_assignment_id** | **int** | Original assignment ID if duplicated. | [optional] [readonly] 
**original_lti_resource_link_id** | **int** | Original LTI resource link ID if duplicated. | [optional] [readonly] 
**original_assignment_name** | **str** | Original assignment name if duplicated. | [optional] [readonly] 
**original_quiz_id** | **int** | Original quiz ID if duplicated. | [optional] [readonly] 
**workflow_state** | **str** | The workflow state (&#39;published&#39; or &#39;unpublished&#39;). Changed via &#39;published&#39; flag. | [readonly] 

## Example

```python
from canvas_lms_sdk.models.assignment import Assignment

# TODO update the JSON string below
json = "{}"
# create an instance of Assignment from a JSON string
assignment_instance = Assignment.from_json(json)
# print the JSON string representation of the object
print(Assignment.to_json())

# convert the object into a dict
assignment_dict = assignment_instance.to_dict()
# create an instance of Assignment from a dict
assignment_from_dict = Assignment.from_dict(assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


