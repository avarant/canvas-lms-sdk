# ApiV1SectionsIdPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**course_section** | [**ApiV1CoursesCourseIdSectionsPostRequestCourseSection**](ApiV1CoursesCourseIdSectionsPostRequestCourseSection.md) |  | [optional] 
**override_sis_stickiness** | **bool** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_sections_id_put_request import ApiV1SectionsIdPutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1SectionsIdPutRequest from a JSON string
api_v1_sections_id_put_request_instance = ApiV1SectionsIdPutRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1SectionsIdPutRequest.to_json())

# convert the object into a dict
api_v1_sections_id_put_request_dict = api_v1_sections_id_put_request_instance.to_dict()
# create an instance of ApiV1SectionsIdPutRequest from a dict
api_v1_sections_id_put_request_from_dict = ApiV1SectionsIdPutRequest.from_dict(api_v1_sections_id_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


