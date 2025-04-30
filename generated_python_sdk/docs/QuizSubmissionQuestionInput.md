# QuizSubmissionQuestionInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the QuizQuestion this answer is for. | 
**answer** | [**QuizSubmissionQuestionInputAnswer**](QuizSubmissionQuestionInputAnswer.md) |  | 

## Example

```python
from canvas_lms_sdk.models.quiz_submission_question_input import QuizSubmissionQuestionInput

# TODO update the JSON string below
json = "{}"
# create an instance of QuizSubmissionQuestionInput from a JSON string
quiz_submission_question_input_instance = QuizSubmissionQuestionInput.from_json(json)
# print the JSON string representation of the object
print(QuizSubmissionQuestionInput.to_json())

# convert the object into a dict
quiz_submission_question_input_dict = quiz_submission_question_input_instance.to_dict()
# create an instance of QuizSubmissionQuestionInput from a dict
quiz_submission_question_input_from_dict = QuizSubmissionQuestionInput.from_dict(quiz_submission_question_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


