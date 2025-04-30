# ApiV1QuizSubmissionsQuizSubmissionIdQuestionsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quiz_submission_questions** | [**List[QuizSubmissionQuestion]**](QuizSubmissionQuestion.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_quiz_submissions_quiz_submission_id_questions_get200_response import ApiV1QuizSubmissionsQuizSubmissionIdQuestionsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1QuizSubmissionsQuizSubmissionIdQuestionsGet200Response from a JSON string
api_v1_quiz_submissions_quiz_submission_id_questions_get200_response_instance = ApiV1QuizSubmissionsQuizSubmissionIdQuestionsGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiV1QuizSubmissionsQuizSubmissionIdQuestionsGet200Response.to_json())

# convert the object into a dict
api_v1_quiz_submissions_quiz_submission_id_questions_get200_response_dict = api_v1_quiz_submissions_quiz_submission_id_questions_get200_response_instance.to_dict()
# create an instance of ApiV1QuizSubmissionsQuizSubmissionIdQuestionsGet200Response from a dict
api_v1_quiz_submissions_quiz_submission_id_questions_get200_response_from_dict = ApiV1QuizSubmissionsQuizSubmissionIdQuestionsGet200Response.from_dict(api_v1_quiz_submissions_quiz_submission_id_questions_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


