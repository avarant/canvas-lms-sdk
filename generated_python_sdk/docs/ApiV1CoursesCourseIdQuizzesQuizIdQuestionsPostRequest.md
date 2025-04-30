# ApiV1CoursesCourseIdQuizzesQuizIdQuestionsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**question** | [**QuizQuestionInput**](QuizQuestionInput.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_courses_course_id_quizzes_quiz_id_questions_post_request import ApiV1CoursesCourseIdQuizzesQuizIdQuestionsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1CoursesCourseIdQuizzesQuizIdQuestionsPostRequest from a JSON string
api_v1_courses_course_id_quizzes_quiz_id_questions_post_request_instance = ApiV1CoursesCourseIdQuizzesQuizIdQuestionsPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1CoursesCourseIdQuizzesQuizIdQuestionsPostRequest.to_json())

# convert the object into a dict
api_v1_courses_course_id_quizzes_quiz_id_questions_post_request_dict = api_v1_courses_course_id_quizzes_quiz_id_questions_post_request_instance.to_dict()
# create an instance of ApiV1CoursesCourseIdQuizzesQuizIdQuestionsPostRequest from a dict
api_v1_courses_course_id_quizzes_quiz_id_questions_post_request_from_dict = ApiV1CoursesCourseIdQuizzesQuizIdQuestionsPostRequest.from_dict(api_v1_courses_course_id_quizzes_quiz_id_questions_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


