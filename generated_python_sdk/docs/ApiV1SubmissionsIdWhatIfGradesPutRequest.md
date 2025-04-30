# ApiV1SubmissionsIdWhatIfGradesPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**student_entered_score** | **float** | The score the student wants to test | 

## Example

```python
from canvas_lms_sdk.models.api_v1_submissions_id_what_if_grades_put_request import ApiV1SubmissionsIdWhatIfGradesPutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1SubmissionsIdWhatIfGradesPutRequest from a JSON string
api_v1_submissions_id_what_if_grades_put_request_instance = ApiV1SubmissionsIdWhatIfGradesPutRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1SubmissionsIdWhatIfGradesPutRequest.to_json())

# convert the object into a dict
api_v1_submissions_id_what_if_grades_put_request_dict = api_v1_submissions_id_what_if_grades_put_request_instance.to_dict()
# create an instance of ApiV1SubmissionsIdWhatIfGradesPutRequest from a dict
api_v1_submissions_id_what_if_grades_put_request_from_dict = ApiV1SubmissionsIdWhatIfGradesPutRequest.from_dict(api_v1_submissions_id_what_if_grades_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


