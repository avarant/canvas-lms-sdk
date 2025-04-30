# Submission1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lti_course_id** | **str** | LTI course identifier | [optional] 
**course_id** | **int** | Canvas course ID | [optional] 
**assignment_id** | **int** | The submission&#39;s assignment id | [optional] 
**attempt** | **int** | The submission attempt number | [optional] 
**body** | **str** | The content of the submission, if submitted directly in a text field | [optional] 
**submission_type** | **str** | The type of submission (e.g., online_text_entry, online_url, online_upload, media_recording, student_annotation) | [optional] 
**submitted_at** | **datetime** | Timestamp when the assignment was submitted | [optional] 
**url** | **str** | The URL of the submission (for URL submissions) | [optional] 
**user_id** | **int** | The ID of the user who created the submission | [optional] 
**eula_agreement_timestamp** | **str** | UTC timestamp when the user agreed to the EULA | [optional] 
**workflow_state** | **str** | The current state of the submission | [optional] 
**attachments** | [**List[File]**](File.md) | Files attached to the submission | [optional] 

## Example

```python
from canvas_lms_sdk.models.submission1 import Submission1

# TODO update the JSON string below
json = "{}"
# create an instance of Submission1 from a JSON string
submission1_instance = Submission1.from_json(json)
# print the JSON string representation of the object
print(Submission1.to_json())

# convert the object into a dict
submission1_dict = submission1_instance.to_dict()
# create an instance of Submission1 from a dict
submission1_from_dict = Submission1.from_dict(submission1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


