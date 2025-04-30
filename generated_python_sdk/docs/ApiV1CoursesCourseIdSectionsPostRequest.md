# ApiV1CoursesCourseIdSectionsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**course_section** | [**ApiV1CoursesCourseIdSectionsPostRequestCourseSection**](ApiV1CoursesCourseIdSectionsPostRequestCourseSection.md) |  | [optional] 
**enable_sis_reactivation** | **bool** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_courses_course_id_sections_post_request import ApiV1CoursesCourseIdSectionsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1CoursesCourseIdSectionsPostRequest from a JSON string
api_v1_courses_course_id_sections_post_request_instance = ApiV1CoursesCourseIdSectionsPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1CoursesCourseIdSectionsPostRequest.to_json())

# convert the object into a dict
api_v1_courses_course_id_sections_post_request_dict = api_v1_courses_course_id_sections_post_request_instance.to_dict()
# create an instance of ApiV1CoursesCourseIdSectionsPostRequest from a dict
api_v1_courses_course_id_sections_post_request_from_dict = ApiV1CoursesCourseIdSectionsPostRequest.from_dict(api_v1_courses_course_id_sections_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


