# NewQuiz


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**instructions** | **str** |  | [optional] 
**assignment_group_id** | **str** |  | [optional] 
**points_possible** | **float** |  | [optional] 
**due_at** | **datetime** |  | [optional] 
**lock_at** | **datetime** |  | [optional] 
**unlock_at** | **datetime** |  | [optional] 
**published** | **bool** |  | [optional] 
**grading_type** | **str** |  | [optional] 
**quiz_settings** | [**QuizSettings**](QuizSettings.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.new_quiz import NewQuiz

# TODO update the JSON string below
json = "{}"
# create an instance of NewQuiz from a JSON string
new_quiz_instance = NewQuiz.from_json(json)
# print the JSON string representation of the object
print(NewQuiz.to_json())

# convert the object into a dict
new_quiz_dict = new_quiz_instance.to_dict()
# create an instance of NewQuiz from a dict
new_quiz_from_dict = NewQuiz.from_dict(new_quiz_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


