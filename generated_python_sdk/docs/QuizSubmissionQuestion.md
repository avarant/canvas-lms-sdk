# QuizSubmissionQuestion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of the QuizQuestion this answer is for. | [optional] 
**flagged** | **bool** | Whether this question is flagged. | [optional] 
**answer** | [**QuizSubmissionQuestionAnswer**](QuizSubmissionQuestionAnswer.md) |  | [optional] 
**answers** | [**QuizSubmissionQuestionAnswers**](QuizSubmissionQuestionAnswers.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.quiz_submission_question import QuizSubmissionQuestion

# TODO update the JSON string below
json = "{}"
# create an instance of QuizSubmissionQuestion from a JSON string
quiz_submission_question_instance = QuizSubmissionQuestion.from_json(json)
# print the JSON string representation of the object
print(QuizSubmissionQuestion.to_json())

# convert the object into a dict
quiz_submission_question_dict = quiz_submission_question_instance.to_dict()
# create an instance of QuizSubmissionQuestion from a dict
quiz_submission_question_from_dict = QuizSubmissionQuestion.from_dict(quiz_submission_question_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


