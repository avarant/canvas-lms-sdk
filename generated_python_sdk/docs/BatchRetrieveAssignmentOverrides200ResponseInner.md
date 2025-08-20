# BatchRetrieveAssignmentOverrides200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of the assignment override. | [readonly] 
**assignment_id** | **int** | The ID of the assignment the override applies to. | [readonly] 
**quiz_id** | **int** | The ID of the quiz the override applies to (if applicable). | [optional] [readonly] 
**context_module_id** | **int** | The ID of the module the override applies to (if applicable). | [optional] [readonly] 
**discussion_topic_id** | **int** | The ID of the discussion the override applies to (if applicable). | [optional] [readonly] 
**wiki_page_id** | **int** | The ID of the page the override applies to (if applicable). | [optional] [readonly] 
**attachment_id** | **int** | The ID of the file the override applies to (if applicable). | [optional] [readonly] 
**student_ids** | **List[int]** | The IDs of the students targeted by an ad-hoc override. Null for section/group overrides. | [optional] 
**group_id** | **int** | The ID of the group targeted by the override (if a group assignment override). | [optional] 
**course_section_id** | **int** | The ID of the course section targeted by the override (if a section override). | [optional] 
**title** | **str** | The title of the override (auto-generated for sections/groups, required for ad-hoc student overrides). | 
**due_at** | **datetime** | The overridden due date. Null means no override. | [optional] 
**all_day** | **bool** | The overridden all_day flag (present if due_at is overridden). | [optional] 
**all_day_date** | **date** | The overridden all_day_date (present if due_at is overridden and all_day is true). | [optional] 
**unlock_at** | **datetime** | The overridden unlock date. Null means no override. | [optional] 
**lock_at** | **datetime** | The overridden lock date. Null means no override. | [optional] 

## Example

```python
from canvas_lms_sdk.models.batch_retrieve_assignment_overrides200_response_inner import BatchRetrieveAssignmentOverrides200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of BatchRetrieveAssignmentOverrides200ResponseInner from a JSON string
batch_retrieve_assignment_overrides200_response_inner_instance = BatchRetrieveAssignmentOverrides200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(BatchRetrieveAssignmentOverrides200ResponseInner.to_json())

# convert the object into a dict
batch_retrieve_assignment_overrides200_response_inner_dict = batch_retrieve_assignment_overrides200_response_inner_instance.to_dict()
# create an instance of BatchRetrieveAssignmentOverrides200ResponseInner from a dict
batch_retrieve_assignment_overrides200_response_inner_from_dict = BatchRetrieveAssignmentOverrides200ResponseInner.from_dict(batch_retrieve_assignment_overrides200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


