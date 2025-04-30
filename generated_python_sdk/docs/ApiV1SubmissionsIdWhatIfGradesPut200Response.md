# ApiV1SubmissionsIdWhatIfGradesPut200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grades** | [**List[Grades]**](Grades.md) |  | [optional] 
**submission** | [**Submission**](Submission.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_submissions_id_what_if_grades_put200_response import ApiV1SubmissionsIdWhatIfGradesPut200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1SubmissionsIdWhatIfGradesPut200Response from a JSON string
api_v1_submissions_id_what_if_grades_put200_response_instance = ApiV1SubmissionsIdWhatIfGradesPut200Response.from_json(json)
# print the JSON string representation of the object
print(ApiV1SubmissionsIdWhatIfGradesPut200Response.to_json())

# convert the object into a dict
api_v1_submissions_id_what_if_grades_put200_response_dict = api_v1_submissions_id_what_if_grades_put200_response_instance.to_dict()
# create an instance of ApiV1SubmissionsIdWhatIfGradesPut200Response from a dict
api_v1_submissions_id_what_if_grades_put200_response_from_dict = ApiV1SubmissionsIdWhatIfGradesPut200Response.from_dict(api_v1_submissions_id_what_if_grades_put200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


