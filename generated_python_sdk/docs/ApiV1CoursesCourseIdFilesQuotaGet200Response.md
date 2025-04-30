# ApiV1CoursesCourseIdFilesQuotaGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quota** | **int** | Total storage quota in bytes | [optional] 
**quota_used** | **int** | Used storage quota in bytes | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_courses_course_id_files_quota_get200_response import ApiV1CoursesCourseIdFilesQuotaGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1CoursesCourseIdFilesQuotaGet200Response from a JSON string
api_v1_courses_course_id_files_quota_get200_response_instance = ApiV1CoursesCourseIdFilesQuotaGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiV1CoursesCourseIdFilesQuotaGet200Response.to_json())

# convert the object into a dict
api_v1_courses_course_id_files_quota_get200_response_dict = api_v1_courses_course_id_files_quota_get200_response_instance.to_dict()
# create an instance of ApiV1CoursesCourseIdFilesQuotaGet200Response from a dict
api_v1_courses_course_id_files_quota_get200_response_from_dict = ApiV1CoursesCourseIdFilesQuotaGet200Response.from_dict(api_v1_courses_course_id_files_quota_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


