# ApiV1CoursesCourseIdQuizzesIdReorderPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | [**List[ApiV1CoursesCourseIdQuizzesIdReorderPostRequestOrderInner]**](ApiV1CoursesCourseIdQuizzesIdReorderPostRequestOrderInner.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_courses_course_id_quizzes_id_reorder_post_request import ApiV1CoursesCourseIdQuizzesIdReorderPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1CoursesCourseIdQuizzesIdReorderPostRequest from a JSON string
api_v1_courses_course_id_quizzes_id_reorder_post_request_instance = ApiV1CoursesCourseIdQuizzesIdReorderPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1CoursesCourseIdQuizzesIdReorderPostRequest.to_json())

# convert the object into a dict
api_v1_courses_course_id_quizzes_id_reorder_post_request_dict = api_v1_courses_course_id_quizzes_id_reorder_post_request_instance.to_dict()
# create an instance of ApiV1CoursesCourseIdQuizzesIdReorderPostRequest from a dict
api_v1_courses_course_id_quizzes_id_reorder_post_request_from_dict = ApiV1CoursesCourseIdQuizzesIdReorderPostRequest.from_dict(api_v1_courses_course_id_quizzes_id_reorder_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


