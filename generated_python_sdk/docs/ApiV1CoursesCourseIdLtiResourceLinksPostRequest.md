# ApiV1CoursesCourseIdLtiResourceLinksPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The launch URL for this resource link. | 
**title** | **str** | The title of the resource link. | [optional] 
**custom** | **Dict[str, str]** | Custom parameters to be sent to the tool when launching this link. | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_courses_course_id_lti_resource_links_post_request import ApiV1CoursesCourseIdLtiResourceLinksPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1CoursesCourseIdLtiResourceLinksPostRequest from a JSON string
api_v1_courses_course_id_lti_resource_links_post_request_instance = ApiV1CoursesCourseIdLtiResourceLinksPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1CoursesCourseIdLtiResourceLinksPostRequest.to_json())

# convert the object into a dict
api_v1_courses_course_id_lti_resource_links_post_request_dict = api_v1_courses_course_id_lti_resource_links_post_request_instance.to_dict()
# create an instance of ApiV1CoursesCourseIdLtiResourceLinksPostRequest from a dict
api_v1_courses_course_id_lti_resource_links_post_request_from_dict = ApiV1CoursesCourseIdLtiResourceLinksPostRequest.from_dict(api_v1_courses_course_id_lti_resource_links_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


