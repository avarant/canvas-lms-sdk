# QuizSubmissionQuestionInputAnswer

The provided answer. Format depends on the question type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from canvas_lms_sdk.models.quiz_submission_question_input_answer import QuizSubmissionQuestionInputAnswer

# TODO update the JSON string below
json = "{}"
# create an instance of QuizSubmissionQuestionInputAnswer from a JSON string
quiz_submission_question_input_answer_instance = QuizSubmissionQuestionInputAnswer.from_json(json)
# print the JSON string representation of the object
print(QuizSubmissionQuestionInputAnswer.to_json())

# convert the object into a dict
quiz_submission_question_input_answer_dict = quiz_submission_question_input_answer_instance.to_dict()
# create an instance of QuizSubmissionQuestionInputAnswer from a dict
quiz_submission_question_input_answer_from_dict = QuizSubmissionQuestionInputAnswer.from_dict(quiz_submission_question_input_answer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


