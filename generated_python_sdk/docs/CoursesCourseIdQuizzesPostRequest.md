# CoursesCourseIdQuizzesPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quiz** | [**NewQuizInput**](NewQuizInput.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.courses_course_id_quizzes_post_request import CoursesCourseIdQuizzesPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CoursesCourseIdQuizzesPostRequest from a JSON string
courses_course_id_quizzes_post_request_instance = CoursesCourseIdQuizzesPostRequest.from_json(json)
# print the JSON string representation of the object
print(CoursesCourseIdQuizzesPostRequest.to_json())

# convert the object into a dict
courses_course_id_quizzes_post_request_dict = courses_course_id_quizzes_post_request_instance.to_dict()
# create an instance of CoursesCourseIdQuizzesPostRequest from a dict
courses_course_id_quizzes_post_request_from_dict = CoursesCourseIdQuizzesPostRequest.from_dict(courses_course_id_quizzes_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


