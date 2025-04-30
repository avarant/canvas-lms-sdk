# ApiV1CoursesCourseIdEnrollmentsPostRequestEnrollment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** | The ID of the user to enroll. | [optional] 
**type** | **str** | Enrollment type. | [optional] 
**enrollment_state** | **str** | Enrollment state; defaults to &#39;invited&#39;. | [optional] 
**course_section_id** | **int** | Section ID to enroll the student in. | [optional] 
**limit_privileges_to_course_section** | **bool** | Restrict privileges to the section. | [optional] 
**notify** | **bool** | Send notification to user. | [optional] 
**self_enrollment_code** | **str** | Self-enrollment code. | [optional] 
**self_enrolled** | **bool** | Marks as self-enrollment. | [optional] 
**associated_user_id** | **int** | For observer enrollments, the student to observe. | [optional] 
**sis_user_id** | **str** | SIS user ID (with root_account). | [optional] 
**integration_id** | **str** | Integration ID (with root_account). | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_courses_course_id_enrollments_post_request_enrollment import ApiV1CoursesCourseIdEnrollmentsPostRequestEnrollment

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1CoursesCourseIdEnrollmentsPostRequestEnrollment from a JSON string
api_v1_courses_course_id_enrollments_post_request_enrollment_instance = ApiV1CoursesCourseIdEnrollmentsPostRequestEnrollment.from_json(json)
# print the JSON string representation of the object
print(ApiV1CoursesCourseIdEnrollmentsPostRequestEnrollment.to_json())

# convert the object into a dict
api_v1_courses_course_id_enrollments_post_request_enrollment_dict = api_v1_courses_course_id_enrollments_post_request_enrollment_instance.to_dict()
# create an instance of ApiV1CoursesCourseIdEnrollmentsPostRequestEnrollment from a dict
api_v1_courses_course_id_enrollments_post_request_enrollment_from_dict = ApiV1CoursesCourseIdEnrollmentsPostRequestEnrollment.from_dict(api_v1_courses_course_id_enrollments_post_request_enrollment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


