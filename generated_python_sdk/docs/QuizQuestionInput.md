# QuizQuestionInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**question_name** | **str** |  | [optional] 
**question_text** | **str** |  | [optional] 
**quiz_group_id** | **int** |  | [optional] 
**question_type** | **str** | The type of question. Multiple optional fields depend upon the type of question to be used. | [optional] 
**position** | **int** |  | [optional] 
**points_possible** | **int** |  | [optional] 
**correct_comments** | **str** |  | [optional] 
**incorrect_comments** | **str** |  | [optional] 
**neutral_comments** | **str** |  | [optional] 
**text_after_answers** | **str** |  | [optional] 
**answers** | [**List[Answer]**](Answer.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.quiz_question_input import QuizQuestionInput

# TODO update the JSON string below
json = "{}"
# create an instance of QuizQuestionInput from a JSON string
quiz_question_input_instance = QuizQuestionInput.from_json(json)
# print the JSON string representation of the object
print(QuizQuestionInput.to_json())

# convert the object into a dict
quiz_question_input_dict = quiz_question_input_instance.to_dict()
# create an instance of QuizQuestionInput from a dict
quiz_question_input_from_dict = QuizQuestionInput.from_dict(quiz_question_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


