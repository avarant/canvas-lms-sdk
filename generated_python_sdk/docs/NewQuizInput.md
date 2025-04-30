# NewQuizInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | [optional] 
**assignment_group_id** | **int** |  | [optional] 
**points_possible** | **float** |  | [optional] 
**due_at** | **datetime** |  | [optional] 
**lock_at** | **datetime** |  | [optional] 
**unlock_at** | **datetime** |  | [optional] 
**grading_type** | **str** |  | [optional] 
**instructions** | **str** |  | [optional] 
**quiz_settings** | [**QuizSettings**](QuizSettings.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.new_quiz_input import NewQuizInput

# TODO update the JSON string below
json = "{}"
# create an instance of NewQuizInput from a JSON string
new_quiz_input_instance = NewQuizInput.from_json(json)
# print the JSON string representation of the object
print(NewQuizInput.to_json())

# convert the object into a dict
new_quiz_input_dict = new_quiz_input_instance.to_dict()
# create an instance of NewQuizInput from a dict
new_quiz_input_from_dict = NewQuizInput.from_dict(new_quiz_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


