# ApiV1CoursesCourseIdQuizzesPostRequestQuiz


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** | The quiz title. | 
**description** | **str** | A description of the quiz. | [optional] 
**quiz_type** | **str** | The type of quiz. | [optional] 
**assignment_group_id** | **int** | The assignment group ID to put the assignment in. | [optional] 
**time_limit** | **int** | Time limit to take this quiz, in minutes. | [optional] 
**shuffle_answers** | **bool** |  | [optional] 
**hide_results** | **str** |  | [optional] 
**show_correct_answers** | **bool** |  | [optional] 
**show_correct_answers_last_attempt** | **bool** |  | [optional] 
**show_correct_answers_at** | **datetime** |  | [optional] 
**hide_correct_answers_at** | **datetime** |  | [optional] 
**allowed_attempts** | **int** |  | [optional] 
**scoring_policy** | **str** |  | [optional] 
**one_question_at_a_time** | **bool** |  | [optional] 
**cant_go_back** | **bool** |  | [optional] 
**access_code** | **str** |  | [optional] 
**ip_filter** | **str** |  | [optional] 
**due_at** | **datetime** |  | [optional] 
**lock_at** | **datetime** |  | [optional] 
**unlock_at** | **datetime** |  | [optional] 
**published** | **bool** |  | [optional] 
**one_time_results** | **bool** |  | [optional] 
**only_visible_to_overrides** | **bool** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_courses_course_id_quizzes_post_request_quiz import ApiV1CoursesCourseIdQuizzesPostRequestQuiz

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1CoursesCourseIdQuizzesPostRequestQuiz from a JSON string
api_v1_courses_course_id_quizzes_post_request_quiz_instance = ApiV1CoursesCourseIdQuizzesPostRequestQuiz.from_json(json)
# print the JSON string representation of the object
print(ApiV1CoursesCourseIdQuizzesPostRequestQuiz.to_json())

# convert the object into a dict
api_v1_courses_course_id_quizzes_post_request_quiz_dict = api_v1_courses_course_id_quizzes_post_request_quiz_instance.to_dict()
# create an instance of ApiV1CoursesCourseIdQuizzesPostRequestQuiz from a dict
api_v1_courses_course_id_quizzes_post_request_quiz_from_dict = ApiV1CoursesCourseIdQuizzesPostRequestQuiz.from_dict(api_v1_courses_course_id_quizzes_post_request_quiz_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


