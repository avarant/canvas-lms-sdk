# ApiV1CoursesCourseIdSectionsPostRequestCourseSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**sis_section_id** | **str** |  | [optional] 
**integration_id** | **str** |  | [optional] 
**start_at** | **datetime** |  | [optional] 
**end_at** | **datetime** |  | [optional] 
**restrict_enrollments_to_section_dates** | **bool** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_courses_course_id_sections_post_request_course_section import ApiV1CoursesCourseIdSectionsPostRequestCourseSection

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1CoursesCourseIdSectionsPostRequestCourseSection from a JSON string
api_v1_courses_course_id_sections_post_request_course_section_instance = ApiV1CoursesCourseIdSectionsPostRequestCourseSection.from_json(json)
# print the JSON string representation of the object
print(ApiV1CoursesCourseIdSectionsPostRequestCourseSection.to_json())

# convert the object into a dict
api_v1_courses_course_id_sections_post_request_course_section_dict = api_v1_courses_course_id_sections_post_request_course_section_instance.to_dict()
# create an instance of ApiV1CoursesCourseIdSectionsPostRequestCourseSection from a dict
api_v1_courses_course_id_sections_post_request_course_section_from_dict = ApiV1CoursesCourseIdSectionsPostRequestCourseSection.from_dict(api_v1_courses_course_id_sections_post_request_course_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


