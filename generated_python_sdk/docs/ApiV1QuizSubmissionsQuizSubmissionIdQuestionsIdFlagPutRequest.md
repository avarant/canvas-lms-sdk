# ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFlagPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt** | **int** | The attempt number of the quiz submission being taken. | 
**validation_token** | **str** | The unique validation token you received when the Quiz Submission was created. | 
**access_code** | **str** | Access code for the Quiz, if any. | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put_request import ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFlagPutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFlagPutRequest from a JSON string
api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put_request_instance = ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFlagPutRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFlagPutRequest.to_json())

# convert the object into a dict
api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put_request_dict = api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put_request_instance.to_dict()
# create an instance of ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFlagPutRequest from a dict
api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put_request_from_dict = ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFlagPutRequest.from_dict(api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


