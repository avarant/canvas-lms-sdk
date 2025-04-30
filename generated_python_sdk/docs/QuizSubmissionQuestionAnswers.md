# QuizSubmissionQuestionAnswers

The possible answers for this question when those possible answers are necessary. The presence of this parameter is dependent on permissions. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from canvas_lms_sdk.models.quiz_submission_question_answers import QuizSubmissionQuestionAnswers

# TODO update the JSON string below
json = "{}"
# create an instance of QuizSubmissionQuestionAnswers from a JSON string
quiz_submission_question_answers_instance = QuizSubmissionQuestionAnswers.from_json(json)
# print the JSON string representation of the object
print(QuizSubmissionQuestionAnswers.to_json())

# convert the object into a dict
quiz_submission_question_answers_dict = quiz_submission_question_answers_instance.to_dict()
# create an instance of QuizSubmissionQuestionAnswers from a dict
quiz_submission_question_answers_from_dict = QuizSubmissionQuestionAnswers.from_dict(quiz_submission_question_answers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


